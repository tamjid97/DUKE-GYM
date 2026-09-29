'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function PreloaderOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if preloader already shown this session
    const hasShown = sessionStorage.getItem('preloaderShown');
    if (hasShown) {
      setIsVisible(false);
      return;
    }

    // Prevent scroll while preloader is visible
    document.body.style.overflow = 'hidden';

    // Set minimum duration and maximum duration
    const minDuration = 1200;
    const maxDuration = 2500;
    const duration = reduceMotion ? 800 : Math.random() * (maxDuration - minDuration) + minDuration;

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
      sessionStorage.setItem('preloaderShown', 'true');
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'var(--obsidian)' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Breathing glow pulse */}
            {!reduceMotion && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0.95, opacity: 0.4 }}
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-500) 50%, transparent) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
            )}

            {/* Circular progress ring */}
            <svg
              className="absolute"
              width="180"
              height="180"
              viewBox="0 0 180 180"
            >
              <motion.circle
                cx="90"
                cy="90"
                r="85"
                fill="none"
                stroke="var(--accent-500)"
                strokeWidth="2"
                opacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              />
            </svg>

            {/* Lion logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-10"
            >
              <Image
                src="/logo.png"
                alt="Duke Fitness Club logo"
                width={120}
                height={120}
                className="h-24 w-auto"
                priority
              />
            </motion.div>

            {/* Text */}
            <div className="mt-6 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-display text-2xl font-bold tracking-widest text-accent-gradient"
              >
                DUKE FITNESS CLUB
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-[10px] tracking-[0.3em] uppercase mt-2"
                style={{ color: 'var(--muted-warm)' }}
              >
                Premium Fitness Experience
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
