'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { useTheme, THEMES } from '@/components/providers/ThemeProvider';
import { waLink } from '@/lib/contact';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLang();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [themesOpen, setThemesOpen] = useState(false);
  const themesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (themesRef.current && !themesRef.current.contains(e.target as Node)) {
        setThemesOpen(false);
      }
    }
    if (themesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [themesOpen]);

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
            ? 'backdrop-blur-lg border-b py-2'
            : 'bg-transparent py-4'
        )}
        style={{
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--obsidian) 85%, transparent)'
            : 'transparent',
          borderColor: 'var(--border-accent)',
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
              <defs>
                <linearGradient id="navLionGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--accent-700)" />
                  <stop offset="50%" stopColor="var(--accent-500)" />
                  <stop offset="100%" stopColor="var(--accent-300)" />
                </linearGradient>
              </defs>
              <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" fill="url(#navLionGold)" />
              <circle cx="50" cy="48" r="3" fill="var(--obsidian)" />
              <circle cx="70" cy="48" r="3" fill="var(--obsidian)" />
              <path d="M52 60 Q60 66 68 60" stroke="var(--obsidian)" strokeWidth="2" fill="none" />
            </svg>
            <div className="hidden sm:block">
              <div
                className="font-display text-lg font-bold tracking-widest leading-none text-accent-gradient"
              >
                DUKE
              </div>
              <div
                className="text-[8px] tracking-[0.3em] uppercase mt-0.5"
                style={{ color: 'var(--muted-warm)' }}
              >
                Fitness Club
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={cn('nav-link', pathname === '/' && 'text-accent')}
              style={pathname === '/' ? { color: 'var(--accent-500)' } : undefined}
            >
              {t.home}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
            >
              <button
                className={cn('nav-link flex items-center gap-1')}
                style={
                  (pathname.startsWith('/gym') ||
                    pathname.startsWith('/swimming') ||
                    pathname.startsWith('/restaurant') ||
                    pathname.startsWith('/pool-game'))
                    ? { color: 'var(--accent-500)' }
                    : undefined
                }
              >
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
                          className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors"
                          style={{
                            backgroundColor: 'transparent',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--accent-500) 10%, transparent)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <div>
                            <div className="text-sm font-medium" style={{ color: 'var(--warm-white)' }}>
                              {z.label}
                            </div>
                            <div className="text-xs" style={{ color: 'var(--muted-warm)' }}>
                              {z.sub}
                            </div>
                          </div>
                          <ChevronDown
                            className="h-4 w-4 -rotate-90"
                            style={{ color: 'var(--accent-500)' }}
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {otherLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={pathname === l.href ? { color: 'var(--accent-500)' } : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative" ref={themesRef}>
              <button
                onClick={() => setThemesOpen((p) => !p)}
                className={cn(
                  'theme-switcher-btn flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all',
                  'border-2 shadow-lg'
                )}
                style={{
                  background: 'var(--accent-gradient)',
                  borderColor: 'var(--accent-300)',
                  color: 'var(--obsidian)',
                  boxShadow: '0 0 20px color-mix(in srgb, var(--accent-500) 35%, transparent)',
                }}
                aria-label="Change theme color"
              >
                <span className="theme-switcher-inner flex items-center gap-1.5">
                  <Palette className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline font-semibold">Theme</span>
                  <span
                    className="inline-block w-3 h-3 rounded-full border"
                    style={{
                      backgroundColor: 'var(--accent-500)',
                      borderColor: 'var(--obsidian)',
                    }}
                  />
                </span>
              </button>

              <AnimatePresence>
                {themesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-2 w-72 glass-card corner-ornament p-3 z-50"
                  >
                    <div className="section-label mb-3 pl-1">Choose Theme</div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {THEMES.map((th) => (
                        <button
                          key={th.key}
                          onClick={() => {
                            setTheme(th.key);
                            setThemesOpen(false);
                          }}
                          className={cn(
                            'theme-option w-full aspect-square rounded-lg border-2 relative',
                            theme === th.key && 'active'
                          )}
                          style={{
                            background: `linear-gradient(135deg, ${th.bg} 0%, ${th.bg} 50%, ${th.primary}22 100%)`,
                            borderColor: theme === th.key ? th.primary : `${th.primary}33`,
                          }}
                          title={th.name}
                        >
                          <span
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-1.5 rounded-full"
                            style={{ backgroundColor: th.primary }}
                          />
                        </button>
                      ))}
                    </div>
                    <div className="space-y-1 border-t pt-2" style={{ borderColor: 'var(--border-accent)' }}>
                      {THEMES.map((th) => (
                        <button
                          key={th.key}
                          onClick={() => {
                            setTheme(th.key);
                            setThemesOpen(false);
                          }}
                          className={cn(
                            'w-full flex items-center gap-3 rounded-md px-2 py-2 text-left transition-colors'
                          )}
                          style={{
                            backgroundColor: theme === th.key ? 'color-mix(in srgb, var(--accent-500) 10%, transparent)' : 'transparent',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--accent-500) 10%, transparent)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme === th.key ? 'color-mix(in srgb, var(--accent-500) 10%, transparent)' : 'transparent')}
                        >
                          <span
                            className="w-4 h-4 rounded-full border"
                            style={{
                              backgroundColor: th.primary,
                              borderColor: th.secondary,
                              boxShadow: theme === th.key ? `0 0 10px ${th.primary}` : 'none',
                            }}
                          />
                          <span
                            className="text-sm flex-1"
                            style={{ color: 'var(--warm-white)' }}
                          >
                            {th.name}
                          </span>
                          {theme === th.key && (
                            <span
                              className="text-xs font-semibold"
                              style={{ color: 'var(--accent-500)' }}
                            >
                              Active
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              className="lg:hidden p-1"
              style={{ color: 'var(--warm-white)' }}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ backgroundColor: 'var(--obsidian)' }}
          >
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              <span className="font-display text-xl font-bold text-accent-gradient">DUKE</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2"
                style={{ color: 'var(--warm-white)' }}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-4 overflow-y-auto h-[calc(100vh-64px)]">
              <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                {t.home}
              </Link>
              <div className="py-2">
                <div className="section-label mb-2">Facilities</div>
                {zoneLinks.map((z) => (
                  <Link
                    key={z.href}
                    href={z.href}
                    className="mobile-nav-link pl-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    {z.label} <span style={{ color: 'var(--muted-warm)' }} className="text-xs">— {z.sub}</span>
                  </Link>
                ))}
              </div>
              {otherLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="py-3 mt-2" style={{ borderTop: '1px solid var(--border-accent)' }}>
                <div className="section-label mb-3">Theme Color</div>
                <div className="grid grid-cols-5 gap-3">
                  {THEMES.map((th) => (
                    <button
                      key={th.key}
                      onClick={() => {
                        setTheme(th.key);
                      }}
                      className={cn(
                        'theme-option w-full aspect-square rounded-lg border-2 relative',
                        theme === th.key && 'active'
                      )}
                      style={{
                        background: `linear-gradient(135deg, ${th.bg} 0%, ${th.bg} 50%, ${th.primary}33 100%)`,
                        borderColor: theme === th.key ? th.primary : `${th.primary}44`,
                      }}
                      title={th.name}
                    >
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1.5 rounded-full"
                        style={{ backgroundColor: th.primary }}
                      />
                    </button>
                  ))}
                </div>
              </div>

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
          color: var(--warm-white);
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          transition: color 0.2s;
        }
        :global(.nav-link:hover) {
          color: var(--accent-500);
        }
        :global(.mobile-nav-link) {
          display: block;
          padding: 0.75rem 0;
          font-size: 1.125rem;
          color: var(--warm-white);
          border-bottom: 1px solid var(--border-accent);
        }
        :global(.mobile-nav-link:hover) {
          color: var(--accent-500);
        }
      `}</style>
    </>
  );
}
