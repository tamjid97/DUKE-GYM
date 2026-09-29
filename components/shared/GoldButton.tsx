'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GoldButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  external?: boolean;
  className?: string;
}

export function GoldButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = false,
  external = false,
  className = '',
}: GoldButtonProps) {
  const baseStyles = 'btn-gold relative overflow-hidden rounded-full font-bold tracking-[0.2em] uppercase transition-all duration-300';
  
  const variantStyles = {
    primary: 'text-[var(--obsidian)] px-10 py-4',
    secondary: 'text-[var(--accent-primary)] border-2 px-8 py-3 hover:text-[var(--obsidian)]',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </>
  );

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
        style={
          variant === 'primary'
            ? {
                background: 'var(--accent-gradient)',
                boxShadow: '0 0 0 1px var(--accent-primary), 0 10px 30px -8px var(--accent-glow)',
              }
            : {
                borderColor: 'var(--accent-primary)',
                background: 'transparent',
              }
        }
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
      style={
        variant === 'primary'
          ? {
              background: 'var(--accent-gradient)',
              boxShadow: '0 0 0 1px var(--accent-primary), 0 10px 30px -8px var(--accent-glow)',
            }
          : {
              borderColor: 'var(--accent-primary)',
              background: 'transparent',
            }
      }
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </MotionButton>
  );
}