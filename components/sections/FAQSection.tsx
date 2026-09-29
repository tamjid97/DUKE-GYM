'use client';

import { motion } from 'framer-motion';

import { faqs } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function FAQSection() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeading label="FAQ" title={t.faq} />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-warm-white">
                  {faq.q}
                  <span className="h-4 w-4 text-gold shrink-0 transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-warm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
