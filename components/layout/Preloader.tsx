'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--obsidian)' }}
        >
          {/* Cinematic lion logo SVG */}
          <motion.svg
            width="140"
            height="140"
            viewBox="0 0 120 120"
            fill="none"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <defs>
              <linearGradient id="preloaderGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--accent-deep)" />
                <stop offset="50%" stopColor="var(--accent-primary)" />
                <stop offset="100%" stopColor="var(--accent-highlight)" />
              </linearGradient>
              <filter id="preloaderGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Lion head with dramatic animation */}
            <motion.path
              d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z"
              fill="url(#preloaderGold)"
              filter="url(#preloaderGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
            />
            
            {/* Eyes appear after lion */}
            <motion.circle 
              cx="50" cy="48" r="3" 
              fill="var(--obsidian)" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1.4, duration: 0.4 }} 
            />
            <motion.circle 
              cx="70" cy="48" r="3" 
              fill="var(--obsidian)" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1.4, duration: 0.4 }} 
            />
            
            {/* Smile appears last */}
            <motion.path 
              d="M52 60 Q60 66 68 60" 
              stroke="var(--obsidian)" 
              strokeWidth="2" 
              fill="none" 
              initial={{ opacity: 0, pathLength: 0 }} 
              animate={{ opacity: 1, pathLength: 1 }} 
              transition={{ delay: 1.6, duration: 0.5 }} 
            />
          </motion.svg>

          {/* Cinematic title reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 text-center"
          >
            <motion.h1 
              className="text-4xl font-display font-black tracking-[0.25em] text-accent-gradient"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              DUKE
            </motion.h1>
            
            <motion.div 
              className="diamond-divider mt-3"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <div className="diamond" />
            </motion.div>
            
            <motion.p 
              className="mt-3 text-xs tracking-[0.5em] uppercase"
              style={{ color: 'var(--muted-warm)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Fitness Club
            </motion.p>
          </motion.div>

          {/* Premium loading bar */}
          <motion.div
            className="mt-10 h-[3px] w-48 overflow-hidden rounded-full"
            style={{ backgroundColor: 'var(--panel)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full"
              style={{ background: 'var(--accent-gradient)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Subtle particle effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 3 + Math.random() * 4,
                  height: 3 + Math.random() * 4,
                  backgroundColor: 'var(--accent-primary)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0], 
                  scale: [0, 1, 0],
                  y: [0, -100 - Math.random() * 50],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  delay: 0.5 + Math.random(),
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
