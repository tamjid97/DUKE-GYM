'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { schedule, scheduleTabs, days, type ScheduleSlot } from '@/data/schedule';
import { Tabs } from '@/components/shared/Tabs';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function ScheduleView() {
  return (
    <Tabs tabs={scheduleTabs.map((t) => ({ id: t.id, label: t.label }))}>
      {(active) => {
        const slots = schedule.filter((s) => s.zone === active);
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="p-3 text-left text-xs text-gold tracking-widest uppercase">Time</th>
                  {days.map((day) => (
                    <th key={day} className="p-3 text-center text-xs text-gold tracking-widest uppercase">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slots.map((slot, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    className="border-b border-gold/10"
                  >
                    <td className="p-3 text-sm text-gold whitespace-nowrap">
                      {slot.start} - {slot.end}
                    </td>
                    {days.map((day) => (
                      <td key={day} className="p-3 text-center">
                        {slot.day === day ? (
                          <div className="glass-card p-3">
                            <div className="text-xs text-warm-white font-medium">{slot.activity}</div>
                            <div className="text-xs text-muted-warm mt-1">{slot.trainer}</div>
                          </div>
                        ) : null}
                      </td>
                    ))}
                  </motion.tr>
                ))}
                {slots.length === 0 && (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-muted-warm text-sm">No sessions scheduled for this category.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      }}
    </Tabs>
  );
}
