'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { poolInfo } from '@/data/pool';
import { galleryItems } from '@/data/gallery';

const specs = [
  { num: '01', label: 'Pool Size', value: poolInfo.size },
  { num: '02', label: 'Depth', value: poolInfo.depth },
  { num: '03', label: 'Water Temp', value: poolInfo.waterTemp },
  { num: '04', label: 'Filtration', value: poolInfo.filtration },
];

const amenities = [
  { label: 'Lifeguard', available: poolInfo.lifeguard },
  { label: 'Changing Rooms', available: poolInfo.changingRooms },
  { label: 'Showers', available: poolInfo.showers },
  { label: 'Lockers', available: poolInfo.lockers },
].filter((a) => a.available);

const poolImage = galleryItems.find((g) => g.id === 'g7')!;

export function AquaDetails() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="pool-details" className="relative overflow-hidden py-28 lg:py-36" style={{ background: '#0B0B0C' }}>
      <div className="pointer-events-none absolute inset-0 aqua-caustics opacity-40" />
      <div className="relative mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">THE AQUA STANDARD</span>
          <h2
            className="mt-5 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
          >
            POOL
            <br />
            <span className="text-gold-gradient">DETAILS</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
            style={{ borderRadius: '12px', minHeight: '520px' }}
          >
            <img src={poolImage.src} alt={poolImage.alt} className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
            <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[rgba(212,175,55,0.5)]" />
            <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[rgba(212,175,55,0.5)]" />
            <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[rgba(212,175,55,0.5)]" />
            <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[rgba(212,175,55,0.5)]" />
          </motion.div>

          <div>
            {specs.map((s, i) => (
              <motion.div
                key={s.num}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.06 }}
                className="border-b py-7"
                style={{ borderColor: 'rgba(212,175,55,0.12)' }}
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
                  {s.num} / {s.label}
                </p>
                <p
                  className="mt-3 font-display font-bold text-warm-white"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 36px)', lineHeight: 1.15 }}
                >
                  {s.value}
                </p>
              </motion.div>
            ))}

            <div className="mt-10 grid grid-cols-2 gap-3">
              {amenities.map((a) => (
                <div
                  key={a.label}
                  className="editorial-card px-4 py-4 text-[11px] uppercase tracking-[0.2em] text-[#F1DDA0]"
                >
                  {a.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
