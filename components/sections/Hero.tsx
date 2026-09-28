'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.zones.gym.image}
          alt="Duke Fitness Club"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/60 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50" />
      </div>

      {/* Gold dust particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="gold-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Lion logo */}
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 120 120"
          fill="none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <defs>
            <linearGradient id="heroGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8C6B2A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F1DDA0" />
            </linearGradient>
          </defs>
          <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" fill="url(#heroGold)" />
          <circle cx="50" cy="48" r="3" fill="#0B0B0C" />
          <circle cx="70" cy="48" r="3" fill="#0B0B0C" />
          <path d="M52 60 Q60 66 68 60" stroke="#0B0B0C" strokeWidth="2" fill="none" />
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="diamond-divider mb-4">
            <div className="diamond" />
          </div>
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Fitness Club</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-display text-5xl font-bold text-gold-gradient sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight"
        >
          {t.ruleYourLegacy}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-sm tracking-[0.2em] text-warm-white uppercase sm:text-base"
        >
          {t.heroSubline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <GoldButton href="/membership" icon>
            {t.joinNow}
          </GoldButton>
          <GoldButton
            href={waLink('Hello Duke Fitness Club! I would like to book a free tour.')}
            external
            variant="outline"
          >
            {t.bookFreeTour}
          </GoldButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-warm tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
