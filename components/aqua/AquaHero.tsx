'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function AquaHero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // ── Swap the URL below with a local asset if available:
  //    e.g. '/videos/pool-hero.mp4'
  const videoSrc =
    'https://videos.pexels.com/video-files/855072/855072-hd_1920_1080_30fps.mp4';

  const posterSrc =
    'https://images.pexels.com/photos/23916836/pexels-photo-23916836.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ position: 'absolute', inset: 0 }}
        />

        {/* Dark overlays for text legibility */}
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian/70" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex flex-col items-center px-6 text-center">
        {/* Subtle top label */}
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-[10px] font-medium uppercase tracking-[0.5em] text-[#D4AF37]"
        >
          DUKE AQUA
        </motion.span>

        {/* COMING */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-bold leading-none text-warm-white"
          style={{
            fontSize: 'clamp(64px, 12vw, 180px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
          }}
        >
          COMING
        </motion.h1>

        {/* SOON — gold gradient */}
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-2 block font-display font-bold leading-none"
          style={{
            fontSize: 'clamp(64px, 12vw, 180px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            background:
              'linear-gradient(135deg, #8C6B2A 0%, #D4AF37 35%, #F1DDA0 60%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SOON
        </motion.span>

        {/* Decorative divider */}
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(212,175,55,0.5)]" />
          <div className="h-2 w-2 rotate-45 bg-[#D4AF37]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(212,175,55,0.5)]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 text-[12px] uppercase tracking-[0.4em] text-[#A8A39A]"
        >
          DUKE FITNESS CLUB · AQUATIC EXPERIENCE
        </motion.p>
      </div>

      {/* ── Film grain overlay ── */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="gym-grain" />
      </div>

      {/* ── Scroll indicator (desktop) ── */}
      <div className="absolute bottom-[8%] right-8 z-10 hidden flex-col items-center gap-3 lg:flex">
        <span
          className="text-[9px] uppercase tracking-[0.4em] text-[#A8A39A]"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll to explore
        </span>
        <div
          className="relative overflow-hidden"
          style={{ width: '1px', height: '72px', background: 'rgba(212,175,55,0.12)' }}
        >
          {!reduceMotion && (
            <motion.div
              className="absolute left-0 top-0 w-full"
              style={{ background: 'linear-gradient(to bottom, #F1DDA0, #D4AF37, transparent)' }}
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
