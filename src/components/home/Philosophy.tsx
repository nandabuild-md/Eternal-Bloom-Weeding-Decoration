import { motion } from "motion/react";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-surface text-center px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
        <h2 className="font-headline italic text-4xl md:text-5xl text-primary leading-snug">
          Bukan Sekadar Perayaan, Namun Sebuah Warisan Emosi
        </h2>
        <p className="text-on-surface/70 text-lg leading-relaxed max-w-2xl mx-auto font-body font-light">
          Di Eternal Bloom, kami percaya bahwa pernikahan bukanlah akhir dari sebuah pencarian, melainkan awal dari sebuah warisan keluarga. Kami mengkurasi setiap elemen dengan ketelitian seorang seniman, memastikan setiap tawa, air mata, dan janji terbingkai dalam keindahan yang abadi.
        </p>
      </motion.div>
    </section>
  );
}
