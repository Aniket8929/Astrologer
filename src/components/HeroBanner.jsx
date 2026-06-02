import { ArrowRight, Sparkles } from "lucide-react";

function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#F5E61B] via-[#E6D400] to-[#C9B900] p-6 sm:p-8 md:p-10 shadow-xl shadow-yellow-500/10 min-h-[320px] sm:min-h-[280px] flex flex-col justify-between group">
      
      <div className="absolute right-[-40px] sm:right-[-20px] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-40 sm:opacity-80 md:opacity-100 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 z-0">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-[3px] border-white/40 flex items-center justify-center shadow-inner">
          <div className="absolute w-[140%] h-[20%] border-[3px] border-white/30 rounded-[50%] rotate-[-15deg] backdrop-blur-[1px]" />
          <div className="absolute w-[110%] h-[110%] border border-dashed border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <Sparkles className="text-white/60 absolute top-6 left-6 animate-pulse" size={18} />
        </div>
      </div>

      <div className="absolute top-0 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[85%] sm:max-w-[70%]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 text-black/80 backdrop-blur-sm">
          <Sparkles size={12} className="text-black/60" />
          <span className="uppercase text-[9px] sm:text-[10px] tracking-widest font-bold whitespace-nowrap">
            Astrology of Tomorrow
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-4 tracking-tight text-slate-950 leading-[1.15] sm:leading-[1.1]">
          Unlock Your <br className="hidden sm:block" />
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]">Cosmic Potential.</span>
        </h1>
      </div>

      <div className="relative z-10 mt-8 sm:mt-0 w-full sm:w-auto">
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-medium text-sm px-6 py-3.5 rounded-xl sm:rounded-2xl shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 active:scale-98">
          <span>Get Started</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
}

export default HeroBanner;