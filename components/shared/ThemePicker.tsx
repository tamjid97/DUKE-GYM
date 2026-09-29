'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { useTheme, ThemeKey } from '@/components/providers/ThemeProvider';

export function ThemePicker() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
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

  const currentTheme = themes.find(t => t.key === theme) || themes[0];

  return (
    <div className="relative" ref={popoverRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--obsidian)] focus:ring-[var(--accent-primary)]"
        style={{
          background: 'color-mix(in srgb, var(--panel) 80%, transparent)',
          border: '1px solid var(--border-accent)',
        }}
        whileHover={{ 
          background: 'color-mix(in srgb, var(--panel) 90%, transparent)',
          scale: 1.05,
          boxShadow: '0 0 12px var(--accent-primary)40'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        title="Toggle theme"
      >
        <div className="relative">
          <Palette 
            className="w-5 h-5" 
            style={{ color: 'var(--accent-primary)' }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
            style={{
              background: currentTheme.primary,
              boxShadow: `0 0 6px ${currentTheme.primary}`,
            }}
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 z-50 w-48"
          >
            <div
              className="p-3 rounded-xl"
              style={{
                background: 'color-mix(in srgb, var(--panel) 95%, transparent)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--border-accent)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <p className="text-[10px] tracking-[0.25em] uppercase mb-3 text-center" style={{ color: 'var(--muted-warm)' }}>
                Choose Theme
              </p>
              <div className="space-y-2" role="radiogroup" aria-label="Select accent color">
                {themes.map((t) => (
                  <motion.button
                    key={t.key}
                    onClick={() => handleThemeChange(t.key)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none"
                    style={{
                      background: theme === t.key 
                        ? 'color-mix(in srgb, var(--accent-primary) 15%, transparent)' 
                        : 'transparent',
                      border: theme === t.key 
                        ? `1px solid ${t.primary}40` 
                        : '1px solid transparent',
                    }}
                    whileHover={{ 
                      background: 'color-mix(in srgb, var(--accent-primary) 10%, transparent)' 
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={t.name}
                    aria-checked={theme === t.key}
                    role="radio"
                  >
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-5 h-5 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${t.deep} 0%, ${t.primary} 50%, ${t.highlight} 100%)`,
                          boxShadow: `0 0 8px ${t.primary}40`,
                        }}
                      />
                      {theme === t.key && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div 
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ 
                              background: 'white',
                              boxShadow: '0 0 4px rgba(0,0,0,0.3)'
                            }}
                          />
                        </motion.div>
                      )}
                    </div>
                    <span 
                      className="text-xs font-medium text-left flex-1"
                      style={{ 
                        color: theme === t.key ? 'var(--accent-primary)' : 'var(--warm-white)'
                      }}
                    >
                      {t.name}
                    </span>
                    {theme === t.key && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ 
                          background: t.primary,
                          boxShadow: `0 0 8px ${t.primary}`
                        }}
                      >
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}