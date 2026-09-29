'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export function ToolsCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-[rgba(212,175,55,0.12)] py-28 lg:py-40" style={{ background: '#050506' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={siteConfig.zones.gym.image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-[45%_35%] opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/55 via-[#050506]/82 to-[#050506]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute left-1/2 top-[20%] h-[440px] w-[680px] -translate-x-1/2 rounded-full opacity-50"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.22), transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="gym-grain opacity-60" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1500px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(48px, 6.5vw, 108px)', lineHeight: 0.94, letterSpacing: '-0.01em' }}
          >
            KNOW YOUR DAILY
            <br />
            <motion.span
              className="block"
              animate={reduceMotion
                ? {}
                : {
                    filter: [
                      'drop-shadow(0 0 0 rgba(212,175,55,0))',
                      'drop-shadow(0 0 52px rgba(212,175,55,0.45)) drop-shadow(0 0 120px rgba(212,175,55,0.22))',
                      'drop-shadow(0 0 22px rgba(212,175,55,0.3))',
                    ],
                  }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              style={{
                background: 'linear-gradient(135deg, #7B5E20 0%, #B89338 18%, #F1DDA0 48%, #D4AF37 70%, #8C6B2A 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PROTEIN NEEDS
            </motion.span>
          </h2>
          <div className="mt-10">
            <motion.a
              href="https://gym-xi-ecru.vercel.app/protein-calculator"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-10 py-5 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #F1DDA0, #D4AF37 60%, #8C6B2A)',
                color: '#0A0A0C',
                boxShadow: '0 4px 24px rgba(212,175,55,0.3)',
              }}
            >
              CALCULATE YOUR PROTEIN
              <motion.span
                className="text-lg"
                animate={reduceMotion ? {} : { x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
