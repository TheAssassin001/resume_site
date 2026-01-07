import React from 'react';
import { Users, Rocket, FileStack, RefreshCw } from 'lucide-react';
import FadeIn from './FadeIn';

const audiences = [
  {
    icon: <FileStack className="w-6 h-6 text-blue-400" />,
    title: "Talent Teams",
    description: "Drowning in applications? Automate screening and filter the noise to focus on top 1% talent."
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    title: "Founders",
    description: "Hiring quickly? Get accurate technical assessments and cultural fit checks without the overhead."
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Recruiters",
    description: "Screening 50+ candidates a week? Let AI handle the first round interviews while you close the best."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-amber-400" />,
    title: "Modern Companies",
    description: "Replacing outdated ATS tools? Upgrade to an intelligent operating system that scales with you."
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30 border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who is Talent AI for?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built for high-performance teams that value speed, accuracy, and fairness.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="h-full p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-slate-700 shadow-lg shadow-black/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;