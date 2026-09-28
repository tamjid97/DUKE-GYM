'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 30 }: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)}>
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="inline-flex gap-8 shrink-0">{children}</div>
        <div className="inline-flex gap-8 shrink-0" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}
