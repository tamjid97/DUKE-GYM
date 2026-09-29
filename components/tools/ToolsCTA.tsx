'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';
import { Users, Dumbbell } from 'lucide-react';

export function ToolsCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-[rgba(212,175,55,0.12)] py-28 lg:py-40" style={{ background: '#050506' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={siteConfig.zones.gym.image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-[45%_35%] opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/55 via-[#050506]/82 to-[#050506]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute left-1/2 top-[20%] h-[440px] w-[680px] -translate-x-1/2 rounded-full opacity-50"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.22), transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="gym-grain opacity-60" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1500px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85 }}
          className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-4">
              <Dumbbell className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
                Step 02 · Trainer-Led Programming
              </span>
            </div>
            <h2
              className="mt-6 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(48px, 6.5vw, 108px)', lineHeight: 0.94, letterSpacing: '-0.01em' }}
            >
              TRACK. PLAN.
              <br />
              <motion.span
                className="block"
                animate={reduceMotion
                  ? {}
                  : {
                      filter: [
                        'drop-shadow(0 0 0 rgba(212,175,55,0))',
                        'drop-shadow(0 0 52px rgba(212,175,55,0.45)) drop-shadow(0 0 120px rgba(212,175,55,0.22))',
                        'drop-shadow(0 0 22px rgba(212,175,55,0.3))',
                      ],
                    }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                style={{
                  background: 'linear-gradient(135deg, #7B5E20 0%, #B89338 18%, #F1DDA0 48%, #D4AF37 70%, #8C6B2A 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                DOMINATE.
              </motion.span>
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-[#B6B0A5] lg:text-[16px]">
              Data without direction is just noise. Your Duke trainer turns these performance lab
              readings into a periodised 4, 8 or 12-week program — customised to your lifestyle, recovery
              and exact goals.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-6 max-w-lg">
              <div className="border border-[rgba(212,175,55,0.15)] p-5" style={{ background: 'rgba(12,12,14,0.55)' }}>
                <Users className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                <div className="mt-3 font-display text-2xl font-bold text-gold-gradient">{siteConfig.stats.trainers}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#8E877A]">Certified Trainers</div>
              </div>
              <div className="border border-[rgba(212,175,55,0.15)] p-5" style={{ background: 'rgba(12,12,14,0.55)' }}>
                <Dumbbell className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                <div className="mt-3 font-display text-2xl font-bold text-gold-gradient">{siteConfig.stats.programs}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#8E877A]">Signature Programs</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-10">
            <div
              className="absolute -left-10 top-1/2 hidden h-[70%] w-px opacity-60 lg:block"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.45), transparent)' }}
            />
            <div className="relative border border-[rgba(212,175,55,0.2)] p-10 lg:p-12" style={{ background: 'linear-gradient(180deg, rgba(14,14,16,0.92), rgba(8,8,9,0.96))' }}>
              <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)' }} />
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">Private Session</div>
              <div className="mt-4 font-display text-3xl font-bold text-warm-white lg:text-4xl">
                Book a 1:1 <span className="text-gold-gradient">Strategy Call</span>
              </div>
              <p className="mt-4 text-sm text-[#B6B0A5]">
                Bring your lab results. 45 minutes with a senior trainer — goal audit, program
                direction, and a roadmap recommendation.
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-[rgba(212,175,55,0.1)] pt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#8E877A]">Complimentary</div>
                  <div className="mt-1 font-display text-2xl font-bold text-gold-gradient">Free</div>
                </div>
                <a
                  href={waLink('Hello Duke Fitness Club! I would like to book a 1:1 trainer strategy call after using the Performance Lab.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-gold inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em]"
                  style={{ borderRadius: 0 }}
                >
                  Book Session
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#5E574D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                Typically replies within 30 minutes
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
