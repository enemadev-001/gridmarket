import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            YOUR PRODUCTS SHOULDN'T STOP AT THE BORDER.
          </h2>
          <p className="text-secondary text-xl sm:text-2xl mb-10">
            Join the GRIDMARKET seller waitlist.
          </p>
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            JOIN THE WAITLIST
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
