import { motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  return (
    <motion.div 
      className="menu-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-coffee-800">{item.name}</h3>
          <span className="text-coffee-600 font-medium">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-mocha-600 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;