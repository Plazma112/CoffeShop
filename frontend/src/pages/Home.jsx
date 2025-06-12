import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import TestimonialCard from '../components/TestimonialCard';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';
import testimonialsData from '../data/testimonialsData';
import { FiCoffee, FiHeart, FiHome, FiArrowDown } from 'react-icons/fi';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featuredItems = [
    ...menuData.coffee.slice(0, 3),
    ...menuData.pastries.slice(0, 1)
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Coffee shop atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Brew Haven
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-cream-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Brewed to Perfection, Served with Passion
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/menu" className="btn-primary">
              View Menu
            </Link>
            <Link to="/contact" className="btn-secondary">
              Visit Us
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a 
            href="#featured" 
            className="text-white flex flex-col items-center hover:text-coffee-400 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm font-medium">Discover More</span>
            <FiArrowDown size={24} />
          </a>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-coffee-600 mb-6 mx-auto">
                <FiCoffee className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4">Premium Coffee</h2>
              <p className="text-mocha-600 leading-relaxed">
                We source only the finest beans from ethical farms around the world, roasted to perfection in small batches.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-coffee-600 mb-6 mx-auto">
                <FiHome className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4">Cozy Atmosphere</h2>
              <p className="text-mocha-600 leading-relaxed">
                Our shop offers a warm, inviting space where you can relax, work, or catch up with friends in comfort.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-coffee-600 mb-6 mx-auto">
                <FiHeart className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4">Made with Love</h2>
              <p className="text-mocha-600 leading-relaxed">
                Every cup and pastry is crafted with care by our passionate team of baristas and bakers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section id="featured" className="py-20 bg-mocha-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Specialties</h2>
            <div className="w-24 h-1 bg-coffee-500 mx-auto mb-6" />
            <p className="text-xl text-mocha-600 max-w-2xl mx-auto">
              Discover our most beloved creations, carefully crafted to deliver an exceptional experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-coffee-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-coffee-500 mx-auto mb-6" />
            <p className="text-xl text-mocha-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our amazing community of coffee lovers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <TestimonialCard testimonial={testimonialsData[currentTestimonial]} />
            </div>
            
            <motion.div 
              className="hidden lg:block bg-coffee-800 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coffee shop interior" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-coffee-600 scale-125' : 'bg-coffee-300 hover:bg-coffee-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-coffee-600 to-coffee-800 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready for a Perfect Cup?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto text-cream-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us at Brew Haven and experience coffee at its finest. We're waiting to serve you the perfect cup.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact" 
              className="inline-block px-10 py-4 bg-white text-coffee-700 font-semibold rounded-lg shadow-lg hover:bg-cream-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Find Our Location
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;