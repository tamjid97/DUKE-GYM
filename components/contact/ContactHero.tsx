'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-smoke to-obsidian" />
      
      {/* Soft gold radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Animated gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              y: [null, '-100vh'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link href="/" className="text-xs text-muted-warm hover:text-gold transition-colors">
            HOME
          </Link>
          <span className="mx-2 text-gold/40">/</span>
          <span className="text-xs text-gold font-semibold tracking-wider">CONTACT</span>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="section-label">GET IN TOUCH</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gold-gradient mt-4 mb-6"
        >
          CONTACT
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm tracking-[0.3em] text-gold/80 uppercase"
        >
          Luxury • Performance • Exclusivity
        </motion.p>
      </div>
    </section>
  );
}
