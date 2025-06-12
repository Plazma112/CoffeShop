import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const stored = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (stored && token) {
          setUser(JSON.parse(stored));
        }

        // Try to refresh token
        const checkRefresh = async () => {
          try {
            const res = await fetch('/api/auth/refresh', {
              method: 'POST',
              credentials: 'include'
            });
            const data = await res.json();
            if (data.accessToken && stored) {
              localStorage.setItem('token', data.accessToken);
            }
          } catch (error) {
            console.log('Token refresh failed:', error);
          }
        };

        if (stored) {
          await checkRefresh();
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const register = async (formData) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    
    login(data.user, data.token);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};