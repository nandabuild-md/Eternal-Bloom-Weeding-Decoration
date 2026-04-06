import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#FBF9F6] dark:bg-stone-950 w-full border-t-0 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-3xl font-serif italic text-[#725856]">Eternal Bloom</div>
          <p className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 text-sm leading-relaxed font-light italic">
            Mewujudkan warisan cinta yang hidup melalui perayaan pernikahan yang dikurasi secara personal dan artistik.
          </p>
        </div>
        <div>
          <h5 className="font-headline italic text-lg text-[#725856] mb-6">Experience</h5>
          <ul className="space-y-4 font-body text-sm tracking-[0.05em]">
            <li><Link to="#" className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 hover:text-[#725856] dark:hover:text-[#C9A9A6] transition-colors">The Experience</Link></li>
            <li><Link to="#" className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 hover:text-[#725856] dark:hover:text-[#C9A9A6] transition-colors">Portfolio</Link></li>
            <li><Link to="#" className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 hover:text-[#725856] dark:hover:text-[#C9A9A6] transition-colors">Destination Weddings</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline italic text-lg text-[#725856] mb-6">Partners</h5>
          <ul className="space-y-4 font-body text-sm tracking-[0.05em]">
            <li><Link to="#" className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 hover:text-[#725856] dark:hover:text-[#C9A9A6] transition-colors">Vendor Partners</Link></li>
            <li><Link to="#" className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 hover:text-[#725856] dark:hover:text-[#C9A9A6] transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="text-[#1B1C1A]/60 dark:text-[#FBF9F6]/60 hover:text-[#725856] dark:hover:text-[#C9A9A6] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-headline italic text-lg text-[#725856] mb-6">Connect</h5>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-surface-container hover:bg-primary-container transition-colors rounded-sm">
              <span className="material-symbols-outlined text-primary text-xl">share</span>
            </a>
            <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20dengan%20website%20%22Eternal%20Bloom%22%20atau%20saya%20tertarik%20membuat%20template%20seperti%20demo5.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-surface-container hover:bg-primary-container transition-colors rounded-sm">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
            </a>
          </div>
          <p className="text-[10px] font-label uppercase tracking-widest text-[#1B1C1A]/40 dark:text-[#FBF9F6]/40 mt-8">
            © 2024 Eternal Bloom. Crafted for the Living Heirloom.
          </p>
          <p className="text-[10px] text-[#1B1C1A]/30 dark:text-[#FBF9F6]/30 mt-2">
            Website oleh <a href="https://astmay.space" target="_blank" rel="noopener" className="text-[#725856]/50 hover:text-[#725856] dark:text-[#C9A9A6]/50 dark:hover:text-[#C9A9A6] transition-colors underline">Astrina Maysaroh — Jasa Pembuatan Website Profesional</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
