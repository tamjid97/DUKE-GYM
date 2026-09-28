import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { ScheduleView } from '@/components/sections/ScheduleView';

export const metadata: Metadata = {
  title: 'Schedule — Weekly Timetable',
  description: 'Interactive weekly timetable for gym, classes, swimming, and game zone at Duke Fitness Club.',
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        label="Weekly"
        title="Schedule"
        subtitle="Browse sessions by category. Color-coded and always up to date."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScheduleView />
        </div>
      </section>
    </>
  );
}
