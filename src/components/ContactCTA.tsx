'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [0.97, 1]);

  return (
    <section ref={sectionRef} className="relative py-40 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: '#09090b' }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,168,67,0.04) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      {/* Ambient orbs */}
      <motion.div
        style={{ y: orbY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] blur-[160px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: '#d4a843' }} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div style={{ scale: textScale }}>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: '#d4a843' }}>
              Let&apos;s work together
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.03em] mb-6 leading-[1.05]" style={{ color: '#fafafa' }}>
              Ready to build{' '}
              <span className="gradient-text">something great?</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-[1.7]" style={{ color: '#71717a' }}>
              Let us turn your vision into reality. Full product builds or expert consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton strength={0.15}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.25)] group"
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
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(212,168,67,0.06)]"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#fafafa' }}
                >
                  Schedule a call
                </Link>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            {[
              'Free consultation',
              'NDA included',
              'Response within 24h',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#d4a843" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-xs font-medium" style={{ color: '#71717a' }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
