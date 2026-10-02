import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              GRIDMARKET
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#how-it-works" className="text-secondary hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#for-sellers" className="text-secondary hover:text-white transition-colors">
                For Sellers
              </a>
              <a href="#about" className="text-secondary hover:text-white transition-colors">
                About
              </a>
              <a
                href="#waitlist"
                className="bg-primary text-black px-6 py-2 font-semibold hover:bg-primary/90 transition-colors"
              >
                JOIN WAITLIST
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#how-it-works"
              className="block text-secondary hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#for-sellers"
              className="block text-secondary hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              For Sellers
            </a>
            <a
              href="#about"
              className="block text-secondary hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#waitlist"
              className="block bg-primary text-black px-6 py-2 font-semibold text-center hover:bg-primary/90 transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              JOIN WAITLIST
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
