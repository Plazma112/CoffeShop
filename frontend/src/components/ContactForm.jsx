import { useState } from 'react';
import { motion } from 'framer-motion';
import API from '../utils/api';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await API.post('/messages', form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      {sent && (
        <motion.div 
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-green-700 font-medium">
            ✓ Thank you for your message! We'll get back to you soon.
          </p>
        </motion.div>
      )}
      
      {error && (
        <motion.div 
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-red-700">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-coffee-800 mb-2">
            Full Name *
          </label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Enter your full name" 
            className="form-input" 
            required 
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-coffee-800 mb-2">
            Email Address *
          </label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Enter your email address" 
            className="form-input" 
            required 
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-coffee-800 mb-2">
            Message *
          </label>
          <textarea 
            id="message"
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Tell us how we can help you..." 
            className="form-textarea h-32" 
            required 
            disabled={loading}
          />
        </div>

        <button 
          type="submit" 
          className="form-button disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-cream-200">
        <p className="text-sm text-mocha-600 text-center">
          We typically respond within 24 hours during business days.
        </p>
      </div>
    </div>
  );
}