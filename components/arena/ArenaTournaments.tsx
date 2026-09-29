'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { tournaments } from '@/data/games';

import { waLink } from '@/lib/contact';

const tournamentImages = [
  'https://images.pexels.com/photos/31512997/pexels-photo-31512997.png?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/12590620/pexels-photo-12590620.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/9423176/pexels-photo-9423176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
];

export function ArenaTournaments() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.06), transparent 55%)' }} />

      <div className="relative mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
              <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
                Weekly Competition
              </span>
            </div>
            <h2
              className="mt-6 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(44px, 5.8vw, 92px)', lineHeight: 0.94 }}
            >
              TOURNAMENT
              <br />
              <span className="text-gold-gradient">NIGHTS.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
              Battle it out under the gold lights. Weekly ranked competitions with cash prizes, trophies and
              leaderboard points up for grabs.
            </p>
            <a
              href={waLink('Hello Duke Arena! I want to register for an upcoming tournament.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] transition-all hover:gap-3"
            >
              Register Entry <span className="h-3.5 w-3.5">→</span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {tournaments.map((t, i) => (
            <motion.article
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: i * 0.08 }}
              className={`group relative overflow-hidden border border-[rgba(212,175,55,0.14)] transition-all duration-500 hover:border-[rgba(212,175,55,0.45)] hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.18)] ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
              style={{ background: '#0C0C0E', minHeight: i === 0 ? '340px' : '260px' }}
            >
              <div className="absolute inset-0 z-0">
                <motion.img
                  src={tournamentImages[i % tournamentImages.length]}
                  alt={t.game}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60"
                  initial={false}
                  whileHover={reduceMotion ? {} : { scale: 1.06 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/80 to-[#0A0A0C]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
              </div>

              <div className={`relative z-10 flex h-full flex-col justify-between ${i === 0 ? 'p-10 lg:p-14' : 'p-8'}`}>
                <div className="flex items-center gap-5">
                  <div
                    className={`flex items-center justify-center border border-[rgba(212,175,55,0.3)] ${
                      i === 0 ? 'h-20 w-20 lg:h-24 lg:w-24' : 'h-14 w-14'
                    }`}
                    style={{ background: 'rgba(212,175,55,0.06)' }}
                  >
                    <span
                      className={`${i === 0 ? 'h-10 w-10 lg:h-12 lg:w-12' : 'h-7 w-7'} text-gold-gradient`}
                    >🏆</span>
                  </div>
                  <div className={`space-y-2 ${i === 0 ? '' : ''}`}>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      <span className="h-3 w-3">📅</span>
                      {t.day}
                      <span className="text-[#5E574D]">◆</span>
                      <span className="h-3 w-3">🕐</span>
                      {t.time}
                    </div>
                    <h3
                      className={`font-display font-bold text-warm-white transition-colors duration-500 group-hover:text-gold-gradient ${
                        i === 0 ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-3xl'
                      }`}
                      style={{ lineHeight: 1 }}
                    >
                      {t.game}
                    </h3>
                  </div>
                </div>

                <div className={`mt-8 flex items-end justify-between gap-6 ${i === 0 ? 'lg:mt-12' : ''}`}>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.32em] text-[#8E877A]">Prize Pool</div>
                    <div
                      className={`mt-3 font-display font-black leading-none ${
                        i === 0 ? 'text-5xl lg:text-7xl' : 'text-4xl lg:text-5xl'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, #F1DDA0 0%, #D4AF37 40%, #8C6B2A 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 4px 20px rgba(212,175,55,0.25))',
                      }}
                    >
                      {t.prize}
                    </div>
                  </div>
                  <a
                    href={waLink(`Hello Duke Arena! I'd like to register for the ${t.game} on ${t.day} at ${t.time}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 border border-[rgba(212,175,55,0.4)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37] transition-all duration-300 hover:bg-[rgba(212,175,55,0.08)] hover:border-[#D4AF37]"
                  >
                    Join
                    <span className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
