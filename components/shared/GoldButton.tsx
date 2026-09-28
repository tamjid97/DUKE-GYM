'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'solid' | 'outline';
  icon?: boolean;
  external?: boolean;
}

export function GoldButton({
  children,
  href,
  onClick,
  className,
  variant = 'solid',
  icon = false,
  external = false,
}: GoldButtonProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300',
    variant === 'solid' && 'btn-gold',
    variant === 'outline' && 'border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold',
    className
  );

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
}
