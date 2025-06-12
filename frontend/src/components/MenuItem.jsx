import { motion } from 'framer-motion';
import { FiPlus, FiStar } from 'react-icons/fi';

const MenuItem = ({ item }) => {
  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log('Added to cart:', item.name);
  };

  return (
    <motion.div 
      className="menu-card group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        
        {/* Add to Cart Button - appears on hover */}
        <motion.button
          onClick={handleAddToCart}
          className="absolute top-4 right-4 bg-white text-coffee-600 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-coffee-600 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiPlus size={16} />
        </motion.button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-medium text-coffee-800 group-hover:text-coffee-600 transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-coffee-600 font-bold text-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-mocha-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        {/* Rating Stars (placeholder) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FiStar 
                key={i} 
                size={14} 
                className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-mocha-500 ml-1">(4.0)</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="text-coffee-600 hover:text-coffee-800 font-medium text-sm transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;