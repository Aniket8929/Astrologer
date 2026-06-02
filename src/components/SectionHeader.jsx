import { ChevronRight } from "lucide-react";

function SectionHeader({ title, action }) {
  return (
    <div className="flex justify-between items-between items-center mb-6 gap-4 select-none">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#F5E61B] to-[#C9B900]" />
        <h2 className="font-extrabold text-xl md:text-2xl text-slate-900 tracking-tight leading-none">
          {title}
        </h2>
      </div>

      {action && (
        <button className="group flex items-center gap-1 text-sm font-bold text-[#C9B900] hover:text-[#A69800] transition-colors duration-200 shrink-0">
          <span>{action}</span>
          <ChevronRight 
            size={16} 
            strokeWidth={2.5} 
            className="transition-transform duration-200 transform group-hover:translate-x-0.5" 
          />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;