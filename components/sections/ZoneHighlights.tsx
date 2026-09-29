'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { UtensilsCrossed, Waves, Gamepad2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { menuItems } from '@/data/menu';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';

export function ZoneHighlights() {
  const { t } = useLang();

  const highlights = [
    {
      zone: siteConfig.zones.restaurant,
      title: t.restaurantHighlights,
      icon: UtensilsCrossed,
      items: menuItems.filter((m) => m.popular).slice(0, 3).map((m) => `${m.name} — ৳${m.price}`),
      link: '/restaurant',
    },
    {
      zone: siteConfig.zones.pool,
      title: t.poolHighlights,
      icon: Waves,
      items: ['Temperature-controlled pool', 'Separate men/women/kids batches', 'Certified lifeguard on duty'],
      link: '/swimming-pool',
    },
    {
      zone: siteConfig.zones.arena,
      title: t.arenaHighlights,
      icon: Gamepad2,
      items: ['Billiards & Snooker tables', 'Table Tennis & Foosball', 'Console gaming & board games'],
      link: '/pool-game-zone',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <Link href={h.link} className="group block glass-card overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={h.zone.image}
                    alt={h.zone.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                  <h.icon className="absolute top-4 right-4 h-6 w-6 text-gold" />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.3em] text-gold uppercase mb-1">{h.zone.tagline}</div>
                  <h3 className="font-display text-xl font-bold text-warm-white mb-3">{h.title}</h3>
                  <ul className="space-y-2">
                    {h.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-warm flex items-start gap-2">
                        <span className="text-gold mt-1">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <GoldButton href={h.link} variant="secondary" icon className="text-xs">
                      {t.visitPage}
                    </GoldButton>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
