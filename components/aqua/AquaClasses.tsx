'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { swimmingClasses } from '@/data/pool';
import { galleryItems } from '@/data/gallery';
import { waLink } from '@/lib/contact';

const aquaImages = galleryItems.filter((g) => g.category === 'Aqua').map((g) => g.src);

export function AquaClasses() {
  const reduceMotion = useReducedMotion();
  const featured = swimmingClasses[0];
  const rest = swimmingClasses.slice(1);
  const featuredImage = aquaImages[0];

  return (
    <section id="classes" className="relative py-28 lg:py-36" style={{ background: '#0B0B0C' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">MASTER THE WATER.</span>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
            >
              SWIMMING
              <br />
              <span className="text-gold-gradient">CLASSES</span>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-warm">
              From first strokes to advanced performance.
            </p>
          </div>
        </motion.div>

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group mb-10 overflow-hidden lg:mb-14"
          style={{ borderRadius: '12px', border: '1px solid rgba(212,175,55,0.16)' }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
              <img
                src={featuredImage}
                alt={featured.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0B0C]/80 max-lg:bg-gradient-to-t max-lg:from-[#0B0B0C]" />
              <span className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.3em] text-[#F1DDA0]">{featured.level}</span>
            </div>
            <div className="flex flex-col justify-center px-8 py-12 lg:px-12">
              <h3 className="font-display font-bold text-warm-white" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
                {featured.name}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-warm">{featured.description}</p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.24em] text-[#D4AF37]">Duration</span>
                  <span className="text-warm-white">{featured.duration}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.24em] text-[#D4AF37]">Sessions</span>
                  <span className="text-warm-white">{featured.sessions}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.24em] text-[#D4AF37]">Fee</span>
                  <span className="font-display text-3xl text-gold-gradient">৳{featured.fee.toLocaleString()}</span>
                </div>
              </div>
              <a
                href={waLink(`Hello Duke Aqua! I'd like to book a slot for "${featured.name}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-10 inline-flex items-center gap-3 self-start px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ borderRadius: 0 }}
              >
                Book a Slot
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map((c, i) => (
            <motion.article
              key={c.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : i * 0.05 }}
              className="editorial-card group overflow-hidden"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={aquaImages[(i + 1) % aquaImages.length]}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/20 to-transparent" />
                <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.24em] text-[#F1DDA0]">{c.level}</span>
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-[22px] font-bold text-warm-white">{c.name}</h3>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(241,221,160,0.12) 50%, transparent 65%)' }} />
              </div>
              <div className="p-6">
                <p className="text-[14px] leading-relaxed text-muted-warm">{c.description}</p>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div className="text-[12px] text-muted-warm">
                    {c.duration}
                    <br />
                    {c.sessions}
                  </div>
                  <span className="font-display text-2xl text-gold-gradient">৳{c.fee.toLocaleString()}</span>
                </div>
                <a
                  href={waLink(`Hello Duke Aqua! I'd like to book a slot for "${c.name}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]"
                >
                  Book a Slot
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
