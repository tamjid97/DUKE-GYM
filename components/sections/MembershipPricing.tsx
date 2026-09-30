'use client';

import { motion } from 'framer-motion';
import { longTermPlans, admissionFee, monthlyFee } from '@/data/plans';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlowButton } from '@/components/shared/GlowButton';
import { cn } from '@/lib/utils';
import { waLink } from '@/lib/contact';

export function MembershipPricing() {
  const { t } = useLang();

  return (
    <section className="relative py-24 lg:py-32 bg-[#070709] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-500/10 blur-[170px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Pricing"
          title={t.ourTrainers || 'Membership Plans'}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {longTermPlans.map((plan, i) => {
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
                  'relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500',
                  'bg-zinc-950/80 border backdrop-blur-2xl',
                  plan.popular
                    ? 'border-amber-500/60 shadow-[0_0_45px_rgba(245,158,11,0.18)] bg-gradient-to-b from-amber-500/15 via-zinc-950/90 to-zinc-950'
                    : 'border-white/10 hover:border-white/20'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-lg shadow-amber-500/30">
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
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-amber-400/90 bg-amber-500/10 border border-amber-500/20">
                      {plan.duration}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-center my-6">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                      ৳{plan.price.toLocaleString()}
                    </span>
                  </div>

                  {/* All Features */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-xs text-zinc-300 font-light leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400 text-[11px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glowing Button Footer */}
                <div className="pt-6 border-t border-white/10">
                  <GlowButton
                    href={waLink(
                      `Hello Duke Gym! I'm interested in the ${plan.name} membership plan (${plan.duration}) for ৳${plan.price}. Please provide more details.`
                    )}
                    variant={plan.popular ? 'primary' : 'secondary'}
                  >
                    {t.joinNow || 'JOIN NOW'}
                  </GlowButton>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Admission & Monthly Fee Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 rounded-2xl border border-white/10 bg-zinc-950/80 px-8 py-5 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="text-amber-500 font-bold">ADMISSION FEE:</span>
              <span className="text-white font-bold text-sm">৳{admissionFee.toLocaleString()}</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="text-amber-500 font-bold">REGULAR MONTHLY:</span>
              <span className="text-white font-bold text-sm">৳{monthlyFee.toLocaleString()} / mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}