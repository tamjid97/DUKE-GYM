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
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTriggeredRef = useRef(false);
  const [internalRevealed, setInternalRevealed] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const isControlled = revealedProp !== undefined;
  const revealed = isControlled ? revealedProp! : internalRevealed;

  const stats = [
    { label: t.members, value: siteConfig.stats.members, suffix: '+' },
    { label: t.trainers, value: siteConfig.stats.trainers, suffix: '' },
    { label: t.programs, value: siteConfig.stats.programs, suffix: '' },
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
      // Trigger animation at chest press moment
      if (!hasTriggeredRef.current && video.currentTime >= revealTime) {
        fireTrigger();
      }
    };

    const onEnded = () => {
      // Video ended - reset animation state for next loop
      hasTriggeredRef.current = false;
      if (!isControlled) {
        setInternalRevealed(false);
        setCycleCount(prev => prev + 1);
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
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
      aria-label="Start cinematic reveal of Duke Fitness Club"
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
        {/* <video
          ref={videoRef}
          autoPlay
          muted
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
        </video> */}


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
      <div key={`hero-content-${cycleCount}`} className="relative z-10 flex flex-col items-center px-4 text-center w-full max-w-6xl mx-auto">

        {/* Premium pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={revealed ? { duration: 0.5, delay: 0.3 } : { duration: 0.15 }}
          className="mb-6"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{
              borderColor: 'var(--accent-400)',
              background: 'rgba(11, 11, 12, 0.6)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{ color: 'var(--accent-400)', fontSize: '12px' }}>◆</span>
            <span
              className="font-display text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: 'var(--accent-400)' }}
            >
              Premium Fitness Experience
            </span>
          </div>
        </motion.div>

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

        {/* WELCOME TO line */}
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
            className="font-display font-medium tracking-[0.35em] uppercase block"
            style={{
              fontSize: 'clamp(0.85rem, 2vw, 1.25rem)',
              color: 'var(--muted-warm)',
              letterSpacing: '0.32em',
            }}
          >
            Welcome to
          </motion.span>
        </motion.div>

        {/* DUKE FITNESS CLUB title — premium gradient with proper background-clip */}
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
          className="font-display font-black leading-none select-none mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            letterSpacing: '0.05em',
            lineHeight: '1.1',
          }}
        >
          <motion.span
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent-primary) 50%, var(--accent-highlight) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 4px 20px color-mix(in srgb, var(--accent-primary) 30%, transparent))',
            }}
            animate={
              revealed
                ? {
                  filter: [
                    'drop-shadow(0 4px 20px color-mix(in srgb, var(--accent-primary) 30%, transparent))',
                    'drop-shadow(0 4px 30px color-mix(in srgb, var(--accent-primary) 50%, transparent))',
                    'drop-shadow(0 4px 20px color-mix(in srgb, var(--accent-primary) 30%, transparent))',
                  ],
                }
                : {
                  filter: 'drop-shadow(0 4px 20px color-mix(in srgb, var(--accent-primary) 30%, transparent))',
                }
            }
            transition={
              revealed
                ? {
                  duration: 1.8,
                  delay: 0.9,
                  times: [0, 0.5, 1],
                  ease: 'easeOut',
                }
                : { duration: 0 }
            }
          >
            DUKE FITNESS CLUB
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
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <GoldButton href="/membership" icon>
            {t.joinNow} →
          </GoldButton>
          <GoldButton
            href={waLink('Hello Duke Fitness Club! I would like to book a free tour.')}
            external
            variant="secondary"
          >
            {t.bookFreeTour}
          </GoldButton>
        </motion.div>

        {/* Gold divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={revealed ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={revealed ? { duration: 0.6, delay: 1.4 } : { duration: 0.15 }}
          className="mt-12 w-24 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--accent-400), transparent)',
          }}
        />

        {/* Stats counters */}
        <motion.div
          initial={{ opacity: 0, visibility: 'hidden' }}
          animate={
            revealed
              ? { opacity: 1, visibility: 'visible' }
              : { opacity: 0, visibility: 'hidden' }
          }
          transition={
            revealed
              ? { duration: 0.1, delay: 1.5 }
              : { duration: 0.1 }
          }
          className="mt-10 w-full max-w-5xl mx-auto"
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
                        delay: 1.52 + i * 0.09,
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
                          delay: 1.52 + i * 0.09,
                          ease: 'easeOut',
                        }
                        : { duration: 0.1 }
                    }
                    className="relative"
                  >
                    <motion.div
                      className="font-display font-black"
                      style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent-primary) 50%, var(--accent-highlight) 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 2px 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                      }}
                      animate={
                        revealed
                          ? {
                            filter: [
                              'drop-shadow(0 2px 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                              'drop-shadow(0 2px 15px color-mix(in srgb, var(--accent-primary) 40%, transparent))',
                              'drop-shadow(0 2px 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                            ],
                          }
                          : {
                            filter: 'drop-shadow(0 2px 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                          }
                      }
                      transition={
                        revealed
                          ? {
                            duration: 1.6,
                            delay: 1.52 + i * 0.09,
                            times: [0, 0.5, 1],
                            ease: 'easeOut',
                          }
                          : { duration: 0 }
                      }
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.div>
                    <div
                      className="mt-2 text-xs sm:text-sm tracking-widest uppercase"
                      style={{ color: 'var(--muted-warm)' }}
                    >
                      {stat.label}
                    </div>
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
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted-warm)' }}>Scroll</span>
          <div
            className="h-8 w-[1px]"
            style={{
              background: 'linear-gradient(to bottom, var(--accent-400), transparent)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
