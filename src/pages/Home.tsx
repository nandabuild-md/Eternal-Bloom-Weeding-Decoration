import { Hero } from '@/src/components/home/Hero';
import { Philosophy } from '@/src/components/home/Philosophy';
import { StylesGrid } from '@/src/components/home/StylesGrid';
import { Pricing } from '@/src/components/home/Pricing';
import { Testimonials } from '@/src/components/home/Testimonials';
import { CtaBanner } from '@/src/components/home/CtaBanner';

export function Home() {
  return (
    <div className="film-grain">
      <Hero />
      <Philosophy />
      <StylesGrid />
      <Pricing />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}
