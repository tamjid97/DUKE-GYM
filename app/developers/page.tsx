import type { Metadata } from 'next';
import { DevelopersClient } from '@/components/developers/DevelopersClient';

export const metadata: Metadata = {
  title: 'Developers | DUKE FITNESS CLUB',
  description: 'Meet the talented developers behind Duke Fitness Club.',
};

export default function DevelopersPage() {
  return <DevelopersClient />;
}
