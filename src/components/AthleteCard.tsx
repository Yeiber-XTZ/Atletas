import { motion } from "motion/react";
import { Athlete } from "../types";

interface AthleteCardProps {
  athlete: Athlete;
}

export default function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group relative bg-white transition-all duration-300 hover:shadow-xl flex flex-col"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          alt={athlete.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={athlete.image}
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute top-2 left-2 flex gap-1">
          {athlete.badges.map((badge, i) => (
            <span 
              key={i}
              className={`${
                badge === 'Elite' || badge === 'Undefeated' ? 'bg-secondary-container text-on-secondary-container' : 'bg-primary text-white'
              } text-[8px] font-bold px-1.5 py-0.5 uppercase`}
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end h-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-secondary-container text-on-secondary-container font-headline font-bold italic py-1.5 skew-x-[-12deg] text-xs">
            <span className="inline-block skew-x-[12deg]">VIEW PROFILE</span>
          </button>
        </div>
      </div>

      <div className="p-4 bg-white border-x border-b border-slate-100">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-headline font-bold italic text-lg leading-tight">{athlete.name}</h3>
          <span className="text-[10px] font-bold text-primary uppercase">{athlete.sport}</span>
        </div>
        <div className="flex justify-between items-center text-[10px] text-outline uppercase tracking-tighter">
          <span>{athlete.statLabel}: {athlete.statValue}</span>
          {athlete.record && (
            <span className="bg-blue-50 text-blue-700 px-1 font-bold">{athlete.record}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
