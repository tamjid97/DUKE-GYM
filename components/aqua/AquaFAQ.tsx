'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { poolFAQ } from '@/data/pool';

export function AquaFAQ() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-28 lg:py-36" style={{ background: '#111315' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1100px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">NEED TO KNOW?</span>
          <h2
            className="mt-5 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
          >
            POOL
            <br />
            <span className="text-gold-gradient">FAQ</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {poolFAQ.map((item) => (
            <details
              key={item.q}
              className="group border-b"
              style={{ borderColor: 'rgba(212,175,55,0.14)' }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-left font-display text-[18px] text-warm-white sm:text-[22px] [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.q}</span>
                <span className="shrink-0 text-2xl text-[#D4AF37] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-7 text-[15px] leading-relaxed text-muted-warm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
