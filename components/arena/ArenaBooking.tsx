'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { games, timeSlots, bookedSlots } from '@/data/games';
import { Calendar, Clock, Users, PlayCircle } from 'lucide-react';

export function ArenaBooking() {
  const reduceMotion = useReducedMotion();
  const [selectedGame, setSelectedGame] = useState(games[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [players, setPlayers] = useState('2');

  const game = games.find((g) => g.id === selectedGame)!;

  const isBooked = (slot: string) => {
    return bookedSlots.some(
      (b) => b.game === selectedGame && b.date === selectedDate && b.slot === slot,
    );
  };

  const handleBook = () => {
    const g = games.find((g) => g.id === selectedGame);
    const msg = `Hello Duke Arena! I'd like to book:\nGame: ${g?.name}\nDate: ${selectedDate}\nTime: ${selectedSlot}\nPlayers: ${players}`;
    window.open(waLink(msg), '_blank');
  };

  const canBook = selectedGame && selectedDate && selectedSlot;

  return (
    <section id="book-slot" className="relative overflow-hidden py-28 lg:py-36" style={{ background: '#080809' }}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[8%] h-[520px] w-[760px] -translate-x-1/2 rounded-full opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.14), transparent 70%)', filter: 'blur(90px)' }}
        />
        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />
        <div className="absolute left-1/2 bottom-0 h-px w-[75%] -translate-x-1/2" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />
      </div>

      <div className="relative mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1400px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
              Concierge Reservation
            </span>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>
          <h2
            className="mt-6 font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(40px, 5.5vw, 82px)', lineHeight: 0.96 }}
          >
            BOOK YOUR
            <br />
            <span className="text-gold-gradient">SLOT.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
            Choose your arena, date and hour. Our host will confirm your table instantly on WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="relative mx-auto border border-[rgba(212,175,55,0.15)] bg-[rgba(14,14,16,0.7)] backdrop-blur-sm lg:max-w-5xl"
        >
          <div className="absolute left-0 right-0 top-0 h-px opacity-70" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)' }} />
          <div className="absolute left-0 right-0 bottom-0 h-px opacity-40" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)' }} />
          <div className="absolute left-0 top-0 h-full w-px opacity-30" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.5), transparent 60%)' }} />
          <div className="absolute right-0 top-0 h-full w-px opacity-30" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.5), transparent 60%)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
            <div className="relative border-b border-[rgba(212,175,55,0.12)] p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)`,
                }}
              />
              <div className="relative">
                <div className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">Selected Arena</div>
                <h3 className="font-display text-3xl font-bold text-gold-gradient">{game.name}</h3>
                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">Member Rate</div>
                      <div className="mt-1 font-display text-2xl font-bold text-warm-white">৳{game.priceMember}<span className="ml-1 text-xs text-[#8E877A]">/hr</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">Guest Rate</div>
                      <div className="mt-1 font-display text-2xl font-bold text-[#C9BFA8]">৳{game.pricePerHour}<span className="ml-1 text-xs text-[#8E877A]">/hr</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">Open Daily</div>
                      <div className="mt-1 text-sm text-warm-white">10:00 AM – 12:00 AM</div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 h-px" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#8E877A]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  Live Host Online
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <div className="space-y-7">
                <div>
                  <label className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
                    <PlayCircle className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Select Arena
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {games.map((g) => {
                      const active = selectedGame === g.id;
                      return (
                        <button
                          key={g.id}
                          onClick={() => setSelectedGame(g.id)}
                          className={`relative border px-4 py-3 text-left text-xs sm:text-sm transition-all duration-300 ${
                            active
                              ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.08)] text-[#F1DDA0]'
                              : 'border-[rgba(212,175,55,0.14)] text-[#B6B0A5] hover:border-[rgba(212,175,55,0.4)] hover:text-warm-white'
                          }`}
                          style={active ? { boxShadow: 'inset 0 0 30px rgba(212,175,55,0.08)' } : undefined}
                        >
                          <span className={`block font-display font-semibold ${active ? 'text-gold-gradient' : ''}`}>
                            {g.name}
                          </span>
                          <span className="mt-1 block text-[10px] tracking-[0.2em] opacity-70">৳{g.priceMember}/hr</span>
                          {active && <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={1.8} />
                      Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setSelectedSlot('');
                      }}
                      className="w-full border border-[rgba(212,175,55,0.18)] bg-[rgba(10,10,12,0.75)] px-4 py-3.5 text-sm text-warm-white transition-all duration-300 focus:border-[rgba(212,175,55,0.55)] focus:outline-none focus:bg-[rgba(10,10,12,0.95)] [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
                      <Users className="h-3.5 w-3.5" strokeWidth={1.8} />
                      Players
                    </label>
                    <select
                      value={players}
                      onChange={(e) => setPlayers(e.target.value)}
                      className="w-full border border-[rgba(212,175,55,0.18)] bg-[rgba(10,10,12,0.75)] px-4 py-3.5 text-sm text-warm-white transition-all duration-300 focus:border-[rgba(212,175,55,0.55)] focus:outline-none"
                    >
                      {['1','2','3','4','5','6','7','8'].map((n) => (
                        <option key={n} value={n} className="bg-[#0A0A0C]">
                          {n} player{Number(n) > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Time Slot
                    {selectedDate && (
                      <span className="ml-auto text-[9px] tracking-[0.2em] text-[#8E877A]">
                        Red = Booked
                      </span>
                    )}
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
                    {timeSlots.map((slot) => {
                      const booked = selectedDate ? isBooked(slot) : false;
                      const active = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          disabled={booked}
                          onClick={() => setSelectedSlot(slot)}
                          className={`relative border px-2 py-3 text-xs transition-all duration-300 ${
                            booked
                              ? 'cursor-not-allowed border-[rgba(220,38,38,0.28)] bg-[rgba(220,38,38,0.08)] text-[rgba(220,38,38,0.45)] line-through'
                              : active
                              ? 'border-[#D4AF37] bg-[rgba(212,175,55,0.1)] text-[#F1DDA0] shadow-[inset_0_0_22px_rgba(212,175,55,0.1)]'
                              : 'border-[rgba(212,175,55,0.14)] text-[#B6B0A5] hover:border-[rgba(212,175,55,0.4)] hover:text-warm-white'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {canBook && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-10 flex flex-col items-stretch justify-between gap-5 border-t border-[rgba(212,175,55,0.12)] pt-8 sm:flex-row sm:items-end">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#8E877A]">Reservation Summary</div>
                        <div className="mt-3 font-display text-xl text-warm-white">
                          <span className="text-gold-gradient">{game.name}</span>
                          <span className="mx-2 text-[#5E574D]">◆</span>
                          {selectedDate}
                          <span className="mx-2 text-[#5E574D]">◆</span>
                          {selectedSlot}
                          <span className="mx-2 text-[#5E574D]">◆</span>
                          {players}pax
                        </div>
                      </div>
                      <GoldButton onClick={handleBook} className="sm:w-auto w-full" icon>
                        Confirm via WhatsApp
                      </GoldButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
