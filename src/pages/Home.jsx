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
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
            alt="Coffee shop interior" 
            className="w-full h-full object-cover-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Brew Haven
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-cream-100 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Brewed to Perfection, Served with Passion
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a 
            href="#features" 
            className="text-white flex flex-col items-center group"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCoffee className="text-coffee-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-serif mb-4">Premium Coffee</h2>
              <p className="text-mocha-600 leading-relaxed">
                We source only the finest beans from ethical farms around the world, roasted to perfection in small batches.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHome className="text-coffee-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-serif mb-4">Cozy Atmosphere</h2>
              <p className="text-mocha-600 leading-relaxed">
                Our shop offers a warm, inviting space where you can relax, work, or catch up with friends in comfort.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="text-coffee-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-serif mb-4">Made with Love</h2>
              <p className="text-mocha-600 leading-relaxed">
                Every cup and pastry is crafted with care by our passionate team of baristas and bakers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-mocha-50">
        <div className="container-custom">
          <h2 className="section-title">Our Specialties</h2>
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
          <h2 className="section-title">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <TestimonialCard testimonial={testimonialsData[currentTestimonial]} />
            </div>
            
            <motion.div 
              className="order-1 lg:order-2 aspect-4-3 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" 
                alt="Happy customers in coffee shop" 
                className="w-full h-full object-cover-center"
                loading="lazy"
              />
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-coffee-600 scale-125' 
                    : 'bg-coffee-300 hover:bg-coffee-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-700 to-coffee-500"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready for a Perfect Cup?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto text-cream-100 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us at Brew Haven and experience coffee at its finest. We're waiting to serve you the perfect cup.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="inline-block px-10 py-4 bg-white text-coffee-700 font-semibold rounded-lg shadow-lg hover:bg-cream-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Find Our Location
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;