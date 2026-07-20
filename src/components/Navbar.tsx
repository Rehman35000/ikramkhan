'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="gradient-text">IKANOVA</span>
              <span className="text-foreground"> </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              className="relative p-2.5 rounded-full text-muted-foreground hover:text-foreground bg-surface hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md hover:shadow-accent/10"
              aria-label="Toggle theme"
            >
              <div className="relative w-[18px] h-[18px]">
                {theme === 'dark' ? (
                  <svg className="absolute inset-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg className="absolute inset-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </div>
            </button>
            <Link
              href="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              className="relative p-2 rounded-full text-muted-foreground hover:text-foreground bg-surface hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className="relative w-[18px] h-[18px]">
                {theme === 'dark' ? (
                  <svg className="absolute inset-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg className="absolute inset-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </div>
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-surface transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" className={`transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                <line x1="3" y1="12" x2="21" y2="12" className={`transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                <line x1="3" y1="17" x2="21" y2="17" className={`transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-accent bg-accent/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 px-4">
            <Link
              href="/contact"
              className="block text-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent-secondary shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
