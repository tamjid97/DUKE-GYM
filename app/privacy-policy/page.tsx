import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Duke Fitness Club.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="glass-card p-8 space-y-6 text-sm text-muted-warm leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">1. Introduction</h2>
              <p>{siteConfig.name} ("we", "us", "our") respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">2. Information We Collect</h2>
              <p>We collect information you provide directly — such as your name, phone number, and email — when you fill out forms, book sessions, or contact us via WhatsApp. We also collect basic analytics data about website usage.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">3. How We Use Your Information</h2>
              <p>We use your information to respond to inquiries, process bookings and memberships, send updates about our services, and improve our website. We do not sell your personal information to third parties.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">4. Data Storage & Security</h2>
              <p>Your data is stored securely and access is restricted to authorized personnel only. We implement appropriate technical and organizational measures to protect your information.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at {siteConfig.email}.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">6. Cookies</h2>
              <p>Our website uses essential cookies for functionality. We do not use tracking cookies for advertising.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">7. Contact</h2>
              <p>For privacy-related questions, contact us at {siteConfig.email} or {siteConfig.phoneDisplay}.</p>
            </div>
            <p className="text-xs">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>
    </>
  );
}
