'use client';

import { motion } from 'framer-motion';

interface OptionCardProps {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  checkmark?: boolean;
}

export function OptionCard({ label, description, selected, onClick, checkmark = true }: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-4 rounded-xl border transition-all duration-300 ${
        selected
          ? 'bg-gradient-to-r from-gold to-champagne border-gold text-obsidian'
          : 'bg-charcoal border-gold/30 text-warm-white hover:border-gold/60 hover:shadow-lg hover:shadow-gold/20'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 text-left">
          <div className={`font-semibold text-sm ${selected ? 'text-obsidian' : 'text-warm-white'}`}>
            {label}
          </div>
          {description && (
            <div className={`text-xs mt-1 ${selected ? 'text-obsidian/70' : 'text-muted-warm'}`}>
              {description}
            </div>
          )}
        </div>
        {checkmark && selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex-shrink-0 w-5 h-5 rounded-full bg-obsidian flex items-center justify-center"
          >
            <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
