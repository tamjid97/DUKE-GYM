'use client';

import { motion, useReducedMotion } from 'framer-motion';


export function KitchenBenefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0B0B0C]">
      <div className="mx-auto px-6 lg:px-16 max-w-[1600px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold mb-4">
            — MEMBER PRIVILEGES
          </p>
          <h2
            className="font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5.2vw, 84px)', lineHeight: 0.95 }}
          >
            MEMBER
            <br />
            <span className="text-gold-gradient">BENEFITS</span>
          </h2>
          <p className="mt-6 text-muted-warm max-w-xl">
            Duke members enjoy exclusive dining privileges crafted to support every stage of your fitness journey.
          </p>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-bronze via-gold to-champagne" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative h-full min-h-[380px] overflow-hidden border border-gold/20 bg-gradient-to-br from-smoke/60 via-smoke/30 to-obsidian backdrop-blur"
          >
            <div className="absolute top-5 left-5 w-5 h-5 border-l border-t border-gold/50" />
            <div className="absolute top-5 right-5 w-5 h-5 border-r border-t border-gold/50" />

            <span className="absolute top-10 right-10 h-40 w-40 text-gold opacity-[0.07]">%</span>

            <div className="p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold/90 mb-4">
                  01 · TIERED SAVINGS
                </p>
                <div className="flex items-start gap-5">
                  <div className="h-16 w-16 flex items-center justify-center border border-gold/35 bg-gold/8 backdrop-blur shrink-0">
                    <span className="h-7 w-7 text-gold">%</span>
                  </div>
                  <h3 className="font-display font-bold text-warm-white text-[30px] lg:text-[34px] leading-[1.02]">
                    Member Discount
                  </h3>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-warm-white/85 max-w-lg">
                  Gold members get 10% off, Platinum 15%, Black Diamond 20% off all menu items.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-3 border border-gold/40 bg-gold/10 flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                    GOLD · 10% OFF
                  </span>
                </div>
                <div className="px-4 py-3 border border-[#E5E4E2]/30 bg-[#E5E4E2]/5">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#E5E4E2] font-semibold">
                    PLATINUM · 15% OFF
                  </span>
                </div>
                <div className="px-4 py-3 border border-champagne/35 bg-champagne/8">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-champagne font-semibold">
                    BLACK DIAMOND · 20% OFF
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid gap-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative h-full min-h-[180px] overflow-hidden border border-gold/15 bg-smoke/40 backdrop-blur p-7 lg:p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold/80 mb-3">
                02 · NUTRITION
              </p>
              <div className="flex flex-row gap-5 items-start">
                <div className="h-12 w-12 shrink-0 flex items-center justify-center border border-gold/30 bg-gold/8">
                  <span className="h-5 w-5 text-gold">🍽️</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-[22px] text-warm-white leading-tight mb-2">
                    Meal Plans
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-warm-white/82">
                    Weekly meal-plan subscriptions designed for gym members. Calorie-counted and portioned.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-full min-h-[180px] overflow-hidden border border-gold/15 bg-smoke/40 backdrop-blur p-7 lg:p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold/80 mb-3">
                03 · CONVENIENCE
              </p>
              <div className="flex flex-row gap-5 items-start">
                <div className="h-12 w-12 shrink-0 flex items-center justify-center border border-gold/30 bg-gold/8">
                  <span className="h-5 w-5 text-gold">🚚</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-[22px] text-warm-white leading-tight mb-2">
                    Takeaway & Delivery
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-warm-white/82">
                    Call us for takeaway or delivery within Gulshan area.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
