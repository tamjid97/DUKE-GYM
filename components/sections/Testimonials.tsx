'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Reviews" title={t.memberReviews} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((ts, i) => (
            <motion.div
              key={ts.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <Quote className="h-8 w-8 text-gold/40 mb-3" />
              <p className="text-sm text-warm-white leading-relaxed flex-1">{ts.text}</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={ts.image}
                  alt={ts.name}
                  className="h-10 w-10 rounded-full object-cover border border-gold/30"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-warm-white">{ts.name}</div>
                  <div className="text-xs text-muted-warm">{ts.role}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: ts.rating }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
