'use client';

import { motion, useReducedMotion } from 'framer-motion';


const gymZones = [
  {
    icon: '🏋️',
    number: '01',
    title: 'Weights Zone',
    subtitle: 'BUILD WITH PURPOSE',
    desc: 'Full range of free weights, racks, benches, and plate-loaded machines.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    icon: '❤️',
    number: '02',
    title: 'Cardio Zone',
    subtitle: 'BURN. ENDURE.',
    desc: 'Treadmills, ellipticals, rowers, and stationary bikes with personal screens.',
    image: 'https://images.pexels.com/photos/4753995/pexels-photo-4753995.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    icon: '✨',
    number: '03',
    title: 'Functional / Cross-Training',
    subtitle: 'MOVE BETTER',
    desc: 'Box jumps, kettlebells, ropes, sleds, and open floor space.',
    image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    icon: '👥',
    number: '04',
    title: "Women's Section",
    subtitle: 'PRIVATE. POWERFUL.',
    desc: 'Private, fully-equipped women-only training area with female coach.',
    image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    icon: '🏆',
    number: '05',
    title: 'Personal Training Studio',
    subtitle: 'TRAIN ONE-ON-ONE',
    desc: 'Dedicated PT space for 1-on-1 coaching and small group sessions.',
    image: 'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    icon: '🛡️',
    number: '06',
    title: 'Recovery',
    subtitle: 'RESTORE. REBUILD.',
    desc: 'Stretching area and recovery guidance for injury prevention.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
];

export function GymZones() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="training-zones" className="relative overflow-hidden py-28 lg:py-36" style={{ background: '#0B0B0C' }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)' }} />

      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 lg:mb-28"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            INSIDE THE DUKE GYM
          </span>
          <div className="mt-7 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.98 }}
            >
              EVERY REP.<br />
              EVERY SET.<br />
              <span className="text-gold-gradient">EVERY DETAIL.</span>
            </h2>
            <div className="lg:max-w-sm">
              <div className="gold-underline mb-6 w-24" />
              <p className="text-base leading-relaxed text-muted-warm">
                Six dedicated environments designed around strength, conditioning, performance and recovery.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {gymZones.map((zone, i) => (
            <motion.a
              key={zone.number}
              href="#programs"
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : i * 0.07 }}
              className="group relative block cursor-pointer overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
              style={{
                minHeight: '400px',
                borderRadius: '12px',
                border: '1px solid rgba(212,175,55,0.14)',
                background: '#111315',
              }}
            >
              <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '12px' }}>
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="h-full w-full object-cover opacity-[0.42] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-[0.58]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/55 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              </div>

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(105deg, transparent 35%, rgba(241,221,160,0.1) 50%, transparent 65%)',
                }}
              />

              <div
                className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[rgba(212,175,55,0.45)]"
                style={{ borderRadius: '12px' }}
              />

              <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end p-8">
                <div className="mb-auto pt-4">
                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize: '72px',
                      lineHeight: 0.85,
                      background: 'linear-gradient(180deg, rgba(241,221,160,0.28), rgba(212,175,55,0.08))',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {zone.number}
                  </span>
                </div>

                <span className="mb-3 h-6 w-6 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">{zone.icon}</span>
                <p className="mb-2 text-[9px] uppercase tracking-[0.36em] text-[#D4AF37] opacity-80">
                  {zone.subtitle}
                </p>
                <h3
                  className="mb-3 font-display font-bold text-warm-white transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ fontSize: '24px', lineHeight: 1.15 }}
                >
                  {zone.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted-warm">{zone.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
