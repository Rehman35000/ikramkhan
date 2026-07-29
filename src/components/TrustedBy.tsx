'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useThemeColors } from '@/hooks/useThemeColors';

const companies = [
  { name: 'Universal Link', category: 'EdTech' },
  { name: 'St. Elizabeth', category: 'Healthcare' },
  { name: 'Fashion Hub', category: 'E-Commerce' },
  { name: 'TechVentures', category: 'SaaS' },
  { name: 'CloudNine', category: 'Cloud' },
  { name: 'DataFlow', category: 'AI/ML' },
  { name: 'NexGen', category: 'Web3' },
  { name: 'Synapse', category: 'FinTech' },
];

export default function TrustedBy() {
  const c = useThemeColors();
  const { theme } = useTheme();

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        borderTop: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
        borderBottom: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
      }}
    >
      <div className="absolute inset-0" style={{ background: `rgba(${c.accent.replace('#', '').match(/../g)!.join(', ')}, 0.01)` }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-semibold tracking-[0.25em] uppercase"
          style={{ color: c.fgSecondary }}
        >
          Trusted by forward-thinking companies
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: `linear-gradient(90deg, ${c.bg}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: `linear-gradient(270deg, ${c.bg}, transparent)` }} />

        <div className="flex animate-marquee">
          {[...companies, ...companies].map((company, i) => (
            <div key={`${company.name}-${i}`} className="flex-shrink-0 mx-6 group">
              <div
                className="flex items-center gap-3 px-6 py-4 transition-all duration-500"
                style={{
                  border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                  background: c.cardBg,
                  borderRadius: '14px',
                  boxShadow: theme === 'light' ? '0 1px 3px rgba(0,0,0,0.04)' : '0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${c.accent}0f`,
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '10px',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold block" style={{ color: c.fg }}>{company.name}</span>
                  <span className="text-[10px] tracking-wider uppercase" style={{ color: c.fgSecondary }}>{company.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
