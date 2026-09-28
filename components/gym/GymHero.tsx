'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function GymHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], reduceMotion ? [0, 0] : [0, 90]);
  const contentY = useTransform(scrollY, [0, 700], reduceMotion ? [0, 0] : [0, -48]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[88vh] items-end overflow-hidden pb-16 lg:min-h-[92vh] lg:pb-24"
    >
      {/* BACKGROUND — darkened gym image */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: imageY }}>
        <img
          src={siteConfig.zones.gym.image}
          alt="Duke Gym"
          className={`h-[118%] w-full object-cover object-center ${reduceMotion ? '' : 'ken-burns'}`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-obsidian/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/20 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 32%, rgba(11,11,12,0.72) 100%)' }}
        />
      </motion.div>

      {/* MIDDLE — smoke / gold light */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute -left-20 bottom-0 h-[55%] w-[70%] opacity-40"
          style={{ background: 'radial-gradient(ellipse at bottom, rgba(34,38,42,0.85), transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className={`absolute bottom-[8%] left-[18%] h-[420px] w-[620px] rounded-full ${reduceMotion ? '' : 'gold-light-drift'}`}
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.22) 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        <div
          className="absolute right-[8%] top-[18%] h-64 w-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(241,221,160,0.18), transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="gym-grain" />
      </div>

      {/* FOREGROUND — typography */}
      <motion.div
        className="relative z-10 mx-auto w-full px-6 lg:px-16"
        style={{ maxWidth: '1600px', y: contentY }}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            IRON × EXCELLENCE
          </span>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
          className="font-display font-bold leading-none"
        >
          <span
            className="block"
            style={{
              fontSize: 'clamp(64px, 11vw, 168px)',
              background: 'linear-gradient(135deg, #8C6B2A 0%, #D4AF37 38%, #F1DDA0 58%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 0.86,
              letterSpacing: '-0.02em',
            }}
          >
            DUKE
          </span>
          <span
            className="mt-[0.08em] block text-warm-white"
            style={{ fontSize: 'clamp(36px, 5.2vw, 78px)', lineHeight: 1, letterSpacing: '0.18em' }}
          >
            GYM
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-8 max-w-3xl text-[13px] uppercase tracking-[0.28em] text-muted-warm sm:text-sm"
        >
          Strength&nbsp;&nbsp;•&nbsp;&nbsp;Cardio&nbsp;&nbsp;•&nbsp;&nbsp;Functional Training&nbsp;&nbsp;•&nbsp;&nbsp;Women&apos;s Section&nbsp;&nbsp;•&nbsp;&nbsp;Personal Training
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#training-zones"
            className="btn-gold inline-flex items-center gap-3 px-9 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ borderRadius: 0 }}
          >
            Explore Training
            <span>↓</span>
          </a>
          <a
            href={waLink('Hello Duke Fitness Club! I would like to book a tour of the gym.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[rgba(212,175,55,0.4)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)]"
          >
            Book a Tour
            <span>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-16 flex items-center gap-5"
        >
          <div className="h-px w-24" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.55), transparent)' }} />
          <span className="text-[10px] uppercase tracking-[0.36em] text-[#A8A39A]">01 / DUKE GYM</span>
          <span className="text-[#D4AF37] opacity-70">◆</span>
          <span className="hidden text-[10px] uppercase tracking-[0.32em] text-[#A8A39A] sm:block">
            Performance • Strength • Conditioning
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-[28%] right-8 z-10 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#A8A39A]" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="relative overflow-hidden" style={{ width: '1px', height: '72px', background: 'rgba(212,175,55,0.12)' }}>
          {!reduceMotion && (
            <motion.div
              className="absolute left-0 top-0 w-full"
              style={{ background: 'linear-gradient(to bottom, #F1DDA0, #D4AF37, transparent)' }}
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
