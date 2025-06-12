import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import TestimonialCard from '../components/TestimonialCard';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';
import testimonialsData from '../data/testimonialsData';
import { FiCoffee, FiHeart, FiHome } from 'react-icons/fi';

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
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Brew Haven
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-cream-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Brewed to Perfection, Served with Passion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/menu" className="btn-primary mr-4">
              View Menu
            </Link>
            <Link to="/contact" className="btn-secondary">
              Visit Us
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a 
            href="#featured" 
            className="text-white flex flex-col items-center"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <span className="block w-1 h-1 bg-white rounded-full animate-ping"></span>
            </span>
          </a>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-coffee-600 mb-4 mx-auto">
                <FiCoffee className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif mb-3">Premium Coffee</h2>
              <p className="text-mocha-600">
                We source only the finest beans from ethical farms around the world, roasted to perfection.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-coffee-600 mb-4 mx-auto">
                <FiHome className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif mb-3">Cozy Atmosphere</h2>
              <p className="text-mocha-600">
                Our shop offers a warm, inviting space where you can relax, work, or catch up with friends.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-coffee-600 mb-4 mx-auto">
                <FiHeart className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif mb-3">Made with Love</h2>
              <p className="text-mocha-600">
                Every cup and pastry is crafted with care by our passionate team of baristas and bakers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section id="featured" className="py-16 bg-mocha-50">
        <div className="container-custom">
          <h2 className="section-title">Our Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-coffee-100">
        <div className="container-custom">
          <h2 className="section-title">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <TestimonialCard testimonial={testimonialsData[currentTestimonial]} />
            </div>
            
            <motion.div 
              className="hidden md:block bg-coffee-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" 
                alt="Coffee shop interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentTestimonial === index ? 'bg-coffee-600' : 'bg-coffee-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee-600 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready for a Perfect Cup?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-cream-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us at Brew Haven and experience coffee at its finest. We're waiting to serve you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="inline-block px-8 py-4 bg-white text-coffee-700 font-medium rounded-md shadow-md hover:bg-cream-50 transition-all duration-300 ease-in-out">
              Find Our Location
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;