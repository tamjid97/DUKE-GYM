'use client';

import { motion, useReducedMotion } from 'framer-motion';

const houseRules = [
  'Bookings are held for 15 minutes past the start time.',
  'Food and drinks from Duke Kitchen only — no outside food.',
  'Handle equipment with care — damages are chargeable.',
  'No smoking anywhere in the arena.',
  'Respect other players and wait for your turn.',
  'Tournament entries close 1 hour before start time.',
];

export function ArenaRules() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36" style={{ background: '#080809' }}>
      <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />

      <div className="relative mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[360px_1fr] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
              <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
                Club Etiquette
              </span>
            </div>
            <h2
              className="mt-6 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(44px, 5vw, 80px)', lineHeight: 0.95 }}
            >
              HOUSE
              <br />
              <span className="text-gold-gradient">RULES.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
              A private club runs on mutual respect. Simple rules keep play fair, equipment pristine,
              and everyone in their element.
            </p>
            <div className="mt-10 h-px w-32" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.55), transparent)' }} />
          </motion.div>

          <motion.ol
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative space-y-0"
          >
            <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px opacity-60" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.45), rgba(212,175,55,0.08) 80%, transparent)' }} />
            {houseRules.map((rule, i) => (
              <motion.li
                key={i}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group relative border-b border-[rgba(212,175,55,0.08)] py-6 pl-16 pr-4 transition-colors duration-500 hover:bg-[rgba(212,175,55,0.035)] lg:py-7 lg:pl-20"
              >
                <div className="absolute left-0 top-6 flex h-11 w-11 items-center justify-center border border-[rgba(212,175,55,0.25)] transition-all duration-500 group-hover:border-[#D4AF37]/60 group-hover:bg-[rgba(212,175,55,0.06)] lg:h-12 lg:w-12">
                  <span
                    className="font-display font-bold transition-all duration-500 group-hover:opacity-100"
                    style={{
                      fontSize: '1.25rem',
                      background: 'linear-gradient(135deg, #F1DDA0, #D4AF37 60%, #8C6B2A)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-2xl font-display text-[17px] leading-relaxed text-warm-white lg:text-xl">
                    {rule}
                  </p>
                  <span className="mt-2 hidden h-1.5 w-1.5 shrink-0 rotate-45 border border-[#D4AF37] opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ background: 'rgba(212,175,55,0.3)' }} />
                </div>
                <motion.div
                  className="absolute bottom-0 left-16 h-px w-0 bg-gradient-to-r from-[rgba(212,175,55,0.7)] to-transparent transition-all duration-700 group-hover:w-[70%] lg:left-20"
                />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
