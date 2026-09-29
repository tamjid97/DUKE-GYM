'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';

export function Footer() {
  const { t } = useLang();

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-gold/15 bg-obsidian">
      <div className="mx-auto px-6 py-20 lg:px-16" style={{ maxWidth: '1600px' }}>
        <div className="mb-16 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Duke Fitness Club logo"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
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
            <h4 className="section-label mb-4">About</h4>
            <p className="text-sm leading-relaxed text-muted-warm mb-4">
              Four Worlds. One Building. Everything you need for your fitness journey under one roof.
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
                <a href="tel:+8801608044682" className="hover:text-gold transition-colors">01608044682</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-warm">
                <a href="https://wa.me/8801608044682" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
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
