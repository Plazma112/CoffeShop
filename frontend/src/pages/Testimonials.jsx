import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiQuote, FiHeart, FiCoffee } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import API from '../utils/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await API.get('/testimonials');
        setTestimonials(res.data);
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await API.post('/testimonials', newTestimonial);
      setTestimonials([res.data, ...testimonials]);
      setNewTestimonial({ name: '', message: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to submit testimonial:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-coffee-50 to-cream-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <FiCoffee className="text-white text-2xl" />
            </div>
            <p className="text-coffee-600 font-medium">Loading testimonials...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-coffee-50 to-cream-100 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-full flex items-center justify-center shadow-lg">
                <FiHeart className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-coffee-800 mb-4">
              Customer Love
            </h1>
            <div className="w-24 h-1 bg-coffee-500 mx-auto mb-6" />
            <p className="text-xl text-mocha-600 max-w-2xl mx-auto">
              Hear what our amazing customers have to say about their Brew Haven experience
            </p>
          </motion.div>

          {/* Add Testimonial Form */}
          <motion.div
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-coffee-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-coffee-100 rounded-xl flex items-center justify-center mr-4">
                  <FiQuote className="text-coffee-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-coffee-800">Share Your Experience</h2>
                  <p className="text-mocha-600">Tell us about your visit to Brew Haven</p>
                </div>
              </div>

              {submitSuccess && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-green-700 font-medium">
                    ✓ Thank you for your testimonial! It means the world to us.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-800 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-mocha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-25"
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-800 mb-2">
                    Your Experience
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={newTestimonial.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts about Brew Haven..."
                    className="w-full px-4 py-3 border border-mocha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-25 h-32 resize-none"
                    required
                    disabled={submitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-coffee-600 to-coffee-700 text-white rounded-lg font-medium hover:from-coffee-700 hover:to-coffee-800 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Share Your Story'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg border border-coffee-100 p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="relative mb-6">
                  <FiQuote className="absolute -top-2 -left-2 text-coffee-200 text-3xl" />
                  <p className="text-mocha-700 leading-relaxed italic pl-6">
                    "{testimonial.message}"
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-medium text-coffee-800">{testimonial.name}</h3>
                    <p className="text-sm text-mocha-500">Valued Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {testimonials.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="text-coffee-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-coffee-800 mb-4">
                Be the First to Share
              </h3>
              <p className="text-mocha-600 max-w-md mx-auto">
                No testimonials yet. Be the first to share your amazing experience at Brew Haven!
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Ready to Create Your Own Story?
              </h2>
              <p className="text-xl mb-6 text-cream-100">
                Visit Brew Haven today and experience the magic yourself
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-coffee-700 font-medium rounded-lg shadow-md hover:bg-cream-50 transition-all duration-300 transform hover:scale-105"
              >
                Visit Our Store
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Testimonials;