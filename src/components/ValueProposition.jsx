import { motion } from 'framer-motion';
import { Globe, MapPin, Target, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Reach More Buyers',
    description: 'Showcase your products beyond your local market.',
  },
  {
    icon: MapPin,
    title: 'Built For African Sellers',
    description: 'Designed around the realities of businesses starting from Nigeria.',
  },
  {
    icon: Target,
    title: 'Global Ambition',
    description: 'Build your digital storefront with international customers in mind.',
  },
  {
    icon: Clock,
    title: 'Early Access',
    description: 'Join the first group of sellers invited to GRIDMARKET.',
  },
];

const ValueProposition = () => {
  return (
    <section id="for-sellers" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            BUILT FOR BUSINESSES READY TO GO FURTHER.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
