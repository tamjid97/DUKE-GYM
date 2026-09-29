'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/components/providers/LanguageProvider';
import { useTheme, THEMES } from '@/components/providers/ThemeProvider';
import { ThemePicker } from '@/components/shared/ThemePicker';
import { waLink } from '@/lib/contact';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLang();
  const { theme, setTheme } = useTheme();

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
    { href: '/trainers', label: t.trainersPage },
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
        <nav className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">

          {/* LOGO */}
     <Link
  href="/"
  className="flex shrink-0 items-center gap-2 mr-6"
>
  <Image
    src="/favicon-source.svg"
    alt="Duke Fitness Club logo"
    width={64}
    height={64}
    className="h-16 w-16 shrink-0 object-contain"
    priority
  />

  <div className="hidden sm:flex flex-col justify-center leading-none">
    <div className="font-display text-xl font-bold tracking-widest text-accent-gradient">
      DUKE
    </div>

    <div
      className="mt-0.5 text-[9px] uppercase tracking-[0.3em]"
      style={{ color: 'var(--muted-warm)' }}
    >
      Fitness Club
    </div>
  </div>
</Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 lg:flex min-w-0">
            <Link
              href="/"
              className={cn(
                'nav-link',
                pathname === '/' && 'text-accent'
              )}
              style={
                pathname === '/'
                  ? { color: 'var(--accent-primary)' }
                  : undefined
              }
            >
              {t.home}
            </Link>

            {/* FACILITIES */}
            <div
              className="relative"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1"
                style={
                  pathname.startsWith('/gym') ||
                  pathname.startsWith('/swimming') ||
                  pathname.startsWith('/restaurant') ||
                  pathname.startsWith('/pool-game')
                    ? { color: 'var(--accent-primary)' }
                    : undefined
                }
              >
                Facilities

                <span
                  className={cn(
                    'text-xs transition-transform',
                    facilitiesOpen && 'rotate-180'
                  )}
                  style={{ color: 'var(--accent-primary)' }}
                >
                  ▼
                </span>
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
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              'color-mix(in srgb, var(--accent-500) 10%, transparent)')
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              'transparent')
                          }
                        >
                          <div>
                            <div
                              className="text-sm font-medium"
                              style={{
                                color: 'var(--warm-white)',
                              }}
                            >
                              {z.label}
                            </div>

                            <div
                              className="text-xs"
                              style={{
                                color: 'var(--muted-warm)',
                              }}
                            >
                              {z.sub}
                            </div>
                          </div>

                          <span
                            className="text-sm"
                            style={{
                              color: 'var(--accent-primary)',
                            }}
                          >
                            →
                          </span>
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
                style={
                  pathname === l.href
                    ? { color: 'var(--accent-primary)' }
                    : undefined
                }
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <ThemePicker />

            <a
              href={waLink(
                'Hello Duke Fitness Club! I would like to join.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden rounded-full px-5 py-2 text-sm sm:inline-block"
            >
              {t.joinNow}
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 lg:hidden rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-all"
              style={{
                color: 'var(--accent-primary)',
              }}
              aria-label="Open menu"
            >
              <span className="text-2xl font-bold">☰</span>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{
              backgroundColor: 'var(--obsidian)',
            }}
          >
            <div
              className="flex items-center justify-between border-b p-4"
              style={{
                borderColor: 'var(--border-accent)',
              }}
            >
              <Link
                href="/"
                className="flex shrink-0 items-center gap-2"
              >
                <Image
                  src="/favicon-source.svg"
                  alt="Duke Fitness Club logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 object-contain"
                />

                <div className="flex flex-col justify-center leading-none">
                  <span className="font-display text-xl font-bold text-accent-gradient">
                    DUKE
                  </span>

                  <span
                    className="mt-0.5 text-[6px] uppercase tracking-[0.25em]"
                    style={{
                      color: 'var(--muted-warm)',
                    }}
                  >
                    Fitness Club
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-all"
                style={{
                  color: 'var(--accent-primary)',
                }}
              >
                <span className="text-2xl font-bold">✕</span>
              </button>
            </div>

            <div className="flex h-[calc(100vh-64px)] flex-col gap-1 overflow-y-auto p-4">
              <Link
                href="/"
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.home}
              </Link>

              <div className="py-2">
                <div className="section-label mb-2">
                  Facilities
                </div>

                {zoneLinks.map((z) => (
                  <Link
                    key={z.href}
                    href={z.href}
                    className="mobile-nav-link pl-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    {z.label}{' '}
                    <span
                      style={{
                        color: 'var(--muted-warm)',
                      }}
                      className="text-xs"
                    >
                      — {z.sub}
                    </span>
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

              {/* MOBILE THEMES */}
              <div
                className="mt-2 flex items-center gap-4 border-t py-3"
                style={{
                  borderColor: 'var(--border-accent)',
                }}
              >
                <div className="flex gap-2">
                  {THEMES.map((th) => (
                    <button
                      key={th.key}
                      onClick={() => setTheme(th.key)}
                      className={cn(
                        'theme-option relative h-8 w-8 flex-shrink-0 rounded-full border-2',
                        theme === th.key && 'active'
                      )}
                      style={{
                        background: `linear-gradient(135deg, ${th.deep} 0%, ${th.primary} 50%, ${th.highlight} 100%)`,
                        borderColor:
                          theme === th.key
                            ? th.primary
                            : `${th.primary}44`,
                        boxShadow:
                          theme === th.key
                            ? `0 0 10px ${th.primary}40`
                            : 'none',
                      }}
                      title={th.name}
                    >
                      {theme === th.key && (
                        <div
                          className="absolute inset-0 rounded-full border-2"
                          style={{
                            borderColor: th.primary,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={waLink(
                  'Hello Duke Fitness Club! I would like to join.'
                )}
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
          white-space: nowrap;
        }

        :global(.nav-link:hover) {
          color: var(--accent-primary);
        }

        :global(.mobile-nav-link) {
          display: block;
          padding: 0.75rem 0;
          font-size: 1.125rem;
          color: var(--warm-white);
          border-bottom: 1px solid var(--border-accent);
        }

        :global(.mobile-nav-link:hover) {
          color: var(--accent-primary);
        }
      `}</style>
    </>
  );
}