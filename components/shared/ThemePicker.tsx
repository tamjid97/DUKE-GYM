'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useTheme, ThemeKey } from '@/components/providers/ThemeProvider';

export function ThemePicker() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleThemeChange = (newTheme: ThemeKey) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleReset = () => {
    setTheme('gold');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={popoverRef}>
      {/* Theme Palette Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--obsidian)] focus:ring-[var(--accent-primary)]"
        style={{
          background: 'var(--accent-gradient)',
          boxShadow: '0 0 20px var(--accent-glow)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change accent color"
        aria-expanded={isOpen}
      >
        <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity" style={{
          background: 'radial-gradient(circle, var(--accent-highlight) 0%, transparent 70%)',
        }} />
      </motion.button>

      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-3 w-64 glass-card z-50"
            style={{
              background: 'color-mix(in srgb, var(--panel) 95%, transparent)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--border-accent)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="p-4">
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--muted-warm)' }}>
                Accent Color
              </p>

              {/* Theme Options */}
              <div className="flex gap-3 mb-4" role="radiogroup" aria-label="Select accent color">
                {themes.map((t) => (
                  <motion.button
                    key={t.key}
                    onClick={() => handleThemeChange(t.key)}
                    className="relative w-10 h-10 rounded-full flex-shrink-0 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--obsidian)] focus:ring-[var(--accent-primary)]"
                    style={{
                      background: `linear-gradient(135deg, ${t.deep} 0%, ${t.primary} 50%, ${t.highlight} 100%)`,
                      boxShadow: `0 0 15px ${t.primary}40`,
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={t.name}
                    aria-checked={theme === t.key}
                    role="radio"
                  >
                    {theme === t.key && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 rounded-full border-2"
                        style={{
                          borderColor: t.primary,
                          boxShadow: `0 0 10px ${t.primary}`,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[var(--accent-primary)]"
                style={{ color: 'var(--muted-warm)' }}
              >
                Reset to Gold
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}