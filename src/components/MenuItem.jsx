import { motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  return (
    <motion.div 
      className="menu-card group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-4-3 overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-coffee-800 group-hover:text-coffee-600 transition-colors duration-200">
            {item.name}
          </h3>
          <span className="text-coffee-600 font-bold text-lg bg-coffee-50 px-3 py-1 rounded-full">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-mocha-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;