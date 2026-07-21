'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-[720px] z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
        }`}
        style={{
          background: 'rgba(17, 17, 17, 0.72)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(207, 175, 74, 0.08)',
        }}
      >
        <div className="flex items-center justify-between h-14 px-4 sm:px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group relative z-10">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center logo-glow transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #CFAF4A, #e0c56a)',
                boxShadow: '0 0 20px rgba(207, 175, 74, 0.25), 0 0 40px rgba(207, 175, 74, 0.1)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-wider" style={{ color: '#f5f5f5' }}>
              IKANOVA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-[11px] font-medium tracking-wide uppercase rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-[#CFAF4A]'
                      : 'text-[#999] hover:text-[#f5f5f5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(207, 175, 74, 0.08)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Gold CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #CFAF4A, #e0c56a)',
                color: '#111',
                boxShadow: '0 0 20px rgba(207, 175, 74, 0.2)',
              }}
            >
              Start
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-300 md:hidden"
              style={{
                background: isDrawerOpen ? 'rgba(207, 175, 74, 0.1)' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(207, 175, 74, 0.1)',
              }}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[14px] h-[1.5px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  isDrawerOpen ? 'rotate-45 translate-y-[3.25px]' : ''
                }`}
                style={{ background: isDrawerOpen ? '#CFAF4A' : '#f5f5f5' }}
              />
              <span
                className={`block w-[14px] h-[1.5px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  isDrawerOpen ? '-rotate-45 -translate-y-[3.25px]' : ''
                }`}
                style={{ background: isDrawerOpen ? '#CFAF4A' : '#f5f5f5' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60]"
              style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
              onClick={closeDrawer}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 h-full z-[70] flex flex-col"
              style={{
                width: '85%',
                maxWidth: '400px',
                background: '#0d0d0d',
                borderLeft: '1px solid rgba(207, 175, 74, 0.08)',
                boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 shrink-0">
                <Link href="/" className="flex items-center gap-2" onClick={closeDrawer}>
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #CFAF4A, #e0c56a)',
                      boxShadow: '0 0 16px rgba(207, 175, 74, 0.3)',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                      <line x1="12" y1="22" x2="12" y2="15.5" />
                      <polyline points="22 8.5 12 15.5 2 8.5" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wider" style={{ color: '#f5f5f5' }}>IKANOVA</span>
                </Link>
                <button
                  onClick={closeDrawer}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Gold Divider */}
              <div className="mx-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(207, 175, 74, 0.2), transparent)' }} />

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8 py-8">
                <nav className="space-y-1">
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeDrawer}
                          className={`block py-3.5 text-lg font-medium tracking-[0.15em] uppercase transition-all duration-300 border-b ${
                            isActive
                              ? 'text-[#CFAF4A] border-[rgba(207,175,74,0.12)]'
                              : 'text-[#666] hover:text-[#f5f5f5] border-[rgba(255,255,255,0.03)]'
                          }`}
                          style={{ letterSpacing: '0.15em' }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Gold Divider */}
              <div className="mx-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(207, 175, 74, 0.2), transparent)' }} />

              {/* Bottom Section */}
              <div className="px-6 py-6 space-y-4 shrink-0">
                {/* Full-width Gold CTA */}
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
                      background: 'linear-gradient(135deg, #CFAF4A, #e0c56a)',
                      color: '#111',
                      boxShadow: '0 4px 24px rgba(207, 175, 74, 0.25)',
                    }}
                  >
                    Start a Project
                  </Link>
                </motion.div>

                {/* Login / Sign Up */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex items-center justify-center gap-6 pt-1"
                >
                  <a href="#" className="text-[11px] font-medium tracking-wider uppercase text-[#666] hover:text-[#CFAF4A] transition-colors duration-300">
                    Login
                  </a>
                  <span className="text-[#333]">/</span>
                  <a href="#" className="text-[11px] font-medium tracking-wider uppercase text-[#666] hover:text-[#CFAF4A] transition-colors duration-300">
                    Sign Up
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
