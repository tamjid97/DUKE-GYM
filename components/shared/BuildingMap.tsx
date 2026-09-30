'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ZoneInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  floor: string;
  levelBadge: string;
  direction: string;
  hours: string;
  href: string;
  icon: string;
}

const zones: Record<string, ZoneInfo> = {
  gym: {
    id: 'gym',
    name: 'DUKE GYM',
    subtitle: 'Iron & Heavy Strength Studio',
    description: 'Ultra-modern strength arena equipped with Hammer Strength, Eleiko lifting bays, dedicated cardio zone, and private personal training suites.',
    floor: 'Ground Floor — East Wing',
    levelBadge: 'LEVEL 01',
    direction: 'Enter main gate → Turn right into East Atrium',
    hours: '06:00 AM – 11:00 PM',
    href: '/zones/gym',
    icon: '🏋️‍♂️',
  },
  kitchen: {
    id: 'kitchen',
    name: 'DUKE KITCHEN',
    subtitle: 'Precision Macro & Fuel Bar',
    description: 'Custom sports nutrition kitchen serving chef-crafted protein shakes, macro-calibrated gourmet prep meals, and cold-pressed cold brews.',
    floor: 'Ground Floor — West Wing',
    levelBadge: 'LEVEL 01',
    direction: 'Enter main gate → Turn left past Reception',
    hours: '07:00 AM – 10:00 PM',
    href: '/zones/kitchen',
    icon: '🥗',
  },
  aqua: {
    id: 'aqua',
    name: 'DUKE AQUA',
    subtitle: 'Hydrotherapy & Recovery Center',
    description: 'Temperature-regulated semi-Olympic lap pool, Finnish cedarwood saunas, eucalyptus steam baths, and ice plunge therapy pools.',
    floor: '2nd Floor — North Wing',
    levelBadge: 'LEVEL 02',
    direction: 'Elevator to 2nd Floor → Exit Left to Aqua Deck',
    hours: '06:00 AM – 10:00 PM',
    href: '/zones/aqua',
    icon: '🏊‍♂️',
  },
  arena: {
    id: 'arena',
    name: 'DUKE ARENA',
    subtitle: 'Combat Sports & High-Octane Turf',
    description: 'High-impact indoor turf, professional MMA octagon cage, full badminton courts, and high-intensity Functional Group Fitness stadium.',
    floor: '3rd Floor — South Wing',
    levelBadge: 'LEVEL 03',
    direction: 'Elevator to 3rd Floor → Exit Right to Arena Gate',
    hours: '08:00 AM – 10:00 PM',
    href: '/zones/arena',
    icon: '🥊',
  },
};

export function BuildingMap() {
  const [activeZone, setActiveZone] = useState<ZoneInfo>(zones.gym);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-transparent">
      
      {/* LEFT: MAP NAVIGATION */}
      <div className="lg:col-span-7 space-y-5">
        
        {/* LEVEL 03 */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 block">
            3rd Floor
          </span>
          <button
            onClick={() => setActiveZone(zones.arena)}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 bg-transparent ${
              activeZone.id === 'arena'
                ? 'border-[var(--accent-primary)] text-white'
                : 'border-white/10 hover:border-white/30 text-zinc-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">{zones.arena.icon}</span>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wider uppercase">DUKE ARENA</h4>
                  <p className="text-xs text-zinc-400">3rd Floor — South Wing</p>
                </div>
              </div>
              <span className={`text-[10px] font-mono px-2.5 py-1 rounded border ${
                activeZone.id === 'arena' 
                  ? 'border-[var(--accent-primary)] text-[var(--accent-highlight)]' 
                  : 'border-white/10 text-zinc-500'
              }`}>
                LEVEL 03
              </span>
            </div>
          </button>
        </div>

        {/* LEVEL 02 */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 block">
            2nd Floor
          </span>
          <button
            onClick={() => setActiveZone(zones.aqua)}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 bg-transparent ${
              activeZone.id === 'aqua'
                ? 'border-[var(--accent-primary)] text-white'
                : 'border-white/10 hover:border-white/30 text-zinc-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">{zones.aqua.icon}</span>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-wider uppercase">DUKE AQUA</h4>
                  <p className="text-xs text-zinc-400">2nd Floor — North Wing</p>
                </div>
              </div>
              <span className={`text-[10px] font-mono px-2.5 py-1 rounded border ${
                activeZone.id === 'aqua' 
                  ? 'border-[var(--accent-primary)] text-[var(--accent-highlight)]' 
                  : 'border-white/10 text-zinc-500'
              }`}>
                LEVEL 02
              </span>
            </div>
          </button>
        </div>

        {/* LEVEL 01 */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5 block">
            Ground Floor
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveZone(zones.kitchen)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 bg-transparent ${
                activeZone.id === 'kitchen'
                  ? 'border-[var(--accent-primary)] text-white'
                  : 'border-white/10 hover:border-white/30 text-zinc-400'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-lg">{zones.kitchen.icon}</span>
                <h4 className="font-bold text-white text-sm uppercase">DUKE KITCHEN</h4>
              </div>
              <p className="text-xs text-zinc-400">Ground Floor — West Wing</p>
            </button>

            <button
              onClick={() => setActiveZone(zones.gym)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 bg-transparent ${
                activeZone.id === 'gym'
                  ? 'border-[var(--accent-primary)] text-white'
                  : 'border-white/10 hover:border-white/30 text-zinc-400'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-lg">{zones.gym.icon}</span>
                <h4 className="font-bold text-white text-sm uppercase">DUKE GYM</h4>
              </div>
              <p className="text-xs text-zinc-400">Ground Floor — East Wing</p>
            </button>
          </div>
        </div>

        {/* ENTRANCE */}
        <div className="pt-2 flex justify-center">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            ↓ MAIN ENTRANCE ↓
          </span>
        </div>

      </div>

      {/* RIGHT: DETAILS PANEL */}
      <div className="lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeZone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl border border-[var(--accent-primary)]/40 bg-transparent"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[var(--accent-highlight)] uppercase border border-[var(--accent-primary)]/30 px-2.5 py-0.5 rounded">
                {activeZone.levelBadge}
              </span>
              <span className="text-xl">{activeZone.icon}</span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-wide">
              {activeZone.name}
            </h3>
            <p className="text-xs font-mono text-[var(--accent-highlight)] uppercase tracking-widest mt-1">
              {activeZone.subtitle}
            </p>

            <p className="text-sm text-zinc-300 mt-4 leading-relaxed font-light">
              {activeZone.description}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase">LOCATION:</span>
                <span className="text-zinc-200">{activeZone.floor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase">DIRECTION:</span>
                <span className="text-zinc-200">{activeZone.direction}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase">HOURS:</span>
                <span className="text-[var(--accent-highlight)] font-bold">{activeZone.hours}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href={activeZone.href}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-highlight)] hover:underline"
              >
                <span>VISIT PAGE</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}