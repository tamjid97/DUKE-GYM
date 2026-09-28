'use client';

import { Tabs } from '@/components/shared/Tabs';
import { poolTimetable } from '@/data/pool';

export function PoolTimetable() {
  const tabs = poolTimetable.map((t) => ({ id: t.batch, label: t.batch }));

  return (
    <div className="max-w-3xl mx-auto">
      <Tabs tabs={tabs}>
        {(active) => {
          const slot = poolTimetable.find((t) => t.batch === active);
          return (
            <div className="glass-card p-6 text-center">
              <h3 className="font-display text-xl text-gold-gradient mb-2">{slot?.batch}</h3>
              <p className="text-sm text-muted-warm">{slot?.days}</p>
              <p className="text-lg text-warm-white mt-2">{slot?.time}</p>
            </div>
          );
        }}
      </Tabs>
      <p className="text-center text-xs text-muted-warm mt-4">Note: Timings may change for maintenance or special events. Members are notified in advance.</p>
    </div>
  );
}
