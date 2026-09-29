'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';

const image = galleryItems.find((g) => g.id === 'g8')!;

export function AquaFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <img src={image.src} alt={image.alt} className={`absolute inset-0 h-full w-full object-cover ${reduceMotion ? '' : 'ken-burns'}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/78 to-[#0B0B0C]/55" />
      <div className="absolute inset-0 aqua-caustics opacity-70" />
      <div className="relative z-10 mx-auto w-full px-6 py-28 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2
            className="font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.92 }}
          >
            FIND YOUR
            <br />
            <span className="text-gold-gradient">FLOW.</span>
          </h2>
          <p className="mt-8 text-[13px] uppercase tracking-[0.32em] text-[#A8A39A]">
            Train. Recover. Perform.
          </p>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Training', d: 'Swimming classes from beginner to competitive.' },
              { n: '02', t: 'Recovery', d: 'Low-impact aqua fitness in temperature-controlled water.' },
              { n: '03', t: 'Wellness', d: 'Dedicated batches for men, women, and kids/family.' },
            ].map((b) => (
              <div key={b.n}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">{b.n}</p>
                <p className="mt-2 font-display text-lg text-warm-white">{b.t}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-warm">{b.d}</p>
              </div>
            ))}
          </div>
          <a
            href="#pool-details"
            className="mt-12 inline-flex items-center gap-3 border border-[rgba(212,175,55,0.4)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors hover:border-[#D4AF37]"
          >
            Explore Duke Aqua
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
