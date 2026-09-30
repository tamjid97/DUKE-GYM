import type { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { GetInTouch } from '@/components/sections/GetInTouch';
import { FloatingContactButtons } from '@/components/shared/FloatingContactButtons';

export const metadata: Metadata = {
  title: 'Contact — Duke Fitness Club',
  description: 'Get in touch with Duke Fitness Club. Address, phone, email, opening hours, and contact form.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <GetInTouch />
      <FloatingContactButtons />
    </>
  );
}
