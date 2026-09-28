import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { GoldButton } from '@/components/shared/GoldButton';
import { BookingUI } from '@/components/sections/BookingUI';
import { siteConfig } from '@/data/siteConfig';
import { games, tournaments, leaderboard, eventPackages } from '@/data/games';
import { Trophy, Crown, Calendar, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Duke Arena — Pool & Game Zone',
  description: 'Billiards, snooker, table tennis, foosball, console gaming, and board games at Duke Arena. Hourly booking, tournaments, and event packages.',
};

export default function PoolGameZonePage() {
  return (
    <>
      <PageHeader
        label={siteConfig.zones.arena.tagline}
        title="DUKE ARENA"
        subtitle={siteConfig.zones.arena.description}
        image={siteConfig.zones.arena.image}
      />

      {/* Games grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Games" title="Pick Your Game" subtitle="Hourly rates for members and non-members." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g, i) => (
              <GlassCard key={g.id} className="overflow-hidden p-0">
                <div className="relative h-44 overflow-hidden">
                  <img src={g.image} alt={g.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                  <h3 className="absolute bottom-3 left-4 font-display text-lg font-bold text-warm-white">{g.name}</h3>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gold font-display text-lg">৳{g.priceMember}</span>
                      <span className="text-xs text-muted-warm">/hr member</span>
                    </div>
                    <div>
                      <span className="text-warm-white font-display text-lg">৳{g.pricePerHour}</span>
                      <span className="text-xs text-muted-warm">/hr non-member</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Booking" title="Book a Slot" subtitle="Pick a game, date, and time — we'll confirm via WhatsApp." />
          <div className="mt-12 max-w-3xl mx-auto">
            <BookingUI />
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Compete" title="Weekly Tournaments" subtitle="Join our weekly competitions and win cash prizes." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tournaments.map((t, i) => (
              <GlassCard key={i} className="text-center">
                <Calendar className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-display text-base text-warm-white">{t.game}</h3>
                <p className="text-xs text-muted-warm mt-1">{t.day} • {t.time}</p>
                <p className="text-gold font-display text-lg mt-2">Prize: {t.prize}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading label="Champions" title="Leaderboard" />
          <div className="mt-12 glass-card p-6">
            {leaderboard.map((p, i) => (
              <div key={p.rank} className={`flex items-center justify-between py-3 ${i < leaderboard.length - 1 ? 'border-b border-gold/10' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className={`font-display text-xl font-bold ${p.rank === 1 ? 'text-gold' : p.rank === 2 ? 'text-champagne' : p.rank === 3 ? 'text-bronze' : 'text-muted-warm'}`}>
                    #{p.rank}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-warm-white">{p.name}</div>
                    <div className="text-xs text-muted-warm">{p.game}</div>
                  </div>
                </div>
                <span className="font-display text-lg text-gold-gradient">{p.points.toLocaleString()} pts</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Events" title="Party & Corporate Packages" subtitle="Celebrate birthdays, corporate events, and friends' nights out at Duke Arena." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {eventPackages.map((pkg, i) => (
              <GlassCard key={i} className="flex flex-col">
                <Users className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-display text-lg font-bold text-warm-white">{pkg.name}</h3>
                <p className="text-xs text-muted-warm mt-1">{pkg.duration}</p>
                <ul className="mt-4 space-y-2 flex-1">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="text-sm text-muted-warm flex items-start gap-2">
                      <span className="text-gold mt-1">◆</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <span className="font-display text-3xl font-bold text-gold-gradient">৳{pkg.price.toLocaleString()}</span>
                </div>
                <div className="mt-4">
                  <GoldButton href={`/contact`} variant="outline" className="w-full">Enquire Now</GoldButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading label="Rules" title="House Rules" />
          <div className="mt-12 glass-card p-8">
            <ul className="space-y-3">
              {[
                'Bookings are held for 15 minutes past the start time.',
                'Food and drinks from Duke Kitchen only — no outside food.',
                'Handle equipment with care — damages are chargeable.',
                'No smoking anywhere in the arena.',
                'Respect other players and wait for your turn.',
                'Tournament entries close 1 hour before start time.',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-warm-white">
                  <span className="text-gold mt-1">◆</span>{rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
