import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-medium text-coffee-800">{testimonial.name}</h3>
          <p className="text-sm text-mocha-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-mocha-700 italic">"{testimonial.quote}"</p>
    </motion.div>
  );
};

export default TestimonialCard;