'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-obsidian">
      {/* Background with bodybuilder image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/videos/g7.jpg)',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian/90 via-obsidian/85 to-obsidian/90" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201, 162, 75, 0.2) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--accent-500)]"
          >
            YOUR JOURNEY STARTS HERE
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-3xl lg:text-5xl font-bold text-warm-white leading-tight"
          >
            Know Your Daily
            <br />
            <span className="text-accent-gradient">Protein Needs</span>
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-md mx-auto"
          >
            <Link href="/tools">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden rounded-xl font-bold tracking-[0.2em] uppercase py-4 px-6 shadow-lg transition-all duration-300 hover:shadow-[var(--accent-500)]/30 shimmer-effect"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-highlight), var(--accent-primary) 60%, var(--accent-deep))',
                  color: '#0A0A0C',
                  boxShadow: '0 4px 24px color-mix(in srgb, var(--accent-primary) 30%, transparent)',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  CALCULATE YOUR PROTEIN
                  <span className="text-lg">→</span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
