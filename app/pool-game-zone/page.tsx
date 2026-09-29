import type { Metadata } from 'next';
import { ArenaHero } from '@/components/arena/ArenaHero';
import { ArenaGames } from '@/components/arena/ArenaGames';
import { ArenaBooking } from '@/components/arena/ArenaBooking';
import { ArenaTournaments } from '@/components/arena/ArenaTournaments';
import { ArenaLeaderboard } from '@/components/arena/ArenaLeaderboard';
import { ArenaPackages } from '@/components/arena/ArenaPackages';
import { ArenaRules } from '@/components/arena/ArenaRules';
import { ArenaFinale } from '@/components/arena/ArenaFinale';

export const metadata: Metadata = {
  title: 'Duke Arena — Private Pool & Game Club | DUKE FITNESS CLUB',
  description:
    'Billiards, snooker, table tennis, foosball, console gaming, and board games at Duke Arena — an exclusive private game & entertainment club. Hourly booking, weekly tournaments, and event packages.',
};

export default function PoolGameZonePage() {
  return (
    <>
      <ArenaHero />
      <ArenaGames />
      <ArenaBooking />
      <ArenaTournaments />
      <ArenaLeaderboard />
      <ArenaPackages />
      <ArenaRules />
      <ArenaFinale />
    </>
  );
}
