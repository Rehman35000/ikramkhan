'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from './MagneticButton';
import { useTheme } from './ThemeProvider';
import { useThemeColors } from '@/hooks/useThemeColors';

const services = [
  {
    title: 'Web Development',
    href: '/services/web-development',
    description: 'Scalable, performant web applications built with modern frameworks and battle-tested architecture.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    href: '/services/mobile-app-development',
    description: 'Native and cross-platform mobile experiences users love.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'AI Solutions',
    href: '/services/ai-development',
    description: 'Intelligent systems powered by machine learning and data analytics.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    href: '/services/ui-ux-design',
    description: 'User-centered design that turns complex problems into intuitive interfaces.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HomeServices() {
  const c = useThemeColors();
  const { theme } = useTheme();

  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: c.accent }}>Services</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4" style={{ color: c.fg }}>
            What we <span className="gradient-text">build</span>
          </h2>
          <p className="max-w-xl text-lg" style={{ color: c.fgSecondary }}>
            End-to-end technology solutions that drive measurable growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-8 transition-all duration-500 card-hover-glow hover:-translate-y-1"
              style={{
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                background: c.cardBg,
                borderRadius: '20px',
                boxShadow: theme === 'light'
                  ? '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)'
                  : '0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: c.gradient, borderRadius: '20px 20px 0 0' }}
              />

              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `${c.accent}0f`,
                    color: c.accent,
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '14px',
                  }}
                >
                  {service.icon}
                </div>
                <span
                  className="text-[11px] font-semibold tracking-widest pt-1"
                  style={{ color: theme === 'light' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.25)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 transition-colors duration-300" style={{ color: c.fg }}>{service.title}</h3>
              <p className="text-sm leading-[1.7] mb-6" style={{ color: c.fgSecondary }}>{service.description}</p>

              <MagneticButton strength={0.15}>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 group/link"
                  style={{ color: c.accent }}
                >
                  Learn more
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:bg-accent group-hover/link:text-white"
                    style={{ border: `1px solid ${c.accent}`, color: c.accent }}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
