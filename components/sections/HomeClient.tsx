'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { FourWorlds } from '@/components/sections/FourWorlds';
import { ExploreBuilding } from '@/components/sections/ExploreBuilding';
import { FeaturedPrograms } from '@/components/sections/FeaturedPrograms';
import { MembershipPreview } from '@/components/sections/MembershipPreview';
import { FeaturedTrainer } from '@/components/sections/FeaturedTrainer';
import { TransformationsSection } from '@/components/sections/TransformationsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { GetInTouch } from '@/components/sections/GetInTouch';
import { siteConfig } from '@/data/siteConfig';

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
      <FeaturedTrainer />
      <TransformationsSection />
      <Testimonials forceReveal={revealed} />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
      <GetInTouch />
    </>
  );
}
