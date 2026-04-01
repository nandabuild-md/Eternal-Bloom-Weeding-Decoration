export function Testimonials() {
  return (
    <section className="py-32 bg-surface text-center px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <span className="material-symbols-outlined text-primary text-3xl opacity-50">format_quote</span>
        <h2 className="font-headline italic text-3xl md:text-5xl text-on-surface leading-normal font-light">
          "Eternal Bloom tidak hanya merencanakan acara, mereka merangkai emosi kami menjadi sebuah mahakarya yang akan kami ceritakan pada anak cucu kelak."
        </h2>
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2e8s2V0hZ42g8XjF8v_U8yE6l_o_V9lP1460_vF-n02d447Z-g829wR_6075_5a4_1z9x9_x401y_0p5_9u4_8u6_8b8_6s8_8_6_4_6_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2_4_2" 
              alt="Happy bride and groom portrait" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left">
            <p className="font-label uppercase tracking-widest text-xs font-medium text-on-surface">Raditya & Nadhira</p>
            <p className="text-[10px] font-light italic text-on-surface/50">The Grandeur, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}
