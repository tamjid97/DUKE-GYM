'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { comboDeals } from '@/data/menu';

const comboEyebrows = ['POST-WORKOUT', 'BREAKFAST POWER', 'BENGALI FEAST'];

const cardConfig = [
  { lgCol: 'lg:col-span-4', lgMt: 'lg:-mt-0', minH: 'min-h-[420px]' },
  { lgCol: 'lg:col-span-4', lgMt: 'lg:-mt-12', minH: 'min-h-[380px]' },
  { lgCol: 'lg:col-span-4', lgMt: 'lg:mt-0', minH: 'min-h-[460px]' },
];

export function KitchenCombos() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0B0B0C]">
      <div className="mx-auto px-6 lg:px-16 max-w-[1600px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold mb-4">
            — CURATED DEALS
          </p>
          <h2
            className="font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5.2vw, 84px)', lineHeight: 0.95 }}
          >
            COMBO
            <br />
            <span className="text-gold-gradient">DEALS</span>
          </h2>
          <p className="mt-6 text-muted-warm max-w-xl">
            Save more with our curated combos — perfect for post-workout meals, breakfast power sessions, and Bengali feasts.
          </p>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-bronze via-gold to-champagne" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 items-end">
          {comboDeals.map((combo, i) => {
            const config = cardConfig[i];
            return (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`group relative h-full border border-gold/18 overflow-hidden bg-gradient-to-b from-smoke/50 to-obsidian backdrop-blur ${config.lgCol} ${config.lgMt} ${config.minH}`}
              >
                <div className="h-40 relative bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_65%)]">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

                  <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-gold/55" />
                  <div className="absolute top-4 right-4 w-5 h-5 border-r border-t border-gold/55" />

                  <span className="font-display font-bold text-[120px] leading-none absolute top-0 left-6 opacity-[0.05] text-gold">
                    0{i + 1}
                  </span>

                  <div className="absolute top-5 right-5 flex flex-col items-center justify-center h-16 w-16 rounded-full bg-gold text-obsidian">
                    <span className="text-[9px] uppercase tracking-[0.22em] font-bold">SAVE</span>
                    <span className="text-[13px] font-bold">৳{combo.save}</span>
                  </div>

                  <span className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.35em] text-gold/90">
                    {comboEyebrows[i]}
                  </span>
                </div>

                <div className="p-7 pt-4">
                  <h3 className="font-display font-bold text-[26px] lg:text-[28px] text-warm-white leading-tight mb-3 group-hover:text-gold transition-colors duration-500">
                    {combo.name}
                  </h3>
                  <div className="h-px w-16 bg-gradient-to-r from-bronze via-gold to-transparent mb-5" />

                  <ul className="space-y-2.5 mb-7">
                    {combo.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] text-warm-white/82">
                        <span className="h-1.5 w-1.5 mt-[0.55em] shrink-0 text-gold">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between border-t border-gold/10 pt-5">
                    <span className="font-display text-[34px] font-bold text-warm-white" style={{ lineHeight: 1 }}>
                      ৳{combo.price}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                      CURATED VALUE
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
