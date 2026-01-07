import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from './FadeIn';

const faqs = [
  {
    question: "How does Talent AI avoid bias?",
    answer: "Our AI is trained on anonymized data sets and strictly ignores demographic information like age, gender, ethnicity, and location during the screening process. We focus purely on skills, experience trajectory, and objective performance metrics to ensure every candidate gets a fair shot."
  },
  {
    question: "Is my data secured?",
    answer: "Absolutely. We are SOC 2 Type II compliant and fully GDPR ready. All data is encrypted at rest and in transit using enterprise-grade AES-256 encryption. We never train our public models on your private candidate data without explicit consent."
  },
  {
    question: "Does this replace recruiters?",
    answer: "No. Talent AI is designed to be a force multiplier for recruiters, not a replacement. We automate the repetitive low-level tasks—screening resumes, scheduling, and first-round technical vetting—so your human recruiters can focus on relationship building, closing candidates, and strategic decision making."
  },
  {
    question: "Will it integrate with my ATS?",
    answer: "Yes, we offer seamless 2-way sync with all major Applicant Tracking Systems including Greenhouse, Lever, Ashby, and Workday. You can view Talent AI scores, transcripts, and insights directly within your existing workflow."
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
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know about the Talent AI platform.
            </p>
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