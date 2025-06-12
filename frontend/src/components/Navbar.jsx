import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiCoffee } from 'react-icons/fi';
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
    { to: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-coffee-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <FiCoffee className="text-3xl text-coffee-600 group-hover:text-coffee-700 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-coffee-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-serif font-bold text-coffee-800 group-hover:text-coffee-700 transition-colors duration-300">
              Brew Haven
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium transition-all duration-300 py-2 ${
                  isActive(link.to)
                    ? 'text-coffee-600'
                    : 'text-coffee-800 hover:text-coffee-600'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-coffee-600 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/cart"
                  className="relative p-3 text-coffee-700 hover:text-coffee-600 hover:bg-coffee-50 rounded-full transition-all duration-300"
                >
                  <FiShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-coffee-500 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </Link>
                <div className="flex items-center space-x-3 px-4 py-2 bg-coffee-50 rounded-full">
                  <div className="w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center">
                    <FiUser className="text-white" size={16} />
                  </div>
                  <span className="text-sm font-medium text-coffee-800">{user.name}</span>
                </div>
                {user.role === 'ADMIN' && (
                  <Link
                    to="/admin/dashboard"
                    className="px-4 py-2 bg-gradient-to-r from-coffee-600 to-coffee-700 text-white rounded-full hover:from-coffee-700 hover:to-coffee-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2 text-coffee-700 hover:text-coffee-600 font-medium transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-coffee-600 to-coffee-700 text-white rounded-full hover:from-coffee-700 hover:to-coffee-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-coffee-700 hover:text-coffee-600 hover:bg-coffee-50 rounded-lg transition-all duration-300"
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
            className="lg:hidden bg-white border-t border-coffee-100 shadow-lg"
          >
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 font-medium transition-all duration-300 ${
                    isActive(link.to)
                      ? 'text-coffee-600 bg-coffee-50 border-r-4 border-coffee-600'
                      : 'text-coffee-800 hover:text-coffee-600 hover:bg-coffee-50'
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
                    className="block px-6 py-3 text-coffee-800 hover:text-coffee-600 hover:bg-coffee-50 transition-all duration-300"
                  >
                    Cart
                  </Link>
                  <div className="px-6 py-3 text-sm text-coffee-600 bg-coffee-50">
                    Welcome, {user.name}
                  </div>
                  {user.role === 'ADMIN' && (
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-3 text-coffee-600 hover:bg-coffee-50 font-medium transition-all duration-300"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-3 text-red-600 hover:bg-red-50 transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-coffee-800 hover:text-coffee-600 hover:bg-coffee-50 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block mx-6 py-3 text-center bg-gradient-to-r from-coffee-600 to-coffee-700 text-white rounded-lg hover:from-coffee-700 hover:to-coffee-800 transition-all duration-300"
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