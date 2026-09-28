'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Dumbbell, Flame, TrendingUp } from 'lucide-react';
import { programs, programCategories } from '@/data/programs';
import { Tabs } from '@/components/shared/Tabs';
import { Modal } from '@/components/shared/Modal';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

const featuredProgram = programs[0];

export function ProgramsSection() {
  const [selected, setSelected] = useState<typeof programs[0] | null>(null);
  const reduceMotion = useReducedMotion();
  const tabs = programCategories.map((c) => ({ id: c, label: c }));

  return (
    <div>
      <motion.article
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group mb-16 overflow-hidden lg:mb-20"
        style={{
          borderRadius: '12px',
          border: '1px solid rgba(212,175,55,0.16)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
        }}
      >
        <div className="grid min-h-[420px] lg:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelected(featuredProgram)}
            className="relative min-h-[280px] overflow-hidden text-left lg:min-h-[420px]"
          >
            <img
              src={featuredProgram.image}
              alt={featuredProgram.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111315]/80 max-lg:bg-gradient-to-t max-lg:from-[#111315] max-lg:to-transparent" />
            <span
              className="absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0B0B0C]"
              style={{ background: 'linear-gradient(135deg, #8C6B2A, #D4AF37, #F1DDA0)', padding: '6px 14px' }}
            >
              {featuredProgram.category}
            </span>
          </button>

          <div className="flex flex-col justify-center px-8 py-12 lg:px-12">
            <p className="mb-4 text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">Featured Program</p>
            <h3
              className="font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', lineHeight: 1.08 }}
            >
              {featuredProgram.name}
            </h3>
            <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#A8A39A]">
              Build the base. Build the body.
            </p>
            <div className="gold-underline mt-6 mb-6 w-16 origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-150" />
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-muted-warm">
              {featuredProgram.description}
            </p>
            <div className="mb-10 grid max-w-md grid-cols-3 gap-6">
              {[
                { label: 'Duration', value: featuredProgram.duration },
                { label: 'Frequency', value: featuredProgram.frequency },
                { label: 'Level', value: featuredProgram.level },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.26em] text-[#D4AF37]">{stat.label}</span>
                  <span className="text-[14px] font-semibold text-warm-white">{stat.value}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelected(featuredProgram)}
              className="btn-gold inline-flex items-center gap-3 self-start px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ borderRadius: 0 }}
            >
              View Program
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </motion.article>

      <Tabs tabs={tabs} variant="editorial">
        {(active) => {
          const filtered = active === 'All' ? programs : programs.filter((p) => p.category === active);
          return (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p, i) => (
                <motion.button
                  key={p.id}
                  type="button"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: reduceMotion ? 0 : i * 0.05 }}
                  className="editorial-card group cursor-pointer overflow-hidden p-0 text-left"
                  onClick={() => setSelected(p)}
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/20 to-transparent" />
                    <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.24em] text-[#F1DDA0]">
                      {p.category}
                    </span>
                    <span className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.24em] text-[#A8A39A]">
                      {p.level}
                    </span>
                    <div className="gold-underline absolute bottom-0 left-0 h-px w-0 origin-left bg-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                  <div className="p-6 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <h3 className="font-display text-[22px] font-bold leading-snug text-warm-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-muted-warm">{p.description}</p>
                    <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-[12px] text-muted-warm">
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#D4AF37]" />{p.duration}</span>
                      <span className="flex items-center gap-1.5"><Dumbbell className="h-3.5 w-3.5 text-[#D4AF37]" />{p.frequency}</span>
                      <span className="flex items-center gap-1.5"><Flame className="h-3.5 w-3.5 text-[#D4AF37]" />{p.calories}</span>
                      <span className="flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-[#D4AF37]" />{p.level}</span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-[#D4AF37]">
                      View Program
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          );
        }}
      </Tabs>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name} className="max-w-3xl">
        {selected && (
          <div>
            <img src={selected.image} alt={selected.name} className="mb-6 h-56 w-full object-cover" loading="lazy" />
            <div className="px-2 pb-2">
              <p className="mb-6 text-[15px] leading-relaxed text-muted-warm">{selected.description}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="editorial-card p-4"><span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Duration</span><span className="text-warm-white">{selected.duration}</span></div>
                <div className="editorial-card p-4"><span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Frequency</span><span className="text-warm-white">{selected.frequency}</span></div>
                <div className="editorial-card p-4"><span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Calories</span><span className="text-warm-white">{selected.calories}</span></div>
                <div className="editorial-card p-4"><span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Level</span><span className="text-warm-white">{selected.level}</span></div>
                <div className="editorial-card col-span-2 p-4"><span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Trainer</span><span className="text-warm-white">{selected.trainer}</span></div>
              </div>
              <div className="mt-6">
                <GoldButton
                  href={waLink(`Hello Duke Fitness Club! I'm interested in the "${selected.name}" program.`)}
                  external
                  icon
                  className="w-full rounded-none"
                >
                  Book This Program
                </GoldButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
