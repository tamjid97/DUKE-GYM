'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
<<<<<<< HEAD
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
=======
import { Counter } from '@/components/shared/Counter';
import { useLang } from '@/components/providers/LanguageProvider';
>>>>>>> c75c51e7c7df8f4b1792be46b4ff4e4c6ca46623

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

interface Sparkle extends Particle {
  rotate: number;
  hue: number;
}

interface HeroProps {
  revealed?: boolean;
  onTrigger?: () => void;
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

<<<<<<< HEAD
export function Hero() {
=======
const SPARKLE_COUNT = 22;
const sparkleParticles: Sparkle[] = Array.from({ length: SPARKLE_COUNT }).map((_, i) => {
  const angle = Math.random() * Math.PI * 2;
  const distance = 60 + Math.random() * 200;
  return {
    id: i,
    x: 50,
    y: 50,
    dx: 50 + Math.cos(angle) * distance * 0.5,
    dy: 50 + Math.sin(angle) * distance * 0.5,
    size: 1.5 + Math.random() * 3.5,
    delay: Math.random() * 400,
    duration: 900 + Math.random() * 800,
    rotate: Math.random() * 360,
    hue: 42 + Math.random() * 12,
  };
});

export function Hero({ revealed: revealedProp, onTrigger }: HeroProps) {
>>>>>>> c75c51e7c7df8f4b1792be46b4ff4e4c6ca46623
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTriggeredRef = useRef(false);
  const [internalRevealed, setInternalRevealed] = useState(false);

  const isControlled = revealedProp !== undefined;
  const revealed = isControlled ? revealedProp! : internalRevealed;

  const stats = [
    { label: t.members, value: siteConfig.stats.members, suffix: '+' },
    { label: t.trainersLabel, value: siteConfig.stats.trainers, suffix: '' },
    { label: t.programsLabel, value: siteConfig.stats.programs, suffix: '' },
    { label: t.years, value: siteConfig.stats.years, suffix: '+' },
  ];

  const fireTrigger = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    if (!isControlled) setInternalRevealed(true);
    if (onTrigger) onTrigger();
  };

  const handlePress = () => {
    fireTrigger();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fireTrigger();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!hasTriggeredRef.current && video.currentTime >= revealTime) {
        fireTrigger();
      }
    };

