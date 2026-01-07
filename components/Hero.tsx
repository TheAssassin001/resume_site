import React from 'react';
import Button from './Button';
import { ArrowRight, Play } from 'lucide-react';
import ProductShowcase from './ProductShowcase';
import FadeIn from './FadeIn';

interface HeroProps {
  onOpenWaitlist?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] opacity-50"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-xs font-medium text-blue-400 mb-8 cursor-pointer hover:bg-slate-900/80 transition-colors" onClick={onOpenWaitlist}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Talent AI Enterprise 2.0 is now live
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
            Hire the top 1% without <br className="hidden md:block"/>
            <span className="text-gradient-primary">reading a single resume.</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop drowning in noise. The operating system for high-performance hiring that automates screening, spots red flags instantly, and predicts on-the-job performance.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" icon={<ArrowRight size={18} />} onClick={onOpenWaitlist}>
              Request Early Access
            </Button>
            <Button variant="secondary" size="lg" icon={<Play size={16} fill="currentColor" />}>
              Watch 2 min Demo
            </Button>
          </div>
        </FadeIn>

        {/* Product Shot */}
        <FadeIn delay={500} className="w-full">
          <ProductShowcase />
        </FadeIn>
        
      </div>
    </section>
  );
};

export default Hero;