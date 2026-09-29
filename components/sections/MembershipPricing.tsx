'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { longTermPlans, admissionFee, monthlyFee } from '@/data/plans';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';
import { cn } from '@/lib/utils';
import { waLink } from '@/lib/contact';

export function MembershipPricing() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Pricing" title={t.ourTrainers || 'Membership Plans'} />
        
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
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-champagne px-4 py-1 text-xs font-semibold text-obsidian">
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
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-warm">
                    <span className="text-gold">→</span>
                    {f}
                  </li>
                ))}
              </ul>
              
              <a
                href={waLink(`Hello Duke Gym! I'm interested in the ${plan.name} membership plan (${plan.duration}) for ৳${plan.price}. Please provide more details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all',
                  plan.popular
                    ? 'bg-gradient-to-r from-gold to-champagne text-obsidian hover:shadow-lg hover:shadow-gold/20'
                    : 'border border-gold/50 text-gold hover:bg-gold/10'
                )}
              >
                {t.joinNow || 'Join Now'}
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block glass-card px-6 py-4">
            <p className="text-sm text-muted-warm">
              <span className="font-semibold text-warm-white">Admission Fee:</span> ৳{admissionFee.toLocaleString()} 
              <span className="mx-2">•</span>
              <span className="font-semibold text-warm-white">Monthly:</span> ৳{monthlyFee.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
