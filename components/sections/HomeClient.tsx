'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { FourWorlds } from '@/components/sections/FourWorlds';
import { ExploreBuilding } from '@/components/sections/ExploreBuilding';
import { FeaturedPrograms } from '@/components/sections/FeaturedPrograms';
import { MembershipPreview } from '@/components/sections/MembershipPreview';
import { FeaturedTrainer } from '@/components/sections/FeaturedTrainer';
import { ZoneHighlights } from '@/components/sections/ZoneHighlights';
import { TransformationsSection } from '@/components/sections/TransformationsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export function HomeClient() {
  const [revealed, setRevealed] = useState(false);
  const hasTriggeredRef = useRef(false);

  const handleTrigger = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setRevealed(true);
  }, []);

  return (
    <>
      <Hero revealed={revealed} onTrigger={handleTrigger} />
      <FourWorlds />
      <ExploreBuilding />
      <FeaturedPrograms />
      <MembershipPreview />
      <FeaturedTrainer />
      <ZoneHighlights />
      <TransformationsSection />
      <Testimonials forceReveal={revealed} />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
      <section className="py-16 lg:py-24 bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            {/* Find Us Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <span className="text-xs text-gold tracking-[0.3em] uppercase font-semibold">Location</span>
                <h3 className="font-display text-xl font-bold text-warm-white mt-2">Find Us</h3>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl flex-1 min-h-[350px]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-obsidian/30 pointer-events-none z-10" />
                {/* Map iframe */}
                <iframe
                  src={siteConfig.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(1.1)', position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Duke Fitness Club Location"
                  className="w-full h-full"
                />
                {/* Open in Maps button */}
                <motion.a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 right-4 z-20 bg-gradient-to-r from-gold via-champagne to-gold text-obsidian font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 hover:shadow-gold/30 transition-all duration-300 text-xs"
                >
                  Open in Maps
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
