import type { Metadata } from 'next';
import { KitchenHero } from '@/components/restaurant/KitchenHero';
import { KitchenPhilosophy } from '@/components/restaurant/KitchenPhilosophy';
import { KitchenSignature } from '@/components/restaurant/KitchenSignature';
import { KitchenMenu } from '@/components/restaurant/KitchenMenu';
import { KitchenCombos } from '@/components/restaurant/KitchenCombos';
import { KitchenBenefits } from '@/components/restaurant/KitchenBenefits';
import { KitchenReservation } from '@/components/restaurant/KitchenReservation';
import { KitchenTakeaway } from '@/components/restaurant/KitchenTakeaway';

export const metadata: Metadata = {
  title: 'Duke Kitchen — Healthy Restaurant',
  description: 'Fitness-focused healthy dining at Duke Fitness Club. Protein meals, grills, smoothies, Bengali specials, and meal plans for members.',
};

export default function RestaurantPage() {
  return (
    <>
      <KitchenHero />
      <KitchenPhilosophy />
      <KitchenSignature />
      <KitchenMenu />
      <KitchenCombos />
      <KitchenBenefits />
      <KitchenReservation />
      <KitchenTakeaway />
    </>
  );
}

