import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import React, { useEffect } from 'react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Our Story', path: '/#philosophy' },
    { name: 'Weddings', path: '/#styles' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Journal', path: '/#testimonials' },
    { name: 'Planning', path: '/planning' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <nav className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-sm max-w-6xl mx-auto mt-6 sticky top-6 z-50 shadow-[0_40px_40px_rgba(114,88,86,0.04)] flex justify-between items-center w-full px-8 py-4">
      <Link to="/" className="text-2xl font-serif italic text-[#725856] dark:text-[#C9A9A6]">
        Eternal Bloom
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path || (location.pathname === '/' && location.hash === link.path.substring(1));
          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={cn(
                "font-label uppercase tracking-[0.05em] text-xs transition-colors",
                isActive
                  ? "text-[#725856] dark:text-[#C9A9A6] border-b border-[#C9A9A6] pb-1 font-medium"
                  : "text-[#1B1C1A]/70 dark:text-[#FBF9F6]/70 hover:text-[#725856]"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <Link to="/planning" className="bg-primary text-on-primary px-6 py-2 rounded-sm text-sm font-label tracking-[0.05em] uppercase hover:opacity-80 transition-all duration-300 scale-98 active:scale-95">
        Konsultasi Gratis
      </Link>
    </nav>
  );
}
