import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import DeepDiveFeatures from './components/DeepDiveFeatures';
import FeatureGrid from './components/FeatureGrid';
import TargetAudience from './components/TargetAudience';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/Button';
import WaitlistModal from './components/WaitlistModal';
import FadeIn from './components/FadeIn';
import { ArrowRight } from 'lucide-react';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar onOpenWaitlist={openWaitlist} />
      
      <main>
        <Hero onOpenWaitlist={openWaitlist} />
        <TrustSection />
        <HowItWorks />
        <DeepDiveFeatures />
        <FeatureGrid />
        <TargetAudience />
        <FAQ />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to upgrade your hiring OS?
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join the waitlist - <span className="text-blue-400 font-semibold">early adopters get 20% off</span> and priority onboarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="min-w-[200px]" onClick={openWaitlist}>Request Early Access</Button>
                 <Button variant="secondary" size="lg" className="min-w-[200px]" icon={<ArrowRight size={16}/>}>Talk to Sales</Button>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

export default App;