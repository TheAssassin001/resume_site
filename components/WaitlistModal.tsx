import React, { useState } from 'react';
import { X, Mail, Check, Loader2, ArrowRight } from 'lucide-react';
import Button from './Button';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setErrorMessage('');
    
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    
    try {
      const response = await fetch(`${apiUrl}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to connect to server. Please try again later.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-blue-600/20 blur-[60px] pointer-events-none"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors rounded-full hover:bg-slate-800/50 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-10 relative z-0">
          {status === 'success' ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <Check size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We've added <span className="text-white font-medium">{email}</span> to our priority access queue. We'll reach out shortly.
              </p>
              <Button onClick={onClose} className="w-full">
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 mb-4 border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Access</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Talent AI is currently available to a small number of teams. Request access to see if it’s a good fit for your screening workflow.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-slate-300 uppercase tracking-wider ml-1">Work email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  {status === 'error' && errorMessage && (
                    <p className="text-red-400 text-sm mt-2 ml-1">{errorMessage}</p>
                  )}
                </div>

                <Button 
                  className="w-full justify-center py-3 text-base" 
                  disabled={status === 'loading'}
                  icon={status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
                >
                  {status === 'loading' ? 'Processing...' : 'Submit Request →'}
                </Button>

                <p className="text-center text-xs text-slate-600 mt-4">
                  You’ll hear back from us within 1–2 business days.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;