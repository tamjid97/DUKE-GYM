'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Lock } from 'lucide-react';
import { membershipTiers } from '@/data/plans';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';
import { cn } from '@/lib/utils';

export function MembershipPreview() {
  const { t } = useLang();
  const tiers = membershipTiers.slice(0, 4);

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Pricing" title={t.membershipPreview} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                'glass-card relative p-6 flex flex-col',
                tier.popular && 'border-gold/50'
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-bronze to-gold px-4 py-1 text-xs font-semibold text-obsidian">
                  {t.mostPopular}
                </span>
              )}
              <div className="text-center mb-4">
                <h3 className="font-display text-xl font-bold text-gold-gradient">{tier.name}</h3>
                <p className="text-xs text-muted-warm mt-1">{tier.tagline}</p>
              </div>
              <div className="text-center mb-4">
                <span className="font-display text-3xl font-bold text-warm-white">
                  ৳{tier.prices.monthly.toLocaleString()}
                </span>
                <span className="text-xs text-muted-warm">/{t.perMonth}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.slice(0, 4).map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-warm">
                    <Check className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GoldButton href="/membership" variant={tier.popular ? 'primary' : 'secondary'} className="w-full">
                {t.joinNow}
              </GoldButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
