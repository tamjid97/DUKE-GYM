'use client';

import { useCallback, useRef, useState } from 'react';
import { Hero } from '@/components/sections/Hero';
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

export function HomeClient() {
  const [revealed, setRevealed] = useState(false);
  const hasTriggeredRef = useRef(false);

  const handleTrigger = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setRevealed(true);
  }, []);

  return (
    <>
      <Hero revealed={revealed} onTrigger={handleTrigger} />
      <FourWorlds />
      <ExploreBuilding />
      <FeaturedPrograms />
      <MembershipPreview />
      <TrainersPreview />
      <ZoneHighlights />
      <TransformationsSection />
      <Testimonials forceReveal={revealed} />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
