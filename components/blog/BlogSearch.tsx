'use client';

import { useState } from 'react';

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search articles..."
          className="w-full px-5 py-3 rounded-lg bg-black/50 border border-gold/30 text-warm-white placeholder-muted-warm focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
