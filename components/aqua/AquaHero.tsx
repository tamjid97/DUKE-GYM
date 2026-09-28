'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function AquaHero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], reduceMotion ? [0, 0] : [0, 70]);
  const contentY = useTransform(scrollY, [0, 700], reduceMotion ? [0, 0] : [0, -40]);
  const imageScale = useTransform(scrollY, [0, 800], reduceMotion ? [1, 1] : [1, 0.96]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={onMove}
      className="relative flex min-h-[85vh] items-end overflow-hidden pb-16 lg:min-h-[95vh] lg:pb-24"
    >
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          y: imageY,
          scale: imageScale,
          x: reduceMotion ? 0 : mouse.x * 10,
        }}
      >
        <img
          src={siteConfig.zones.pool.image}
          alt="Duke Aqua indoor pool"
          className={`h-[118%] w-full object-cover object-center ${reduceMotion ? '' : 'ken-burns'}`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-obsidian/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/25 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, transparent 20%, rgba(11,11,12,0.72) 100%)' }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className={`absolute inset-0 aqua-caustics ${reduceMotion ? '!animate-none' : ''}`} />
        <motion.div
          className="absolute bottom-[10%] left-[12%] h-[380px] w-[520px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(156,203,200,0.16), transparent 70%)',
            filter: 'blur(70px)',
            x: reduceMotion ? 0 : mouse.x * 18,
            y: reduceMotion ? 0 : mouse.y * 12,
          }}
        />
        <motion.div
          className={`absolute right-[10%] top-[18%] h-72 w-72 rounded-full ${reduceMotion ? '' : 'gold-light-drift'}`}
          style={{
            background: 'radial-gradient(ellipse, rgba(212,175,55,0.2), transparent 70%)',
            filter: 'blur(80px)',
            x: reduceMotion ? 0 : mouse.x * 22,
          }}
        />
        <div className="gym-grain" />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full px-6 lg:px-16"
        style={{ maxWidth: '1600px', y: contentY, x: reduceMotion ? 0 : mouse.x * -8 }}
      >
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 text-[10px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]"
        >
          DUKE FITNESS CLUB / AQUATIC EXPERIENCE
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-bold leading-none"
        >
          <span
            className="block text-warm-white"
            style={{ fontSize: 'clamp(64px, 10vw, 150px)', lineHeight: 0.86, letterSpacing: '-0.02em' }}
          >
            DUKE
          </span>
          <span
            className="mt-[0.06em] block"
            style={{
              fontSize: 'clamp(48px, 8vw, 120px)',
              lineHeight: 0.9,
              background: 'linear-gradient(135deg, #8C6B2A 0%, #D4AF37 35%, #B8E0DC 58%, #F1DDA0 78%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AQUA
          </span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-warm"
        >
          {siteConfig.zones.pool.description}
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={waLink('Hello Duke Aqua! I would like to book a swim / pool slot.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-9 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ borderRadius: 0 }}
          >
            Book a Swim
          </a>
          <a
            href="#pool-details"
            className="inline-flex items-center gap-3 border border-[rgba(212,175,55,0.4)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)]"
          >
            Explore Aqua
            <span>↓</span>
          </a>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-16 flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.32em] text-[#A8A39A]"
        >
          <span className="text-[#D4AF37]">01 / DUKE AQUA</span>
          <span className="text-[#D4AF37] opacity-60">◆</span>
          <span>Pool • Training • Recovery</span>
          <span className="hidden h-px w-10 bg-[rgba(212,175,55,0.35)] sm:block" />
          <span>Open {siteConfig.zones.pool.hours}</span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-[26%] right-8 z-10 hidden flex-col items-center gap-3 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#A8A39A]" style={{ writingMode: 'vertical-rl' }}>
          Scroll to explore
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
      </div>
    </section>
  );
}
