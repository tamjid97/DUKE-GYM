'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Award } from 'lucide-react';
import { longTermPlans, admissionFee, monthlyFee } from '@/data/plans';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';
import { cn } from '@/lib/utils';

export function MembershipPreview() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Pricing" title={t.membershipPreview} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {longTermPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                'glass-card relative p-6 flex flex-col',
                plan.popular && 'border-gold/50'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-champagne px-4 py-1 text-xs font-semibold text-obsidian flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  Best Value
                </span>
              )}
              <div className="text-center mb-4">
                <h3
                  className={cn(
                    'font-display text-xl font-bold',
                    plan.id === 'bronze' && 'text-amber-600',
                    plan.id === 'silver' && 'text-gray-300',
                    plan.id === 'gold' && 'text-gold-gradient'
                  )}
                >
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-warm mt-1 uppercase tracking-wider">{plan.duration}</p>
              </div>
              <div className="text-center mb-4">
                <span className="font-display text-3xl font-bold text-warm-white">
                  ৳{plan.price.toLocaleString()}
                </span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.slice(0, 4).map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-warm">
                    <Check className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GoldButton href="/membership" variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                {t.joinNow}
              </GoldButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
