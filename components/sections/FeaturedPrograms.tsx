'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Zap, Flame } from 'lucide-react';

import { programs, programCategories, type Program } from '@/data/programs';
import { useLang } from '@/components/providers/LanguageProvider';

export function FeaturedPrograms() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredPrograms = activeCategory === 'ALL' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  const getDifficultyColor = (difficulty: Program['difficulty']) => {
    switch (difficulty) {
      case 'BEGINNER':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'INTERMEDIATE':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'ADVANCED':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'ALL LEVELS':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gold/20 text-gold border-gold/30';
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-gold"
          >
            Elite Training Options
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-warm-white mt-3 mb-4"
          >
            CHOOSE YOUR PROGRAM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm text-muted-warm max-w-2xl mx-auto"
          >
            Designed by certified coaches for measurable physical transformation
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {programCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-gold to-orange-500 text-obsidian shadow-lg shadow-gold/30'
                    : 'bg-transparent border border-gold/30 text-muted-warm hover:border-gold/60 hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/gym" className="group block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden border border-gold/20 bg-[#1a1a1a] transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                    
                    {/* Difficulty Badge */}
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${getDifficultyColor(program.difficulty)}`}>
                      {program.difficulty}
                    </div>

                    {/* Popular Badge */}
                    {program.popular && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-orange-500 text-obsidian text-xs font-semibold tracking-wider uppercase shadow-lg">
                        MOST POPULAR
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <div className="text-xs font-semibold tracking-wider uppercase text-gold mb-2">
                      {program.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-warm-white mb-2 group-hover:text-gold transition-colors">
                      {program.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-warm mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs text-muted-warm bg-gold/5 border border-gold/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-muted-warm pt-4 border-t border-gold/10">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-gold" />
                        <span>{program.frequency}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-gold" />
                        <span>{program.calories}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/gym"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold to-orange-500 text-obsidian font-semibold tracking-wider uppercase text-sm hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
          >
            View All Programs
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

