'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { waLink } from '@/lib/contact';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const zoneLinks = [
    { href: '/gym', label: t.gym, sub: 'Duke Gym' },
    { href: '/swimming-pool', label: t.swimmingPool, sub: 'Duke Aqua' },
    { href: '/restaurant', label: t.restaurant, sub: 'Duke Kitchen' },
    { href: '/pool-game-zone', label: t.gameZone, sub: 'Duke Arena' },
  ];

  const otherLinks = [
    { href: '/trainers', label: t.trainers },
    { href: '/membership', label: t.membership },
    { href: '/schedule', label: t.schedule },
    { href: '/tools', label: t.tools },
    { href: '/gallery', label: t.gallery },
    { href: '/blog', label: t.blog },
    { href: '/contact', label: t.contact },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-obsidian/85 backdrop-blur-lg border-b border-gold/15 py-2'
            : 'bg-transparent py-4'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
              <defs>
                <linearGradient id="navGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8C6B2A" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#F1DDA0" />
                </linearGradient>
              </defs>
              <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" fill="url(#navGold)" />
              <circle cx="50" cy="48" r="3" fill="#0B0B0C" />
              <circle cx="70" cy="48" r="3" fill="#0B0B0C" />
              <path d="M52 60 Q60 66 68 60" stroke="#0B0B0C" strokeWidth="2" fill="none" />
            </svg>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold text-gold-gradient tracking-widest leading-none">DUKE</div>
              <div className="text-[8px] tracking-[0.3em] text-muted-warm uppercase mt-0.5">Fitness Club</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link href="/" className={cn('nav-link', pathname === '/' && 'text-gold')}>{t.home}</Link>

            {/* Facilities mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
            >
              <button className={cn('nav-link flex items-center gap-1', pathname.startsWith('/gym') || pathname.startsWith('/swimming') || pathname.startsWith('/restaurant') || pathname.startsWith('/pool-game') && 'text-gold')}>
                Facilities
                <ChevronDown className={cn('h-3 w-3 transition-transform', facilitiesOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {facilitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  >
                    <div className="glass-card corner-ornament w-80 p-2">
                      {zoneLinks.map((z) => (
                        <Link
                          key={z.href}
                          href={z.href}
                          className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-gold/10"
                        >
                          <div>
                            <div className="text-sm font-medium text-warm-white">{z.label}</div>
                            <div className="text-xs text-muted-warm">{z.sub}</div>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90 text-gold" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {otherLinks.map((l) => (
              <Link key={l.href} href={l.href} className={cn('nav-link', pathname === l.href && 'text-gold')}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1 rounded-full border border-gold/30 px-3 py-1.5 text-xs text-warm-white transition-colors hover:border-gold/60 hover:text-gold"
              aria-label="Toggle language"
            >
              <Globe className="h-3 w-3" />
              {lang === 'en' ? 'EN' : 'বাংলা'}
            </button>
            <a
              href={waLink('Hello Duke Fitness Club! I would like to join.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden rounded-full px-5 py-2 text-sm sm:inline-block"
            >
              {t.joinNow}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-warm-white p-1"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gold/15">
              <span className="font-display text-xl font-bold text-gold-gradient">DUKE</span>
              <button onClick={() => setMobileOpen(false)} className="text-warm-white p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-4 overflow-y-auto h-[calc(100vh-64px)]">
              <Link href="/" className="mobile-nav-link">{t.home}</Link>
              <div className="py-2">
                <div className="section-label mb-2">Facilities</div>
                {zoneLinks.map((z) => (
                  <Link key={z.href} href={z.href} className="mobile-nav-link pl-4">
                    {z.label} <span className="text-xs text-muted-warm">— {z.sub}</span>
                  </Link>
                ))}
              </div>
              {otherLinks.map((l) => (
                <Link key={l.href} href={l.href} className="mobile-nav-link">{l.label}</Link>
              ))}
              <a
                href={waLink('Hello Duke Fitness Club! I would like to join.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 rounded-full px-6 py-3 text-center text-sm"
              >
                {t.joinNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        :global(.nav-link) {
          font-size: 0.875rem;
          color: #F5F1E6;
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          transition: color 0.2s;
        }
        :global(.nav-link:hover) {
          color: #D4AF37;
        }
        :global(.mobile-nav-link) {
          display: block;
          padding: 0.75rem 0;
          font-size: 1.125rem;
          color: #F5F1E6;
          border-bottom: 1px solid rgba(212,175,55,0.1);
        }
        :global(.mobile-nav-link:hover) {
          color: #D4AF37;
        }
      `}</style>
    </>
  );
}
