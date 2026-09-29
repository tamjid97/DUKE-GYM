'use client';

import { useState } from 'react';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';

export function ReservationForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (typeof window === 'undefined') return;
    
    const msg = `Hello Duke Kitchen! I'd like to reserve a table.\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <div className="glass-card corner-ornament p-8 max-w-xl mx-auto">
      <h3 className="font-display text-2xl font-bold text-gold-gradient mb-6 text-center">Reserve a Table</h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs text-gold tracking-widest uppercase block mb-1">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gold tracking-widest uppercase block mb-1">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
          </div>
          <div>
            <label className="text-xs text-gold tracking-widest uppercase block mb-1">Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="text-xs text-gold tracking-widest uppercase block mb-1">Guests</label>
          <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none">
            {['1','2','3','4','5','6','7','8','9','10+'].map((n) => <option key={n} value={n} className="bg-smoke">{n}</option>)}
          </select>
        </div>
        <GoldButton onClick={handleSubmit} className="w-full">Send Reservation</GoldButton>
      </div>
    </div>
  );
}
