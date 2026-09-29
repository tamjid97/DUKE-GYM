'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, galleryCategories, type GalleryItem } from '@/data/gallery';
import { Tabs } from '@/components/shared/Tabs';

export function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const tabs = galleryCategories.map((c) => ({ id: c, label: c }));

  return (
    <div>
      <Tabs tabs={tabs}>
        {(active) => {
          const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);
          return (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group relative overflow-hidden rounded-lg border border-gold/15 cursor-pointer break-inside-avoid"
                  onClick={() => setLightbox(galleryItems.indexOf(item))}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-obsidian/50 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-2 left-2 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    {item.category}
                  </span>
                </motion.div>
              ))}
            </div>
          );
        }}
      </Tabs>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-warm-white p-2" onClick={() => setLightbox(null)}>
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-white p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg border border-gold/20"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-white p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(galleryItems.length - 1, lightbox + 1)); }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
