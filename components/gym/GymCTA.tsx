'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { waLink } from '@/lib/contact';

export function GymCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
          alt="Duke Gym"
          className={`h-full w-full object-cover ${reduceMotion ? '' : 'ken-burns'}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0B0B0C]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/70 to-[#0B0B0C]/55" />
        <div className="gym-grain" />
      </div>

      <div
        className={`pointer-events-none absolute right-[18%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 ${reduceMotion ? '' : 'gold-light-drift'}`}
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.16), transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="relative z-10 mx-auto w-full px-6 py-28 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">DUKE / GYM</span>
          <h2
            className="mt-6 font-display font-bold text-[#F5F1E6]"
            style={{ fontSize: 'clamp(42px, 6.4vw, 96px)', lineHeight: 0.94 }}
          >
            YOUR NEXT LEVEL
            <br />
            <span className="text-gold-gradient">STARTS HERE.</span>
          </h2>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-muted-warm">
            Train with purpose.
            <br />
            Train at DUKE.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={waLink('Hello Duke Fitness Club! I want to join the gym and learn about membership options.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-9 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ borderRadius: 0 }}
            >
              Join Duke
              <span>→</span>
            </a>
            <a
              href={waLink('Hello Duke Fitness Club! I would like to book a gym tour.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[rgba(212,175,55,0.4)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)]"
            >
              Book a Tour
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