    const onSeeked = () => {
      if (video.currentTime < 0.5 && hasTriggeredRef.current) {
        hasTriggeredRef.current = false;
        if (!isControlled) setInternalRevealed(false);
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('seeked', onSeeked);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('seeked', onSeeked);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isControlled]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ cursor: !revealed ? 'pointer' : 'default' }}
      onClick={handlePress}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Start cinematic reveal of Duke Gym"
    >
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

      {/* Premium golden sparkles / light flecks */}
      {sparkleParticles.map((s) => (
        <motion.div
          key={`sparkle-${s.id}`}
          className="absolute z-0 pointer-events-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size * 2,
            borderRadius: 1,
            background: `linear-gradient(180deg, hsl(${s.hue}, 85%, 75%) 0%, hsl(${s.hue}, 90%, 55%) 50%, hsl(${s.hue - 8}, 80%, 40%) 100%)`,
            boxShadow: `0 0 ${s.size * 3}px hsl(${s.hue}, 90%, 60%), 0 0 ${s.size * 6}px hsla(${s.hue}, 80%, 50%, 0.45)`,
            transform: `rotate(${s.rotate}deg)`,
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={
            revealed
              ? {
                  opacity: [0, 1, 0.7, 0],
                  scale: [0, 1.2, 0.8, 0],
                  x: [(s.dx - s.x) * 0.1 + '%', (s.dx - s.x) * 1.1 + '%'],
                  y: [(s.dy - s.y) * 0.1 + '%', (s.dy - s.y) * 1.1 + '%'],
                  rotate: [s.rotate, s.rotate + 120],
                }
              : { opacity: 0, x: 0, y: 0, scale: 0 }
          }
          transition={
            revealed
              ? {
                  times: [0, 0.3, 0.7, 1],
                  duration: s.duration / 1000,
                  delay: s.delay / 1000,
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

        {/* Welcome to DUKE GYM — WELCOME line */}
        <motion.div
          initial={{ opacity: 0, visibility: 'hidden', y: 40, scale: 0.8 }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  visibility: 'visible',
                  y: 0,
                  scale: [0.8, 1.04, 1],
                  filter: ['blur(6px)', 'blur(1px)', 'blur(0px)'],
                }
              : { opacity: 0, visibility: 'hidden', y: 40, scale: 0.8, filter: 'blur(6px)' }
          }
          transition={
            revealed
              ? {
                  duration: 0.55,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  times: [0, 0.55, 1],
                  filter: { duration: 0.45, delay: 0.5, times: [0, 0.6, 1] },
                }
              : { duration: 0.2 }
          }
          className="mb-4"
        >
          <motion.span
            className="font-display font-medium tracking-[0.45em] uppercase block"
            style={{
              fontSize: 'clamp(0.9rem, 2.4vw, 1.5rem)',
              color: 'var(--accent-400)',
              letterSpacing: '0.42em',
            }}
            animate={
              revealed
                ? {
                    textShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 28px rgba(212, 175, 55, 0.65), 0 2px 40px rgba(241, 221, 160, 0.35)',
                      '0 0 16px rgba(212, 175, 55, 0.45), 0 2px 22px rgba(212, 175, 55, 0.25)',
                    ],
                  }
                : { textShadow: '0 0 0px rgba(212, 175, 55, 0)' }
            }
            transition={
              revealed
                ? {
                    duration: 1.4,
                    delay: 0.75,
                    times: [0, 0.4, 1],
                    ease: 'easeOut',
                  }
                : { duration: 0 }
            }
          >
            Welcome to
          </motion.span>
        </motion.div>

        {/* Duke Gym title — premium cinematic reveal */}
        <motion.h1
          initial={{
            opacity: 0,
            visibility: 'hidden',
            y: 55,
            scale: 0.6,
            filter: 'blur(12px)',
          }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  visibility: 'visible',
                  y: 0,
                  scale: [0.6, 1.1, 1.02, 1],
                  filter: ['blur(12px)', 'blur(3px)', 'blur(1px)', 'blur(0px)'],
                }
              : {
                  opacity: 0,
                  visibility: 'hidden',
                  y: 55,
                  scale: 0.6,
                  filter: 'blur(12px)',
                }
          }
          transition={
            revealed
              ? {
                  duration: 0.95,
                  delay: 0.65,
                  ease: [0.19, 1, 0.36, 1],
                  times: [0, 0.48, 0.82, 1],
                  scale: {
                    duration: 0.95,
                    delay: 0.65,
                    times: [0, 0.48, 0.82, 1],
                    ease: [0.19, 1.3, 0.55, 1.02],
                  },
                  filter: {
                    duration: 0.65,
                    delay: 0.65,
                    times: [0, 0.45, 0.8, 1],
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
          <motion.span
            className="text-accent-gradient inline-block relative"
            animate={
              revealed
                ? {
                    textShadow: [
                      '0 0 0 rgba(212, 175, 55, 0)',
                      '0 0 70px color-mix(in srgb, var(--accent-500) 60%, transparent), 0 0 140px color-mix(in srgb, var(--accent-400) 40%, transparent), 0 6px 50px rgba(0,0,0,0.7)',
                      '0 0 40px color-mix(in srgb, var(--accent-500) 42%, transparent), 0 0 90px color-mix(in srgb, var(--accent-500) 24%, transparent), 0 5px 40px rgba(0,0,0,0.6)',
                    ],
                  }
                : { textShadow: '0 0 0 rgba(212, 175, 55, 0)' }
            }
            transition={
              revealed
                ? {
                    duration: 1.8,
                    delay: 0.9,
                    times: [0, 0.38, 1],
                    ease: 'easeOut',
                  }
                : { duration: 0 }
            }
          >
            Duke Gym
          </motion.span>
          <motion.span
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            initial={{ x: '-120%' }}
            animate={revealed ? { x: ['-120%', '130%'] } : { x: '-120%' }}
            transition={
              revealed
                ? { duration: 1.3, delay: 1.15, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0 }
            }
            style={{
              background:
                'linear-gradient(100deg, transparent 0%, color-mix(in srgb, var(--accent-300) 10%, transparent) 22%, color-mix(in srgb, white 85%, transparent) 50%, color-mix(in srgb, var(--accent-300) 10%, transparent) 78%, transparent 100%)',
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

        {/* Stats Reveal — integrated directly below DUKE GYM cinematic */}
        <motion.div
          initial={{ opacity: 0, visibility: 'hidden' }}
          animate={
            revealed
              ? { opacity: 1, visibility: 'visible' }
              : { opacity: 0, visibility: 'hidden' }
          }
          transition={
            revealed
              ? { duration: 0.1, delay: 1.4 }
              : { duration: 0.1 }
          }
          className="mt-14 w-full max-w-5xl mx-auto"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-3xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent-500) 12%, transparent) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4 lg:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={`hero-${stat.label}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    revealed
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 50 }
                  }
                  transition={
                    revealed
                      ? {
                          duration: 0.65,
                          delay: 1.42 + i * 0.09,
                          ease: [0.22, 1, 0.36, 1],
                        }
                      : { duration: 0.1 }
                  }
                  className="text-center"
                >
                  <motion.div
                    initial={{ filter: 'blur(4px)' }}
                    animate={
                      revealed
                        ? { filter: ['blur(4px)', 'blur(0px)'] }
                        : { filter: 'blur(4px)' }
                    }
                    transition={
                      revealed
                        ? {
                            duration: 0.5,
                            delay: 1.42 + i * 0.09,
                            ease: 'easeOut',
                          }
                        : { duration: 0.1 }
                    }
                    className="relative"
                  >
                    <motion.div
                      animate={
                        revealed
                          ? {
                              textShadow: [
                                '0 0 0 rgba(212,175,55,0)',
                                '0 0 28px color-mix(in srgb, var(--accent-400) 70%, transparent), 0 0 60px color-mix(in srgb, var(--accent-500) 35%, transparent)',
                                '0 0 16px color-mix(in srgb, var(--accent-400) 45%, transparent), 0 0 32px color-mix(in srgb, var(--accent-500) 22%, transparent)',
                              ],
                            }
                          : { textShadow: '0 0 0 rgba(212,175,55,0)' }
                      }
                      transition={
                        revealed
                          ? {
                              duration: 1.8,
                              delay: 1.6 + i * 0.1,
                              times: [0, 0.4, 1],
                              ease: 'easeOut',
                            }
                          : { duration: 0 }
                      }
                      className="font-display font-black leading-none text-gold-gradient"
                      style={{
                        fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
                      }}
                    >
                      {revealed && (
                        <Counter
                          key={`counter-${i}-${revealed}`}
                          target={stat.value}
                          suffix={stat.suffix}
                          duration={1.8}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      revealed
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={
                      revealed
                        ? {
                            duration: 0.5,
                            delay: 1.65 + i * 0.09,
                            ease: 'easeOut',
                          }
                        : { duration: 0.1 }
                    }
                    className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{
                      color: 'var(--muted-warm)',
                      textShadow: '0 1px 6px rgba(0,0,0,0.8)',
                    }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
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
