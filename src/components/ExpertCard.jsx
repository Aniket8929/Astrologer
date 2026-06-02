import { Link } from "react-router-dom";
import {
  MessageSquare,
  Star,
  Globe,
  Clock,
  DollarSign,
  Phone,
} from "lucide-react";

export default function ExpertCard({ expert }) {
  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 group">
      <Link to={`/experts/${expert.id}`} className="block">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5">

          {/* Profile Section */}
          <div className="flex items-start gap-3 sm:gap-4 w-full min-w-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 flex items-center justify-center text-xl font-bold text-slate-700 shrink-0 shadow-sm relative">
              {expert.image ? (
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <span>{expert.initials}</span>
              )}

              <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>

            <div className="space-y-1 flex-1 min-w-0">
              {/* Name & Rating */}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base md:text-lg text-slate-900 tracking-tight truncate">
                  {expert.name}
                </h3>

                {expert.rating && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-600 text-xs font-bold shrink-0">
                    <Star
                      size={12}
                      className="fill-amber-500 text-amber-500"
                    />
                    <span>{expert.rating}</span>
                  </div>
                )}
              </div>

              {/* Skills */}
              <p className="text-slate-500 text-xs sm:text-sm font-medium break-words">
                {expert.skills}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-x-5 pt-2">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-slate-400 shrink-0" />

                  <div>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase">
                      Exp
                    </p>

                    <p className="text-xs font-semibold text-slate-700">
                      {expert.experience}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 hidden md:block">
                  <Globe size={13} className="text-slate-400 shrink-0" />

                  <div>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase">
                      Lang
                    </p>

                    <p className="text-xs font-semibold text-slate-700 truncate">
                      {expert.languages}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <DollarSign size={13} className="text-slate-400 shrink-0" />

                  <div>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase">
                      Rate
                    </p>

                    <p className="text-xs font-bold text-slate-800">
                      {expert.rate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row mt-4 gap-2.5 w-full">
        <button
          className="
            w-full sm:flex-1
            inline-flex items-center justify-center gap-2
            border border-slate-200
            bg-white hover:bg-slate-50
            text-slate-800 font-bold text-sm
            px-5 py-3 rounded-2xl
            shadow-sm transition-all
          "
        >
          <Phone
            size={15}
            strokeWidth={2.5}
            className="text-slate-500"
          />
          <span>Call Now</span>
        </button>

        <button
          className="
            w-full sm:flex-1
            inline-flex items-center justify-center gap-2
            bg-[#C9B900]
            hover:bg-[#A69800]
            text-slate-950
            font-bold text-sm
            px-5 py-3 rounded-2xl
            shadow-md transition-all
          "
        >
          <MessageSquare size={15} strokeWidth={2.5} />
          <span>Chat Now</span>
        </button>
      </div>
    </div>
  );
}