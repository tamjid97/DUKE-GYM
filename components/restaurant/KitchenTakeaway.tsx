'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { telLink, waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function KitchenTakeaway() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden min-h-[540px] flex items-center py-24 lg:py-28">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Grilled Chicken Bowl"
          className={`h-full w-full object-cover ${reduceMotion ? '' : 'ken-burns'}`}
        />
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/35 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 32%, rgba(11,11,12,0.85) 85%)' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute bottom-0 left-0 h-56 w-[60%] opacity-50"
          style={{ background: 'radial-gradient(ellipse at bottom, rgba(34,38,42,0.85), transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className={`absolute bottom-[20%] right-[10%] h-72 w-72 rounded-full opacity-60 ${reduceMotion ? '' : 'gold-light-drift'}`}
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.20) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="gym-grain" />
      </div>

      <div className="relative z-10 mx-auto px-6 lg:px-16 max-w-[1600px] w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="flex-1">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.42em] text-gold mb-5 block">— FAST &amp; FRESH</span>
              <h2
                className="font-display font-bold"
                style={{ fontSize: 'clamp(48px, 7vw, 120px)', lineHeight: 0.92, letterSpacing: '-0.015em' }}
              >
                <span className="text-warm-white block">TAKEAWAY</span>
                <span className="text-gold-gradient block">&amp; DELIVERY.</span>
              </h2>
              <p className="mt-8 max-w-xl text-warm-white/82 text-[15px] lg:text-base leading-[1.85]">
                Call us for takeaway orders or delivery within Gulshan area.
              </p>
              <div className="mt-10 flex items-center gap-4 border border-gold/25 bg-smoke/40 backdrop-blur px-5 py-4 inline-flex max-w-xl">
                <span className="text-gold">◆</span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-gold font-semibold">Opening Hours</span>
                <div className="h-5 w-px bg-gold/30" />
                <span className="text-[13px] text-warm-white font-medium tracking-wider">{siteConfig.zones.restaurant.hours}</span>
              </div>
            </motion.div>
          </div>

          <div className="shrink-0">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-4 items-start lg:items-end w-full lg:w-auto"
            >
              <a
                href={telLink()}
                className="btn-gold inline-flex items-center gap-3 px-10 py-[18px] text-sm font-semibold uppercase tracking-[0.24em] w-full lg:w-auto min-w-[260px] justify-center lg:justify-end"
                style={{ borderRadius: 0 }}
              >
                Call to Order
                <span>↗</span>
              </a>
              <a
                href={waLink('Hello Duke Kitchen! I would like to place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-[0.24em] border border-[rgba(212,175,55,0.45)] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)] w-full lg:w-auto min-w-[260px] justify-center lg:justify-end"
                style={{ borderRadius: 0 }}
              >
                WhatsApp Order
                <span>→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
