import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

const faqs = [
  {
    question: "Does Talent AI replace recruiters or make hiring decisions automatically?",
    answer: "No. Talent AI supports screening and shortlisting, but recruiters remain fully in control of all decisions. The platform provides structured insights and rankings that recruiters can review, adjust, and override at any time."
  },
  {
    question: "Is Talent AI fully automated?",
    answer: "No. Talent AI is designed as a decision-support tool, not an automated hiring system. It helps reduce manual effort while keeping human judgment at the centre of the process."
  },
  {
    question: "How does Talent AI handle bias and fairness?",
    answer: "Talent AI supports more consistent screening by using configurable criteria and structured scoring. Recruiters decide what matters and how candidates are evaluated - Talent AI does not make hiring decisions on its own."
  },
  {
    question: "Can recruiters explain why a candidate was shortlisted?",
    answer: "Yes. Talent AI provides transparent scoring and rationale so recruiters can clearly see - and explain - why candidates were ranked or shortlisted."
  },
  {
    question: "Does Talent AI connect directly to our ATS?",
    answer: "Not at this stage. Talent AI currently works independently of ATS systems, allowing teams to upload candidate data and screen it securely without changing existing tools."
  },
  {
    question: "How long does it take to get started?",
    answer: "Most teams can start screening candidates within minutes - no integrations required."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-slate-800">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} className="text-blue-400" /> : <Plus size={20} className="text-slate-500 group-hover:text-white" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-400 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 px-4">Frequently Asked Questions</h2>
          </FadeIn>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === idx} 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;