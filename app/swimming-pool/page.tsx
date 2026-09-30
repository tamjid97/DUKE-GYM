import type { Metadata } from 'next';
import { AquaHero } from '@/components/aqua/AquaHero';
import { AquaDetails } from '@/components/aqua/AquaDetails';
import { AquaRhythm } from '@/components/aqua/AquaRhythm';
import { AquaTimetable } from '@/components/aqua/AquaTimetable';
import { AquaClasses } from '@/components/aqua/AquaClasses';
import { AquaFlow } from '@/components/aqua/AquaFlow';
import { AquaPricing } from '@/components/aqua/AquaPricing';
import { AquaSafety } from '@/components/aqua/AquaSafety';
import { AquaFAQ } from '@/components/aqua/AquaFAQ';

export const metadata: Metadata = {
  title: 'Duke Aqua — Swimming Pool',
  description: 'Temperature-controlled indoor swimming pool at Duke Fitness Club. Separate batches for men, women, and kids. Certified lifeguard on duty.',
};

export default function SwimmingPoolPage() {
  return (
    <>
      <AquaHero />
      <AquaDetails />
      <AquaRhythm />
      <AquaTimetable />
      <AquaClasses />
      <AquaFlow />
      <AquaPricing />
      <AquaSafety />
      <AquaFAQ />
    </>
  );
}
