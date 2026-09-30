'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';
import { BuildingMap } from '@/components/shared/BuildingMap';
import { waLink } from '@/lib/contact';

export function ExploreBuilding() {
  const { t } = useLang();

  return (
    <section className="py-16 lg:py-24 bg-transparent text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--accent-primary)]/40 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--accent-highlight)]">
              Interactive Floorplan
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-wider font-display text-white"
          >
            {t.exploreBuilding}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-sm text-zinc-400 font-light max-w-xl mx-auto"
          >
            {t.exploreBuildingDesc}
          </motion.p>
        </div>

        {/* Building Map */}
        <BuildingMap />

        {/* Minimal CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={waLink('Hello Duke Fitness Club! I would like to book a free guided tour.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-[var(--accent-primary)]/50 text-[var(--accent-highlight)] hover:bg-[var(--accent-primary)]/10 transition-all duration-300"
          >
            <span>{t.bookGuidedTour}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}