'use client';

import { motion } from 'framer-motion';

type FilterType = 'owner' | 'manager' | 'male' | 'female';

interface TrainerFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function TrainerFilter({ activeFilter, onFilterChange }: TrainerFilterProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'owner', label: 'Owner' },
    { value: 'manager', label: 'Manager' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
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
