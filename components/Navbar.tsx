import React, { useState } from 'react';
import { Menu, X, Command } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll with offset for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // adjust if navbar height changes
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img
              src="/Talent AI Logo.png"
              alt="Talent AI Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
              style={{ display: 'block', background: 'none', boxShadow: 'none', border: 'none', borderRadius: '0', padding: '0', margin: '0' }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#product" onClick={e => handleNavClick(e, 'product')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Product</a>
            <a href="#how-it-works" onClick={e => handleNavClick(e, 'how-it-works')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">How it Works</a>
            <a href="#who-is-it-for" onClick={e => handleNavClick(e, 'who-is-it-for')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Who it's for</a>
            <a href="#faq" onClick={e => handleNavClick(e, 'faq')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQs</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
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
            <a href="#product" onClick={e => handleNavClick(e, 'product')} className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">Product</a>
            <a href="#how-it-works" onClick={e => handleNavClick(e, 'how-it-works')} className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">How it Works</a>
            <a href="#who-is-it-for" onClick={e => handleNavClick(e, 'who-is-it-for')} className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">Who it's for</a>
            <a href="#faq" onClick={e => handleNavClick(e, 'faq')} className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md">FAQs</a>
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