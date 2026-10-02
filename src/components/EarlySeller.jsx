import { motion } from 'framer-motion';

const EarlySeller = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            THE FIRST GRID.
          </h2>
          <p className="text-secondary text-xl sm:text-2xl max-w-3xl mx-auto">
            GRIDMARKET starts with the businesses that believe their products can go further.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-square">
            <div className="absolute inset-0 grid-bg opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-4 p-8">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 border border-primary/30 rounded-sm"
                    style={{
                      backgroundColor: i % 4 === 0 || i % 5 === 0 ? 'rgba(255, 210, 31, 0.1)' : 'transparent',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlySeller;
