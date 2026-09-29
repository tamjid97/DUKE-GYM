'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type ThemeKey = 'gold' | 'sapphire' | 'amethyst' | 'emerald' | 'ruby';

export interface ThemeOption {
  key: ThemeKey;
  name: string;
  primary: string;
  highlight: string;
  deep: string;
  bg: string;
}

export const THEMES: ThemeOption[] = [
  { 
    key: 'gold', 
    name: 'Royal Gold', 
    primary: '#C9A24B', 
    highlight: '#EAD9A0', 
    deep: '#7C5E24',
    bg: '#0B0B0C' 
  },
  { 
    key: 'sapphire', 
    name: 'Sapphire Blue', 
    primary: '#3E63A6', 
    highlight: '#8FB0E0', 
    deep: '#1D3559',
    bg: '#0B0B0C' 
  },
  { 
    key: 'amethyst', 
    name: 'Amethyst Violet', 
    primary: '#6C4E9E', 
    highlight: '#B39DDB', 
    deep: '#3A2A5C',
    bg: '#0B0B0C' 
  },
  { 
    key: 'emerald', 
    name: 'Emerald Jade', 
    primary: '#2E7D5B', 
    highlight: '#7FCBA4', 
    deep: '#144A34',
    bg: '#0B0B0C' 
  },
  { 
    key: 'ruby', 
    name: 'Ruby Rose', 
    primary: '#B14A5C', 
    highlight: '#E2909D', 
    deep: '#6B1F2E',
    bg: '#0B0B0C' 
  },
];

interface ThemeContextValue {
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Anti-flash script to prevent color flash on page load
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('duke-theme');
              if (savedTheme && ['gold', 'sapphire', 'amethyst', 'emerald', 'ruby'].includes(savedTheme)) {
                document.documentElement.setAttribute('data-theme', savedTheme);
              } else {
                document.documentElement.setAttribute('data-theme', 'gold');
              }
              
              const savedLang = localStorage.getItem('duke-lang');
              if (savedLang && ['en', 'bn'].includes(savedLang)) {
                document.documentElement.lang = savedLang;
              }
            } catch (e) {
              console.log('Theme script error:', e);
            }
          })();
        `,
      }}
    />
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('gold');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== 'undefined' ? localStorage.getItem('duke-theme') : null;
    if (saved && (THEMES.some(t => t.key === saved))) {
      setThemeState(saved as ThemeKey);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined' && mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('duke-theme', theme);
        // Update meta theme-color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
          const themeObj = THEMES.find(t => t.key === theme);
          if (themeObj) {
            metaThemeColor.setAttribute('content', themeObj.primary);
          }
        }
      } catch {}
    }
  }, [theme, mounted]);

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
