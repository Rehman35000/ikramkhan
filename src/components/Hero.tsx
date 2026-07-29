'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookMeeting from './BookMeeting';
import { useTheme } from './ThemeProvider';
import { useThemeColors } from '@/hooks/useThemeColors';

const stats = [
  { value: '15+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

export default function Hero() {
  const c = useThemeColors();
  const { theme } = useTheme();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute top-1/4 left-[15%] w-[600px] h-[600px] rounded-full opacity-[0.035] blur-[140px]">
        <div className="w-full h-full rounded-full" style={{ background: c.accent }} />
      </div>
      <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.025] blur-[120px]">
        <div className="w-full h-full rounded-full" style={{ background: c.accentSecondary }} />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.06] blur-[200px] pointer-events-none" style={{ background: `radial-gradient(circle, ${c.accent}, transparent 70%)` }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border mb-10"
            style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)', color: c.accent, background: `${c.accent}0a` }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: c.accent, animation: 'pulse-ring 2s ease-in-out infinite' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: c.accent }} />
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase">Available for new projects</span>
          </div>

          <h1
            className="text-[3rem] sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-[-0.03em] mb-8"
            style={{ color: c.fg, fontFeatureSettings: '"cv11", "ss01"' }}
          >
            <span className="block">We craft</span>
            <span className="block mt-1 gradient-text">Digital Products</span>
            <span className="block mt-1" style={{ color: c.fgSecondary }}>that scale.</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-12 leading-[1.7]" style={{ color: c.muted }}>
            IKANOVA is a premium software studio building scalable products
            from concept to deployment. We help startups and enterprises ship faster.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:scale-105 group"
              style={{
                background: c.gradient,
                color: theme === 'light' ? '#FFFFFF' : '#111111',
                borderRadius: '14px',
              }}
            >
              Start a project
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <button onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 group cursor-pointer"
              style={{
                background: `${c.accent}0f`,
                color: c.accent,
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '14px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a Meeting
            </button>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 group"
              style={{
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
                color: c.fg,
                borderRadius: '14px',
              }}
            >
              View our work
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8 max-w-lg">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? 'border-l pl-8' : ''} style={i > 0 ? { borderColor: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' } : {}}>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">{stat.value}</p>
              <p className="text-xs sm:text-sm mt-1.5 tracking-wide" style={{ color: c.fgSecondary }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: c.fgSecondary }}>Scroll</span>
          <div className="w-px h-8 relative overflow-hidden" style={{ background: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' }}>
            <div className="absolute inset-x-0 top-0 h-1/3" style={{ background: `linear-gradient(180deg, ${c.accent}, transparent)`, animation: 'scroll-indicator 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      <BookMeeting isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
