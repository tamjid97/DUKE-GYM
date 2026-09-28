import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { StatsBar } from '@/components/sections/StatsBar';
import { FourWorlds } from '@/components/sections/FourWorlds';
import { ExploreBuilding } from '@/components/sections/ExploreBuilding';
import { FeaturedPrograms } from '@/components/sections/FeaturedPrograms';
import { MembershipPreview } from '@/components/sections/MembershipPreview';
import { TrainersPreview } from '@/components/sections/TrainersPreview';
import { ZoneHighlights } from '@/components/sections/ZoneHighlights';
import { TransformationsSection } from '@/components/sections/TransformationsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'DUKE FITNESS CLUB — Rule Your Legacy | Gym • Restaurant • Swimming Pool • Game Zone',
  description:
    'Luxury fitness and lifestyle destination in Dhaka, Bangladesh. Gym, Duke Kitchen restaurant, Duke Aqua swimming pool, and Duke Arena pool & game zone — all under one roof.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FourWorlds />
      <ExploreBuilding />
      <FeaturedPrograms />
      <MembershipPreview />
      <TrainersPreview />
      <ZoneHighlights />
      <TransformationsSection />
      <Testimonials />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
