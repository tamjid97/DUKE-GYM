'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';
import { waLink } from '@/lib/contact';

const image = galleryItems.find((g) => g.id === 'g7')!;

export function AquaCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <img src={image.src} alt={image.alt} className={`absolute inset-0 h-full w-full object-cover ${reduceMotion ? '' : 'ken-burns'}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/55 to-[#0B0B0C]" />
      <div className="absolute inset-0 aqua-caustics" />
      <div className="relative z-10 mx-auto w-full px-6 py-28 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.9 }}
          >
            STEP INTO
            <br />
            <span className="text-gold-gradient">DUKE AQUA.</span>
          </h2>
          <p className="mt-8 text-[13px] uppercase tracking-[0.32em] text-[#A8A39A]">Book your aqua experience.</p>
        </motion.div>
      </div>
    </section>
  );
}
