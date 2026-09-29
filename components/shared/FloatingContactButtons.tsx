'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageCircle, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface ContactButton {
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
  delay: number;
}

export function FloatingContactButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactButtons: ContactButton[] = [
    {
      icon: <MessageCircle size={20} />,
      href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello Duke Fitness Club! I would like to know more about your services.')}`,
      label: 'WhatsApp',
      color: '#25D366',
      delay: 0.8,
    },
    {
      icon: <MessageSquare size={20} />,
      href: 'https://m.me/dukefitnessclub',
      label: 'Messenger',
      color: '#0084FF',
      delay: 1.0,
    },
    {
      icon: <Phone size={20} />,
      href: `tel:${siteConfig.phone}`,
      label: 'Call',
      color: 'var(--accent-primary)',
      delay: 1.2,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col gap-3 safe-area-bottom">
      <AnimatePresence>
        {contactButtons.map((button, index) => (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.label === 'WhatsApp' || button.label === 'Messenger' ? '_blank' : undefined}
            rel={button.label === 'WhatsApp' || button.label === 'Messenger' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: button.delay,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group"
            style={{
              background: button.label === 'Call' ? 'var(--accent-gradient)' : button.color,
              boxShadow: button.label === 'Call' 
                ? '0 0 20px var(--accent-glow)' 
                : `0 0 20px ${button.color}40`,
            }}
            aria-label={button.label}
          >
            {/* Subtle pulse for WhatsApp */}
            {button.label === 'WhatsApp' && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: button.color,
                  opacity: 0.3,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            <span className="relative z-10 text-white">{button.icon}</span>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 px-3 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'var(--panel)',
                color: 'var(--warm-white)',
                border: '1px solid var(--border-accent)',
              }}
            >
              {button.label}
            </motion.div>
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  );
}