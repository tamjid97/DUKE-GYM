'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ProgramsSection } from '@/components/sections/ProgramsSection';

export function GymPrograms() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="programs" className="relative py-28 lg:py-36" style={{ background: '#111315' }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B0B0C] to-transparent" />

      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            TRAIN WITH PURPOSE
          </span>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
            >
              <span className="text-gold-gradient">PROGRAMS</span>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-warm">
              Built for different goals.
              <br />
              Designed for measurable progress.
            </p>
          </div>
        </motion.div>

        <ProgramsSection />
      </div>
    </section>
  );
}
