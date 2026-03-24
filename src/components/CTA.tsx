import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="relative py-16 bg-primary-container overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-container via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary-container p-8 lg:p-12 skew-x-[-6deg] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="skew-x-[6deg] max-w-xl text-center md:text-left">
            <h2 className="font-headline font-bold italic text-on-secondary-container text-3xl lg:text-5xl mb-3 leading-none">
              ARE YOU THE NEXT <br /> <span className="text-primary-container">UNSTOPPABLE?</span>
            </h2>
            <p className="text-on-secondary-container/80 text-sm font-body font-medium">
              Join the ranks of the world's most elite athletes. Get access to advanced analytics, top-tier sponsorship, and the Velocity network.
            </p>
          </div>
          
          <div className="skew-x-[6deg]">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-white font-headline font-bold italic px-10 py-4 text-lg hover:bg-primary transition-all shadow-lg border-b-4 border-black/20"
            >
              APPLY TO JOIN
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
