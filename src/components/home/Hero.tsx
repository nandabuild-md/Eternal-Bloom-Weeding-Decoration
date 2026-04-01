import { motion } from "motion/react";

export function Hero() {
  return (
    <header className="relative w-full h-[972px] overflow-hidden -mt-[88px]">
      <motion.img 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover grayscale-[10%] contrast-[1.05]" 
        alt="Elegant wedding couple" 
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3000&auto=format&fit=crop"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 pt-[88px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="text-white/80 font-label tracking-[0.3em] uppercase text-xs mb-6 block">The Living Heirloom</span>
          <h1 className="text-white font-headline italic text-5xl md:text-7xl leading-tight font-light drop-shadow-2xl">
            Dimana Setiap Detail<br/>Menceritakan Kisah Kalian
          </h1>
          <div className="mt-12">
            <a href="#pricing" className="inline-flex items-center gap-3 text-white border-b border-primary-container pb-2 hover:gap-6 transition-all duration-500">
              <span className="font-label tracking-widest text-sm">PELAJARI LEBIH LANJUT</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
