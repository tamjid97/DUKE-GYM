'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { menuItems, menuCategories, type MenuItem } from '@/data/menu';
import { Tabs } from '@/components/shared/Tabs';
import { Modal } from '@/components/shared/Modal';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function KitchenMenu() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const reduceMotion = useReducedMotion();

  const tabs = menuCategories.map((c) => ({ id: c, label: c }));
  const viewport = { once: true };

  return (
    <section id="kitchen-menu" className="relative py-24 lg:py-32" style={{ backgroundColor: '#0B0B0C' }}>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-gold">— THE MENU</p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(42px, 5.5vw, 88px)', lineHeight: 0.95 }}
          >
            <span className="block text-warm-white">HEALTHY &amp;</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #8C6B2A 0%, #D4AF37 40%, #F1DDA0 60%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DELICIOUS
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-muted-warm">
            Search or browse by category. Every item shows calories and protein.
          </p>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-bronze via-gold to-champagne" />
        </motion.div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 mx-auto max-w-2xl"
        >
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/70">🔍</span>
            <input
              type="text"
              placeholder="Search the menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-none h-14 pl-14 pr-5 text-[15px] text-warm-white placeholder:text-muted-warm border-b-2 border-l border-r border-t border-gold/25 focus:border-gold/60 focus:outline-none bg-smoke/40 backdrop-blur transition-colors duration-300"
            />
          </div>
        </motion.div>

        <Tabs tabs={tabs} variant="editorial" className="mb-12">
          {(active) => {
            let filtered = menuItems.filter((m) => m.category === active);
            if (search) {
              filtered = menuItems.filter((m) =>
                m.name.toLowerCase().includes(search.toLowerCase()) ||
                m.description.toLowerCase().includes(search.toLowerCase())
              );
            }
            return (
              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="group relative overflow-hidden cursor-pointer bg-smoke/30 border border-gold/15 transition-all duration-500 hover:border-gold/45 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                    onClick={() => setSelected(item)}
                  >
                    <div className="h-64 lg:h-72 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
                      <div className="gym-grain" />

                      <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/50" />
                      <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/50" />

                      {item.popular && (
                        <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3.5 py-1.5 bg-gold text-obsidian text-[10px] uppercase tracking-[0.22em] font-bold rounded-none">
                          <span className="h-3 w-3 fill-obsidian">⭐</span> Popular
                        </span>
                      )}

                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {item.veg && (
                          <span className="inline-flex items-center gap-1 bg-smoke/80 backdrop-blur px-2 py-0.5 border border-green-400/30 text-[10px] uppercase tracking-[0.2em] text-green-400">
                            <span className="h-4 w-4 text-green-400">🥬</span> Veg
                          </span>
                        )}
                        {item.spicy && (
                          <span className="inline-flex items-center gap-1 bg-smoke/80 backdrop-blur px-2 py-0.5 border border-red-400/30 text-[10px] uppercase tracking-[0.2em] text-red-400">
                            <span className="h-4 w-4 text-red-400">🌶️</span> Spicy
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-6 lg:p-7">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-display font-bold text-[19px] lg:text-[20px] text-warm-white group-hover:text-gold transition-colors duration-400 leading-tight">
                          {item.name}
                        </h3>
                        <span
                          className="font-display font-bold text-[20px] whitespace-nowrap"
                          style={{
                            background: 'linear-gradient(135deg, #8C6B2A 0%, #D4AF37 40%, #F1DDA0 60%, #D4AF37 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          ৳{item.price}
                        </span>
                      </div>
                      <p className="text-[13px] text-muted-warm mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gold/12 flex gap-4 text-[12px]">
                        {item.calories !== undefined && (
                          <span className="flex items-center gap-1.5 text-muted-warm">
                            <span className="text-gold">·</span>
                            <span className="font-bold">{item.calories}</span> cal
                          </span>
                        )}
                        {item.protein !== undefined && (
                          <span className="flex items-center gap-1.5 text-gold/90">
                            <span className="text-gold">·</span>
                            <span className="font-bold">{item.protein}g</span> protein
                          </span>
                        )}
                      </div>
                      <div className="mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-gold font-semibold flex items-center gap-2">
                          View details &amp; order <span>→</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          }}
        </Tabs>

        <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
          {selected && (
            <div className="flex flex-col gap-5">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-none mb-1">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/30" />
                <div className="gym-grain" />
                <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/60" />
                <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-gold/60" />
                <div className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold/60" />
                <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/60" />
              </div>

              <p className="text-[14px] text-warm-white/85 leading-relaxed">
                {selected.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[13px]">
                <div className="glass-card corner-ornament px-4 py-3 text-warm-white font-semibold">
                  ৳{selected.price}
                </div>
                {selected.calories !== undefined && (
                  <div className="glass-card corner-ornament px-4 py-3 text-warm-white">
                    {selected.calories} calories
                  </div>
                )}
                {selected.protein !== undefined && (
                  <div className="glass-card corner-ornament px-4 py-3 text-gold">
                    {selected.protein}g protein
                  </div>
                )}
                {selected.veg && (
                  <div className="glass-card corner-ornament px-4 py-3 text-green-400 flex items-center gap-2">
                    <span className="h-4 w-4">🥬</span> Vegetarian
                  </div>
                )}
                {selected.spicy && (
                  <div className="glass-card corner-ornament px-4 py-3 text-red-400 flex items-center gap-2">
                    <span className="h-4 w-4">🌶️</span> Spicy
                  </div>
                )}
              </div>

              <div className="mt-2">
                <button
                  onClick={() => window.open(waLink(`Hello Duke Kitchen! I'd like to order: ${selected.name} — ৳${selected.price}.`), '_blank')}
                  className="w-full py-4 text-sm uppercase tracking-[0.22em] rounded-none bg-gradient-to-r from-bronze via-gold to-champagne text-obsidian font-bold hover:opacity-90 transition-opacity duration-300"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
