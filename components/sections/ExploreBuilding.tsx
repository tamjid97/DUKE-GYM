'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BuildingMap } from '@/components/shared/BuildingMap';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function ExploreBuilding() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          label="Interactive Map"
          title={t.exploreBuilding}
          subtitle={t.exploreBuildingDesc}
        />
        <div className="mt-12">
          <BuildingMap />
        </div>
        <div className="mt-10 text-center">
          <GoldButton
            href={waLink('Hello Duke Fitness Club! I would like to book a free guided tour.')}
            external
            icon
          >
            {t.bookGuidedTour}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
