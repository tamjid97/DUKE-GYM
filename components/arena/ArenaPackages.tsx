'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { eventPackages } from '@/data/games';
import { GoldButton } from '@/components/shared/GoldButton';

import { waLink } from '@/lib/contact';

const packageImages = [
  'https://images.pexels.com/photos/9423176/pexels-photo-9423176.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&dpr=1',
  'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&dpr=1',
  'https://images.pexels.com/photos/31512997/pexels-photo-31512997.png?auto=compress&cs=tinysrgb&w=1000&h=700&dpr=1',
];

const packageBadges = ['Birthdays', 'Corporate', 'Friends Night'];

export function ArenaPackages() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(212,175,55,0.05), transparent 55%)' }} />

      <div className="relative mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-0 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
                <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
                  Private Events
                </span>
              </div>
              <h2
                className="mt-6 font-display font-bold text-warm-white"
                style={{ fontSize: 'clamp(44px, 5.8vw, 92px)', lineHeight: 0.95 }}
              >
                PARTY &amp;
                <br />
                <span className="text-gold-gradient">CORPORATE.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
                Book the entire arena for your occasion. Catering from Duke Kitchen, private hosts,
                tournament setups and trophies on request.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {eventPackages.map((pkg, i) => {
            const featured = i === 1;
            return (
              <motion.article
                key={pkg.name}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: i * 0.08 }}
                className={`group relative flex flex-col overflow-hidden border transition-all duration-500 ${
                  featured
                    ? 'lg:-my-6 lg:shadow-[0_0_60px_-20px_rgba(212,175,55,0.4)] border-[#D4AF37]/55 hover:border-[#D4AF37]'
                    : 'border-[rgba(212,175,55,0.14)] hover:border-[rgba(212,175,55,0.42)]'
                }`}
                style={{ background: '#0C0C0E' }}
              >
                {featured && (
                  <div
                    className="absolute left-1/2 top-0 z-20 -translate-x-1/2 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em]"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #8C6B2A)',
                      color: '#0A0A0C',
                    }}
                  >
                    <span className="flex items-center gap-2"><span className="h-3 w-3">⭐</span> Most Popular</span>
                  </div>
                )}

                <div className="relative h-64 w-full overflow-hidden">
                  <motion.img
                    src={packageImages[i % packageImages.length]}
                    alt={pkg.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    initial={false}
                    whileHover={reduceMotion ? {} : { scale: 1.08 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/60 to-[#0C0C0E]/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/60 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="border border-[rgba(212,175,55,0.35)] bg-[rgba(12,12,14,0.7)] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] backdrop-blur-sm">
                      {packageBadges[i]}
                    </span>
                  </div>
                </div>

                <div className={`relative z-10 flex flex-1 flex-col p-8 ${featured ? 'lg:p-10' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`font-display font-bold leading-tight text-warm-white ${featured ? 'text-3xl' : 'text-2xl'}`}
                        style={{ transition: 'color 0.4s ease' }}
                      >
                        {pkg.name}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#8E877A]">
                        <span className="h-3.5 w-3.5 text-[#D4AF37]">✨</span>
                        {pkg.duration} of private play
                      </div>
                    </div>
                  </div>

                  <ul className="mt-7 space-y-3.5 flex-1">
                    {pkg.includes.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: j * 0.04 }}
                        className="flex items-start gap-3 text-sm text-[#C9BFA8]"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 rotate-45 border border-[#D4AF37]" style={{ background: 'rgba(212,175,55,0.25)' }} />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 border-t border-[rgba(212,175,55,0.1)] pt-7">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#8E877A]">Investment</div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span
                        className="font-display font-black leading-none"
                        style={{
                          fontSize: featured ? '3.6rem' : '3rem',
                          background: 'linear-gradient(135deg, #F1DDA0 0%, #D4AF37 45%, #8C6B2A 100%)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 4px 24px rgba(212,175,55,0.28))',
                        }}
                      >
                        ৳{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.28em] text-[#5E574D]">Flat rate</span>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <GoldButton
                        href={waLink(`Hello Duke Arena! I'm interested in the ${pkg.name} package (${pkg.duration}).`)}
                        external
                        variant={featured ? 'primary' : 'secondary'}
                        icon
                        className="flex-1"
                      >
                        Enquire
                      </GoldButton>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#8E877A]"
        >
          <span className="h-4 w-4 text-[#D4AF37]">👥</span>
          Need a bespoke package for 30+ guests?
          <a
            href={waLink('Hello Duke Arena! I would like a bespoke event package quote.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#D4AF37] transition-all hover:gap-2.5"
          >
            Talk to our events team <span className="h-3.5 w-3.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
