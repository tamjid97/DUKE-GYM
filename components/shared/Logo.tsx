'use client';

import { motion } from 'framer-motion';

export function Logo({ size = 100 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative"
    >
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-deep)" />
          <stop offset="50%" stopColor="var(--accent-primary)" />
          <stop offset="100%" stopColor="var(--accent-highlight)" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Lion head crown */}
      <motion.path
        d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z"
        fill="url(#logoGold)"
        filter="url(#logoGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      
      {/* Eyes */}
      <circle cx="50" cy="48" r="3" fill="var(--obsidian)" />
      <circle cx="70" cy="48" r="3" fill="var(--obsidian)" />
      
      {/* Mouth/smile */}
      <path
        d="M52 60 Q60 66 68 60"
        stroke="var(--obsidian)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}