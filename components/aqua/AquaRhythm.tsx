'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';

const image = galleryItems.find((g) => g.id === 'g9')!;

export function AquaRhythm() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden">
      <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-[#0B0B0C]/75" />
      <div className="absolute inset-0 aqua-caustics" />
      <div className="relative z-10 mx-auto w-full px-6 py-24 text-center lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-warm-white"
          style={{ fontSize: 'clamp(42px, 6.5vw, 96px)', lineHeight: 0.95 }}
        >
          THE WATER
          <br />
          <span className="text-gold-gradient">SETS THE RHYTHM.</span>
        </motion.h2>
      </div>
    </section>
  );
}
