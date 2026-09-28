import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { MembershipPricing } from '@/components/sections/MembershipPricing';

export const metadata: Metadata = {
  title: 'Membership — Join Duke Fitness Club',
  description: 'Silver, Gold, Platinum, and Black Diamond membership tiers. Gym, restaurant, swimming pool, and game zone access. Join Duke Fitness Club today.',
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        label="Pricing"
        title="Membership"
        subtitle="Four tiers, four worlds. Choose the one that fits your lifestyle."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <MembershipPricing />
        </div>
      </section>
    </>
  );
}
