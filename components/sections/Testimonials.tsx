'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';

interface TestimonialsProps {
  forceReveal?: boolean;
}

export function Testimonials({ forceReveal }: TestimonialsProps) {
  const { t } = useLang();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (forceReveal && !revealed) {
      setRevealed(true);
    }
  }, [forceReveal, revealed]);

  const isControlled = forceReveal !== undefined;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const headingWrapperVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.45,
      },
    },
  };

  const headingItem = {
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const SectionContent = () => (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="flex flex-col gap-3 items-center text-center">
        <div className="mb-1">
          <span className="section-label">Reviews</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-warm-white sm:text-4xl lg:text-5xl">
          {t.memberReviews}
        </h2>
        <div className="diamond-divider mt-2">
          <div className="diamond" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {testimonials.map((ts, i) => (
          <motion.div
            key={ts.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col"
            style={{
              boxShadow:
                '0 0 0 1px color-mix(in srgb, var(--accent-400) 18%, transparent), 0 20px 40px -20px rgba(0,0,0,0.6)',
            }}
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
      </motion.div>
    </div>
  );

  if (isControlled) {
    return (
      <motion.section
        className="relative py-20 lg:py-28 bg-smoke/30"
        variants={sectionVariants}
        initial="hidden"
        animate={revealed ? 'show' : 'hidden'}
      >
        <SectionContent />
      </motion.section>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <SectionContent />
    </section>
  );
}
