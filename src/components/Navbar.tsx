'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import BookMeeting from './BookMeeting';
import { useTheme } from './ThemeProvider';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useAuth } from '@/hooks/useAuth';

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
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const c = useThemeColors();
  const { user, logout } = useAuth();

  const userInitials = (user?.name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsDrawerOpen(false); setIsUserMenuOpen(false); }, [pathname]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-700 ease-out ${
              isScrolled ? 'px-5 py-2' : 'px-0 py-0'
            }`}
            style={{
              background: isScrolled ? c.navBg : 'transparent',
              backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
              WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
              borderRadius: isScrolled ? '16px' : '0px',
              border: isScrolled
                ? `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`
                : '1px solid transparent',
              boxShadow: isScrolled && theme === 'light'
                ? '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)'
                : 'none',
            }}
          >
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{ background: c.gradient, boxShadow: `0 0 20px ${c.glow}` }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme === 'light' ? '#FFFFFF' : '#09090b'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] uppercase" style={{ color: c.fg }}>IKANOVA</span>
            </Link>

            <div className="hidden md:flex items-center">
              <div
                className="flex items-center gap-1 px-1 py-1"
                style={{
                  background: theme === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)',
                  borderRadius: '100px',
                  border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)'}`,
                }}
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-5 py-2 text-[12px] font-medium tracking-wide uppercase rounded-full transition-all duration-300 ${
                        isActive ? 'text-[#111111]' : ''
                      }`}
                      style={!isActive ? { color: c.fgSecondary } : {}}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full"
                          style={{ background: c.gradient }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10" style={{ color: isActive ? (theme === 'light' ? '#FFFFFF' : '#111111') : undefined }}>
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      background: c.gradient,
                      boxShadow: `0 0 20px ${c.glow}`,
                      border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                    }}
                    aria-label="Account menu"
                  >
                    <span className="text-[11px] font-bold tracking-wide" style={{ color: theme === 'light' ? '#FFFFFF' : '#111111' }}>
                      {userInitials || '•'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <>
                        <div className="fixed inset-0 z-[55]" onClick={() => setIsUserMenuOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute right-0 top-full mt-2 w-60 z-[56] overflow-hidden"
                          style={{
                            background: c.cardBg,
                            border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                            borderRadius: '16px',
                            boxShadow: theme === 'light' ? '0 4px 20px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.5)',
                          }}
                        >
                          <div className="px-4 py-3.5" style={{ background: theme === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)' }}>
                            <p className="text-sm font-semibold truncate" style={{ color: c.fg }}>{user.name}</p>
                            <p className="text-[11px] truncate mt-0.5" style={{ color: c.fgSecondary }}>{user.email}</p>
                          </div>
                          <div className="h-px" style={{ background: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' }} />
                          <Link
                            href="/profile"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-3 text-sm transition-colors duration-200 hover:opacity-70"
                            style={{ color: c.fg }}
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            Profile
                          </Link>
                          <button
                            onClick={() => { setIsUserMenuOpen(false); logout(); }}
                            className="flex items-center gap-2.5 w-full px-4 py-3 text-sm transition-colors duration-200 hover:opacity-70 cursor-pointer"
                            style={{ color: c.accent }}
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                              <polyline points="16 17 21 12 16 7" />
                              <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            Log out
                          </button>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                  }}
                  aria-label="Login"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.fgSecondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </Link>
              )}
              <button
                onClick={toggle}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{
                  background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.fg} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.fg} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>

              <MagneticButton strength={0.2}>
                <button onClick={() => setIsBookingOpen(true)}
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: `${c.accent}0f`,
                    color: c.accent,
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '14px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book Meeting
                </button>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
                  style={{
                    background: c.gradient,
                    color: theme === 'light' ? '#FFFFFF' : '#111111',
                    boxShadow: `0 0 30px ${c.glow}`,
                    borderRadius: '14px',
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
                  background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                }}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-[14px] h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isDrawerOpen ? 'rotate-45 translate-y-[3.25px]' : ''
                  }`}
                  style={{ background: c.fg }}
                />
                <span
                  className={`block w-[14px] h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isDrawerOpen ? '-rotate-45 -translate-y-[3.25px]' : ''
                  }`}
                  style={{ background: c.fg }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

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
                background: c.bg,
                borderLeft: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: theme === 'light' ? '-20px 0 60px rgba(0,0,0,0.1)' : '-20px 0 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center justify-between px-6 h-16 shrink-0">
                <Link href="/" className="flex items-center gap-2.5" onClick={closeDrawer}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: c.gradient, boxShadow: `0 0 16px ${c.glow}` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={theme === 'light' ? '#FFFFFF' : '#09090b'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                      <line x1="12" y1="22" x2="12" y2="15.5" />
                      <polyline points="22 8.5 12 15.5 2 8.5" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: c.fg }}>IKANOVA</span>
                </Link>
                <button
                  onClick={closeDrawer}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                  }}
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.muted} strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="mx-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}, transparent)` }} />

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
                          className="block py-4 text-lg font-medium tracking-[0.12em] uppercase transition-all duration-300 border-b"
                          style={{
                            color: isActive ? c.accent : c.muted,
                            borderColor: isActive ? c.accent : (theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'),
                          }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="mx-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}, transparent)` }} />

              <div className="px-6 py-6 shrink-0 space-y-3">
                <button
                  onClick={toggle}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    background: theme === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                    color: c.fg,
                    borderRadius: '14px',
                  }}
                >
                  {theme === 'dark' ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                      Light Mode
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                      </svg>
                      Dark Mode
                    </>
                  )}
                </button>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
                  <button onClick={() => { closeDrawer(); setIsBookingOpen(true); }}
                    className="flex items-center justify-center w-full py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    style={{
                      background: `${c.accent}0f`,
                      color: c.accent,
                      border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '14px',
                    }}>
                    Book a Meeting
                  </button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.4 }}>
                  <Link
                    href="/contact"
                    onClick={closeDrawer}
                    className="flex items-center justify-center w-full py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: c.gradient,
                      color: theme === 'light' ? '#FFFFFF' : '#111111',
                      boxShadow: `0 4px 24px ${c.glow}`,
                      borderRadius: '14px',
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

      <BookMeeting isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
