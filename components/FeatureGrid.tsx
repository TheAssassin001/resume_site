import React from 'react';
import { Zap, Shield, Users, BarChart3, Brain, Globe } from 'lucide-react';
import FadeIn from './FadeIn';

const features = [
  {
    icon: <Brain className="text-blue-400" size={24} />,
    title: "Cognitive Screening",
    description: "Stop missing hidden high performers. Our AI understands context, career trajectory, and soft skills from raw data.",
    colSpan: "md:col-span-2"
  },
  {
    icon: <Zap className="text-amber-400" size={24} />,
    title: "Instant Shortlisting",
    description: "Turn 1,000 applications into a top 10 shortlist in seconds, not weeks.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Shield className="text-emerald-400" size={24} />,
    title: "Bias Elimination",
    description: "Hire based on merit. Spot red flags automatically without letting unconscious bias creep in.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <BarChart3 className="text-purple-400" size={24} />,
    title: "Predictive Analytics",
    description: "People buy outcomes, not parsing engines. Forecast candidate success probability with data, not gut feeling.",
    colSpan: "md:col-span-2"
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <FadeIn delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for the modern hiring stack</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-slate-400 text-lg">
              People buy outcomes, not parsing engines. Talent AI integrates with your ATS and supercharges it to deliver hires, not just candidates.
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