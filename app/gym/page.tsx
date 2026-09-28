import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { ProgramQuiz } from '@/components/sections/ProgramQuiz';
import { siteConfig } from '@/data/siteConfig';
import { Dumbbell, Heart, Users, Sparkles, Shield, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Duke Gym — Strength, Cardio, Functional Training',
  description: 'State-of-the-art gym with weights, cardio, functional training, women\'s section, and personal training at Duke Fitness Club, Dhaka.',
};

const gymZones = [
  { icon: Dumbbell, title: 'Weights Zone', desc: 'Full range of free weights, racks, benches, and plate-loaded machines.' },
  { icon: Heart, title: 'Cardio Zone', desc: 'Treadmills, ellipticals, rowers, and stationary bikes with personal screens.' },
  { icon: Sparkles, title: 'Functional / Cross-Training', desc: 'Box jumps, kettlebells, ropes, sleds, and open floor space.' },
  { icon: Users, title: 'Women\'s Section', desc: 'Private, fully-equipped women-only training area with female coach.' },
  { icon: Trophy, title: 'Personal Training Studio', desc: 'Dedicated PT space for 1-on-1 coaching and small group sessions.' },
  { icon: Shield, title: 'Recovery', desc: 'Stretching area and recovery guidance for injury prevention.' },
];

const equipment = [
  'Olympic Squat Racks (4)', 'Deadlift Platforms (2)', 'Bench Press Stations (3)',
  'Smith Machine', 'Cable Crossover', 'Leg Press', 'Hack Squat',
  'Lat Pulldown', 'Treadmills (8)', 'Ellipticals (4)', 'Rowing Machines (2)',
  'Stationary Bikes (4)', 'Kettlebells (8-32kg)', 'Dumbbells (2.5-50kg)',
  'Battle Ropes', 'Box Jump Platforms', 'Pull-up Bars', 'Foam Rollers',
];

const rules = [
  'Bring a towel and wipe down equipment after use.',
  'Return weights to racks after your set.',
  'Wear proper gym attire and closed-toe shoes.',
  'No food in the training area — water only.',
  'Respect other members and wait your turn.',
  'Use collars on all barbell exercises.',
  'Report any equipment issues to staff.',
  'Follow trainer instructions for safety.',
];

export default function GymPage() {
  return (
    <>
      <PageHeader
        label={siteConfig.zones.gym.tagline}
        title="DUKE GYM"
        subtitle={siteConfig.zones.gym.description}
        image={siteConfig.zones.gym.image}
      />

      {/* Gym Zones */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Inside the Gym" title="Training Zones" subtitle="Six dedicated areas designed for every type of training." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gymZones.map((z, i) => (
              <GlassCard key={i} tilt className="group">
                <z.icon className="h-10 w-10 text-gold mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-display text-lg font-bold text-warm-white mb-2">{z.title}</h3>
                <p className="text-sm text-muted-warm">{z.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Train" title="Programs" subtitle="Find the right program for your goals with our filter tabs." />
          <div className="mt-12">
            <ProgramsSection />
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Equipment" title="Our Arsenal" subtitle="Premium equipment maintained to international standards." />
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {equipment.map((item, i) => (
              <span key={i} className="rounded-full border border-gold/20 px-4 py-2 text-sm text-muted-warm hover:border-gold/50 hover:text-gold transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Find Your Fit" title="Find Your Program" subtitle="Answer three quick questions and we'll recommend the best program for you." />
          <div className="mt-12">
            <ProgramQuiz />
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading label="Etiquette" title="Rules & Etiquette" />
          <div className="mt-12 glass-card p-8">
            <ul className="space-y-3">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-warm-white">
                  <span className="text-gold mt-1">◆</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
