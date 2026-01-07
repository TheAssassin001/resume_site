import React from 'react';
import FadeIn from './FadeIn';

const logos = [
  "Acme Corp", "GlobalBank", "Nebula", "Vertex", "Sovereign", "Pinnacle"
];

const TrustSection: React.FC = () => {
  return (
    <div className="w-full py-12 border-y border-slate-800/50 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0}>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
            Trusted by forward-thinking enterprises
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder Logos using text for simplicity in code-gen, but styled to look like logos */}
              {logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center items-center">
                      <span className="text-xl font-bold font-serif text-slate-400 hover:text-white transition-colors cursor-default">
                          {logo}
                      </span>
                  </div>
              ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default TrustSection;