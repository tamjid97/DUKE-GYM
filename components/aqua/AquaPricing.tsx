'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { poolPricing } from '@/data/pool';
import { waLink } from '@/lib/contact';

export function AquaPricing() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = poolPricing;

  return (
    <section id="pricing" className="relative py-28 lg:py-36" style={{ background: '#181B1D' }}>
      <div className="mx-auto px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">CHOOSE YOUR ACCESS</span>
          <h2
            className="mt-5 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 0.95 }}
          >
            POOL
            <br />
            <span className="text-gold-gradient">PRICING</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="editorial-card flex flex-col justify-between p-8 lg:col-span-5 lg:p-10"
            style={{ borderColor: 'rgba(212,175,55,0.45)', boxShadow: '0 0 50px rgba(212,175,55,0.1)' }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Featured</p>
              <h3 className="mt-4 font-display text-[22px] text-warm-white">{featured.name}</h3>
              <p className="mt-6 font-display font-bold leading-none text-gold-gradient" style={{ fontSize: 'clamp(44px, 5vw, 56px)' }}>
                ৳{featured.price.toLocaleString()}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.24em] text-[#A8A39A]">/{featured.unit}</p>
              <p className="mt-6 text-[14px] leading-relaxed text-muted-warm">{featured.note}</p>
            </div>
            <a
              href={waLink(`Hello Duke Aqua! I'm interested in the "${featured.name}" (${featured.price}৳/${featured.unit}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-10 inline-flex items-center gap-3 self-start px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ borderRadius: 0 }}
            >
              Get Access
              <span>→</span>
            </a>
          </motion.article>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
            {rest.map((p, i) => (
              <motion.article
                key={p.name}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.06 }}
                className="editorial-card flex flex-col p-7"
              >
                <h3 className="font-display text-[18px] text-warm-white">{p.name}</h3>
                <p className="mt-5 font-display font-bold text-gold-gradient" style={{ fontSize: '36px', lineHeight: 1 }}>
                  ৳{p.price.toLocaleString()}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#A8A39A]">/{p.unit}</p>
                <p className="mt-4 flex-1 text-[13px] leading-relaxed text-muted-warm">{p.note}</p>
                <a
                  href={waLink(`Hello Duke Aqua! I'm interested in the "${p.name}" (${p.price}৳/${p.unit}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]"
                >
                  Get Access →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
