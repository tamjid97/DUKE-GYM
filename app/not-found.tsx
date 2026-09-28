'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GoldButton } from '@/components/shared/GoldButton';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-smoke via-obsidian to-smoke" />
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)'
      }} />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 120 120"
          fill="none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <defs>
            <linearGradient id="errGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8C6B2A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F1DDA0" />
            </linearGradient>
          </defs>
          <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" fill="url(#errGold)" />
          <circle cx="50" cy="48" r="3" fill="#0B0B0C" />
          <circle cx="70" cy="48" r="3" fill="#0B0B0C" />
          <path d="M52 60 Q60 66 68 60" stroke="#0B0B0C" strokeWidth="2" fill="none" />
        </motion.svg>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-6xl font-bold text-gold-gradient sm:text-8xl"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-base text-muted-warm"
        >
          This page seems to have left the building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <GoldButton href="/" icon>Back to Home</GoldButton>
        </motion.div>
      </div>
    </section>
  );
}
