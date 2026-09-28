'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function AquaFinale() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-[rgba(212,175,55,0.12)] py-24 lg:py-32" style={{ background: '#0B0B0C' }}>
      <div className="mx-auto px-6 text-center lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#D4AF37]">MOVE. BREATHE. FLOW.</span>
          <h2
            className="mt-6 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.95 }}
          >
            TRAIN.
            <br />
            LIVE.
            <br />
            <span className="text-gold-gradient">FLOW.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
