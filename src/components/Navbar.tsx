'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-lg font-bold text-accent tracking-tight"
          >
            Ikram Khan
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:03098660810"
              className="text-sm px-5 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-red-500/25"
            >
              Get Instant Call
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" className={`transition-transform ${isMobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <line x1="3" y1="12" x2="21" y2="12" className={`transition-opacity ${isMobileOpen ? 'opacity-0' : ''}`} />
              <line x1="3" y1="17" x2="21" y2="17" className={`transition-transform ${isMobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-b border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block text-sm text-muted-foreground hover:text-accent transition-colors py-2 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:03098660810"
            onClick={handleNavClick}
            className="block text-sm px-5 py-2.5 rounded-full bg-accent text-white font-medium text-center"
          >
            Get Instant Call
          </a>
        </div>
      </div>
    </nav>
  );
}
