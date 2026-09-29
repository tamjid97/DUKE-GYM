'use client';

import { motion } from 'framer-motion';

type CategoryType = 'all' | 'training' | 'nutrition' | 'swimming' | 'recovery' | 'lifestyle';

interface BlogFilterProps {
  activeFilter: CategoryType;
  onFilterChange: (filter: CategoryType) => void;
}

export function BlogFilter({ activeFilter, onFilterChange }: BlogFilterProps) {
  const filters: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'ALL' },
    { value: 'training', label: 'TRAINING' },
    { value: 'nutrition', label: 'NUTRITION' },
    { value: 'swimming', label: 'SWIMMING' },
    { value: 'recovery', label: 'RECOVERY' },
    { value: 'lifestyle', label: 'LIFESTYLE' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.value)}
          className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
            activeFilter === filter.value
              ? 'bg-gradient-to-r from-gold to-champagne text-obsidian'
              : 'border border-gold/50 text-gold hover:bg-gold/10'
          }`}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}
