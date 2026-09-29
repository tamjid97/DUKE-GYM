'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { leaderboard } from '@/data/games';
import { Crown, Medal, Award, Flame } from 'lucide-react';

const rankStyles = [
  {
    rowBg: 'linear-gradient(90deg, rgba(212,175,55,0.18), rgba(212,175,55,0.04) 55%, transparent)',
    sideAccent: '#D4AF37',
    rankColor: '#F1DDA0',
    nameColor: '#FFF8E7',
    numberGrad: 'linear-gradient(135deg, #F1DDA0 0%, #D4AF37 55%, #8C6B2A 100%)',
    glow: 'drop-shadow(0 2px 16px rgba(212,175,55,0.5))',
    icon: Crown,
  },
  {
    rowBg: 'linear-gradient(90deg, rgba(200,200,210,0.1), rgba(200,200,210,0.02) 55%, transparent)',
    sideAccent: '#CFCFCF',
    rankColor: '#DCDCE3',
    nameColor: '#ECECF2',
    numberGrad: 'linear-gradient(135deg, #F4F4F7 0%, #CFCFCF 55%, #8A8A94 100%)',
    glow: 'drop-shadow(0 2px 12px rgba(200,200,210,0.35))',
    icon: Medal,
  },
  {
    rowBg: 'linear-gradient(90deg, rgba(205,127,50,0.12), rgba(205,127,50,0.03) 55%, transparent)',
    sideAccent: '#CD7F32',
    rankColor: '#E6B98A',
    nameColor: '#F2E2D0',
    numberGrad: 'linear-gradient(135deg, #E6B98A 0%, #CD7F32 55%, #8A5420 100%)',
    glow: 'drop-shadow(0 2px 12px rgba(205,127,50,0.4))',
    icon: Award,
  },
];

export function ArenaLeaderboard() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36" style={{ background: '#070708' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.14), transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }} />
      </div>

      <div className="relative mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1320px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4">
            <Flame className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.6} />
            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
              Hall of Champions
            </span>
            <Flame className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.6} />
          </div>
          <h2
            className="mt-6 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(44px, 6vw, 96px)', lineHeight: 0.94 }}
          >
            CLUB
            <br />
            <span className="text-gold-gradient">LEADERBOARD.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
            Monthly ranked standings across every arena. Climb the board, earn medals, and claim royal status.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="relative border border-[rgba(212,175,55,0.16)]"
          style={{ background: 'linear-gradient(180deg, rgba(14,14,16,0.85), rgba(10,10,12,0.9))' }}
        >
          <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)' }} />
          <div className="absolute left-0 right-0 bottom-0 h-px opacity-50" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)' }} />

          <div className="hidden border-b border-[rgba(212,175,55,0.1)] px-6 py-4 lg:grid lg:grid-cols-[80px_1fr_180px_160px] lg:gap-6 lg:px-10">
            <div className="text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">Rank</div>
            <div className="text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">Champion</div>
            <div className="text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">Arena</div>
            <div className="text-right text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">Points</div>
          </div>

          <div className="divide-y divide-[rgba(212,175,55,0.08)]">
            {leaderboard.map((p, i) => {
              const rs = rankStyles[i] || {
                rowBg: 'transparent',
                sideAccent: 'rgba(212,175,55,0.2)',
                rankColor: '#8E877A',
                nameColor: '#D6CFC3',
                numberGrad: 'linear-gradient(135deg, #B6B0A5, #8E877A)',
                glow: 'none',
                icon: Award,
              };
              const Icon = rs.icon;

              return (
                <motion.div
                  key={p.rank}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="group relative grid grid-cols-[60px_1fr_auto] items-center gap-4 px-5 py-5 lg:grid-cols-[80px_1fr_180px_160px] lg:gap-6 lg:px-10 lg:py-6"
                  style={{ background: rs.rowBg }}
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] opacity-80" style={{ background: rs.sideAccent }} />

                  <div className="flex items-center gap-3 lg:gap-4">
                    <div
                      className="relative flex h-11 w-11 items-center justify-center border lg:h-14 lg:w-14"
                      style={{
                        borderColor: `${rs.sideAccent}55`,
                        background: `linear-gradient(135deg, ${rs.sideAccent}14, transparent 70%)`,
                      }}
                    >
                      <Icon
                        className={`${i < 3 ? 'h-5 w-5 lg:h-6 lg:w-6' : 'h-4 w-4 lg:h-5 lg:w-5'}`}
                        style={{ color: rs.sideAccent, strokeWidth: i < 3 ? 1.4 : 1.6 }}
                      />
                    </div>
                    <div
                      className="font-display font-black leading-none lg:text-3xl"
                      style={{
                        background: rs.numberGrad,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: rs.glow,
                        fontSize: i === 0 ? '2.4rem' : i === 1 ? '2rem' : i === 2 ? '1.8rem' : '1.4rem',
                      }}
                    >
                      #{p.rank}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="hidden text-[10px] uppercase tracking-[0.28em] text-[#5E574D] lg:block">Name</span>
                    <div
                      className="font-display font-semibold text-lg lg:text-xl"
                      style={{ color: rs.nameColor }}
                    >
                      {p.name}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="hidden text-[10px] uppercase tracking-[0.28em] text-[#5E574D] lg:block">Arena</span>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#B6B0A5] lg:text-sm lg:tracking-[0.22em]">
                      {p.game}
                    </div>
                  </div>

                  <div className="col-span-3 flex items-center justify-between border-t border-[rgba(212,175,55,0.07)] pt-3 lg:col-auto lg:border-t-0 lg:pt-0 lg:text-right">
                    <span className="text-[9px] uppercase tracking-[0.32em] text-[#5E574D] lg:hidden">Points</span>
                    <div
                      className="font-display font-bold"
                      style={{
                        fontSize: i === 0 ? '1.9rem' : i === 1 ? '1.6rem' : i === 2 ? '1.45rem' : '1.2rem',
                        background: rs.numberGrad,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: rs.glow,
                      }}
                    >
                      {p.points.toLocaleString()}
                      <span className="ml-1 text-sm font-medium opacity-60">pts</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-[rgba(212,175,55,0.1)] px-5 py-4 lg:px-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5E574D]">Updated weekly — ranked by tournament + challenge results</span>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              Live
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
