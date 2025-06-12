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
      <section className="pt-32 pb-16 md:py-40 relative">
        <div className="absolute inset-0 bg-about-pattern bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-coffee-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From humble beginnings to becoming a beloved community spot, discover the passion and people behind Brew Haven.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Beginning</h2>
              <div className="w-16 h-1 bg-coffee-500 mb-6" />
              <p className="text-mocha-700 mb-4">
                Brew Haven began in 2010 as a small coffee cart operated by our founder, Emily Chen. 
                After years working for large coffee chains, Emily wanted to create a space that celebrated 
                the craft of coffee making while fostering a sense of community.
              </p>
              <p className="text-mocha-700 mb-4">
                What started as a humble cart has grown into a beloved local establishment, but our 
                values remain the same: exceptional coffee, warm hospitality, and a place that feels like home.
              </p>
              <p className="text-mocha-700">
                We source our beans ethically from small farms around the world, roast them in small 
                batches to ensure freshness, and train our baristas in the art and science of coffee preparation.
              </p>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/1438252/pexels-photo-1438252.jpeg" 
                alt="Coffee shop interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-coffee-800 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 border border-coffee-700 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-coffee-400 mb-4 mx-auto">
                <FiCoffee className="mx-auto" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Quality</h3>
              <p className="text-cream-100">
                We never compromise on the quality of our ingredients or preparation methods. Every cup matters.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 border border-coffee-700 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-coffee-400 mb-4 mx-auto">
                <FiUsers className="mx-auto" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Community</h3>
              <p className="text-cream-100">
                We strive to be more than just a coffee shop—we're a gathering place for our neighborhood.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 border border-coffee-700 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-coffee-400 mb-4 mx-auto">
                <FiAward className="mx-auto" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Sustainability</h3>
              <p className="text-cream-100">
                From our eco-friendly packaging to our direct-trade coffee beans, we're committed to environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <h2 className="section-title">Our Journey</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-coffee-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center md:items-start`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                    {index % 2 === 0 ? (
                      <div className="md:pl-8 md:text-left">
                        <h3 className="text-2xl font-serif text-coffee-700">{item.year}</h3>
                        <p className="text-mocha-600">{item.event}</p>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-serif text-coffee-700">{item.year}</h3>
                        <p className="text-mocha-600">{item.event}</p>
                      </>
                    )}
                  </div>
                  
                  {/* Center Point */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-coffee-500 border-4 border-white shadow"></div>
                  
                  <div className="md:w-1/2 md:pl-8">
                    {index % 2 === 1 ? (
                      <div className="md:pr-8 md:text-right">
                        <h3 className="text-2xl font-serif text-coffee-700 md:hidden">{item.year}</h3>
                        <p className="text-mocha-600 md:hidden">{item.event}</p>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-serif text-coffee-700 md:hidden">{item.year}</h3>
                        <p className="text-mocha-600 md:hidden">{item.event}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-mocha-50">
        <div className="container-custom">
          <h2 className="section-title">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-coffee-800 mb-1">{member.name}</h3>
                  <p className="text-coffee-600 italic mb-3">{member.role}</p>
                  <p className="text-mocha-600">{member.bio}</p>
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