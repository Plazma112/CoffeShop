import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-coffee-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-700 to-coffee-900"></div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-coffee-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Have questions, feedback, or want to make a reservation? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Information</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FiMapPin className="text-coffee-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-800 mb-2">Location</h3>
                      <p className="text-mocha-600">123 Coffee Street</p>
                      <p className="text-mocha-600">Seattle, WA 98101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FiPhone className="text-coffee-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-800 mb-2">Phone</h3>
                      <p className="text-mocha-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FiMail className="text-coffee-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-800 mb-2">Email</h3>
                      <p className="text-mocha-600">hello@brewhaven.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FiClock className="text-coffee-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-800 mb-2">Hours</h3>
                      <div className="space-y-1 text-mocha-600">
                        <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 9:00 PM</p>
                        <p>Sunday: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg" 
                  alt="Coffee shop location map" 
                  className="w-full h-full object-cover-center"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-coffee-100">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-coffee-800 mb-4">Do you take reservations?</h3>
              <p className="text-mocha-600 leading-relaxed">
                We don't typically take reservations for regular seating, but we do accept reservations for large groups and special events. Please contact us directly to arrange.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-coffee-800 mb-4">Is there WiFi available?</h3>
              <p className="text-mocha-600 leading-relaxed">
                Yes, we offer free high-speed WiFi for all our customers. Just ask for the password at the counter.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-coffee-800 mb-4">Do you sell coffee beans to take home?</h3>
              <p className="text-mocha-600 leading-relaxed">
                Absolutely! We sell all our coffee beans by the pound, and our baristas are happy to grind them to your preferred brewing method.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-coffee-800 mb-4">Is there parking available?</h3>
              <p className="text-mocha-600 leading-relaxed">
                We have a small parking lot behind our building, and there's also street parking available. During peak hours, we recommend using public transportation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-coffee-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-700 to-coffee-500"></div>
        <div className="container-custom text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto text-cream-100 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter for special offers, new menu items, and events.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-300 text-mocha-800"
              />
              <button
                type="submit"
                className="bg-coffee-800 hover:bg-coffee-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
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