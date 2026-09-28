'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export function PageHeader({ label, title, subtitle, image, className }: PageHeaderProps) {
  return (
    <section className={cn('relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20', className)}>
      {/* Background */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/70 to-obsidian" />
        </div>
      )}
      {!image && <div className="absolute inset-0 z-0 bg-gradient-to-b from-smoke to-obsidian" />}

      {/* Content */}
      <div className="relative z-10 px-4 py-16 text-center">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="section-label">{label}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl lg:text-6xl mt-3"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-warm"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="diamond-divider mt-6"
        >
          <div className="diamond" />
        </motion.div>
      </div>
    </section>
  );
}
