'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ProgramQuiz } from '@/components/sections/ProgramQuiz';

export function GymQuizSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="find-program" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
          alt=""
          className="h-full w-full object-cover opacity-[0.14]"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: '#111315' }} />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(212,175,55,0.1), transparent 55%)' }}
        />
        <div className="gym-grain opacity-50" />
      </div>

      <div className="relative z-10 mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">FIND YOUR FIT</span>
            <h2
              className="mt-5 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(42px, 6vw, 88px)', lineHeight: 0.9 }}
            >
              FIND
              <br />
              YOUR
              <br />
              <span className="text-gold-gradient">PROGRAM</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-warm lg:mb-3">
            Answer a few questions. We&apos;ll point you toward the right training path.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative px-5 py-10 sm:px-10 sm:py-14"
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(212,175,55,0.18)',
            background: 'linear-gradient(135deg, rgba(11,11,12,0.88), rgba(17,19,21,0.92))',
          }}
        >
          <div className="absolute left-5 top-5 h-7 w-7 border-l border-t border-[rgba(212,175,55,0.45)]" />
          <div className="absolute right-5 top-5 h-7 w-7 border-r border-t border-[rgba(212,175,55,0.45)]" />
          <div className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-[rgba(212,175,55,0.45)]" />
          <div className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-[rgba(212,175,55,0.45)]" />
          <ProgramQuiz />
        </motion.div>
      </div>
    </section>
  );
}
