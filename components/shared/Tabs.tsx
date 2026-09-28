'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  children: (activeTab: string) => React.ReactNode;
  className?: string;
  variant?: 'pills' | 'editorial';
}

export function Tabs({ tabs, defaultTab, children, className, variant = 'pills' }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id || '');

  return (
    <div className={className}>
      <div className={cn(
        'flex flex-wrap gap-2 mb-8',
        variant === 'editorial' ? 'justify-start gap-3' : 'justify-center'
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'transition-all duration-300',
              variant === 'editorial'
                ? cn(
                    'rounded-[10px] border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em]',
                    active === tab.id
                      ? 'border-[rgba(212,175,55,0.55)] bg-[rgba(212,175,55,0.12)] text-[#F1DDA0]'
                      : 'border-[rgba(212,175,55,0.18)] bg-transparent text-[#A8A39A] hover:border-[rgba(212,175,55,0.4)] hover:text-[#D4AF37]'
                  )
                : cn(
                    'rounded-full px-4 py-2 text-sm font-medium',
                    active === tab.id
                      ? 'btn-gold'
                      : 'border border-gold/20 text-muted-warm hover:border-gold/50 hover:text-gold'
                  )
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children(active)}
      </motion.div>
    </div>
  );
}
