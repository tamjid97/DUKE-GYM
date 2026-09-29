'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function ToolsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, 80]);
  const contentY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[85vh] items-end overflow-hidden pb-16 lg:min-h-[90vh] lg:pb-24"
    >
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: imageY }}>
        <img
          src={siteConfig.zones.gym.image}
          alt="Duke Performance Lab"
          className={`h-[118%] w-full object-cover object-[45%_30%] ${reduceMotion ? '' : 'ken-burns'}`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-obsidian/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/25 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(11,11,12,0.82) 100%)' }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute left-[14%] bottom-[18%] h-[420px] w-[640px] rounded-full opacity-45"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.2), transparent 70%)', filter: 'blur(100px)' }}
        />
        <div
          className="absolute right-[14%] top-[20%] h-64 w-64 rounded-full opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(241,221,160,0.2), transparent 70%)', filter: 'blur(70px)' }}
        />
        <div
          className="absolute left-1/2 top-[10%] h-px w-[58%] -translate-x-1/2 opacity-35"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)' }}
        />
        <div
          className="absolute left-1/2 bottom-[30%] h-px w-[42%] -translate-x-1/2 opacity-25"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }}
        />
        <div className="gym-grain opacity-60" />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full px-6 lg:px-16"
        style={{ maxWidth: '1600px', y: contentY }}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
          <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
            DUKE Performance System
          </span>
          <span className="text-[#D4AF37] opacity-45">◆</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A39A]">Professional Tools</span>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-display font-bold leading-none"
        >
          <span
            className="block"
            style={{
              fontSize: 'clamp(68px, 11vw, 178px)',
              background: 'linear-gradient(135deg, #7B5E20 0%, #B89338 20%, #F1DDA0 50%, #D4AF37 75%, #8C6B2A 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 0.84,
              letterSpacing: '-0.012em',
              filter: 'drop-shadow(0 4px 28px rgba(212,175,55,0.2))',
            }}
          >
            FITNESS
          </span>
          <span
            className="mt-[0.06em] block text-warm-white"
            style={{ fontSize: 'clamp(42px, 6.2vw, 96px)', lineHeight: 1, letterSpacing: '0.24em' }}
          >
            PERFORMANCE LAB
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.56 }}
          className="mt-8 max-w-3xl text-[13px] uppercase tracking-[0.3em] text-muted-warm sm:text-sm"
        >
          BMI&nbsp;&nbsp;•&nbsp;&nbsp;Daily Protein&nbsp;&nbsp;•&nbsp;&nbsp;Calorie Needs&nbsp;&nbsp;•&nbsp;&nbsp;1-Rep Max
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.72 }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]"
        >
          Four precise performance instruments — the same benchmarks our trainers use to build every elite
          Duke program. Free, fast, and calibrated for real results.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.88 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#instruments"
            className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-[0.24em]"
            style={{ borderRadius: 0 }}
          >
            Start Assessment
            <span>↓</span>
          </a>
          <a
            href={waLink('Hello Duke Fitness Club! I used the Performance Lab and want to meet a trainer.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[rgba(212,175,55,0.42)] px-9 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)]"
          >
            Talk to a Trainer
            <span>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 1.14 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-24" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.55), transparent)' }} />
            <span className="text-[10px] uppercase tracking-[0.36em] text-[#A8A39A]">04 / Performance Instruments</span>
          </div>
          <span className="text-[#D4AF37] opacity-55">◆</span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-[#A8A39A]">
            Powered by Duke Trainer Methodology
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25 }}
        className="absolute bottom-[28%] right-8 z-10 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#A8A39A]" style={{ writingMode: 'vertical-rl' }}>
          Measure &amp; Progress
        </span>
        <div className="relative overflow-hidden" style={{ width: '1px', height: '76px', background: 'rgba(212,175,55,0.12)' }}>
          {!reduceMotion && (
            <motion.div
              className="absolute left-0 top-0 w-full"
              style={{ background: 'linear-gradient(to bottom, #F1DDA0, #D4AF37, transparent)' }}
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
