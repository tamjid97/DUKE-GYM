'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function KitchenPhilosophy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="order-1 lg:order-1 lg:col-span-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Grilled Chicken Bowl"
                className={`h-full w-full object-cover ${reduceMotion ? '' : 'ken-burns'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/10 to-transparent" />
              <div className="gym-grain" />

              <div className="absolute left-4 top-4 h-4 w-4 border border-[#D4AF37] border-b-0 border-r-0 opacity-60" />
              <div className="absolute right-4 top-4 h-4 w-4 border border-[#D4AF37] border-b-0 border-l-0 opacity-60" />
              <div className="absolute bottom-4 left-4 h-4 w-4 border border-[#D4AF37] border-r-0 border-t-0 opacity-60" />
              <div className="absolute bottom-4 right-4 h-4 w-4 border border-[#D4AF37] border-l-0 border-t-0 opacity-60" />

              <span className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.4em] text-gold opacity-80">
                — 01
              </span>
            </motion.div>
          </div>

          <div className="order-2 lg:order-2 lg:col-span-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-px w-14 bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
                THE STORY
              </span>
            </motion.div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display font-bold text-warm-white"
              style={{
                fontSize: 'clamp(42px, 5vw, 80px)',
                lineHeight: 0.98,
                letterSpacing: '-0.01em',
              }}
            >
              CHEF&apos;S
              <br />
              <span className="text-gold-gradient">PHILOSOPHY</span>
            </motion.h2>

            <motion.div
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true }}
              className="gold-underline mt-6 h-px w-40"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="mt-8 max-w-xl text-warm-white/88 sm:text-[15px] lg:text-base"
              style={{ lineHeight: 1.9 }}
            >
              At Duke Kitchen, we believe fitness is not just about what you do in the gym — it&apos;s also about what you put on your plate. Our chef crafts every dish with performance in mind: high-protein, balanced macros, and flavors that celebrate both international and Bengali cuisine. Whether you&apos;re fueling for a workout or recovering after one, we&apos;ve got your plate covered.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="text-gold">◆</span>
              <span className="text-[11px] uppercase tracking-[0.38em] text-muted-warm">
                DUKE KITCHEN · EST. CRAFT
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
