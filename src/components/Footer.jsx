import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coffee-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif mb-4">Brew Haven</h3>
            <p className="text-cream-100 mb-4">
              A cozy spot to enjoy premium coffee and delicious treats in a warm, inviting atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-cream-100">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <ul className="space-y-2 text-cream-100">
              <li>123 Coffee Street</li>
              <li>Seattle, WA 98101</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@brewhaven.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">Our Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-100 hover:text-coffee-500 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 pt-6 text-center text-cream-200">
          <p>&copy; {currentYear} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;