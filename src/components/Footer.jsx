const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">
              GRIDMARKET
            </h3>
            <p className="text-secondary">
              Started in Aba. Built for everywhere.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-secondary hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#for-sellers" className="text-secondary hover:text-white transition-colors">
                  Sellers
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-secondary hover:text-white transition-colors">
                  Waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-secondary hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} GRIDMARKET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
