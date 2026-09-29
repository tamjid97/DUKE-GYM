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
  glowColor: string;
  delay: number;
  showNumber?: boolean;
  phoneNumber?: string;
}

export function FloatingContactButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactButtons: ContactButton[] = [
    {
      icon: <MessageCircle size={22} />,
      href: 'https://wa.me/8801608044682?text=Hello%20DUKE%20Fitness%20Club!%20I%20would%20like%20to%20know%20more%20about%20your%20services.',
      label: 'WhatsApp',
      color: '#25D366',
      glowColor: '#25D366',
      delay: 0.8,
    },
    {
      icon: <MessageSquare size={22} />,
      href: '#contact-form',
      label: 'Message',
      color: '#0084FF',
      glowColor: '#0084FF',
      delay: 1.0,
    },
    {
      icon: <Phone size={22} />,
      href: 'tel:+8801608044682',
      label: 'Call',
      color: '#DC2626',
      glowColor: '#DC2626',
      delay: 1.2,
      showNumber: true,
      phoneNumber: '01608044682',
    },
  ];

  if (!mounted) return null;

  const handleScroll = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-4 safe-area-bottom">
      <AnimatePresence>
        {contactButtons.map((button, index) => (
          <motion.div
            key={button.label}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: button.delay,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative group"
          >
            {/* Outer glow ring - pulsing */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: button.glowColor,
                opacity: 0.5,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.25, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Secondary glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: button.glowColor,
                opacity: 0.3,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.15, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            {/* Main button with 3D depth */}
            {button.label === 'Message' ? (
              <motion.button
                onClick={() => handleScroll('contact-form')}
                whileHover={{ scale: 1.08, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: `linear-gradient(145deg, ${button.color}, ${button.color}dd)`,
                  boxShadow: `
                    0 4px 15px ${button.glowColor}60,
                    0 8px 30px ${button.glowColor}40,
                    inset 0 2px 4px rgba(255, 255, 255, 0.3),
                    inset 0 -2px 4px rgba(0, 0, 0, 0.2)
                  `,
                }}
                aria-label={button.label}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />

                {/* Icon */}
                <span className="relative z-10 text-white drop-shadow-lg">{button.icon}</span>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${button.glowColor}50`,
                    boxShadow: `0 4px 15px ${button.glowColor}30`,
                    color: '#fff',
                  }}
                >
                  Send a Message
                </motion.div>
              </motion.button>
            ) : (
              <motion.a
                href={button.href}
                target={button.label === 'WhatsApp' ? '_blank' : undefined}
                rel={button.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.08, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: `linear-gradient(145deg, ${button.color}, ${button.color}dd)`,
                  boxShadow: `
                    0 4px 15px ${button.glowColor}60,
                    0 8px 30px ${button.glowColor}40,
                    inset 0 2px 4px rgba(255, 255, 255, 0.3),
                    inset 0 -2px 4px rgba(0, 0, 0, 0.2)
                  `,
                }}
                aria-label={button.label}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />

                {/* Icon */}
                <span className="relative z-10 text-white drop-shadow-lg">{button.icon}</span>

                {/* Phone number display - only for Call button */}
                {button.label === 'Call' && button.showNumber && button.phoneNumber && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-3 flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(220, 38, 38, 0.5)',
                      boxShadow: '0 4px 20px rgba(220, 38, 38, 0.3)',
                    }}
                  >
                    <Phone size={14} className="text-red-400" />
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {button.phoneNumber}
                    </span>
                  </motion.div>
                )}

                {/* Tooltip for WhatsApp */}
                {button.label === 'WhatsApp' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-3 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${button.glowColor}50`,
                      boxShadow: `0 4px 15px ${button.glowColor}30`,
                      color: '#fff',
                    }}
                  >
                    WhatsApp
                  </motion.div>
                )}
              </motion.a>
            )}

            {/* Inner light ring */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: `2px solid ${button.glowColor}`,
                opacity: 0.4,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.15, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}