import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'JOIN THE WAITLIST',
    description: 'Tell us about your business.',
  },
  {
    number: '02',
    title: 'GET INVITED',
    description: "We'll contact early sellers as GRIDMARKET approaches launch.",
  },
  {
    number: '03',
    title: 'LIST YOUR PRODUCTS',
    description: 'Create your seller profile and showcase your products.',
  },
  {
    number: '04',
    title: 'START SELLING',
    description: 'Connect with buyers and grow your business.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
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
            HOW IT WORKS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-secondary">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-border translate-x-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
