import { Search } from "lucide-react";
import { SPORTS, DELEGATIONS } from "../constants";

export default function FilterBar() {
  return (
    <section className="sticky top-16 z-40 bg-white py-4 border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-8 space-y-4">
        {/* Search and Primary Category */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[10px] font-bold uppercase text-outline mr-2 shrink-0">Sports:</span>
            {SPORTS.map((sport, i) => (
              <button 
                key={sport}
                className={`px-4 py-1.5 rounded-full font-label text-xs whitespace-nowrap transition-colors ${
                  i === 0 
                    ? "bg-primary text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-secondary-container/20"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input 
              className="w-full bg-slate-100 border-none focus:ring-1 ring-primary py-1.5 px-4 pr-10 rounded-full text-xs font-body" 
              placeholder="Search athletes..." 
              type="text"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline" />
          </div>
        </div>

        {/* Secondary Category Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-slate-50">
          <span className="text-[10px] font-bold uppercase text-outline mr-2 shrink-0">Delegations:</span>
          {DELEGATIONS.map((team, i) => (
            <button 
              key={team}
              className={`px-3 py-1 font-label text-[11px] whitespace-nowrap transition-colors ${
                i === 0 
                  ? "text-primary font-bold border-b-2 border-primary" 
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              {team}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
