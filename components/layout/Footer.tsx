'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, ChevronUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-[var(--accent-500)]/15 bg-obsidian">
      <div className="mx-auto px-6 py-16 lg:px-16" style={{ maxWidth: '1600px' }}>
        {/* Top Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex items-center gap-4">
            {/* Duke Lion Logo */}
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 120 120" fill="currentColor" className="w-full h-full text-[var(--accent-500)]">
                <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" />
              </svg>
            </div>
            <div>
              <div className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-tight text-accent-gradient">DUKE</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-warm">FITNESS CLUB</div>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center border border-[var(--accent-500)]/45 text-[var(--accent-500)] transition-colors hover:bg-[var(--accent-500)]/10 rounded-full"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-500)]/30 to-transparent mb-12" />

        {/* Four Columns */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h4 className="section-label mb-4">About</h4>
            <p className="text-sm leading-relaxed text-muted-warm mb-6">
              Four Worlds. One Building. Everything you need for your fitness journey under one roof.
            </p>
            <div className="flex gap-3">
              <a 
                href={siteConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full border border-[var(--accent-500)]/30 flex items-center justify-center text-muted-warm hover:text-[var(--accent-500)] hover:border-[var(--accent-500)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full border border-[var(--accent-500)]/30 flex items-center justify-center text-muted-warm hover:text-[var(--accent-500)] hover:border-[var(--accent-500)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full border border-[var(--accent-500)]/30 flex items-center justify-center text-muted-warm hover:text-[var(--accent-500)] hover:border-[var(--accent-500)] transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Facilities */}
          <div>
            <h4 className="section-label mb-4">Facilities</h4>
            <ul className="space-y-2">
              {Object.entries(siteConfig.zones).map(([key, zone]) => (
                <li key={key}>
                  <Link href={`/${zone.slug}`} className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">
                    {zone.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="section-label mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/trainers" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Trainers</Link></li>
              <li><Link href="/membership" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Membership</Link></li>
              <li><Link href="/schedule" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Schedule</Link></li>
              <li><Link href="/tools" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Tools</Link></li>
              <li><Link href="/gallery" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-warm hover:text-[var(--accent-500)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="section-label mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-warm">
                <MapPin className="w-4 h-4 text-[var(--accent-500)] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-warm">
                <Phone className="w-4 h-4 text-[var(--accent-500)] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--accent-500)] transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-warm">
                <Mail className="w-4 h-4 text-[var(--accent-500)] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--accent-500)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-warm">
                <Clock className="w-4 h-4 text-[var(--accent-500)] shrink-0" />
                <span className="whitespace-pre-line">
                  {siteConfig.openingHours.weekdays}
                  {siteConfig.openingHours.weekends}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--accent-500)]/10 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-xs text-muted-warm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-xs text-muted-warm hover:text-[var(--accent-500)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-warm hover:text-[var(--accent-500)] transition-colors">
                Terms of Service
              </Link>
              <Link href="/developers" className="text-xs text-muted-warm hover:text-[var(--accent-500)] transition-colors">
                Developers
              </Link>
            </div>
          </div>
          <p className="font-display text-sm tracking-[0.28em] text-[var(--accent-500)]">
            RULE YOUR LEGACY.
          </p>
        </div>
      </div>
    </footer>
  );
}
