'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { trainers } from '@/data/trainers';
import { useLang } from '@/components/providers/LanguageProvider';
import { cn } from '@/lib/utils';

export function TrainersPreview() {
  const { t } = useLang();
  const featured = trainers?.slice(0, 4) || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTrainer = featured[activeIndex] || featured[0];

  const highlights = [
    'Certified & experienced trainers',
    'Personalized training programs',
    'Flexible scheduling',
    'Nutrition guidance included',
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-transparent text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Featured Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-3xl border border-amber-500/20 bg-zinc-950/60 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTrainer?.id || activeIndex}
                  src={activeTrainer?.image}
                  alt={activeTrainer?.name || 'Trainer'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Dark Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Trainer Info Badge Over Image */}
              {activeTrainer && (
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                        {activeTrainer.category}
                      </span>
                      <h4 className="font-display text-xl font-bold text-white">
                        {activeTrainer.name}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{activeTrainer.role}</p>
                    </div>

                    {/* Trainer Selector Thumbnails */}
                    <div className="flex gap-2">
                      {featured.map((tr, idx) => (
                        <button
                          key={tr.id || idx}
                          onClick={() => setActiveIndex(idx)}
                          className={cn(
                            'h-10 w-10 overflow-hidden rounded-xl border transition-all duration-300',
                            activeIndex === idx
                              ? 'border-amber-400 scale-110 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                              : 'border-white/20 opacity-60 hover:opacity-100'
                          )}
                        >
                          <img src={tr.image} alt={tr.name} className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Text & Features (Matches provided image layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Top Tagline */}
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-500 mb-3">
              ELITE STAFF
            </span>

            {/* Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              MEET OUR <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">FITNESS COACHES</span>
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Our dedicated team of certified professionals is here to guide, motivate, and push you past your limits. Get one-on-one guidance from the best trainers in the industry, complete with customized programs and constant motivation to crush your goals.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-10">
              <Link
                href="/trainers"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>{t?.viewAll || 'VIEW OUR TRAINERS'}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}