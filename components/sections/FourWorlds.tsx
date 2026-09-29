'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { siteConfig, type ZoneKey } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function FourWorlds() {
  const { t, lang } = useLang();
  const [hovered, setHovered] = useState<ZoneKey | null>(null);

  const zones = Object.entries(siteConfig.zones) as [ZoneKey, typeof siteConfig.zones[ZoneKey]][];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="One Building"
          title={t.fourWorldsOneBuilding}
          subtitle={t.fourWorldsDesc}
        />

        {/* Desktop: expanding panels */}
        <div className="mt-12 hidden lg:flex h-[480px] gap-3">
          {zones.map(([key, zone], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden rounded-xl border border-gold/20 transition-all duration-500"
              style={{ flex: hovered === key ? 2.5 : 1 }}
            >
              <img
                src={zone.image}
                alt={zone.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                style={{ transform: hovered === key ? 'scale(1.1)' : 'scale(1)' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <div className="text-xs tracking-[0.3em] text-gold uppercase mb-1">
                  {zone.tagline}
                </div>
                <h3 className="font-display text-2xl font-bold text-warm-white mb-2">
                  {zone.title}
                </h3>
                {hovered === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-muted-warm mb-3 max-w-xs">
                      {zone.description}
                    </p>
                    <Link
                      href={`/${zone.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-gold hover:text-champagne transition-colors"
                    >
                      {t.visitPage} <span className="h-4 w-4">→</span>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-10 grid gap-4 lg:hidden">
          {zones.map(([key, zone], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/${zone.slug}`} className="block relative h-56 overflow-hidden rounded-xl border border-gold/20">
                <img src={zone.image} alt={zone.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <div className="text-xs tracking-[0.3em] text-gold uppercase mb-1">{zone.tagline}</div>
                  <h3 className="font-display text-xl font-bold text-warm-white">{zone.title}</h3>
                  <p className="text-sm text-muted-warm mt-1 line-clamp-2">{zone.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
