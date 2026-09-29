'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function ArenaFinale() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-[rgba(212,175,55,0.12)] py-28 lg:py-40" style={{ background: '#050506' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={siteConfig.zones.arena.image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/60 via-[#050506]/80 to-[#050506]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute left-1/2 top-[22%] h-[460px] w-[720px] -translate-x-1/2 rounded-full opacity-50"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.22), transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="gym-grain opacity-50" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 text-center lg:px-16" style={{ maxWidth: '1500px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
              Est. {siteConfig.stats.years}+ Years • Private Club
            </span>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>

          <h2
            className="mt-8 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(52px, 8.5vw, 148px)', lineHeight: 0.92, letterSpacing: '-0.01em' }}
          >
            READY TO
            <br />
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                filter: reduceMotion
                  ? 'none'
                  : [
                      'drop-shadow(0 0 0 rgba(212,175,55,0))',
                      'drop-shadow(0 0 50px rgba(212,175,55,0.45)) drop-shadow(0 0 120px rgba(212,175,55,0.25))',
                      'drop-shadow(0 0 22px rgba(212,175,55,0.3))',
                    ],
              }}
              transition={{
                delay: 0.2,
                duration: 1.1,
                filter: {
                  duration: 3.4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
              style={{
                background: 'linear-gradient(135deg, #7B5E20 0%, #B89338 18%, #F1DDA0 48%, #D4AF37 70%, #8C6B2A 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PLAY?
            </motion.span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#B6B0A5] lg:text-[16px]">
            Walk-ins welcome every day from 10 AM till midnight. Book ahead to guarantee your table — or
            message our host for a private guided tour of Duke Arena.
          </p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={waLink('Hello Duke Arena! I want to book a table right now.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group inline-flex items-center gap-3 px-12 py-5 text-sm font-semibold uppercase tracking-[0.24em]"
              style={{ borderRadius: 0 }}
            >
              Book Your Table Now
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={waLink('Hello Duke Arena! I would like a guided tour of Duke Arena.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[rgba(212,175,55,0.42)] px-10 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)]"
            >
              Book a Private Tour
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-20 flex items-center justify-center gap-5"
          >
            <div className="h-px w-24" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.5), transparent)' }} />
            <span className="text-[#D4AF37] opacity-60">◆</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8E877A]">
              {siteConfig.zones.arena.floor} • {siteConfig.zones.arena.hours}
            </span>
            <span className="text-[#D4AF37] opacity-60">◆</span>
            <div className="h-px w-24" style={{ background: 'linear-gradient(to left, rgba(212,175,55,0.5), transparent)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
