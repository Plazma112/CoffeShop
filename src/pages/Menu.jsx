import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' }
  ];
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

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
            Our Menu
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
            Discover our handcrafted beverages and delicious treats, made with the finest ingredients.
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl shadow-lg bg-white p-2" role="group">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-8 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-coffee-600 text-white shadow-md transform scale-105'
                      : 'text-coffee-700 hover:bg-coffee-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-20 bg-coffee-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Specialty Coffee</h2>
              <div className="w-16 h-1 bg-coffee-500 mb-8" />
              <div className="space-y-6 text-mocha-700 leading-relaxed">
                <p>
                  We take pride in our carefully selected coffee beans, sourced from sustainable farms around the world. Our master roaster fine-tunes each batch to bring out the unique characteristics of every origin.
                </p>
                <p>
                  From light breakfast blends to rich, dark roasts, we have something for every coffee lover. Ask our baristas about the current single-origin offerings and limited seasonal specials.
                </p>
              </div>
              <ul className="space-y-4 text-mocha-700 mt-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>All coffees available as espresso, pour-over, or french press</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Alternative milks available: oat, almond, soy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Add flavor syrups to any drink for $0.75</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="aspect-4-3 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg" 
                alt="Coffee being brewed with precision" 
                className="w-full h-full object-cover-center"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Diets Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <h2 className="section-title">Special Dietary Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-coffee-800 mb-4">Gluten-Free</h3>
              <p className="text-mocha-600 mb-6 leading-relaxed">
                We offer a variety of gluten-free pastries and snacks, prepared in a dedicated area to minimize cross-contamination.
              </p>
              <ul className="space-y-3 text-mocha-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Almond flour cookies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Flourless chocolate cake</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Coconut macaroons</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-coffee-800 mb-4">Vegan</h3>
              <p className="text-mocha-600 mb-6 leading-relaxed">
                Enjoy our plant-based options that don't compromise on taste. From dairy alternatives to vegan treats.
              </p>
              <ul className="space-y-3 text-mocha-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Oat milk as standard in our specialty drinks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Vegan banana bread</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Plant-based protein energy balls</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-coffee-800 mb-4">Low-Sugar Options</h3>
              <p className="text-mocha-600 mb-6 leading-relaxed">
                For those watching their sugar intake, we offer several low-sugar and sugar-free alternatives.
              </p>
              <ul className="space-y-3 text-mocha-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Sugar-free syrups for any drink</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Stevia and monk fruit sweeteners available</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coffee-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Unsweetened cold brew and iced tea options</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Menu;