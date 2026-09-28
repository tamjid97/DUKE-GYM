'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import { waLink, telLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="flex flex-col gap-2"
          >
            <a
              href={waLink('Hello Duke Fitness Club!')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-smoke border border-gold/30 px-4 py-2.5 text-sm text-warm-white shadow-lg transition-colors hover:border-gold/60"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              WhatsApp
            </a>
            <a
              href={telLink()}
              className="flex items-center gap-2 rounded-full bg-smoke border border-gold/30 px-4 py-2.5 text-sm text-warm-white shadow-lg transition-colors hover:border-gold/60"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="btn-gold flex h-12 w-12 items-center justify-center rounded-full shadow-lg animate-pulse-gold"
        aria-label="Contact options"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
