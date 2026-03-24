import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden h-[calc(100vh-64px)] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 font-headline font-black italic text-[15vw] text-outline pointer-events-none select-none uppercase leading-none opacity-10">
          SPEED
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 font-label text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
            Athlete of the Month
          </div>
          
          <h1 className="font-headline font-bold italic text-white text-5xl lg:text-8xl leading-[0.85] mb-4 tracking-tighter">
            MARCUS <br /> <span className="text-secondary-container">THRIVE</span>
          </h1>
          
          <p className="text-slate-300 font-body text-base max-w-sm mb-6 leading-relaxed opacity-90">
            Redefining the limits of human potential. Marcus Thrive breaks the 100m barrier with precision and raw power.
          </p>
          
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-container text-on-secondary-container font-headline font-bold italic px-8 py-3 skew-x-[-12deg] text-base shadow-xl"
            >
              <span className="inline-block skew-x-[12deg]">VIEW PROFILE</span>
            </motion.button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <p className="text-secondary-container/60 font-label text-[10px] uppercase tracking-wider mb-1">Discipline</p>
              <p className="text-white font-headline font-bold italic text-xl">Sprint 100m</p>
            </div>
            <div>
              <p className="text-secondary-container/60 font-label text-[10px] uppercase tracking-wider mb-1">Personal Best</p>
              <p className="text-white font-headline font-bold italic text-xl">9.78s</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full aspect-[4/5] max-h-[70vh] shadow-2xl skew-x-[-1deg] border-4 border-white/10 group overflow-hidden">
            <img 
              alt="Professional sprinter in starting blocks" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL2dMIMjcEp121pHTsIqdaweuMmyQYfVuskKSqKr8_keML2lFng2ijEd51DPK_nFwUQ5cKlxtMRVpwQl19U127-k-I0JbZODWrJkZgZZOzQs9Zg7Ap7ZCSNgRKZ3UQU-CIybDMqedbw9s2cXdWqSZfwucDzmW_zMtcxSGi3pa3XYIbFLn9xFkR-ZJ9mD4GeemykXqOBlrlxkkDi2owXQvWhUqd0CdDkjVnLn-S7k6oobfF2lO56bwqjPYm_Qt2NKdkJTO6-JmFtCAQ"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
