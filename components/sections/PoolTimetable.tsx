'use client';

import { Tabs } from '@/components/shared/Tabs';
import { poolTimetable } from '@/data/pool';

export function PoolTimetable() {
  const tabs = poolTimetable.map((t) => ({ id: t.batch, label: t.batch }));

  return (
    <div className="mx-auto w-full" style={{ maxWidth: '1100px' }}>
      <Tabs tabs={tabs} variant="editorial">
        {(active) => {
          const slot = poolTimetable.find((t) => t.batch === active);
          const days = slot?.days.split(',').map((d) => d.trim()) ?? [];
          return (
            <div
              className="relative overflow-hidden px-8 py-12 text-left sm:px-12"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(212,175,55,0.35)',
                background: 'linear-gradient(135deg, rgba(156,203,200,0.06), rgba(255,255,255,0.03))',
                boxShadow: '0 0 40px rgba(212,175,55,0.08)',
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">{slot?.batch}</p>
              <p
                className="mt-5 font-display font-bold text-warm-white"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05 }}
              >
                {slot?.time}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {days.map((day) => (
                  <span
                    key={day}
                    className="border border-[rgba(212,175,55,0.28)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#F1DDA0]"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          );
        }}
      </Tabs>
      <p className="mt-6 text-center text-[11px] uppercase tracking-[0.18em] text-muted-warm">
        Timings may change for maintenance or special events. Members are notified in advance.
      </p>
    </div>
  );
}
