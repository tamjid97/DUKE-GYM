import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Duke Fitness Club membership and services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader label="Legal" title="Terms & Conditions" />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="glass-card p-8 space-y-6 text-sm text-muted-warm leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">1. Membership</h2>
              <p>By purchasing a membership at {siteConfig.name}, you agree to abide by all club rules and policies. Memberships are non-transferable and non-refundable except as stated in our refund policy.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">2. Payment</h2>
              <p>Membership fees are billed according to your selected plan (monthly, quarterly, or yearly). Payments are due in advance. Late payments may result in suspension of access.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">3. Cancellation</h2>
              <p>Members may cancel their membership at any time by providing written notice. Cancellation takes effect at the end of the current billing period. No refunds for partial periods.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">4. Code of Conduct</h2>
              <p>Members must respect staff and other members, follow all posted rules for each zone, and use equipment properly. {siteConfig.name} reserves the right to revoke membership for violations.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">5. Liability</h2>
              <p>Members participate in activities at their own risk. {siteConfig.name} is not liable for personal injuries, lost items, or damaged property. We recommend consulting a physician before starting any fitness program.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">6. Zone-Specific Rules</h2>
              <p>Each zone (Gym, Restaurant, Swimming Pool, Game Zone) has specific rules posted on-site and on our website. Members are responsible for knowing and following these rules.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">7. Bookings</h2>
              <p>Bookings for swimming slots, game zone tables, and trainer sessions are subject to availability. Late arrivals (15+ minutes) may forfeit their booking.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">8. Changes to Terms</h2>
              <p>We may update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gold-gradient mb-2">9. Contact</h2>
              <p>For questions about these terms, contact us at {siteConfig.email} or {siteConfig.phoneDisplay}.</p>
            </div>
            <p className="text-xs">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>
    </>
  );
}
