'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function ContactInfo() {
  const whatsappNumber = '01608044682';
  const whatsappLink = `https://wa.me/8801608044682`;
  const telLink = `tel:+8801608044682`;

  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-br from-panel/80 to-smoke/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 shadow-2xl"
      >
        <div className="mb-6">
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-semibold">Contact Details</span>
          <h3 className="font-display text-xl font-bold text-warm-white mt-2">Reach Us</h3>
        </div>

        <div className="space-y-5">
          {/* Location */}
          <div className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <MapPin className="h-5 w-5 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-warm-white font-medium">Location</p>
              <p className="text-sm text-muted-warm mt-1">{siteConfig.address}</p>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold hover:text-champagne transition-colors mt-1 inline-block"
              >
                View on Map ↗
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-warm-white font-medium">Phone</p>
              <a
                href={telLink}
                className="text-sm text-muted-warm hover:text-gold transition-colors mt-1 inline-block"
              >
                {whatsappNumber}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Mail className="h-5 w-5 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-warm-white font-medium">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted-warm hover:text-gold transition-colors mt-1 inline-block"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Opening Hours Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-panel/80 to-smoke/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 shadow-2xl"
      >
        <div className="mb-6">
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-semibold">Opening Hours</span>
          <h3 className="font-display text-xl font-bold text-warm-white mt-2">Schedule</h3>
        </div>

        <div className="space-y-4">
          {Object.entries(siteConfig.zones).map(([key, zone], index) => (
            <div
              key={key}
              className="flex items-center justify-between py-3 border-b border-gold/10 last:border-0"
            >
              <span className="text-sm text-warm-white font-medium">{zone.title}</span>
              <span className="text-sm text-muted-warm flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-gold" />
                {zone.hours}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* How to Reach Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-panel/80 to-smoke/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 shadow-2xl"
      >
        <div className="mb-6">
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-semibold">Navigation</span>
          <h3 className="font-display text-xl font-bold text-warm-white mt-2">How to Reach Each Zone</h3>
        </div>

        <div className="space-y-4">
          {Object.entries(siteConfig.zones).map(([key, zone]) => (
            <div
              key={key}
              className="py-3 border-b border-gold/10 last:border-0"
            >
              <p className="text-sm text-gold font-semibold mb-1">{zone.title}</p>
              <p className="text-sm text-muted-warm">{zone.direction}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
