import type { Metadata } from 'next';
import { GymHero } from '@/components/gym/GymHero';
import { GymZones } from '@/components/gym/GymZones';
import { GymPrograms } from '@/components/gym/GymPrograms';
import { GymArsenal } from '@/components/gym/GymArsenal';
import { GymCTA } from '@/components/gym/GymCTA';
import { GymQuizSection } from '@/components/gym/GymQuizSection';
import { GymRules } from '@/components/gym/GymRules';
import { GymFinale } from '@/components/gym/GymFinale';

export const metadata: Metadata = {
  title: 'Duke Gym — Strength, Cardio, Functional Training',
  description: 'State-of-the-art gym with weights, cardio, functional training, women\'s section, and personal training at Duke Fitness Club, Dhaka.',
};

export default function GymPage() {
  return (
    <>
      <GymHero />
      <GymZones />
      <GymPrograms />
      <GymArsenal />
      <GymCTA />
      <GymQuizSection />
      <GymRules />
      <GymFinale />
    </>
  );
}
