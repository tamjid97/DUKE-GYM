'use client';

import { motion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GoldButton } from '@/components/shared/GoldButton';

export function GalleryPreview() {
  const { t } = useLang();
  const preview = galleryItems.slice(0, 8);

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Gallery" title={t.galleryPreview} />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {preview.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={i % 5 === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <div className="group relative h-full min-h-[150px] overflow-hidden rounded-lg border border-gold/15">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian/40 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-2 left-2 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldButton href="/gallery" variant="outline" icon>{t.viewAll}</GoldButton>
        </div>
      </div>
    </section>
  );
}
