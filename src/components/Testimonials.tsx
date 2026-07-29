'use client';

import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useThemeColors } from '@/hooks/useThemeColors';

const testimonials = [
  {
    quote: 'Afand Yar, CEO, worked with us professionally and handled the entire project on time. He explained every step clearly, analyzed our requirements well, and provided great and fast service.',
    name: 'Afand Yar',
    role: 'Chief Executive Officer',
    company: 'TechVentures',
    initials: 'AY',
    rating: 5,
  },
  {
    quote: 'IKANOVA delivered a flawless e-commerce platform for us. The team was responsive, detail-oriented, and met every deadline. Their communication throughout the project was outstanding.',
    name: 'Ayesha Khan',
    role: 'Founder',
    company: 'StyleNest',
    initials: 'AK',
    rating: 5,
  },
  {
    quote: 'The hospital website they built exceeded our expectations. Professional team, clean design, and delivered ahead of schedule. They are always available whenever we need support or updates.',
    name: 'Dr. Tariq Mehmood',
    role: 'Director',
    company: 'St. Elizabeth Hospital',
    initials: 'TM',
    rating: 5,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Testimonials() {
  const c = useThemeColors();
  const { theme } = useTheme();
  const [activeIndex] = useState(0);

  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="absolute inset-0" style={{ background: `rgba(${c.accent.replace('#', '').match(/../g)!.join(', ')}, 0.008)` }} />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: c.accent }}>Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4" style={{ color: c.fg }}>
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="max-w-xl text-lg" style={{ color: c.fgSecondary }}>
            Real results from real partnerships.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group relative p-7 transition-all duration-500 card-hover-glow flex flex-col"
              style={{
                background: c.cardBg,
                border: `1px solid ${activeIndex === i ? c.accent : (theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)')}`,
                borderRadius: '18px',
                boxShadow: theme === 'light'
                  ? '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)'
                  : '0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4" fill={c.accent} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-[1.8] mb-6 flex-1" style={{ color: c.fgSecondary }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5" style={{ borderTop: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `${c.accent}18`, color: c.accent, border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}` }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: c.fg }}>{testimonial.name}</p>
                  <p className="text-xs" style={{ color: c.fgSecondary }}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
