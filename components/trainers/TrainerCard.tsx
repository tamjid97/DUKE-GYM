'use client';

import { motion } from 'framer-motion';
import { Trainer } from '@/data/trainers';

interface TrainerCardProps {
  trainer: Trainer;
  onViewProfile: () => void;
}

export function TrainerCard({ trainer, onViewProfile }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-charcoal rounded-2xl overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-1"
    >
      {/* Trainer Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-xl font-bold text-warm-white mb-1">
            {trainer.name}
          </h3>
          <p className="text-gold font-medium text-sm mb-2">
            {trainer.role}
          </p>
          <p className="text-muted-warm text-xs line-clamp-2 mb-3">
            {trainer.shortBio}
          </p>
          <div className="text-xs text-muted-warm mb-4">
            {trainer.experience} Experience
          </div>
        </div>
      </div>

      {/* View Profile Button */}
      <div className="p-5 pt-0">
        <button
          onClick={onViewProfile}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"
        >
          VIEW PROFILE
          <span>→</span>
        </button>
      </div>
    </motion.div>
  );
}
