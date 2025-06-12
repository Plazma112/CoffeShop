import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import MenuItem from '../components/MenuItem';
import { motion } from 'framer-motion';
import menuData from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', count: Object.values(menuData).flat().length },
    { id: 'coffee', name: 'Coffee', count: menuData.coffee.length },
    { id: 'tea', name: 'Tea', count: menuData.tea.length },
    { id: 'pastries', name: 'Pastries', count: menuData.pastries.length },
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.values(menuData).flat();
    }
    return menuData[activeCategory] || [];
  };

  const filteredItems = getFilteredItems();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-coffee-800 to-coffee-900 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Menu
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-coffee-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl max-w-2xl mx-auto text-cream-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover our carefully crafted selection of premium coffees, artisanal teas, and freshly baked pastries.
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-coffee-600 text-white shadow-lg'
                    : 'bg-white text-coffee-700 hover:bg-coffee-100 shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-mocha-600">No items found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-coffee-600 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Can't Decide?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-cream-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit us in-store and let our expert baristas help you find your perfect cup.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-coffee-700 font-medium rounded-md shadow-md hover:bg-cream-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Visit Our Store
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Menu;