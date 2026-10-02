import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    whatsappNumber: '',
    email: '',
    productCategory: '',
    businessLocation: '',
    sellsInternationally: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (supabase) {
        // Real Supabase submission
        const { error } = await supabase
          .from('seller_waitlist')
          .insert([
            {
              full_name: formData.fullName,
              business_name: formData.businessName,
              whatsapp_number: formData.whatsappNumber,
              email: formData.email,
              product_category: formData.productCategory,
              business_location: formData.businessLocation,
              sells_internationally: formData.sellsInternationally === 'yes',
            },
          ]);

        if (error) {
          console.error('Supabase error:', error);
          throw new Error('Failed to submit to waitlist. Please try again.');
        }
      } else {
        // Supabase not configured, simulate submission for demo only
        console.log('Note: Supabase not configured. Form submission simulated for demo.');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.message || 'There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              YOU'RE ON THE LIST.
            </h2>
            <p className="text-secondary text-lg">
              Thanks for joining GRIDMARKET. We'll be in touch when early seller onboarding opens.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            BE ONE OF THE FIRST SELLERS.
          </h2>
          <p className="text-secondary text-lg">
            GRIDMARKET is preparing its first group of sellers. Join the waitlist and be notified when seller onboarding opens.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6"
        >
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-white mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your business name"
            />
          </div>

          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium text-white mb-2">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              required
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your WhatsApp number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium text-white mb-2">
              What do you sell? *
            </label>
            <input
              type="text"
              id="productCategory"
              name="productCategory"
              required
              value={formData.productCategory}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g., Fashion, Electronics, Home goods"
            />
          </div>

          <div>
            <label htmlFor="businessLocation" className="block text-sm font-medium text-white mb-2">
              Business Location *
            </label>
            <input
              type="text"
              id="businessLocation"
              name="businessLocation"
              required
              value={formData.businessLocation}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g., Aba, Umuahia, Lagos"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Do you currently sell outside Nigeria? *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sellsInternationally"
                  value="yes"
                  required
                  checked={formData.sellsInternationally === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-white">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sellsInternationally"
                  value="no"
                  required
                  checked={formData.sellsInternationally === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-white">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-black px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SUBMITTING...' : 'JOIN THE WAITLIST'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default WaitlistForm;
