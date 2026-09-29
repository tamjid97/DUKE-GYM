import type { Metadata } from 'next';
import { MembershipPricing } from '@/components/sections/MembershipPricing';

export const metadata: Metadata = {
  title: 'Membership — Join Duke Fitness Club',
  description: 'Admission fee, monthly membership, and long-term plans. Bronze, Silver, and Gold membership options. Join Duke Fitness Club today.',
};

export default function MembershipPage() {
  return (
    <>
      <MembershipPricing />
    </>
  );
}
