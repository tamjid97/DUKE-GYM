'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type ThemeKey = 'gold' | 'sapphire' | 'emerald' | 'crimson' | 'platinum';

export interface ThemeOption {
  key: ThemeKey;
  name: string;
  primary: string;
  secondary: string;
  bg: string;
}

export const THEMES: ThemeOption[] = [
  { key: 'gold', name: 'Royal Gold', primary: '#D4AF37', secondary: '#F1DDA0', bg: '#0B0B0C' },
  { key: 'sapphire', name: 'Midnight Sapphire', primary: '#4A7CFF', secondary: '#A8C4FF', bg: '#0A0E1A' },
  { key: 'emerald', name: 'Emerald Midnight', primary: '#10B981', secondary: '#86EFAC', bg: '#081210' },
  { key: 'crimson', name: 'Crimson Royal', primary: '#DC2626', secondary: '#FCA5A5', bg: '#120808' },
  { key: 'platinum', name: 'Arctic Platinum', primary: '#C0C0C0', secondary: '#E4E4E7', bg: '#0F0F10' },
];

interface ThemeContextValue {
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('gold');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('duke-theme') : null;
    if (saved && (THEMES.some(t => t.key === saved))) {
      setThemeState(saved as ThemeKey);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('duke-theme', theme);
      } catch {}
    }
  }, [theme]);

  const setTheme = useCallback((t: ThemeKey) => {
    setThemeState(t);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
