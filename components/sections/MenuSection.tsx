'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Flame, Leaf, Star } from 'lucide-react';
import { menuItems, menuCategories, comboDeals, type MenuItem } from '@/data/menu';
import { Tabs } from '@/components/shared/Tabs';
import { Modal } from '@/components/shared/Modal';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function MenuSection() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const tabs = menuCategories.map((c) => ({ id: c, label: c }));

  return (
    <div>
      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-warm" />
          <input
            type="text"
            placeholder="Search the menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gold/20 bg-smoke/50 pl-10 pr-4 py-2.5 text-sm text-warm-white placeholder:text-muted-warm focus:border-gold/50 focus:outline-none"
          />
        </div>
      </div>

      <Tabs tabs={tabs}>
        {(active) => {
          let filtered = menuItems.filter((m) => m.category === active);
          if (search) {
            filtered = menuItems.filter((m) =>
              m.name.toLowerCase().includes(search.toLowerCase()) ||
              m.description.toLowerCase().includes(search.toLowerCase())
            );
          }
          return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group glass-card overflow-hidden p-0 cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                    {item.popular && (
                      <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs text-obsidian font-semibold">
                        <Star className="h-3 w-3 fill-obsidian" /> Popular
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {item.veg && <Leaf className="h-4 w-4 text-green-400" />}
                      {item.spicy && <Flame className="h-4 w-4 text-red-400" />}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-warm-white group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-display text-lg text-gold-gradient whitespace-nowrap">৳{item.price}</span>
                    </div>
                    <p className="text-xs text-muted-warm mt-1 line-clamp-2">{item.description}</p>
                    {(item.calories || item.protein) && (
                      <div className="mt-3 flex gap-3 text-xs">
                        {item.calories && <span className="text-muted-warm">{item.calories} cal</span>}
                        {item.protein && <span className="text-gold">{item.protein}g protein</span>}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          );
        }}
      </Tabs>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && (
          <div>
            <img src={selected.image} alt={selected.name} className="w-full h-56 object-cover rounded-lg mb-4" loading="lazy" />
            <p className="text-sm text-muted-warm mb-4">{selected.description}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="glass-card px-3 py-2 text-warm-white">৳{selected.price}</span>
              {selected.calories && <span className="glass-card px-3 py-2 text-warm-white">{selected.calories} calories</span>}
              {selected.protein && <span className="glass-card px-3 py-2 text-gold">{selected.protein}g protein</span>}
              {selected.veg && <span className="glass-card px-3 py-2 text-green-400">Vegetarian</span>}
              {selected.spicy && <span className="glass-card px-3 py-2 text-red-400">Spicy</span>}
            </div>
            <div className="mt-6">
              <GoldButton href={waLink(`Hello Duke Kitchen! I'd like to order: ${selected.name} — ৳${selected.price}.`)} external icon className="w-full">
                Order via WhatsApp
              </GoldButton>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export function ComboDeals() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {comboDeals.map((combo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg font-bold text-gold-gradient mb-3">{combo.name}</h3>
          <ul className="space-y-1 mb-4">
            {combo.items.map((item, j) => (
              <li key={j} className="text-sm text-muted-warm flex items-start gap-2">
                <span className="text-gold mt-1">◆</span>{item}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-warm-white">৳{combo.price}</span>
            <span className="text-xs text-gold">Save ৳{combo.save}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
