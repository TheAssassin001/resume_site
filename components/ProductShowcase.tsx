import React from 'react';
import { Search, Filter, MoreHorizontal, CheckCircle2, AlertCircle, BrainCircuit } from 'lucide-react';

const candidates = [
  { name: "Sarah Chen", role: "Senior DevOps Engineer", score: 98, status: "Recommended", img: "https://picsum.photos/32/32?random=1" },
  { name: "Marcus Johnson", role: "Senior DevOps Engineer", score: 94, status: "Recommended", img: "https://picsum.photos/32/32?random=2" },
  { name: "Elena Rodriguez", role: "DevOps Engineer", score: 89, status: "Review", img: "https://picsum.photos/32/32?random=3" },
  { name: "David Kim", role: "Site Reliability Engineer", score: 87, status: "Review", img: "https://picsum.photos/32/32?random=4" },
  { name: "Alex Wright", role: "DevOps Engineer", score: 72, status: "Rejected", img: "https://picsum.photos/32/32?random=5" },
];

const ProductShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 lg:mt-24 perspective-1000">
      {/* Glow effect behind the dashboard */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-2xl opacity-20 animate-pulse"></div>
      
      {/* Dashboard Container */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            </div>
            <div className="h-4 w-px bg-slate-700 mx-2"></div>
            <span className="text-xs sm:text-sm font-medium text-slate-400 truncate max-w-[200px] sm:max-w-none">Talent AI / Dashboard / Open Roles / DevOps</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900" />
                ))}
             </div>
             <span className="text-xs text-slate-500">+4 viewing</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-3 sm:px-6 py-4 bg-slate-900 flex justify-between items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 flex-1">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input 
                        type="text" 
                        placeholder="Filter candidates..." 
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                </div>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    <Filter size={18} />
                </button>
            </div>
            <div className="hidden sm:flex items-center gap-2">
                <button className="px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full whitespace-nowrap">
                    AI Analysis Ready
                </button>
            </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-800/30 text-xs font-semibold text-slate-500 uppercase tracking-wider border-y border-slate-800">
            <div className="col-span-4">Candidate</div>
            <div className="col-span-3">Role Match</div>
            <div className="col-span-3">AI Score</div>
            <div className="col-span-2 text-right">Status</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-slate-800/50 bg-slate-900">
            {candidates.map((c, idx) => (
                <div key={idx} className="md:grid md:grid-cols-12 gap-4 px-3 sm:px-6 py-4 hover:bg-slate-800/30 transition-colors cursor-pointer group">
                    {/* Mobile Card Layout */}
                    <div className="md:hidden space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={c.img} alt="" className="w-8 h-8 rounded-full bg-slate-800" />
                                <div>
                                    <div className="text-sm font-medium text-slate-200">{c.name}</div>
                                    <div className="text-xs text-slate-500">{c.role}</div>
                                </div>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                                c.status === 'Recommended' 
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                    : c.status === 'Rejected'
                                    ? 'bg-slate-800 text-slate-500 border-slate-700'
                                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                                {c.status}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">AI Score</span>
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${
                                            c.score > 90 ? 'bg-emerald-500' : 
                                            c.score > 80 ? 'bg-amber-500' : 
                                            'bg-slate-600'
                                        }`} 
                                        style={{width: `${c.score}%`}}
                                    ></div>
                                </div>
                                <span className={`text-sm font-mono font-medium ${
                                    c.score > 90 ? 'text-emerald-400' : 
                                    c.score > 80 ? 'text-amber-400' : 
                                    'text-slate-500'
                                }`}>
                                    {c.score}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Desktop Table Layout */}
                    <div className="hidden md:contents">
                        <div className="col-span-4 flex items-center gap-3">
                            <img src={c.img} alt="" className="w-8 h-8 rounded-full bg-slate-800" />
                            <div>
                                <div className="text-sm font-medium text-slate-200">{c.name}</div>
                                <div className="text-xs text-slate-500">{c.role}</div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center gap-2">
                                 {c.score > 90 ? <CheckCircle2 size={14} className="text-emerald-500" /> : <BrainCircuit size={14} className="text-slate-500"/>}
                                 <span className="text-xs text-slate-400"> Skills Verified</span>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${c.score > 90 ? 'bg-emerald-500' : c.score > 80 ? 'bg-amber-500' : 'bg-slate-600'}`} 
                                        style={{width: `${c.score}%`}}
                                    ></div>
                                </div>
                                <span className={`text-sm font-mono font-medium ${c.score > 90 ? 'text-emerald-400' : c.score > 80 ? 'text-amber-400' : 'text-slate-500'}`}>
                                    {c.score}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-end">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                                c.status === 'Recommended' 
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                    : c.status === 'Rejected'
                                    ? 'bg-slate-800 text-slate-500 border-slate-700'
                                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                                {c.status}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Fake Pagination */}
        <div className="px-3 sm:px-6 py-3 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span className="text-[10px] sm:text-xs">Showing 1-5 of 248</span>
            <div className="flex gap-2">
                <button className="hover:text-slate-300 text-[10px] sm:text-xs">Previous</button>
                <button className="hover:text-slate-300 text-[10px] sm:text-xs">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;