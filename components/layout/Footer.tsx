'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';

export function Footer() {
  const { t } = useLang();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gold/15 bg-obsidian">
      <div className="mx-auto px-6 py-20 lg:px-16" style={{ maxWidth: '1600px' }}>
        <div className="mb-16 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex items-center gap-4">
            <svg width="52" height="52" viewBox="0 0 120 120" fill="none">
              <defs>
                <linearGradient id="footerGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8C6B2A" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#F1DDA0" />
                </linearGradient>
              </defs>
              <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" fill="url(#footerGold)" />
              <circle cx="50" cy="48" r="3" fill="#0B0B0C" />
              <circle cx="70" cy="48" r="3" fill="#0B0B0C" />
              <path d="M52 60 Q60 66 68 60" stroke="#0B0B0C" strokeWidth="2" fill="none" />
            </svg>
            <div>
              <div className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-tight text-gold-gradient">DUKE</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-warm">Fitness Club</div>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex h-16 w-16 items-center justify-center border border-[rgba(212,175,55,0.45)] text-[#D4AF37] transition-colors hover:bg-[rgba(212,175,55,0.08)]"
          >
            <ArrowUp className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm leading-relaxed text-muted-warm">
              {t.fourWorldsOneBuilding}. {t.fourWorldsDesc}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-warm hover:text-gold transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-warm hover:text-gold transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-warm hover:text-gold transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="section-label mb-4">Facilities</h4>
            <ul className="space-y-2">
              {Object.entries(siteConfig.zones).map(([key, zone]) => (
                <li key={key}>
                  <Link href={`/${zone.slug}`} className="text-sm text-muted-warm hover:text-gold transition-colors">
                    {zone.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/trainers" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.trainers}</Link></li>
              <li><Link href="/membership" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.membership}</Link></li>
              <li><Link href="/schedule" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.schedule}</Link></li>
              <li><Link href="/tools" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.tools}</Link></li>
              <li><Link href="/gallery" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.gallery}</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.blog}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-warm hover:text-gold transition-colors">{t.contact}</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-warm hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-warm hover:text-gold transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-warm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-warm">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-warm">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-warm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-display text-sm tracking-[0.28em] text-[#D4AF37]">
            RULE YOUR LEGACY.
          </p>
        </div>
      </div>
    </footer>
  );
}
