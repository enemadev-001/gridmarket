import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            GRIDMARKET IS COMING
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          TAKE YOUR BUSINESS
          <br />
          <span className="text-primary">TO THE WORLD.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-10"
        >
          GRIDMARKET is building a marketplace connecting African businesses with buyers everywhere. Starting in Aba. Built for everywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#waitlist"
            className="w-full sm:w-auto bg-primary text-black px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            JOIN THE SELLER WAITLIST
            <ArrowRight size={20} />
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto border border-border text-white px-8 py-4 font-semibold text-lg hover:bg-card transition-colors"
          >
            LEARN MORE
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-card border border-border rounded-lg overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-primary/40 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
