'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';

const revealTime = 2.8;

interface HeroProps {
  revealed?: boolean;
  onTrigger?: () => void;
}

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
      if (!hasTriggeredRef.current && video.currentTime >= revealTime) {
        fireTrigger();
      }
    };

    const onEnded = () => {
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
    <>
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

      {/* Main content */}
      <div key={`hero-content-${cycleCount}`} className="relative z-10 flex flex-col items-center px-4 text-center w-full max-w-6xl mx-auto">

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
              textShadow: '0 0 12px color-mix(in srgb, var(--accent-primary) 20%, transparent)'
            }}
          >
            Welcome to
          </motion.span>
        </motion.div>

        {/* DUKE FITNESS CLUB title — Original gradient with glowing aura */}
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
              filter: 'drop-shadow(0 0 25px color-mix(in srgb, var(--accent-primary) 50%, transparent)) drop-shadow(0 0 50px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
            }}
            animate={
              revealed
                ? {
                    filter: [
                      'drop-shadow(0 0 20px color-mix(in srgb, var(--accent-primary) 40%, transparent)) drop-shadow(0 0 40px color-mix(in srgb, var(--accent-primary) 20%, transparent))',
                      'drop-shadow(0 0 35px color-mix(in srgb, var(--accent-primary) 70%, transparent)) drop-shadow(0 0 65px color-mix(in srgb, var(--accent-primary) 40%, transparent))',
                      'drop-shadow(0 0 20px color-mix(in srgb, var(--accent-primary) 40%, transparent)) drop-shadow(0 0 40px color-mix(in srgb, var(--accent-primary) 20%, transparent))',
                    ],
                  }
                : {
                    filter: 'drop-shadow(0 0 20px color-mix(in srgb, var(--accent-primary) 30%, transparent))',
                  }
            }
            transition={
              revealed
                ? {
                    duration: 2.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }
                : { duration: 0 }
            }
          >
            DUKE FITNESS CLUB
          </motion.span>
        </motion.h1>

        {/* CTA Button */}
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
          className="mt-8"
        >
          <motion.a
            href="https://gym-xi-ecru.vercel.app/protein-calculator"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300 relative overflow-hidden shimmer-effect"
            style={{
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, var(--accent-highlight), var(--accent-primary) 60%, var(--accent-deep))',
              color: '#0A0A0C',
              boxShadow: '0 4px 24px color-mix(in srgb, var(--accent-primary) 40%, transparent), 0 0 15px color-mix(in srgb, var(--accent-primary) 25%, transparent)',
            }}
          >
            <span className="relative z-10">JOIN NOW</span>
            <motion.span
              className="text-lg relative z-10"
              animate={revealed ? { x: [0, 4, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              →
            </motion.span>
          </motion.a>
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

        {/* Stats counters (No Boxes - Clean Original Layout) */}
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
                        filter: 'drop-shadow(0 0 15px color-mix(in srgb, var(--accent-primary) 35%, transparent))',
                      }}
                      animate={
                        revealed
                          ? {
                              filter: [
                                'drop-shadow(0 0 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                                'drop-shadow(0 0 20px color-mix(in srgb, var(--accent-primary) 50%, transparent))',
                                'drop-shadow(0 0 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                              ],
                            }
                          : {
                              filter: 'drop-shadow(0 0 10px color-mix(in srgb, var(--accent-primary) 25%, transparent))',
                            }
                      }
                      transition={
                        revealed
                          ? {
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }
                          : { duration: 0 }
                      }
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.div>
                    <div
                      className="mt-2 text-xs sm:text-sm tracking-widest uppercase font-medium"
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
    </>
  );
}