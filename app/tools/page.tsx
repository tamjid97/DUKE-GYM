import type { Metadata } from 'next';
import { ToolsHero } from '@/components/tools/ToolsHero';
import { ToolsCalculators } from '@/components/tools/ToolsCalculators';
import { ToolsCTA } from '@/components/tools/ToolsCTA';

export const metadata: Metadata = {
  title: 'Fitness Performance Lab | Free BMI · Protein · Calorie · 1RM Calculators — DUKE FITNESS CLUB',
  description:
    'Four precise performance instruments used by Duke Fitness Club trainers. BMI, daily protein, maintenance calories and 1-rep max — free, fast and calibrated for real results.',
};

export default function ToolsPage() {
  return (
    <>
      <ToolsHero />
      <ToolsCalculators />
      <ToolsCTA />
    </>
  );
}
