'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BookMeeting from './BookMeeting';

const RED = '#E84C3D';
const BLACK = '#111111';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function AnalyticsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="12" y1="20" x2="12" y2="8" />
      <line x1="18" y1="20" x2="18" y2="4" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="15 7 21 7 21 13" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

function VideoCallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: '44px 44px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full blur-[160px] pointer-events-none" style={{ background: `radial-gradient(circle, rgba(232,76,61,0.08), transparent 70%)` }} />
      <div className="absolute -bottom-52 -left-40 w-[560px] h-[560px] rounded-full blur-[160px] pointer-events-none" style={{ background: `radial-gradient(circle, rgba(232,76,61,0.05), transparent 70%)` }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <motion.div className="lg:col-span-6" initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full border bg-white"
              style={{ borderColor: 'rgba(0,0,0,0.06)', boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" style={{ animation: 'pulse-ring 2s ease-in-out infinite' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide" style={{ color: '#666666' }}>
                Registered &amp; Operating in DXB, Muscat &amp; NYC
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-8 text-5xl sm:text-6xl lg:text-[4.4rem] font-bold leading-[1.02] tracking-[-0.03em]"
              style={{ color: BLACK }}
            >
              AI Powered
              <span className="block">Agency for</span>
              <span className="block mt-1" style={{ color: RED }}>
                Mobile Apps
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-7 max-w-xl text-lg leading-[1.7]"
              style={{ color: '#666666' }}
            >
              We engineer competitive software, AI solutions, and digital campaigns
              for startups and global enterprises.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ background: RED, color: '#FFFFFF', boxShadow: '0 8px 24px rgba(232,76,61,0.28)' }}
              >
                Book a Free Call
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                style={{ background: '#FFFFFF', color: BLACK, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)' }}
              >
                View Portfolio
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mx-auto max-w-[560px]">
              <div
                className="absolute -inset-3 rounded-[36px] opacity-60 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(232,76,61,0.1), rgba(17,17,17,0.04))' }}
              />
              <div className="relative overflow-hidden rounded-[28px] bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 24px 80px rgba(17,17,17,0.12)' }}>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/image1.webp"
                    alt="IKANOVA AI agency team"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -top-7 -left-5 sm:-left-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white"
                  style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 32px rgba(17,17,17,0.1)' }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: 'rgba(232,76,61,0.1)' }}>
                    <AnalyticsIcon />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none" style={{ color: BLACK }}>+240%</p>
                    <p className="text-[11px] mt-1" style={{ color: '#999999' }}>Analytics</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -top-8 right-2 sm:right-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white"
                  style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 32px rgba(17,17,17,0.1)' }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: 'rgba(232,76,61,0.1)' }}>
                    <CodeIcon />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: BLACK }}>AI / Code</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -left-6 sm:-left-10 bottom-28"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  animate={{ y: [0, 9, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white"
                  style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 12px 32px rgba(17,17,17,0.1)' }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: 'rgba(0,0,0,0.04)' }}>
                    <GrowthIcon />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none" style={{ color: BLACK }}>Growth</p>
                    <p className="text-[11px] mt-1" style={{ color: '#999999' }}>+312% YOY</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 right-4 sm:right-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white"
                  style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 16px 40px rgba(17,17,17,0.12)' }}
                >
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ background: RED, color: '#FFFFFF' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none" style={{ color: BLACK }}>96% Satisfaction</p>
                    <p className="text-[11px] mt-1.5" style={{ color: '#999999' }}>Across 40+ Brands</p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 flex flex-col gap-3">
                <motion.button
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
                  style={{ background: BLACK, color: '#FFFFFF', boxShadow: '0 12px 28px rgba(17,17,17,0.25)' }}
                  aria-label="Chat with us"
                >
                  <ChatIcon />
                </motion.button>
                <motion.button
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
                  style={{ background: RED, color: '#FFFFFF', boxShadow: '0 12px 28px rgba(232,76,61,0.35)' }}
                  aria-label="Start a video call"
                >
                  <VideoCallIcon />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BookMeeting isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
