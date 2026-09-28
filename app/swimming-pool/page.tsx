import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { GoldButton } from '@/components/shared/GoldButton';
import { siteConfig } from '@/data/siteConfig';
import { poolInfo, swimmingClasses, poolPricing, poolRules, poolFAQ } from '@/data/pool';
import { PoolTimetable } from '@/components/sections/PoolTimetable';
import { waLink } from '@/lib/contact';
import { Waves, Thermometer, Ruler, Shield, ShowerHead, Lock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Duke Aqua — Swimming Pool',
  description: 'Temperature-controlled indoor swimming pool at Duke Fitness Club. Separate batches for men, women, and kids. Certified lifeguard on duty.',
};

const poolFeatures = [
  { icon: Ruler, label: 'Pool Size', value: poolInfo.size },
  { icon: Waves, label: 'Depth', value: poolInfo.depth },
  { icon: Thermometer, label: 'Water Temp', value: poolInfo.waterTemp },
  { icon: Shield, label: 'Filtration', value: poolInfo.filtration },
];

const amenities = [
  { icon: Shield, label: 'Lifeguard on Duty', available: poolInfo.lifeguard },
  { icon: Users, label: 'Changing Rooms', available: poolInfo.changingRooms },
  { icon: ShowerHead, label: 'Showers', available: poolInfo.showers },
  { icon: Lock, label: 'Lockers', available: poolInfo.lockers },
];

export default function SwimmingPoolPage() {
  return (
    <>
      <PageHeader
        label={siteConfig.zones.pool.tagline}
        title="DUKE AQUA"
        subtitle={siteConfig.zones.pool.description}
        image={siteConfig.zones.pool.image}
      />

      {/* Pool Details */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="The Pool" title="Pool Details" subtitle="Everything you need to know about our swimming facility." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {poolFeatures.map((f, i) => (
              <GlassCard key={i} className="text-center">
                <f.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="text-xs text-gold tracking-widest uppercase mb-1">{f.label}</div>
                <div className="text-sm text-warm-white">{f.value}</div>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {amenities.map((a, i) => (
              a.available && (
                <span key={i} className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-warm-white">
                  <a.icon className="h-4 w-4 text-gold" /> {a.label}
                </span>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Schedule" title="Weekly Timetable" subtitle="Separate batches for men, women, and kids/family. Timings may change for maintenance." />
          <div className="mt-12">
            <PoolTimetable />
          </div>
        </div>
      </section>

      {/* Swimming Classes */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Coaching" title="Swimming Classes" subtitle="From beginner to competitive, with dedicated women-only and kids batches." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {swimmingClasses.map((c, i) => (
              <GlassCard key={c.id} className="flex flex-col">
                <span className="text-xs text-gold tracking-widest uppercase">{c.level}</span>
                <h3 className="font-display text-lg font-bold text-warm-white mt-2">{c.name}</h3>
                <p className="text-sm text-muted-warm mt-2 flex-1">{c.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-warm">{c.duration} • {c.sessions}</span>
                  <span className="font-display text-xl text-gold-gradient">৳{c.fee.toLocaleString()}</span>
                </div>
                <div className="mt-4">
                  <GoldButton href={waLink(`Hello Duke Aqua! I'd like to book a slot for "${c.name}".`)} external className="w-full">
                    Book a Slot
                  </GoldButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Pricing" title="Pool Pricing" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {poolPricing.map((p, i) => (
              <GlassCard key={i} className="text-center">
                <h3 className="font-display text-lg text-warm-white mb-2">{p.name}</h3>
                <div className="font-display text-3xl font-bold text-gold-gradient">৳{p.price.toLocaleString()}</div>
                <span className="text-xs text-muted-warm">/{p.unit}</span>
                <p className="text-xs text-muted-warm mt-3">{p.note}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading label="Safety" title="Safety & Hygiene Rules" />
          <div className="mt-12 glass-card p-8">
            <ul className="space-y-3">
              {poolRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-warm-white">
                  <span className="text-gold mt-1">◆</span>{rule}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16">
            <SectionHeading label="FAQ" title="Pool FAQ" />
            <div className="mt-8 space-y-3">
              {poolFAQ.map((item, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-warm-white">
                      {item.q}
                      <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-muted-warm">{item.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
