import { motion } from "motion/react";

export function Pricing() {
  const packages = [
    {
      name: "The Intimate",
      price: "Mulai dari Rp 75.000.000",
      description: "Untuk perayaan hangat hingga 100 tamu terkasih.",
      features: [
        "Konsultasi Konsep & Tema",
        "Manajemen Vendor Inti",
        "Koordinasi Hari H (4 Kru)",
        "Buku Panduan Pernikahan"
      ]
    },
    {
      name: "The Grandeur",
      price: "Mulai dari Rp 150.000.000",
      description: "Kemegahan paripurna untuk hingga 500 tamu undangan.",
      features: [
        "Desain & Styling Eksklusif",
        "Manajemen Vendor Komprehensif",
        "Koordinasi Hari H (8 Kru)",
        "RSVP Management",
        "Sesi Gladi Resik"
      ],
      featured: true
    },
    {
      name: "The Heirloom",
      price: "Custom",
      description: "Pengalaman bespoke tanpa batas untuk warisan keluarga.",
      features: [
        "Perencanaan Penuh (A-Z)",
        "Desain & Produksi Kustom",
        "Manajemen Tamu VIP",
        "Perjalanan Destinasi",
        "Concierge Service 24/7"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="font-label tracking-[0.3em] uppercase text-xs text-primary mb-4 block">Investasi Warisan</span>
          <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface">Pilihan Kurasi Kami</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`p-12 border ${pkg.featured ? 'border-primary bg-surface shadow-2xl scale-105 z-10' : 'border-outline-variant bg-surface-container-lowest'} rounded-sm relative group hover:border-primary transition-colors duration-500`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] uppercase tracking-widest font-label">
                  Paling Diminati
                </div>
              )}
              <h3 className="font-headline italic text-3xl text-primary mb-2">{pkg.name}</h3>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface/50 mb-8">{pkg.price}</p>
              <p className="text-sm font-light italic text-on-surface/70 mb-10 h-10">{pkg.description}</p>
              
              <ul className="space-y-4 mb-12">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-light">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                    <span className="text-on-surface/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 text-xs font-label uppercase tracking-widest transition-colors ${pkg.featured ? 'bg-primary text-on-primary hover:bg-on-surface' : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'}`}>
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
