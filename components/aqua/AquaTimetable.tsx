'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PoolTimetable } from '@/components/sections/PoolTimetable';

export function AquaTimetable() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="timetable" className="relative py-28 lg:py-36" style={{ background: '#111315' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 lg:mb-20"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">YOUR TIME. YOUR WATER.</span>
          <h2
            className="mt-5 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
          >
            WEEKLY
            <br />
            <span className="text-gold-gradient">TIMETABLE</span>
          </h2>
        </motion.div>
        <PoolTimetable />
      </div>
    </section>
  );
}
