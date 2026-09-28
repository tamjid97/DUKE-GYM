'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { games, timeSlots, bookedSlots } from '@/data/games';

export function BookingUI() {
  const [selectedGame, setSelectedGame] = useState(games[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [players, setPlayers] = useState('2');

  const game = games.find((g) => g.id === selectedGame)!;

  const isBooked = (slot: string) => {
    return bookedSlots.some((b) => b.game === selectedGame && b.date === selectedDate && b.slot === slot);
  };

  const handleBook = () => {
    const g = games.find((g) => g.id === selectedGame);
    const msg = `Hello Duke Arena! I'd like to book:\nGame: ${g?.name}\nDate: ${selectedDate}\nTime: ${selectedSlot}\nPlayers: ${players}`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <div className="glass-card corner-ornament p-8">
      <h3 className="font-display text-2xl font-bold text-gold-gradient mb-6">Book a Game</h3>

      {/* Game selection */}
      <div className="mb-6">
        <label className="text-xs text-gold tracking-widest uppercase block mb-2">Select Game</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {games.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGame(g.id)}
              className={`rounded-lg border p-3 text-sm transition-all ${selectedGame === g.id ? 'border-gold bg-gold/10 text-gold' : 'border-gold/20 text-muted-warm hover:border-gold/50'}`}
            >
              {g.name}
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="text-xs text-gold tracking-widest uppercase block mb-2">Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none"
        />
      </div>

      {/* Time slots */}
      <div className="mb-6">
        <label className="text-xs text-gold tracking-widest uppercase block mb-2">Time Slot</label>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {timeSlots.map((slot) => {
            const booked = selectedDate ? isBooked(slot) : false;
            return (
              <button
                key={slot}
                disabled={booked}
                onClick={() => setSelectedSlot(slot)}
                className={`rounded-lg border p-2 text-xs transition-all ${
                  booked
                    ? 'border-red-500/30 bg-red-500/10 text-red-400/50 cursor-not-allowed line-through'
                    : selectedSlot === slot
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gold/20 text-muted-warm hover:border-gold/50'
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
      </div>

      {/* Players */}
      <div className="mb-6">
        <label className="text-xs text-gold tracking-widest uppercase block mb-2">Players</label>
        <select
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
          className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none"
        >
          {['1','2','3','4','5','6','7','8'].map((n) => <option key={n} value={n} className="bg-smoke">{n} players</option>)}
        </select>
      </div>

      {/* Price preview */}
      <div className="mb-6 flex items-center justify-between text-sm">
        <span className="text-muted-warm">Rate: ৳{game.priceMember}/hr (member) • ৳{game.pricePerHour}/hr (non-member)</span>
      </div>

      <GoldButton onClick={handleBook} className="w-full" icon>
        Confirm Booking
      </GoldButton>
    </div>
  );
}
