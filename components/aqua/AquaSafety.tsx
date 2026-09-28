'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { poolRules } from '@/data/pool';

export function AquaSafety() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-28 lg:py-36" style={{ background: '#0B0B0C' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">THE DUKE STANDARD</span>
            <h2
              className="mt-5 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(42px, 5vw, 76px)', lineHeight: 0.95 }}
            >
              SAFETY &
              <br />
              <span className="text-gold-gradient">HYGIENE</span>
            </h2>
            <p
              className="mt-12 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.95 }}
            >
              RESPECT
              <br />
              THE WATER.
            </p>
          </motion.div>

          <div>
            {poolRules.map((rule, i) => (
              <motion.div
                key={rule}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.04 }}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b py-6"
                style={{ borderColor: 'rgba(212,175,55,0.12)' }}
              >
                <span className="font-display text-[13px] tracking-[0.16em] text-[rgba(212,175,55,0.55)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[16px] leading-relaxed text-warm-white">{rule}</p>
                <span className="text-[#D4AF37] opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
