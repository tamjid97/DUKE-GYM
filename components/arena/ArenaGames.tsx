'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { games } from '@/data/games';
import { GoldButton } from '@/components/shared/GoldButton';

export function ArenaGames() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="pick-your-game" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.15), transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.15), transparent)' }} />

      <div className="mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
              Signature Experiences
            </span>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2
              className="font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(44px, 5.8vw, 88px)', lineHeight: 0.95 }}
            >
              PICK YOUR
              <br />
              <span className="text-gold-gradient">GAME.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
              Six curated play arenas — from the quiet focus of snooker to the electric rush of console gaming.
              Member preferred rates, non-member walk-ins always welcome.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {games.map((g, i) => (
            <motion.article
              key={g.id}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: i * 0.07 }}
              className="group relative overflow-hidden border border-[rgba(212,175,55,0.12)] transition-all duration-500 hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.2)]"
              style={{ minHeight: i === 0 ? '520px' : i === games.length - 1 ? '520px' : '420px', background: '#0E0E10' }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  src={g.image}
                  alt={g.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  initial={false}
                  whileHover={reduceMotion ? {} : { scale: 1.08 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/60 to-[#0A0A0C]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/60 via-transparent to-transparent" />
                <div className="absolute left-0 right-0 top-0 h-px opacity-60" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)' }} />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="font-display text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]"
                  >
                    {String(i + 1).padStart(2, '0')} / ARENA
                  </span>
                  <span className="text-[#D4AF37] opacity-45">◆</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E877A]">
                    {g.available ? 'Available Today' : 'Limited'}
                  </span>
                </div>

                <motion.h3
                  className="font-display font-bold text-warm-white transition-colors duration-500 group-hover:text-gold-gradient"
                  style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1 }}
                >
                  {g.name}
                </motion.h3>

                <div className="mt-8 flex items-end justify-between gap-6">
                  <div className="flex items-baseline gap-8">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">Member</div>
                      <div className="mt-2 font-display text-3xl font-bold text-gold-gradient sm:text-4xl">
                        ৳{g.priceMember}
                        <span className="ml-1 text-sm font-medium text-[#A8A39A]">/hr</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">Guest</div>
                      <div className="mt-2 font-display text-2xl font-semibold text-warm-white sm:text-3xl">
                        ৳{g.pricePerHour}
                        <span className="ml-1 text-sm font-medium text-[#8E877A]">/hr</span>
                      </div>
                    </div>
                  </div>
                  <motion.a
                    href="#book-slot"
                    initial={false}
                    whileHover={reduceMotion ? {} : { x: 4 }}
                    className="group/btn hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37] transition-all sm:inline-flex"
                  >
                    Book
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </motion.a>
                </div>

                <motion.div
                  className="mt-8 h-px w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.85), rgba(241,221,160,0.3), transparent)' }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
