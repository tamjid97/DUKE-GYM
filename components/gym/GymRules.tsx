'use client';

import { motion, useReducedMotion } from 'framer-motion';

const rules = [
  'Bring a towel and wipe down equipment after use.',
  'Return weights to racks after your set.',
  'Wear proper gym attire and closed-toe shoes.',
  'No food in the training area — water only.',
  'Respect other members and wait your turn.',
  'Use collars on all barbell exercises.',
  'Report any equipment issues to staff.',
  'Follow trainer instructions for safety.',
];

export function GymRules() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-28 lg:py-36" style={{ background: '#0B0B0C' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
              THE DUKE STANDARD
            </span>
            <h2
              className="mt-5 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(42px, 4.6vw, 76px)', lineHeight: 0.95 }}
            >
              RULES &
              <br />
              <span className="text-gold-gradient">ETIQUETTE</span>
            </h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-warm">
              A premium training floor is built on discipline. These standards protect every member&apos;s session.
            </p>
            <p
              className="mt-14 font-display font-bold leading-none text-[#D4AF37]"
              style={{ fontSize: 'clamp(96px, 12vw, 168px)', opacity: 0.12 }}
            >
              08
            </p>
          </motion.div>

          <div>
            {rules.map((rule, i) => (
              <motion.div
                key={rule}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.05 }}
                className="group grid grid-cols-[auto_1fr] items-start gap-6 border-b py-7"
                style={{ borderColor: 'rgba(212,175,55,0.12)' }}
              >
                <span className="font-display text-[13px] tracking-[0.16em] text-[rgba(212,175,55,0.55)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[16px] leading-relaxed text-warm-white transition-colors duration-300 group-hover:text-[#F1DDA0]">
                  {rule}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
