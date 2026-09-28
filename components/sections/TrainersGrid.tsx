'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Award, Briefcase } from 'lucide-react';
import { trainers, type Trainer } from '@/data/trainers';
import { Tabs } from '@/components/shared/Tabs';
import { Modal } from '@/components/shared/Modal';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function TrainersGrid() {
  const [selected, setSelected] = useState<Trainer | null>(null);

  const tabs = [
    { id: 'All', label: 'All' },
    { id: 'Gym', label: 'Gym' },
    { id: 'Swimming', label: 'Swimming' },
    { id: 'Game Zone', label: 'Game Zone' },
  ];

  return (
    <div>
      <Tabs tabs={tabs}>
        {(active) => {
          const filtered = active === 'All' ? trainers : trainers.filter((t) => t.category === active);
          return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tr, i) => (
                <motion.div
                  key={tr.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-xl border border-gold/20"
                  style={{ perspective: '1000px' }}
                  onClick={() => setSelected(tr)}
                >
                  <div className="relative h-80 overflow-hidden cursor-pointer">
                    <img
                      src={tr.image}
                      alt={tr.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-gold/20 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                      {tr.category}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-lg font-bold text-warm-white">{tr.name}</h3>
                      <p className="text-xs text-gold mt-1">{tr.role}</p>
                      <p className="text-xs text-muted-warm mt-2">{tr.specialties.join(' • ')}</p>
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
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <img src={selected.image} alt={selected.name} className="w-full sm:w-32 h-32 object-cover rounded-lg" loading="lazy" />
              <div>
                <p className="text-gold text-sm">{selected.role}</p>
                <p className="text-muted-warm text-sm mt-1">{selected.bio}</p>
                <div className="mt-3 flex gap-2">
                  {selected.social.facebook && <a href={selected.social.facebook} className="text-muted-warm hover:text-gold"><Facebook className="h-4 w-4" /></a>}
                  {selected.social.instagram && <a href={selected.social.instagram} className="text-muted-warm hover:text-gold"><Instagram className="h-4 w-4" /></a>}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="glass-card p-3">
                <Award className="h-4 w-4 text-gold mb-1" />
                <span className="text-gold text-xs block">Certifications</span>
                <span className="text-warm-white text-sm">{selected.certifications.join(', ')}</span>
              </div>
              <div className="glass-card p-3">
                <Briefcase className="h-4 w-4 text-gold mb-1" />
                <span className="text-gold text-xs block">Experience</span>
                <span className="text-warm-white text-sm">{selected.experience}</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gold text-xs mb-2">Specialties</p>
              <div className="flex flex-wrap gap-2">
                {selected.specialties.map((s, j) => (
                  <span key={j} className="rounded-full border border-gold/20 px-3 py-1 text-xs text-muted-warm">{s}</span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <GoldButton href={waLink(`Hello Duke Fitness Club! I'd like to book a session with ${selected.name}.`)} external icon className="w-full">
                Book a Session
              </GoldButton>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
