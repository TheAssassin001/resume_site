import React, { useState } from 'react';
import { Menu, X, Command } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Command size={18} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Talent<span className="text-blue-400">AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Platform</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Customers</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white">Login</a>
            <Button size="sm" onClick={onOpenWaitlist}>Request Access</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-950 border-b border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">Platform</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">Solutions</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">Customers</a>
            <div className="pt-4 flex flex-col gap-3">
               <Button className="w-full justify-center" onClick={() => {
                 setIsOpen(false);
                 if (onOpenWaitlist) onOpenWaitlist();
               }}>Request Access</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;