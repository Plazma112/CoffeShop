import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-coffee-800 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-coffee-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Have questions, feedback, or want to make a reservation? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-8">Our Information</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-coffee-600 mr-4 mt-1">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-coffee-800 mb-2">Location</h3>
                      <p className="text-mocha-600">123 Coffee Street</p>
                      <p className="text-mocha-600">Seattle, WA 98101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-coffee-600 mr-4 mt-1">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-coffee-800 mb-2">Phone</h3>
                      <p className="text-mocha-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-coffee-600 mr-4 mt-1">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-coffee-800 mb-2">Email</h3>
                      <p className="text-mocha-600">hello@brewhaven.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-coffee-600 mr-4 mt-1">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-coffee-800 mb-2">Hours</h3>
                      <p className="text-mocha-600">Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p className="text-mocha-600">Saturday: 8:00 AM - 9:00 PM</p>
                      <p className="text-mocha-600">Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-64 bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg" 
                  alt="Map location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-coffee-100">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-coffee-800 mb-2">Do you take reservations?</h3>
              <p className="text-mocha-600">
                We don't typically take reservations for regular seating, but we do accept reservations for large groups and special events. Please contact us directly to arrange.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-coffee-800 mb-2">Is there WiFi available?</h3>
              <p className="text-mocha-600">
                Yes, we offer free high-speed WiFi for all our customers. Just ask for the password at the counter.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-coffee-800 mb-2">Do you sell coffee beans to take home?</h3>
              <p className="text-mocha-600">
                Absolutely! We sell all our coffee beans by the pound, and our baristas are happy to grind them to your preferred brewing method.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-coffee-800 mb-2">Is there parking available?</h3>
              <p className="text-mocha-600">
                We have a small parking lot behind our building, and there's also street parking available. During peak hours, we recommend using public transportation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-coffee-600 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-cream-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter for special offers, new menu items, and events.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-mocha-800"
              />
              <button
                type="submit"
                className="bg-coffee-800 hover:bg-coffee-900 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;