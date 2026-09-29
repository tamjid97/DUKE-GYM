'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

const revealTime = 2.8;

interface Particle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  delay: number;
  duration: number;
}

const DUST_COUNT = 15;
const dustParticles: Particle[] = Array.from({ length: DUST_COUNT }).map((_, i) => {
  const angle = Math.random() * Math.PI * 2;
  const distance = 80 + Math.random() * 140;
  return {
    id: i,
    x: 50,
    y: 50,
    dx: 50 + Math.cos(angle) * distance * 0.5,
    dy: 50 + Math.sin(angle) * distance * 0.5,
    size: 2 + Math.random() * 5,
    delay: Math.random() * 100,
    duration: 600 + Math.random() * 500,
  };
});

export function Hero() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTriggeredRef = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!hasTriggeredRef.current && video.currentTime >= revealTime) {
        hasTriggeredRef.current = true;
        setRevealed(true);
      }
    };

    const onSeeked = () => {
      if (video.currentTime < 0.5 && hasTriggeredRef.current) {
        hasTriggeredRef.current = false;
        setRevealed(false);
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('seeked', onSeeked);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('seeked', onSeeked);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video with cinematic overlay */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        animate={revealed ? { scale: [1, 1.03, 1] } : { scale: 1 }}
        transition={
          revealed
            ? { times: [0, 0.25, 1], duration: 0.8, ease: 'easeOut' }
            : { duration: 0 }
        }
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster={siteConfig.zones.gym.image}
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/gym-hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.95) 100%), linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.2) 30%, rgba(10,10,10,0.4) 70%, rgba(10,10,10,0.98) 100%)',
          }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 200px 100px rgba(0, 0, 0, 0.8)',
          }}
        />
      </motion.div>

      {/* Cinematic light flash on trigger */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: [0, 0.6, 0] } : { opacity: 0 }}
        transition={
          revealed
            ? { times: [0, 0.2, 1], duration: 0.6, ease: 'easeOut' }
            : { duration: 0 }
        }
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--accent-300) 90%, white) 0%, color-mix(in srgb, var(--accent-500) 60%, transparent) 35%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Energy burst ring */}
      <div
        className="absolute left-1/2 top-1/2 z-0 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          className="rounded-full border"
          style={{
            width: 140,
            height: 140,
            borderColor: 'var(--accent-400)',
            marginLeft: -70,
            marginTop: -70,
            boxShadow: '0 0 30px var(--accent-500)',
          }}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={
            revealed
              ? { scale: [0.2, 3.5, 3.5], opacity: [0, 0.6, 0] }
              : { scale: 0.2, opacity: 0 }
          }
          transition={
            revealed
              ? { times: [0, 0.75, 1], duration: 1, ease: 'easeOut' }
              : { duration: 0 }
          }
        />
      </div>

      {/* Gold dust particles */}
      {dustParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-0 rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: 'var(--accent-400)',
            boxShadow: '0 0 8px var(--accent-400)',
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={
            revealed
              ? {
                  opacity: [0, 0.9, 0],
                  x: [(p.dx - p.x) * 0.15 + '%', (p.dx - p.x) * 1.2 + '%'],
                  y: [(p.dy - p.y) * 0.15 + '%', (p.dy - p.y) * 1.2 + '%'],
                }
              : { opacity: 0, x: 0, y: 0 }
          }
          transition={
            revealed
              ? {
                  times: [0, 0.4, 1],
                  duration: p.duration / 1000,
                  delay: p.delay / 1000,
                  ease: 'easeOut',
                }
              : { duration: 0 }
          }
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center w-full max-w-6xl mx-auto perspective-1200">
        
        {/* Diamond divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={revealed ? { duration: 0.5, delay: 0.4 } : { duration: 0.15 }}
          className="mb-6"
        >
          <div className="diamond-divider">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Welcome to text */}
        <motion.div
          initial={{ opacity: 0, visibility: 'hidden', y: 40, scale: 0.8 }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  visibility: 'visible',
                  y: 0,
                  scale: 1,
                  filter: ['blur(6px)', 'blur(0px)'],
                }
              : { opacity: 0, visibility: 'hidden', y: 40, scale: 0.8, filter: 'blur(6px)' }
          }
          transition={
            revealed
              ? {
                  duration: 0.45,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  filter: { duration: 0.4, delay: 0.5 },
                }
              : { duration: 0.2 }
          }
          className="mb-4"
        >
          <span
            className="font-display font-medium tracking-[0.45em] uppercase"
            style={{
              fontSize: 'clamp(0.85rem, 2.2vw, 1.35rem)',
              color: 'var(--accent-400)',
              letterSpacing: '0.4em',
              textShadow: '0 2px 20px rgba(212, 175, 55, 0.4)',
            }}
          >
            Welcome to
          </span>
        </motion.div>

        {/* Duke Gym title */}
        <motion.h1
          initial={{
            opacity: 0,
            visibility: 'hidden',
            y: 50,
            scale: 0.65,
            filter: 'blur(10px)',
          }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  visibility: 'visible',
                  y: 0,
                  scale: [0.65, 1.08, 1],
                  filter: ['blur(10px)', 'blur(2px)', 'blur(0px)'],
                }
              : {
                  opacity: 0,
                  visibility: 'hidden',
                  y: 50,
                  scale: 0.65,
                  filter: 'blur(10px)',
                }
          }
          transition={
            revealed
              ? {
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.19, 1, 0.36, 1],
                  times: [0, 0.55, 1],
                  scale: {
                    duration: 0.8,
                    delay: 0.65,
                    times: [0, 0.55, 1],
                    ease: [0.19, 1.25, 0.5, 1],
                  },
                  filter: {
                    duration: 0.55,
                    delay: 0.65,
                    times: [0, 0.55, 1],
                  },
                }
              : { duration: 0.2 }
          }
          className="font-display font-black leading-none relative overflow-hidden select-none"
          style={{
            fontSize: 'clamp(3.8rem, 15vw, 11rem)',
            letterSpacing: '0.015em',
          }}
        >
          <span
            className="text-accent-gradient inline-block relative"
            style={{
              textShadow:
                '0 0 50px color-mix(in srgb, var(--accent-500) 45%, transparent), 0 0 100px color-mix(in srgb, var(--accent-500) 25%, transparent), 0 5px 40px rgba(0,0,0,0.6)',
            }}
          >
            Duke Gym
          </span>
          <motion.span
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            initial={{ x: '-120%' }}
            animate={revealed ? { x: ['-120%', '130%'] } : { x: '-120%' }}
            transition={
              revealed
                ? { duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0 }
            }
            style={{
              background:
                'linear-gradient(100deg, transparent 0%, color-mix(in srgb, white 0%, transparent) 25%, color-mix(in srgb, white 75%, transparent) 50%, color-mix(in srgb, white 0%, transparent) 75%, transparent 100%)',
              mixBlendMode: 'screen',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              letterSpacing: 'inherit',
            }}
          >
            Duke Gym
          </motion.span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, visibility: 'hidden', y: 30 }}
          animate={
            revealed
              ? { opacity: 1, visibility: 'visible', y: 0 }
              : { opacity: 0, visibility: 'hidden', y: 30 }
          }
          transition={
            revealed
              ? { duration: 0.55, delay: 1.3, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.15 }
          }
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <GoldButton href="/membership" icon>
            {t.joinNow}
          </GoldButton>
          <GoldButton
            href={waLink('Hello Duke Fitness Club! I would like to book a free tour.')}
            external
            variant="secondary"
          >
            {t.bookFreeTour}
          </GoldButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={revealed ? { delay: 1.8, duration: 0.9 } : { duration: 0.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-[11px] tracking-[0.4em] uppercase"
            style={{ color: 'var(--muted-warm)' }}
          >
            Scroll
          </span>
          <div
            className="h-10 w-[1px]"
            style={{
              background:
                'linear-gradient(to bottom, var(--accent-500), transparent)',
            }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .perspective-1200 {
          perspective: 1200px;
        }
        :global(.hero-video) {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
