import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { GoldButton } from '@/components/shared/GoldButton';
import { MenuSection, ComboDeals } from '@/components/sections/MenuSection';
import { ReservationForm } from '@/components/sections/ReservationForm';
import { siteConfig } from '@/data/siteConfig';
import { waLink, telLink } from '@/lib/contact';
import { UtensilsCrossed, Truck, Phone, Percent } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Duke Kitchen — Healthy Restaurant',
  description: 'Fitness-focused healthy dining at Duke Fitness Club. Protein meals, grills, smoothies, Bengali specials, and meal plans for members.',
};

export default function RestaurantPage() {
  return (
    <>
      <PageHeader
        label={siteConfig.zones.restaurant.tagline}
        title="DUKE KITCHEN"
        subtitle={siteConfig.zones.restaurant.description}
        image={siteConfig.zones.restaurant.image}
      />

      {/* Chef's Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <SectionHeading label="The Story" title="Chef's Philosophy" />
          <p className="mt-8 text-base text-muted-warm leading-relaxed">
            At Duke Kitchen, we believe fitness is not just about what you do in the gym — it's also about what you put on your plate.
            Our chef crafts every dish with performance in mind: high-protein, balanced macros, and flavors that celebrate both international
            and Bengali cuisine. Whether you're fueling for a workout or recovering after one, we've got your plate covered.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="The Menu" title="Healthy & Delicious" subtitle="Search or browse by category. Every item shows calories and protein." />
          <div className="mt-12">
            <MenuSection />
          </div>
        </div>
      </section>

      {/* Combos */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Deals" title="Combo Deals" subtitle="Save more with our curated combos — perfect for post-workout meals." />
          <div className="mt-12">
            <ComboDeals />
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 lg:py-28 bg-smoke/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Members" title="Member Benefits" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <GlassCard className="text-center">
              <Percent className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-lg text-warm-white mb-2">Member Discount</h3>
              <p className="text-sm text-muted-warm">Gold members get 10% off, Platinum 15%, Black Diamond 20% off all menu items.</p>
            </GlassCard>
            <GlassCard className="text-center">
              <UtensilsCrossed className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-lg text-warm-white mb-2">Meal Plans</h3>
              <p className="text-sm text-muted-warm">Weekly meal-plan subscriptions designed for gym members. Calorie-counted and portioned.</p>
            </GlassCard>
            <GlassCard className="text-center">
              <Truck className="h-10 w-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-lg text-warm-white mb-2">Takeaway & Delivery</h3>
              <p className="text-sm text-muted-warm">Call us for takeaway or delivery within Gulshan area.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading label="Booking" title="Table Reservation" subtitle="Book your table via WhatsApp — we'll confirm within minutes." />
          <div className="mt-12">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-smoke/30">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h3 className="font-display text-xl text-gold-gradient mb-4">Takeaway & Delivery</h3>
          <p className="text-sm text-muted-warm mb-4">Call us for takeaway orders or delivery within Gulshan area.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <GoldButton href={telLink()} icon>Call to Order</GoldButton>
            <GoldButton href={waLink('Hello Duke Kitchen! I would like to place an order.')} external variant="secondary">WhatsApp Order</GoldButton>
          </div>
          <p className="text-xs text-muted-warm mt-4">Opening Hours: {siteConfig.zones.restaurant.hours}</p>
        </div>
      </section>
    </>
  );
}
