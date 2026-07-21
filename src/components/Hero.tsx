'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

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
  const typedWord = useTypewriter(typewriterWords, 70, 40, 1800);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,168,67,0.04) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Ambient orbs with parallax */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute top-1/4 left-[15%] w-[600px] h-[600px] rounded-full opacity-[0.035] blur-[140px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: '#d4a843' }} />
      </motion.div>
      <motion.div
        style={{ y: orbY2 }}
        className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.025] blur-[120px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: '#e8c564' }} />
      </motion.div>

      {/* Subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.06] blur-[200px] pointer-events-none" style={{ background: 'radial-gradient(circle, #d4a843, transparent 70%)' }} />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-10"
            style={{ borderColor: 'rgba(212,168,67,0.12)', color: '#d4a843', background: 'rgba(212,168,67,0.04)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#d4a843', animation: 'pulse-ring 2s ease-in-out infinite' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#d4a843' }} />
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[2.75rem] sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-[-0.03em] mb-8"
            style={{ color: '#fafafa', fontFeatureSettings: '"cv11", "ss01"' }}
          >
            <span className="block">We craft</span>
            <span className="block mt-1">
              {typedWord}
              <span className="inline-block w-[3px] h-[0.85em] ml-1 align-baseline" style={{ background: '#d4a843', animation: 'pulse-ring 1.5s ease-in-out infinite' }} />
            </span>
            <span className="block mt-1" style={{ color: '#52525b' }}>that scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 1.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl max-w-2xl mb-12 leading-[1.7]"
            style={{ color: '#a1a1aa' }}
          >
            IKANOVA is a premium software studio building scalable products
            from concept to deployment. We help startups and enterprises ship faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 1.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton strength={0.15}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.25)] group"
                style={{
                  background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                  color: '#09090b',
                }}
              >
                Start a project
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(212,168,67,0.06)] group"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#fafafa' }}
              >
                View our work
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-24 grid grid-cols-3 gap-6 max-w-lg"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? 'border-l' : ''} style={i > 0 ? { borderColor: 'rgba(255,255,255,0.06)' } : {}}>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm mt-1.5 tracking-wide" style={{ color: '#71717a' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: '#52525b' }}>Scroll</span>
          <div className="w-px h-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
              className="absolute inset-x-0 top-0 h-1/3"
              style={{ background: 'linear-gradient(180deg, #d4a843, transparent)' }}
              animate={{ y: ['-100%', '300%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
