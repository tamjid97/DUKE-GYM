'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { longTermPlans } from '@/data/plans';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';
import { waLink } from '@/lib/contact';

interface GlowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

function GlowButton({
  children = 'JOIN NOW',
  variant = 'primary',
  className,
  href = '#',
  ...props
}: GlowButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl py-3.5 px-6 text-xs font-black uppercase tracking-[0.25em] transition-all duration-300 active:scale-95 cursor-pointer bg-transparent',
        isPrimary
          ? 'border border-amber-500 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:border-amber-400 hover:scale-[1.02]'
          : 'border border-zinc-800 text-zinc-300 hover:border-amber-500/50 hover:text-amber-400 hover:scale-[1.02]',
        className
      )}
      {...props}
    >
      <span className="relative flex items-center gap-2">
        <span>{children}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </a>
  );
}

export function MembershipPreview() {
  const { t } = useLang();

  return (
    <section className="relative py-24 lg:py-32 bg-transparent text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Pricing" title={t?.membershipPreview || 'Choose Your Membership'} />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {longTermPlans?.map((plan, i) => {
            const isGold = plan.id === 'gold';
            const isSilver = plan.id === 'silver';
            const isBronze = plan.id === 'bronze';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={cn(
                  'relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 min-h-[460px] bg-transparent',
                  plan.popular
                    ? 'border-2 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                    : 'border border-white/10 hover:border-white/30'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500 bg-transparent px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-amber-400 shadow-lg backdrop-blur-md">
                      ★ Best Value
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="text-center pb-6 border-b border-white/10">
                    <h3
                      className={cn(
                        'font-display text-2xl font-black uppercase tracking-wider',
                        isBronze && 'text-amber-600',
                        isSilver && 'text-zinc-300',
                        isGold && 'bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent'
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-widest">
                      {plan.duration}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center my-6">
                    <span className="font-display text-4xl font-black text-white tracking-tight">
                      ৳{plan.price?.toLocaleString()}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features?.slice(0, 4).map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-transparent border border-amber-500/50 text-amber-400 text-[10px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Footer */}
                <div className="pt-4 border-t border-white/10">
                  <GlowButton
                    href={waLink ? waLink(`Hello Duke Gym! I'm interested in the ${plan.name} membership plan (${plan.duration}) for ৳${plan.price}.`) : '#'}
                    variant={plan.popular ? 'primary' : 'secondary'}
                  >
                    {t?.joinNow || 'JOIN NOW'}
                  </GlowButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}