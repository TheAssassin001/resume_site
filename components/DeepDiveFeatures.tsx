import React from 'react';
import { Phone, Mic, FileText, Check, MoreVertical, Brain, TrendingUp, Calendar, Clock } from 'lucide-react';
import FadeIn from './FadeIn';

// Sub-component for Phone Screen Mock
const PhoneScreenMock = () => {
  return (
    <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl max-w-md mx-auto group hover:border-slate-700 transition-colors duration-500">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-sm z-10 relative">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Candidate" className="w-10 h-10 rounded-full object-cover border border-slate-700" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Alex Morgan</h4>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Live Screening • 04:23
            </p>
          </div>
        </div>
        <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer">
                <MoreVertical size={16} />
            </div>
        </div>
      </div>

      {/* Waveform / Active Call Area */}
      <div className="px-6 py-12 bg-gradient-to-b from-slate-900 to-slate-900/80 flex flex-col items-center justify-center border-b border-slate-800 relative overflow-hidden">
         
         {/* Background grid effect */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

         {/* Visualizer */}
         <div className="relative z-10 w-full h-16 flex items-center justify-center gap-1.5">
            {[...Array(12)].map((_, i) => (
                <div 
                    key={i} 
                    className="w-1.5 bg-blue-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]" 
                    style={{
                        height: `${Math.max(20, Math.random() * 100)}%`, 
                        opacity: Math.random() * 0.5 + 0.5,
                        animationDelay: `${i * 0.1}s`,
                        backgroundColor: i % 2 === 0 ? '#3b82f6' : '#60a5fa'
                    }}
                ></div>
            ))}
         </div>
         
         <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <span className="text-xs font-medium text-blue-100">AI Interviewer Speaking...</span>
         </div>
      </div>

      {/* Transcript Snippet */}
      <div className="p-6 space-y-4 bg-slate-950">
        <div className="flex gap-3 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <Brain size={14} className="text-blue-400" />
            </div>
            <div className="space-y-1">
                <p className="text-xs font-semibold text-blue-400">Talent AI</p>
                <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900 border border-slate-800 text-sm text-slate-400">
                    Could you describe a challenging technical problem you solved recently involving distributed systems?
                </div>
            </div>
        </div>
        <div className="flex gap-3 flex-row-reverse">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-lg object-cover mt-1 flex-shrink-0 border border-slate-800" />
            <div className="space-y-1 text-right">
                <p className="text-xs font-semibold text-slate-300">Alex Morgan</p>
                <div className="p-3 rounded-2xl rounded-tr-none bg-blue-600 text-sm text-white shadow-lg shadow-blue-900/20 text-left">
                    At my last role, we faced a race condition in our payment service. I implemented a Redis distributed lock pattern to ensure atomicity...
                </div>
            </div>
        </div>
      </div>

      {/* AI Analysis Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700/50 p-3 rounded-xl flex justify-between items-center shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check size={14} strokeWidth={3} />
                </div>
                <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Key Insight</div>
                    <div className="text-xs font-medium text-white">Strong System Design Knowledge</div>
                </div>
            </div>
            <div className="px-2 py-1 rounded bg-slate-700/50 text-[10px] font-mono text-slate-300 border border-slate-600">
                +15 pts
            </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for Resume Screen Mock
const ResumeScreenMock = () => {
  return (
     <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl max-w-md mx-auto group hover:border-slate-700 transition-colors duration-500">
        {/* Header */}
        <div className="bg-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-purple-400 border border-slate-700">
                    <FileText size={20} />
                </div>
                <div>
                    <div className="text-sm font-medium text-slate-200">James_M_CV.pdf</div>
                    <div className="text-xs text-slate-500">Processed in 0.4s</div>
                </div>
            </div>
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                98% Match
            </div>
        </div>

        {/* Content Breakdown */}
        <div className="p-6 grid gap-6 bg-slate-950">
            
            {/* Skills Match */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Extracted Skills</h5>
                    <span className="text-xs text-blue-400 font-medium bg-blue-400/10 px-2 py-0.5 rounded">8/8 Required</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'AWS', 'Kubernetes', 'GraphQL'].map(skill => (
                        <span key={skill} className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors cursor-default">
                           {['React', 'TypeScript'].includes(skill) && <Check size={10} className="text-emerald-400" />}
                           {skill}
                        </span>
                    ))}
                    <span className="px-2 py-1 text-xs text-slate-500">+4 more</span>
                </div>
            </div>

            {/* Experience Analysis */}
            <div className="space-y-3">
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Career Trajectory</h5>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-4">
                    <div>
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-300 font-medium">Role Relevance</span>
                            <span className="text-emerald-400 font-bold">High</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-1.5 rounded-full w-[95%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-300 font-medium">Growth Velocity</span>
                            <span className="text-blue-400 font-bold">Top 5%</span>
                        </div>
                         <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1.5 rounded-full w-[92%] shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex flex-col gap-1 hover:border-slate-700 transition-colors">
                     <div className="text-slate-500 text-[10px] uppercase font-semibold">Experience</div>
                     <div className="text-white text-sm font-medium flex items-center gap-2">
                        <Calendar size={14} className="text-slate-400"/> 6.5 Years
                     </div>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex flex-col gap-1 hover:border-slate-700 transition-colors">
                     <div className="text-slate-500 text-[10px] uppercase font-semibold">Red Flags</div>
                     <div className="text-white text-sm font-medium flex items-center gap-2">
                        <TrendingUp size={14} className="text-emerald-400"/> None Found
                     </div>
                </div>
            </div>

        </div>
     </div>
  );
};


const DeepDiveFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            
            {/* Feature 1: Phone Screen */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right" className="order-2 lg:order-1 transform hover:scale-[1.02] transition-transform duration-500">
                   <PhoneScreenMock />
                </FadeIn>
                <FadeIn direction="left" className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
                        <Phone size={12} />
                        <span>Conversational Intelligence</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Meet your AI Interviewer — it screens 200 candidates in the time you screen 2.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Your calendar is full. Your inbox is overflowing. Stop the madness. Our voice AI conducts natural, rigorous interviews 24/7, digging deep into technical competency so you don't have to.
                    </p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Clock size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">24/7 Availability</h4>
                                <p className="text-sm text-slate-500">Candidates interview when it suits them, reducing drop-off rates by 40%.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Brain size={20} className="text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Adaptive Questioning</h4>
                                <p className="text-sm text-slate-500">The AI digs deeper when answers are vague, ensuring true competency validation.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Feature 2: Resume Screening */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <FadeIn direction="right" className="order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400 mb-6">
                        <Brain size={12} />
                        <span>Semantic Parsing Engine</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Never waste time on keyword stuffers.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Traditional ATS tools are blind. They reject high performers who don't "hack" the system. We read between the lines to find true signal, spot red flags automatically, and surface candidates with actual potential.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            "Stop missing hidden high performers",
                            "Validates claimed skills against experience duration",
                            "Spot red flags and inconsistencies automatically",
                            "Predicts performance based on historical hiring data"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} className="text-purple-400" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </FadeIn>
                <FadeIn direction="left" className="order-2 transform hover:scale-[1.02] transition-transform duration-500">
                    <ResumeScreenMock />
                </FadeIn>
            </div>

        </div>
    </section>
  );
};

export default DeepDiveFeatures;