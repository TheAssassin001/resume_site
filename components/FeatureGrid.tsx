import React from 'react';
import { Zap, Shield, Users, BarChart3, Brain, Globe } from 'lucide-react';
import FadeIn from './FadeIn';

const features = [
  {
    icon: <Brain className="text-blue-400" size={24} />,
    title: "Context-Aware Screening",
    description: "Identify relevant experience and transferable skills with consistent, structured screening - even when CVs don't follow the same format.",
    colSpan: "md:col-span-2"
  },
  {
    icon: <Zap className="text-amber-400" size={24} />,
    title: "Instant Shortlisting",
    description: "Turn large applicant pools into a focused shortlist in minutes - with clear, reviewable reasons behind each ranking.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Shield className="text-emerald-400" size={24} />,
    title: "Bias Controls",
    description: "Reduce noise from inconsistent screening with configurable criteria, structured scoring, and optional blind-review fields - recruiters stay in control.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <BarChart3 className="text-purple-400" size={24} />,
    title: "Candidate Insights",
    description: "See how candidates stack up against your criteria with simple, explainable scoring — so decisions are based on evidence, not gut feel.",
    colSpan: "md:col-span-2"
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto px-4">
          <FadeIn delay={0}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Built for the modern recruiter</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base sm:text-lg text-slate-400">
              Talent AI supports consistent screening and evidence-based decisions — with recruiters always in control.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 100} 
              className={feature.colSpan}
              fullWidth={true}
            >
              <div 
                className={`h-full p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group`}
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;