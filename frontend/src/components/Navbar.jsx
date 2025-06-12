import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import { AuthContext } from '../auth/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FiShoppingCart className="text-2xl text-coffee-600" />
            <span className="text-2xl font-serif font-bold text-coffee-800">Brew Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-coffee-600 border-b-2 border-coffee-600'
                    : 'text-mocha-700 hover:text-coffee-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/cart"
                  className="p-2 text-mocha-700 hover:text-coffee-600 transition-colors duration-300"
                >
                  <FiShoppingCart size={20} />
                </Link>
                <div className="flex items-center space-x-2">
                  <FiUser className="text-coffee-600" />
                  <span className="text-sm text-mocha-700">{user.name}</span>
                </div>
                {user.role === 'ADMIN' && (
                  <Link
                    to="/admin/dashboard"
                    className="text-sm bg-coffee-600 text-white px-3 py-1 rounded-md hover:bg-coffee-700 transition-colors duration-300"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-mocha-700 hover:text-coffee-600 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-coffee-600 text-white px-4 py-2 rounded-md hover:bg-coffee-700 transition-colors duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-mocha-700 hover:text-coffee-600"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-coffee-100"
          >
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                    isActive(link.to)
                      ? 'text-coffee-600 bg-coffee-50'
                      : 'text-mocha-700 hover:text-coffee-600 hover:bg-coffee-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {user ? (
                <>
                  <Link
                    to="/cart"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-mocha-700 hover:text-coffee-600 hover:bg-coffee-50"
                  >
                    Cart
                  </Link>
                  <div className="px-4 py-2 text-sm text-mocha-600">
                    Welcome, {user.name}
                  </div>
                  {user.role === 'ADMIN' && (
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-coffee-600 hover:bg-coffee-50"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-mocha-700 hover:text-coffee-600 hover:bg-coffee-50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block mx-4 py-2 text-center bg-coffee-600 text-white rounded-md hover:bg-coffee-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;