'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { waLink } from '@/lib/contact';

export function GymFinale() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-[rgba(212,175,55,0.12)] py-28 lg:py-36" style={{ background: '#0B0B0C' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }}
      />
      <div className="mx-auto px-6 text-center lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className="text-[10px] uppercase tracking-[0.42em] text-[#D4AF37]">EST. / EXPERIENCE</span>
          <h2
            className="mt-6 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 6vw, 92px)', lineHeight: 0.95 }}
          >
            TRAIN HARD.
            <br />
            <span className="text-gold-gradient">LIVE BETTER.</span>
          </h2>
          <p className="mt-6 text-[12px] uppercase tracking-[0.4em] text-[#A8A39A]">Duke Fitness Club</p>
          <a
            href={waLink('Hello Duke Fitness Club! I want to join the gym and learn about membership options.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-12 inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ borderRadius: 0 }}
          >
            Join Duke
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
