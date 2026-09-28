'use client';

import { motion } from 'framer-motion';
import { transformations } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider';

export function TransformationsSection() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Real Results" title={t.transformations} />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {transformations.map((tr, i) => (
            <motion.div
              key={tr.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <BeforeAfterSlider
                beforeImage={tr.before}
                afterImage={tr.after}
                beforeLabel="Before"
                afterLabel="After"
              />
              <div className="mt-4 text-center">
                <h3 className="font-display text-lg font-bold text-gold-gradient">{tr.name}</h3>
                <p className="text-sm text-muted-warm">{tr.duration} — {tr.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
