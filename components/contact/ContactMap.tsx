'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export function ContactMap() {
  return (
    <section className="py-16 lg:py-24 bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Location</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white mt-3">
            Find Us
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-obsidian/30 pointer-events-none z-10" />
          
          {/* Map iframe */}
          <iframe
            src={siteConfig.mapEmbed}
            width="100%"
            height="450"
            style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Duke Fitness Club Location"
            className="w-full"
          />

          {/* Open in Maps button */}
          <motion.a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-6 right-6 z-20 bg-gradient-to-r from-gold via-champagne to-gold text-obsidian font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:shadow-gold/30 transition-all duration-300"
          >
            Open in Maps
            <svg
              width="16"
              height="16"
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
        </motion.div>
      </div>
    </section>
  );
}
