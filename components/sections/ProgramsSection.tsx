'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Dumbbell, Flame, TrendingUp, User } from 'lucide-react';
import { programs, programCategories } from '@/data/programs';
import { Tabs } from '@/components/shared/Tabs';
import { Modal } from '@/components/shared/Modal';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function ProgramsSection() {
  const [selected, setSelected] = useState<typeof programs[0] | null>(null);

  const tabs = programCategories.map((c) => ({ id: c, label: c }));

  return (
    <div>
      <Tabs tabs={tabs}>
        {(active) => {
          const filtered = active === 'All' ? programs : programs.filter((p) => p.category === active);
          return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group glass-card overflow-hidden p-0 cursor-pointer"
                  onClick={() => setSelected(p)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-gold/20 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                      {p.category}
                    </span>
                    <span className="absolute top-3 right-3 rounded-full bg-obsidian/70 px-3 py-1 text-xs text-champagne backdrop-blur-sm">
                      {p.level}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-warm-white group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-muted-warm mt-1 line-clamp-2">{p.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-warm">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-gold" />{p.duration}</span>
                      <span className="flex items-center gap-1"><Dumbbell className="h-3 w-3 text-gold" />{p.frequency}</span>
                      <span className="flex items-center gap-1"><Flame className="h-3 w-3 text-gold" />{p.calories}</span>
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
          <div>
            <img src={selected.image} alt={selected.name} className="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" />
            <p className="text-sm text-muted-warm mb-4">{selected.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="glass-card p-3"><span className="text-gold text-xs block">Duration</span><span className="text-warm-white">{selected.duration}</span></div>
              <div className="glass-card p-3"><span className="text-gold text-xs block">Frequency</span><span className="text-warm-white">{selected.frequency}</span></div>
              <div className="glass-card p-3"><span className="text-gold text-xs block">Calories</span><span className="text-warm-white">{selected.calories}</span></div>
              <div className="glass-card p-3"><span className="text-gold text-xs block">Level</span><span className="text-warm-white">{selected.level}</span></div>
              <div className="glass-card p-3 col-span-2"><span className="text-gold text-xs block">Trainer</span><span className="text-warm-white">{selected.trainer}</span></div>
            </div>
            <div className="mt-6">
              <GoldButton
                href={waLink(`Hello Duke Fitness Club! I'm interested in the "${selected.name}" program.`)}
                external
                icon
                className="w-full"
              >
                Book This Program
              </GoldButton>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
