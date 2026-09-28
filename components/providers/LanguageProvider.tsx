'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { dictionary, type Lang } from '@/lib/i18n';

type DictType = Record<string, string>;
type LangDict = typeof dictionary.en extends DictType ? DictType : DictType;

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: LangDict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  }, []);

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
