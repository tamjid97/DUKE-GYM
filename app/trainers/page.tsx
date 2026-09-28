import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TrainersGrid } from '@/components/sections/TrainersGrid';

export const metadata: Metadata = {
  title: 'Trainers — Expert Coaches at Duke Fitness Club',
  description: 'Meet our certified trainers for gym, swimming, and game zone. Book a session with Duke Fitness Club experts.',
};

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        label="The Experts"
        title="Our Trainers"
        subtitle="Certified, experienced, and dedicated to your success — across gym, swimming, and game zone."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Team" title="Meet the Coaches" />
          <div className="mt-12">
            <TrainersGrid />
          </div>
        </div>
      </section>
    </>
  );
}
