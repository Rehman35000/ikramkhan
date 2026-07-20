'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Welcome() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: 'var(--accent)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px]" style={{ background: '#f87171' }} />
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                style={{ background: 'var(--accent)' }}
              >
                <span className="text-white text-3xl font-bold tracking-tight">IK</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-3 tracking-tight"
            >
              Welcome to{' '}
              <span style={{ color: 'var(--accent)' }}>IKANOVA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl max-w-lg mx-auto mb-8"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Engineering the future, one solution at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
              className="w-48 h-0.5 mx-auto rounded-full origin-left"
              style={{ background: 'var(--accent)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
