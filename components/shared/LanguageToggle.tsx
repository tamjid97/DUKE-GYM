'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type Language = 'en' | 'bn';

export function LanguageToggle() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('duke-lang') as Language;
    if (saved && (saved === 'en' || saved === 'bn')) {
      setLang(saved);
    }
  }, []);

  const handleToggle = () => {
    const newLang = lang === 'en' ? 'bn' : 'en';
    setLang(newLang);
    localStorage.setItem('duke-lang', newLang);
    // TODO: Implement actual language switching logic
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative px-4 py-2 rounded-full glass-card text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--obsidian)] focus:ring-[var(--accent-primary)]"
      style={{
        border: '1px solid var(--border-accent)',
        boxShadow: '0 0 15px var(--accent-glow)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <span style={{ color: lang === 'en' ? 'var(--accent-primary)' : 'var(--muted-warm)' }}>
        EN
      </span>
      <span className="mx-1" style={{ color: 'var(--muted-warm)' }}>
        |
      </span>
      <span style={{ color: lang === 'bn' ? 'var(--accent-primary)' : 'var(--muted-warm)' }}>
        BN
      </span>
    </motion.button>
  );
}