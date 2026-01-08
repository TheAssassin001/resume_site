import React from 'react';
import { UploadCloud, Bot, Trophy, ArrowRight, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const steps = [
  {
    icon: <UploadCloud size={32} className="text-blue-400" />,
    title: "Import Candidates",
    description: "Upload candidate resumes along with your job post"
  },
  {
    icon: <Bot size={32} className="text-purple-400" />,
    title: "AI Processing",
    description: "AI screens + interviews candidates"
  },
  {
    icon: <Trophy size={32} className="text-emerald-400" />,
    title: "Ranked Results",
    description: "You get a ranked shortlist in minutes"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-4">How it Works</h2>
            <p className="text-base sm:text-lg text-slate-400 px-4">Hiring intelligence in three simple steps.</p>
          </FadeIn>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-800 via-blue-900/50 to-slate-800 z-0"></div>

          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 200} className="relative z-10">
              <div className="flex flex-col items-center text-center group">
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:border-slate-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 z-10 relative">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-white shadow-lg z-20">
                    {idx + 1}
                  </div>

                  {/* Mobile Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce">
                      <ChevronRight className="rotate-90" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;