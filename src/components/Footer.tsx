import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary w-full border-t-4 border-secondary-container">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-black italic text-white uppercase tracking-tighter">
            Arena Velocity
          </div>
          <p className="font-body text-[10px] uppercase tracking-widest text-slate-300">
            © 2024 Arena Velocity. Engineered for Speed.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {["Privacy Policy", "Terms", "Press", "Contact"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="font-body text-[10px] uppercase tracking-widest text-slate-300 hover:text-secondary-container transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <Globe size={20} className="text-secondary-container cursor-pointer hover:scale-110 transition-transform" />
          <Share2 size={20} className="text-secondary-container cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </footer>
  );
}
