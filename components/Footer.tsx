import React from 'react';
import { Command, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12">
          <div className="mb-4">
            <span className="font-bold text-lg text-white">Talent AI</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-6">
            Faster shortlisting. Clearer rationale.<br />Recruiters stay in control.
          </p>
          <div className="flex gap-4">
              <a href="mailto:contact@talentai.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2026 Talent AI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;