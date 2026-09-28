import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ToolsSection } from '@/components/sections/ToolsSection';

export const metadata: Metadata = {
  title: 'Tools — Fitness Calculators',
  description: 'BMI, protein, calorie, and one-rep-max calculators at Duke Fitness Club. Free fitness tools for everyone.',
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        label="Free Tools"
        title="Fitness Calculators"
        subtitle="Calculate your BMI, protein needs, daily calories, and one-rep max — all in one place."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ToolsSection />
        </div>
      </section>
    </>
  );
}
