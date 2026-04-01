export function CtaBanner() {
  return (
    <section className="py-40 bg-on-surface text-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd3rS1EfMEXg0o--OzAb8Cw0oqudgS-5aC151N442kXNc0-d49JledMPisWuq-YNMriT3E2RnJKie34ZaVVs2aVuH_rIfo1QTyFozcEIY8HeKNXZsh7FEFFjg7cmfb5EO0tIfNLih4h1Mndj_hl7mzyJHdeSiR8H4VNeByfiYrEhRF8KVVfq0H1tnidkRG08uJKXt84TalYSAojvLQ9VvYLWdzIJVYmbwMqC1VgV1X_JS150Z2gndWf0ulYYwLcuUjTaXUY7vDJFw0')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 className="font-headline italic text-5xl md:text-6xl mb-8 font-light">Mari Mulai Merangkai<br/>Warisan Anda</h2>
        <p className="text-surface/70 font-body font-light mb-16 max-w-xl mx-auto">
          Jadwalkan sesi konsultasi privat dengan kurator pernikahan kami untuk mendiskusikan visi perayaan Anda.
        </p>
        <button className="bg-surface text-on-surface px-10 py-4 text-sm font-label uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-500 rounded-sm">
          Jadwalkan Sesi Privat
        </button>
      </div>
    </section>
  );
}
