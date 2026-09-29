import type { Metadata } from 'next';
import { HomeClient } from '@/components/sections/HomeClient';

export const metadata: Metadata = {
  title: 'DUKE FITNESS CLUB — Rule Your Legacy | Gym • Restaurant • Swimming Pool • Game Zone',
  description:
    'Luxury fitness and lifestyle destination in Dhaka, Bangladesh. Gym, Duke Kitchen restaurant, Duke Aqua swimming pool, and Duke Arena pool & game zone — all under one roof.',
};

export default function Home() {
  return <HomeClient />;
}
