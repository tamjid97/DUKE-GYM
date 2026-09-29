'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { menuItems } from '@/data/menu';

export function KitchenSignature() {
  const reduceMotion = useReducedMotion();
  const popular = menuItems.filter((m) => m.popular === true);
  const heroItem = popular.reduce((max, item) => (item.price > max.price ? item : max), popular[0]);
  const supporting = popular.filter((m) => m.id !== heroItem.id);

  const viewport = { once: true };
  const fadeUp = reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport };
  const fadeUpHero = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport };
  const fadeUpCard = (delay: number) =>
    reduceMotion ? {} : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, transition: { delay }, viewport };

  return (
    <section className="relative border-t border-gold/10 border-b border-gold/10 bg-[#0B0B0C] py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 lg:mb-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-gold">— SIGNATURE SELECTION</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(42px, 5.5vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
            <span className="block text-warm-white">OUR</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #8C6B2A 0%, #D4AF37 40%, #F1DDA0 60%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SIGNATURE DISHES
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-warm">
            Handpicked favorites crafted with precision. Every plate tells a story of flavor, fuel, and finesse.
          </p>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-bronze via-gold to-champagne" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div {...fadeUpHero} className="group relative aspect-[16/11] h-full overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[560px]">
            <img
              src={heroItem.image}
              alt={heroItem.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/5" />
            <div className="gym-grain" />

            <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/60" />
            <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-gold/60" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold/60" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/60" />

            <div className="absolute right-6 top-6 flex items-center gap-2 bg-gold/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-obsidian backdrop-blur">
              <span className="text-obsidian">◆</span>
              SIGNATURE
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 p-8 lg:p-10">
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-gold/90">— GRILL · SIGNATURE</p>
              <h3
                className="font-display font-bold text-warm-white"
                style={{ fontSize: 'clamp(28px, 3.2vw, 52px)', lineHeight: 1.02 }}
              >
                {heroItem.name}
              </h3>
              <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-warm-white/80">{heroItem.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 rounded-full border border-gold/20 bg-smoke/60 px-3 py-1.5 text-[12px] backdrop-blur">
                  <span className="font-bold text-gold">৳{heroItem.price}</span>
                </span>
                {heroItem.calories !== undefined && (
                  <span className="flex items-center gap-2 rounded-full border border-gold/20 bg-smoke/60 px-3 py-1.5 text-[12px] text-warm-white/80 backdrop-blur">
                    {heroItem.calories} cal
                  </span>
                )}
                {heroItem.protein !== undefined && (
                  <span className="flex items-center gap-2 rounded-full border border-gold/20 bg-smoke/60 px-3 py-1.5 text-[12px] backdrop-blur">
                    <span className="text-gold">{heroItem.protein}g protein</span>
                  </span>
                )}
                {heroItem.spicy && (
                  <span className="flex items-center gap-2 rounded-full border border-gold/20 bg-smoke/60 px-3 py-1.5 text-[12px] backdrop-blur">
                    <Flame className="h-3.5 w-3.5 text-red-400" />
                  </span>
                )}
              </div>
              <div className="mt-7">
                <GoldButton
                  href={waLink(`Hello Duke Kitchen! I'd like to order: ${heroItem.name} — ৳${heroItem.price}.`)}
                  external
                  icon
                >
                  Order via WhatsApp
                </GoldButton>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {supporting.map((item, i) => {
              const isFirst = i === 0;
              return (
                <motion.div
                  key={item.id}
                  {...fadeUpCard(0.08 * (i + 1))}
                  transition={{ duration: 0.5 }}
                  className={`relative overflow-hidden border border-gold/15 bg-smoke/30 backdrop-blur ${isFirst ? 'aspect-[5/3]' : ''}`}
                  style={!isFirst ? { minHeight: '140px' } : {}}
                >
                  {isFirst ? (
                    <div className="grid h-full grid-cols-5">
                      <div className="relative col-span-2 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-smoke/60" />
                      </div>
                      <div className="relative col-span-3 flex flex-col justify-between p-5">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.28em] text-gold/80">— {item.category.toUpperCase()}</p>
                          <h4 className="mt-2 font-display text-lg font-bold text-warm-white">{item.name}</h4>
                          <p className="mt-2 text-[12px] leading-relaxed text-warm-white/70 line-clamp-2">{item.description}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-bold text-gold">৳{item.price}</span>
                            {item.protein !== undefined && (
                              <span className="text-[11px] text-gold/80">· {item.protein}g</span>
                            )}
                            {item.calories !== undefined && (
                              <span className="text-[11px] text-warm-white/60">· {item.calories} cal</span>
                            )}
                            {item.spicy && <Flame className="h-3 w-3 text-red-400" />}
                          </div>
                          <GoldButton
                            href={waLink(`Hello Duke Kitchen! I'd like to order: ${item.name} — ৳${item.price}.`)}
                            external
                            icon
                            variant="outline"
                            className="!px-3 !py-1.5 text-[11px]"
                          >
                            Order
                          </GoldButton>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid h-full grid-cols-12 gap-4 p-4">
                      <div className="relative col-span-4 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                        />
                      </div>
                      <div className="relative col-span-8 flex flex-col justify-between">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.28em] text-gold/80">— {item.category.toUpperCase()}</p>
                          <h4 className="mt-1 font-display text-base font-bold text-warm-white">{item.name}</h4>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-bold text-gold">৳{item.price}</span>
                            {item.protein !== undefined && (
                              <span className="text-[11px] text-gold/80">· {item.protein}g</span>
                            )}
                            {item.spicy && <Flame className="h-3 w-3 text-red-400" />}
                          </div>
                          <a
                            href={waLink(`Hello Duke Kitchen! I'd like to order: ${item.name} — ৳${item.price}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-champagne"
                          >
                            Order →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
