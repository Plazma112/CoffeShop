import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { FiCoffee, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const teamMembers = [
    {
      name: "Emily Chen",
      role: "Founder & Head Barista",
      bio: "With 15 years of experience in specialty coffee, Emily founded Brew Haven to share her passion for the perfect cup.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      name: "Marcus Johnson",
      role: "Master Roaster",
      bio: "Marcus has traveled the world sourcing the finest beans and perfecting our signature roasting techniques.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      name: "Sophia Rodriguez",
      role: "Pastry Chef",
      bio: "Trained in Paris, Sophia creates our delicious pastries that perfectly complement our coffee offerings.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    }
  ];

  const timeline = [
    { year: "2010", event: "First Brew Haven opened as a small kiosk in downtown" },
    { year: "2012", event: "Expanded to our current location with full seating area" },
    { year: "2015", event: "Started our own in-house roasting program" },
    { year: "2018", event: "Won 'Best Coffee Shop' in the regional barista competition" },
    { year: "2023", event: "Celebrated serving our millionth cup of coffee" }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" 
            alt="Coffee shop story" 
            className="w-full h-full object-cover-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
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
            From humble beginnings to becoming a beloved community spot, discover the passion and people behind Brew Haven.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Beginning</h2>
              <div className="w-16 h-1 bg-coffee-500 mb-8" />
              <div className="space-y-6 text-mocha-700 leading-relaxed">
                <p>
                  Brew Haven began in 2010 as a small coffee cart operated by our founder, Emily Chen. 
                  After years working for large coffee chains, Emily wanted to create a space that celebrated 
                  the craft of coffee making while fostering a sense of community.
                </p>
                <p>
                  What started as a humble cart has grown into a beloved local establishment, but our 
                  values remain the same: exceptional coffee, warm hospitality, and a place that feels like home.
                </p>
                <p>
                  We source our beans ethically from small farms around the world, roast them in small 
                  batches to ensure freshness, and train our baristas in the art and science of coffee preparation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="aspect-4-3 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/1438252/pexels-photo-1438252.jpeg" 
                alt="Coffee shop interior with warm lighting" 
                className="w-full h-full object-cover-center"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 bg-coffee-700/50 rounded-xl backdrop-blur-sm border border-coffee-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCoffee className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Quality</h3>
              <p className="text-cream-100 leading-relaxed">
                We never compromise on the quality of our ingredients or preparation methods. Every cup matters.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 bg-coffee-700/50 rounded-xl backdrop-blur-sm border border-coffee-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Community</h3>
              <p className="text-cream-100 leading-relaxed">
                We strive to be more than just a coffee shop—we're a gathering place for our neighborhood.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 bg-coffee-700/50 rounded-xl backdrop-blur-sm border border-coffee-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Sustainability</h3>
              <p className="text-cream-100 leading-relaxed">
                From our eco-friendly packaging to our direct-trade coffee beans, we're committed to environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <h2 className="section-title">Our Journey</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-coffee-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-3xl font-serif text-coffee-700 mb-2">{item.year}</h3>
                      <p className="text-mocha-600 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  
                  {/* Center Point */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-coffee-500 border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-mocha-50">
        <div className="container-custom">
          <h2 className="section-title">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-4-3 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-800 mb-2">{member.name}</h3>
                  <p className="text-coffee-600 italic mb-4 font-medium">{member.role}</p>
                  <p className="text-mocha-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;