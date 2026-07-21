'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import Link from 'next/link';
import { motion } from 'framer-motion';

const typewriterWords = [
  'Web Applications',
  'Mobile Apps',
  'AI Solutions',
  'Cloud Infrastructure',
  'SaaS Platforms',
];

const stats = [
  { value: '15+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

export default function Hero() {
  const typedWord = useTypewriter(typewriterWords, 80, 50, 1500);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
        backgroundSize: '32px 32px',
        opacity: 0.5,
      }} />

      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px]" style={{ background: 'var(--accent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[120px]" style={{ background: 'var(--accent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8"
            style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)', background: 'var(--surface)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-foreground">We build</span>
            <br />
            <span className="text-foreground">{typedWord}</span>
            <span className="animate-pulse text-foreground">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            IKANOVA is a software development company that builds scalable products
            from concept to deployment. We help startups and enterprises ship faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 bg-foreground text-background hover:opacity-90"
            >
              Start a project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border hover:bg-surface"
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
            >
              View work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-lg"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
