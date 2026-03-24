import { Bell, User } from "lucide-react";
import { NAV_ITEMS } from "../constants";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-[0_20px_40px_rgba(9,70,136,0.06)] sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-8 h-16 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black italic text-primary tracking-tighter">
          Arena Velocity
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-headline italic font-bold tracking-tight transition-all duration-200 hover:skew-x-[-5deg] ${
                item.active 
                  ? "text-primary border-b-2 border-secondary-container pb-1" 
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 mr-4 text-slate-500">
            <motion.button whileHover={{ scale: 1.1 }} className="hover:text-primary transition-colors">
              <Bell size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="hover:text-primary transition-colors">
              <User size={20} />
            </motion.button>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary-container text-on-secondary-container font-headline font-bold italic px-5 py-1.5 skew-x-[-12deg] shadow-md text-sm"
          >
            <span className="inline-block skew-x-[12deg]">Join Elite</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
