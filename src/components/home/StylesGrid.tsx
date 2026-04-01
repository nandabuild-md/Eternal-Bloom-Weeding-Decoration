import { motion } from "motion/react";

export function StylesGrid() {
  const styles = [
    {
      title: "Intimate",
      category: "Ceremony",
      description: "Kehangatan dalam kesederhanaan yang mewah.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2000&auto=format&fit=crop",
      alt: "Elegant intimate wedding dinner table setting",
      marginTop: "mt-0"
    },
    {
      title: "Grand",
      category: "Grandeur",
      description: "Kemegahan tradisi yang tak lekang oleh waktu.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop",
      alt: "Grand luxury ballroom wedding reception",
      marginTop: "mt-12 md:mt-0"
    },
    {
      title: "Garden",
      category: "Nature",
      description: "Simfoni alam untuk janji setia selamanya.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop",
      alt: "Romantic outdoor garden wedding decoration",
      marginTop: "mt-12 md:mt-0"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="styles" className="pb-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {styles.map((style, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className={`group relative overflow-hidden aspect-[3/4] rounded-sm bg-surface-container-low ${style.marginTop}`}
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" 
              alt={style.alt} 
              src={style.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white transition-transform duration-500 group-hover:-translate-y-4">
              <span className="block font-label tracking-[0.2em] text-[10px] mb-2 uppercase">{style.category}</span>
              <h3 className="font-headline text-3xl italic">{style.title}</h3>
              <p className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm italic font-light">{style.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
