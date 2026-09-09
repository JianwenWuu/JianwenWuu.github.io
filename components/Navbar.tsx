'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, siteConfig } from '@/data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-black/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        className="site-container flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="text-xl font-semibold tracking-[-0.04em] transition-colors hover:text-[#76b900]"
          onClick={() => setOpen(false)}
        >
          {siteConfig.shortName}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#a3a3a3] transition-colors hover:text-[#76b900]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="site-container border-t border-white/10 py-5 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block border-b border-white/10 py-4 text-lg text-[#a3a3a3] transition-colors last:border-0 hover:text-[#76b900]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
