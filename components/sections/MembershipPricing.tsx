'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, Star } from 'lucide-react';
import { membershipTiers, specialPasses, type MembershipTier } from '@/data/plans';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { cn } from '@/lib/utils';

const billingTabs = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly' },
  { id: 'yearly', label: 'Yearly' },
];

export function MembershipPricing() {
  const { t } = useLang();
  const [billing, setBilling] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex justify-center gap-2 mb-12">
        {billingTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setBilling(tab.id as any)}
            className={cn(
              'rounded-full px-6 py-2.5 text-sm font-medium transition-all',
              billing === tab.id ? 'btn-gold' : 'border border-gold/20 text-muted-warm hover:border-gold/50'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tiers */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {membershipTiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <GlassCard className={cn('relative flex flex-col p-6 h-full', tier.popular && 'border-gold/50')}>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-bronze to-gold px-4 py-1 text-xs font-semibold text-obsidian">
                  {t.mostPopular}
                </span>
              )}
              <div className="text-center mb-4">
                <h3 className="font-display text-xl font-bold text-gold-gradient">{tier.name}</h3>
                <p className="text-xs text-muted-warm mt-1">{tier.tagline}</p>
              </div>
              <motion.div
                key={billing}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-4"
              >
                <span className="font-display text-4xl font-bold text-warm-white">
                  ৳{tier.prices[billing].toLocaleString()}
                </span>
                <span className="text-xs text-muted-warm">/{billing === 'monthly' ? t.perMonth : billing === 'quarterly' ? 'quarter' : 'year'}</span>
              </motion.div>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-warm">
                    <Check className="h-3 w-3 text-gold shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { setSelectedTier(tier); setDrawerOpen(true); }}
                className={cn('w-full rounded-full px-6 py-3 text-sm font-semibold transition-all', tier.popular ? 'btn-gold' : 'border border-gold/40 text-gold hover:bg-gold/10')}
              >
                {t.joinNow}
              </button>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Feature Matrix */}
      <div className="mt-16">
        <SectionHeading label="Compare" title="Zone Access Matrix" subtitle="See which zones each tier includes." />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full glass-card overflow-hidden">
            <thead>
              <tr className="border-b border-gold/20">
                <th className="p-4 text-left text-xs text-gold tracking-widest uppercase">Zone</th>
                {membershipTiers.map((tier) => (
                  <th key={tier.id} className="p-4 text-center text-xs text-gold tracking-widest uppercase">{tier.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(['gym', 'restaurant', 'pool', 'arena'] as const).map((zoneKey) => {
                const zone = siteConfig.zones[zoneKey];
                return (
                  <tr key={zoneKey} className="border-b border-gold/10">
                    <td className="p-4 text-sm text-warm-white">{zone.title}</td>
                    {membershipTiers.map((tier) => (
                      <td key={tier.id} className="p-4 text-center">
                        {tier.zones[zoneKey] ? (
                          <Check className="h-5 w-5 text-gold mx-auto" />
                        ) : (
                          <Lock className="h-5 w-5 text-muted-warm/40 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Special Passes */}
      <div className="mt-16">
        <SectionHeading label="Add-ons" title="Special Passes" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {specialPasses.map((pass, i) => (
            <GlassCard key={i} className="text-center">
              <h3 className="font-display text-lg font-bold text-gold-gradient">{pass.name}</h3>
              <div className="font-display text-3xl font-bold text-warm-white mt-2">
                ৳{pass.price.toLocaleString()}
                <span className="text-xs text-muted-warm">/{pass.period}</span>
              </div>
              <p className="text-sm text-muted-warm mt-3">{pass.description}</p>
              <div className="mt-4">
                <GoldButton href={waLink(`Hello Duke Fitness Club! I'm interested in the ${pass.name}.`)} external variant="secondary" className="w-full">
                  Enquire
                </GoldButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Claims */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {siteConfig.claims.freeTrial && (
          <span className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-gold">
            <Star className="h-4 w-4" /> Free Trial Available
          </span>
        )}
        {siteConfig.claims.cancelAnytime && (
          <span className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-gold">
            <Check className="h-4 w-4" /> Cancel Anytime
          </span>
        )}
      </div>

      {/* Join Drawer */}
      {drawerOpen && selectedTier && (
        <JoinDrawer tier={selectedTier} billing={billing} onClose={() => setDrawerOpen(false)} />
      )}
    </div>
  );
}

function JoinDrawer({ tier, billing, onClose }: { tier: MembershipTier; billing: string; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = () => {
    const msg = `Hello Duke Fitness Club! I'd like to join.\nName: ${name}\nPhone: ${phone}\nPlan: ${tier.name} (${billing})\nStart Date: ${startDate}`;
    window.open(waLink(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card corner-ornament relative z-10 w-full max-w-md p-6"
      >
        <h3 className="font-display text-2xl font-bold text-gold-gradient mb-1">Join: {tier.name}</h3>
        <p className="text-xs text-muted-warm mb-6">৳{tier.prices[billing as keyof typeof tier.prices].toLocaleString()} / {billing}</p>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gold tracking-widest uppercase block mb-1">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
          </div>
          <div>
            <label className="text-xs text-gold tracking-widest uppercase block mb-1">Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
          </div>
          <div>
            <label className="text-xs text-gold tracking-widest uppercase block mb-1">Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <GoldButton onClick={handleSubmit} className="flex-1">Send via WhatsApp</GoldButton>
          <button onClick={onClose} className="rounded-full border border-gold/30 px-6 py-3 text-sm text-muted-warm hover:text-gold">Cancel</button>
        </div>
      </motion.div>
    </div>
  );
}


