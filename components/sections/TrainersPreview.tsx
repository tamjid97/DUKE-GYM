'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { trainers } from '@/data/trainers';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';

export function TrainersPreview() {
  const { t } = useLang();
  const featured = trainers.slice(0, 4);

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Experts" title={t.trainersPreview} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((tr, i) => (
            <motion.div
              key={tr.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-gold/20"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={tr.image}
                  alt={tr.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-gold/20 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                  {tr.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-bold text-warm-white">{tr.name}</h3>
                <p className="text-xs text-gold mt-1">{tr.role}</p>
                <p className="text-xs text-muted-warm mt-2">{tr.specialties.join(' • ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldButton href="/trainers" variant="outline" icon>{t.viewAll}</GoldButton>
        </div>
      </div>
    </section>
  );
}
