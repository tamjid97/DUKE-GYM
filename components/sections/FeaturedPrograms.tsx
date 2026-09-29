'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Dumbbell, Flame, TrendingUp } from 'lucide-react';
import { programs } from '@/data/programs';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';

export function FeaturedPrograms() {
  const { t } = useLang();
  const featured = programs.slice(0, 4);

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Train" title={t.featuredPrograms} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href="/gym" className="group block glass-card overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-gold/20 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                    {p.level}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-warm-white group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-warm mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-warm">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-gold" />{p.duration}</span>
                    <span className="flex items-center gap-1"><Dumbbell className="h-3 w-3 text-gold" />{p.frequency}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldButton href="/gym" variant="secondary" icon>{t.viewAll}</GoldButton>
        </div>
      </div>
    </section>
  );
}
