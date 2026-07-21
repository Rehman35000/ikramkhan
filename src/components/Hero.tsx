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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(207,175,74,0.06) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]" style={{ background: '#CFAF4A' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[120px]" style={{ background: '#CFAF4A' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8"
            style={{ borderColor: 'rgba(207,175,74,0.12)', color: '#CFAF4A', background: 'rgba(207,175,74,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#CFAF4A', boxShadow: '0 0 8px rgba(207,175,74,0.5)' }} />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ color: '#f5f5f5' }}
          >
            <span>We build</span>
            <br />
            <span>{typedWord}</span>
            <span className="animate-pulse" style={{ color: '#CFAF4A' }}>|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: '#999' }}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #CFAF4A, #e0c56a)',
                color: '#111',
                boxShadow: '0 4px 24px rgba(207,175,74,0.25)',
              }}
            >
              Start a project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[rgba(207,175,74,0.06)]"
              style={{ border: '1px solid rgba(207,175,74,0.12)', color: '#f5f5f5' }}
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
              <p className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: '#CFAF4A' }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm mt-1" style={{ color: '#666' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
