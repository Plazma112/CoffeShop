import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg card-hover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-coffee-100">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover-center"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-semibold text-coffee-800 text-lg">{testimonial.name}</h3>
          <p className="text-sm text-coffee-500 font-medium">{testimonial.role}</p>
        </div>
      </div>
      <div className="relative">
        <div className="text-coffee-300 text-4xl absolute -top-2 -left-2">"</div>
        <p className="text-mocha-700 italic leading-relaxed pl-6">
          {testimonial.quote}
        </p>
        <div className="text-coffee-300 text-4xl absolute -bottom-4 right-0">"</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;