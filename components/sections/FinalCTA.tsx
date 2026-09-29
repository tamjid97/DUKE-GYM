'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-smoke via-obsidian to-smoke" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(140,107,42,0.1) 0%, transparent 50%)'
        }} />
      </div>

      {/* Gold dust */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="gold-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="diamond-divider mb-6">
            <div className="diamond" />
          </div>
          <h2 className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl lg:text-6xl">
            {t.finalCTA}
          </h2>
          <p className="mt-4 text-base text-muted-warm max-w-xl mx-auto">
            {t.finalCtaDesc}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <GoldButton href="/membership" icon>{t.joinNow}</GoldButton>
            <GoldButton
              href={waLink('Hello Duke Fitness Club! I would like to book a free tour.')}
              external
              variant="secondary"
            >
              {t.bookFreeTour}
            </GoldButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
