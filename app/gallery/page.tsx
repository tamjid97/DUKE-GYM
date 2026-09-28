import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { GalleryGrid } from '@/components/sections/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery — Duke Fitness Club',
  description: 'Browse photos of our gym, restaurant, swimming pool, game zone, and events at Duke Fitness Club.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Visual"
        title="Gallery"
        subtitle="Step inside Duke Fitness Club — explore our four worlds through photos."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
