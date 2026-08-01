'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useTheme } from '@/components/ThemeProvider';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useAuth } from '@/hooks/useAuth';

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const c = useThemeColors();
  const { theme } = useTheme();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user, router]);

  const border = theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

  const initials = (user?.name || '?')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '—';

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', background: c.bg, color: c.fg }}>
        <Navbar />
        <section className="relative pt-40 pb-24 px-6 lg:px-8 min-h-[60vh] flex items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24" style={{ color: c.accent }}>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="text-xs tracking-widest uppercase" style={{ color: c.fgSecondary }}>Loading profile…</p>
          </motion.div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!user) return null;

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.fg }}>
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(800px circle at 50% 30%, ${c.accent}08, transparent 60%)` }} />

        <div className="max-w-2xl mx-auto relative">
          <AnimatedSection>
            <div className="text-center mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-3"
              >
                Profile
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm"
                style={{ color: c.fgSecondary }}
              >
                Manage your IKANOVA account.
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="p-8 space-y-8"
              style={{
                background: c.cardBg,
                border: `1px solid ${border}`,
                borderRadius: '18px',
                boxShadow: theme === 'light' ? '0 1px 3px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.3), 0 12px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: c.gradient, boxShadow: `0 0 30px ${c.glow}` }}
                >
                  <span className="text-2xl font-bold tracking-wide" style={{ color: theme === 'light' ? '#FFFFFF' : '#111111' }}>
                    {initials}
                  </span>
                </motion.div>

                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-bold tracking-[-0.02em]">{user.name}</h2>
                  <p className="text-sm mt-1" style={{ color: c.fgSecondary }}>{user.email}</p>
                  <div className="mt-2 flex items-center justify-center sm:justify-start gap-2">
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                      style={{ background: `${c.accent}12`, color: c.accent, border: `1px solid ${c.accent}25` }}
                    >
                      {user.role === 'ADMIN' ? 'Administrator' : 'Member'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}, transparent)` }} />

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: border }}>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: c.fgSecondary }}>Name</span>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: border }}>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: c.fgSecondary }}>Email</span>
                  <span className="text-sm font-medium break-all text-right">{user.email}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: border }}>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: c.fgSecondary }}>Role</span>
                  <span className="text-sm font-medium capitalize">{user.role.toLowerCase()}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: c.fgSecondary }}>Member since</span>
                  <span className="text-sm font-medium">{memberSince}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-2 flex-1 py-3.5 px-5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: `${c.accent}0f`,
                    color: c.accent,
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '14px',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Log out
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="flex-1 py-3.5 px-5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: c.gradient,
                    color: theme === 'light' ? '#FFFFFF' : '#111111',
                    boxShadow: `0 4px 24px ${c.glow}`,
                    borderRadius: '14px',
                  }}
                >
                  Back to home
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
