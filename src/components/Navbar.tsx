'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
        style={{
          background: isScrolled ? 'rgba(9, 9, 11, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center logo-glow transition-all duration-300 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                  boxShadow: '0 0 20px rgba(212, 168, 67, 0.2)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] uppercase" style={{ color: '#fafafa' }}>
                IKANOVA
              </span>
            </Link>

            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-1 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)' }}>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-4 py-2 text-[12px] font-medium tracking-wide uppercase rounded-full transition-all duration-300 ${
                        isActive
                          ? 'text-[#09090b]'
                          : 'text-[#71717a] hover:text-[#fafafa]'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                            boxShadow: '0 0 20px rgba(212, 168, 67, 0.3)',
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton strength={0.2}>
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.25)]"
                  style={{
                    background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                    color: '#09090b',
                  }}
                >
                  Start Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              </MagneticButton>

              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-300 md:hidden"
                style={{
                  background: isDrawerOpen ? 'rgba(212, 168, 67, 0.1)' : 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-[14px] h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isDrawerOpen ? 'rotate-45 translate-y-[3.25px]' : ''
                  }`}
                  style={{ background: isDrawerOpen ? '#d4a843' : '#fafafa' }}
                />
                <span
                  className={`block w-[14px] h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isDrawerOpen ? '-rotate-45 -translate-y-[3.25px]' : ''
                  }`}
                  style={{ background: isDrawerOpen ? '#d4a843' : '#fafafa' }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[60]"
              style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)' }}
              onClick={closeDrawer}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 h-full z-[70] flex flex-col"
              style={{
                width: '85%',
                maxWidth: '400px',
                background: '#09090b',
                borderLeft: '1px solid rgba(255,255,255,0.04)',
                boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="flex items-center justify-between px-6 h-16 shrink-0">
                <Link href="/" className="flex items-center gap-2.5" onClick={closeDrawer}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                      boxShadow: '0 0 16px rgba(212, 168, 67, 0.3)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                      <line x1="12" y1="22" x2="12" y2="15.5" />
                      <polyline points="22 8.5 12 15.5 2 8.5" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: '#fafafa' }}>IKANOVA</span>
                </Link>
                <button
                  onClick={closeDrawer}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="mx-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212, 168, 67, 0.15), transparent)' }} />

              <div className="flex-1 flex flex-col justify-center px-8 py-8">
                <nav className="space-y-1">
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeDrawer}
                          className={`block py-4 text-lg font-medium tracking-[0.12em] uppercase transition-all duration-300 border-b ${
                            isActive
                              ? 'text-[#d4a843] border-[rgba(212,168,67,0.1)]'
                              : 'text-[#52525b] hover:text-[#fafafa] border-[rgba(255,255,255,0.03)]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="mx-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212, 168, 67, 0.15), transparent)' }} />

              <div className="px-6 py-6 shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <Link
                    href="/contact"
                    onClick={closeDrawer}
                    className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                      color: '#09090b',
                      boxShadow: '0 4px 24px rgba(212, 168, 67, 0.25)',
                    }}
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
