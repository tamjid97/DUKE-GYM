'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const equipment = [
  { num: '01', name: 'Olympic Squat Racks', meta: '4 units', image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '02', name: 'Deadlift Platforms', meta: '2 units', image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '03', name: 'Bench Press Stations', meta: '3 units', image: 'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '04', name: 'Smith Machine', meta: '', image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '05', name: 'Cable Crossover', meta: '', image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '06', name: 'Leg Press', meta: '', image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '07', name: 'Hack Squat', meta: '', image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '08', name: 'Lat Pulldown', meta: '', image: 'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '09', name: 'Treadmills', meta: '8 units', image: 'https://images.pexels.com/photos/4753995/pexels-photo-4753995.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '10', name: 'Ellipticals', meta: '4 units', image: 'https://images.pexels.com/photos/4753995/pexels-photo-4753995.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '11', name: 'Rowing Machines', meta: '2 units', image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '12', name: 'Stationary Bikes', meta: '4 units', image: 'https://images.pexels.com/photos/4753995/pexels-photo-4753995.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '13', name: 'Kettlebells', meta: '8–32kg', image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '14', name: 'Dumbbells', meta: '2.5–50kg', image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '15', name: 'Battle Ropes', meta: '', image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '16', name: 'Box Jump Platforms', meta: '', image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '17', name: 'Pull-up Bars', meta: '', image: 'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
  { num: '18', name: 'Foam Rollers', meta: '', image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1' },
];

export function GymArsenal() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 lg:py-36" style={{ background: '#181B1D' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            THE DUKE STANDARD
          </span>
          <h2
            className="mt-5 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
          >
            OUR
            <br />
            <span className="text-gold-gradient">ARSENAL</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-warm">
            Premium equipment. Maintained to international standards.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden" style={{ borderRadius: '12px', aspectRatio: '4 / 5' }}>
              {equipment.map((item, i) => (
                <img
                  key={item.num}
                  src={item.image}
                  alt={item.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    i === active ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/25" />
              <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[rgba(212,175,55,0.55)]" />
              <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[rgba(212,175,55,0.55)]" />
              <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[rgba(212,175,55,0.55)]" />
              <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[rgba(212,175,55,0.55)]" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">{equipment[active].num}</p>
                <p className="mt-2 font-display text-2xl font-bold text-warm-white">{equipment[active].name}</p>
              </div>
            </div>
          </motion.div>

          <div>
            {equipment.map((item, i) => (
              <motion.button
                key={item.num}
                type="button"
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : Math.min(i * 0.03, 0.35) }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center gap-5 border-b py-4 text-left transition-colors duration-300"
                style={{
                  borderColor: i === active ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.1)',
                  background: i === active ? 'rgba(212,175,55,0.04)' : 'transparent',
                }}
              >
                <span
                  className="w-8 shrink-0 font-display text-[11px] tracking-[0.12em]"
                  style={{ color: i === active ? '#D4AF37' : 'rgba(212,175,55,0.4)' }}
                >
                  {item.num}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className="font-display text-[15px] font-semibold tracking-wide"
                      style={{ color: i === active ? '#F1DDA0' : '#F5F1E6' }}
                    >
                      {item.name}
                    </h3>
                    {item.meta ? (
                      <span className="shrink-0 text-[11px] tracking-[0.14em] text-[#D4AF37]">{item.meta}</span>
                    ) : null}
                  </div>
                </div>
                <span
                  className="shrink-0 text-[#D4AF37] transition-all duration-300"
                  style={{ opacity: i === active ? 1 : 0, transform: i === active ? 'translateX(0)' : 'translateX(-6px)' }}
                >
                  →
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
