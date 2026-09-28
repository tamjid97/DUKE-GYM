'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian"
        >
          {/* Lion logo SVG */}
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8C6B2A" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#F1DDA0" />
              </linearGradient>
            </defs>
            {/* Stylized lion head */}
            <motion.path
              d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z"
              fill="url(#goldGrad)"
              stroke="#D4AF37"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.circle cx="50" cy="48" r="3" fill="#0B0B0C" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.circle cx="70" cy="48" r="3" fill="#0B0B0C" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.path d="M52 60 Q60 66 68 60" stroke="#0B0B0C" strokeWidth="2" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <h1 className="text-3xl font-display font-bold text-gold-gradient tracking-[0.2em]">
              DUKE
            </h1>
            <div className="diamond-divider mt-2">
              <div className="diamond" />
            </div>
            <p className="mt-2 text-xs tracking-[0.4em] text-muted-warm uppercase">
              Fitness Club
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-smoke"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-bronze via-gold to-champagne"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
