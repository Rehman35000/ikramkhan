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

const glassStats = [
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Support', value: '24/7' },
];

const bottomStats = [
  { value: '15+', label: 'Projects' },
  { value: '7+', label: 'Clients' },
  { value: '24/7', label: 'Available' },
];

export default function Hero() {
  const typedWord = useTypewriter(typewriterWords, 80, 50, 1500);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        opacity: 0.4,
      }} />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[128px]" style={{ background: 'var(--accent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[128px]" style={{ background: '#a78bfa' }} />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'var(--accent)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -80],
              x: [0, (Math.random() - 0.5) * 60],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-8"
              style={{ borderColor: 'var(--border)', color: 'var(--accent)', background: 'var(--surface)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
              IKANOVA
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-foreground">We Engineer the Future of</span>
              <br />
              <span className="block mt-2" style={{ color: 'var(--accent)' }}>
                {typedWord}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg max-w-lg mb-10"
              style={{ color: 'var(--muted-foreground)' }}
            >
              We build software that scales from startup to enterprise. From
              concept to deployment, we deliver solutions that drive growth and
              transform industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02] text-white"
                style={{ background: 'var(--accent)' }}
              >
                Start Your Project
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80 border"
                style={{ borderColor: 'var(--border)', color: 'var(--foreground)', background: 'var(--surface)' }}
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="relative space-y-4">
              {glassStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 40, y: i * 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  className="flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-md"
                  style={{
                    background: 'color-mix(in srgb, var(--surface) 60%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--border) 50%, transparent)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: 'var(--accent)' }}
                  >
                    {stat.value}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{stat.label}</p>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      Verified metrics from our portfolio
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-8 -right-8 w-48 h-48 rounded-2xl border opacity-60"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, #a78bfa 10%, transparent))',
                borderColor: 'color-mix(in srgb, var(--border) 40%, transparent)',
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-6"
        >
          {bottomStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <p className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
