'use client';

import { motion } from 'framer-motion';
import { Counter } from '@/components/shared/Counter';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';

export function StatsBar() {
  const { t } = useLang();

  const stats = [
    { label: t.members, value: siteConfig.stats.members, suffix: '+' },
    { label: t.trainersLabel, value: siteConfig.stats.trainers, suffix: '' },
    { label: t.programsLabel, value: siteConfig.stats.programs, suffix: '' },
    { label: t.years, value: siteConfig.stats.years, suffix: '+' },
  ];

  return (
    <section className="relative border-y border-gold/15 bg-smoke/40 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl lg:text-6xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs tracking-[0.2em] text-muted-warm uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
