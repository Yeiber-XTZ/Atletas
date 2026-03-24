import { ChevronLeft, ChevronRight } from "lucide-react";
import AthleteCard from "./AthleteCard";
import { ATHLETES } from "../constants";

export default function AthleteGrid() {
  return (
    <section className="py-12 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATHLETES.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
          
          {/* Mocking more rows for visual consistency with the request */}
          {ATHLETES.map((athlete) => (
            <AthleteCard key={`${athlete.id}-2`} athlete={athlete} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button className="flex items-center justify-center w-10 h-10 rounded border border-slate-200 hover:bg-slate-100 transition-colors disabled:opacity-30">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded bg-primary text-white font-bold font-label text-sm">1</button>
          <button className="w-10 h-10 rounded border border-slate-200 hover:bg-slate-100 transition-colors font-label text-sm">2</button>
          <button className="w-10 h-10 rounded border border-slate-200 hover:bg-slate-100 transition-colors font-label text-sm">3</button>
          <span className="px-2 text-outline">...</span>
          <button className="w-10 h-10 rounded border border-slate-200 hover:bg-slate-100 transition-colors font-label text-sm">12</button>
          <button className="flex items-center justify-center w-10 h-10 rounded border border-slate-200 hover:bg-slate-100 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
