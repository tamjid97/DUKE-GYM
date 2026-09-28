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
}

export function Tabs({ tabs, defaultTab, children, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id || '');

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
              active === tab.id
                ? 'btn-gold'
                : 'border border-gold/20 text-muted-warm hover:border-gold/50 hover:text-gold'
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
