import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import WaitlistForm from './components/WaitlistForm';
import EarlySeller from './components/EarlySeller';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <WaitlistForm />
      <EarlySeller />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
