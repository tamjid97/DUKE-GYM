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
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
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
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const SectionContent = ({ animated }: { animated: boolean }) => (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <motion.div
        variants={animated ? headingWrapperVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'show' : false}
        className="flex flex-col gap-3 items-center text-center"
      >
        <motion.div
          variants={animated ? headingItem : undefined}
          className="mb-1"
        >
          <span className="section-label">Reviews</span>
        </motion.div>
        <motion.h2
          variants={animated ? headingItem : undefined}
          className="font-display text-3xl font-bold text-warm-white sm:text-4xl lg:text-5xl"
        >
          {t.memberReviews}
        </motion.h2>
        <motion.div
          variants={animated ? headingItem : undefined}
          className="diamond-divider mt-2"
        >
          <div className="diamond" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={animated ? gridVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'show' : false}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {testimonials.map((ts, i) => (
          <motion.div
            key={ts.id}
            variants={animated ? cardVariants : undefined}
            initial={animated ? false : { opacity: 0, y: 20 }}
            animate={animated ? false : undefined}
            whileInView={animated ? false : { opacity: 1, y: 0 }}
            viewport={animated ? undefined : { once: true }}
            transition={
              animated
                ? undefined
                : { duration: 0.4, delay: i * 0.1 }
            }
            className="glass-card p-6 flex flex-col"
            style={
              animated
                ? {
                    boxShadow:
                      '0 0 0 1px color-mix(in srgb, var(--accent-400) 18%, transparent), 0 20px 40px -20px rgba(0,0,0,0.6)',
                  }
                : undefined
            }
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
        <SectionContent animated={revealed} />
      </motion.section>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <SectionContent animated={false} />
    </section>
  );
}
