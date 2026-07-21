'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 150);
          return 100;
        }
        return prev + Math.random() * 25 + 10;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: '#09090b' }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center logo-glow"
                style={{
                  background: 'linear-gradient(135deg, #d4a843, #e8c564)',
                  boxShadow: '0 0 40px rgba(212, 168, 67, 0.2), 0 0 80px rgba(212, 168, 67, 0.1)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#a1a1aa' }}>
                IKANOVA
              </span>
              <div className="w-48 h-px relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="absolute inset-y-0 left-0 transition-all duration-75"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, #d4a843, #e8c564)',
                    boxShadow: '0 0 12px rgba(212, 168, 67, 0.4)',
                  }}
                />
              </div>
              <span className="text-[10px] font-mono tabular-nums" style={{ color: '#52525b' }}>
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
