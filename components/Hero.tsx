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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-[10px] sm:text-xs font-medium text-blue-400 mb-8 cursor-pointer hover:bg-slate-900/80 transition-colors max-w-[90vw]" onClick={onOpenWaitlist}>
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">Talent AI Enterprise - built for high-volume hiring</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.15] px-2">
            <span className="text-gradient-primary">Turn hundreds of applicants into a clear shortlist - in minutes</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Talent AI helps recruiters rank and shortlist candidates using structured criteria and transparent scoring - so you focus on interviews, not admin.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
            <Button size="lg" icon={<ArrowRight size={18} />} onClick={onOpenWaitlist} className="w-full sm:w-auto">
              Request Access
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