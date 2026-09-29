import type { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';
import { FloatingContactButtons } from '@/components/shared/FloatingContactButtons';

export const metadata: Metadata = {
  title: 'Contact — Duke Fitness Club',
  description: 'Get in touch with Duke Fitness Club. Address, phone, email, opening hours, and contact form.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16 lg:py-24 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <ContactMap />
      <FloatingContactButtons />
    </>
  );
}
