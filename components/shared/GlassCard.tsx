'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  hover?: boolean;
}

export function GlassCard({ children, className, tilt = false, hover = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : undefined,
        transition: 'transform 0.2s ease-out',
      }}
      className={cn(
        'glass-card corner-ornament relative overflow-hidden p-6',
        hover && 'transition-all duration-300 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
