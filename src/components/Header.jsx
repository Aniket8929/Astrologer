import { Search, Bell, SlidersHorizontal } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 gap-4">
      <div className="flex items-center gap-3 shrink-0 group cursor-pointer">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md shadow-indigo-100 transition-transform group-hover:scale-105">
          JS
        </div>

        <div className="hidden md:block">
          <span className="block text-slate-400 text-[10px] font-bold tracking-wide uppercase">
            Welcome back
          </span>
          <h2 className="text-sm font-semibold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
            James Starman
          </h2>
        </div>
      </div>

      <div className="flex-1 max-w-xs sm:max-w-md mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <Search size={16} sm:size={18} strokeWidth={2.2} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 sm:pl-11 pr-10 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
          <button
            className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            title="Advanced Filters"
          >
            <SlidersHorizontal size={14} sm:size={16} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:bg-slate-50 hover:text-indigo-600 relative transition-all duration-200 active:scale-95"
          aria-label="Notifications"
        >
          <Bell size={16} sm:size={18} strokeWidth={2.2} />
          <span className="absolute top-2 sm:top-2.5 right-2 sm:right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;