import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm, ContactInfo } from '@/components/sections/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact — Duke Fitness Club',
  description: 'Get in touch with Duke Fitness Club. Address, phone, email, opening hours, and contact form.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact"
        subtitle="Visit us, call us, or send a message — we're here to help."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>

          {/* Map */}
          <div className="mt-12">
            <SectionHeading label="Location" title="Find Us" />
            <div className="mt-8 glass-card overflow-hidden p-0">
              <iframe
                src={siteConfig.mapEmbed}
                width="100%"
                height="400"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Duke Fitness Club Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
