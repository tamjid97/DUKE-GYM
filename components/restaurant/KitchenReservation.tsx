'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';

export function KitchenReservation() {
  const reduceMotion = useReducedMotion();
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
    <section className="relative overflow-hidden py-24 lg:py-32 bg-obsidian">
      <div className="mx-auto px-6 lg:px-16 max-w-[1600px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold mb-4">
            — TABLE BOOKING
          </p>
          <h2
            className="font-display font-bold text-warm-white"
            style={{ fontSize: 'clamp(42px, 5.5vw, 88px)', lineHeight: 0.95 }}
          >
            TABLE
            <br />
            <span className="text-gold-gradient">RESERVATION.</span>
          </h2>
          <p className="mt-6 text-muted-warm max-w-2xl">
            Book your table via WhatsApp — we'll confirm within minutes.
          </p>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-bronze via-gold to-champagne" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-0 relative border border-gold/15 overflow-hidden">
          <div className="lg:col-span-7 order-2 lg:order-1 relative min-h-[420px] lg:min-h-[620px] h-full w-full overflow-hidden">
            <img
              src={siteConfig.zones.restaurant.image}
              alt="Duke Kitchen dining"
              className={`absolute inset-0 h-full w-full object-cover ${reduceMotion ? '' : 'ken-burns'}`}
            />
            <div className="absolute inset-0 bg-obsidian/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/10 via-obsidian/40 to-obsidian/80" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 40%, rgba(11,11,12,0.6) 100%)',
              }}
            />
            <div className="gym-grain" />

            <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-gold/50" />
            <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-gold/50" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-l border-b border-gold/50" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-r border-b border-gold/50" />

            <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">
                — CONCIERGE SERVICE
              </p>
              <h3
                className="font-display font-bold text-warm-white"
                style={{ fontSize: 'clamp(28px, 2.6vw, 44px)', lineHeight: 1 }}
              >
                Reserve Your Table
              </h3>
              <p className="mt-4 text-warm-white/80 max-w-md leading-relaxed text-[14px]">
                Our concierge team prepares every detail of your dining experience — from the table setting to the perfect plate.
              </p>
              <div className="mt-8 flex flex-wrap gap-5 items-center text-[12px] uppercase tracking-[0.24em]">
                <div className="flex items-center gap-2 text-muted-warm">
                  <span className="text-gold text-[8px]">◆</span>
                  Floor: Ground · West Wing
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <span className="text-[8px]">◆</span>
                  Daily 8AM–11PM
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative min-h-[420px] lg:min-h-[620px] h-full bg-gradient-to-b from-smoke/50 via-smoke/30 to-obsidian border-l-0 lg:border-l border-gold/15">
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center h-full">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-3">
                — BOOKING FORM
              </p>
              <h3 className="font-display font-bold text-warm-white text-[26px] lg:text-[28px] leading-tight mb-2">
                Concierge Booking
              </h3>
              <p className="mt-2 mb-7 text-[12.5px] leading-relaxed text-warm-white/72 italic">
                A member of our concierge team will confirm your table within minutes via WhatsApp.
              </p>
              <div className="h-px w-20 bg-gradient-to-r from-bronze via-gold to-transparent mb-8" />

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-gold">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-none h-12 px-4 text-[14px] text-white bg-gray-700 border-b-2 border-l border-r border-t border-gold/20 focus:border-gold/60 focus:outline-none transition-colors duration-300 placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-gold">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-none h-12 px-4 text-[14px] text-white bg-gray-700 border-b-2 border-l border-r border-t border-gold/20 focus:border-gold/60 focus:outline-none transition-colors duration-300 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-gold">
                      Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-none h-12 px-4 text-[14px] text-white bg-gray-700 border-b-2 border-l border-r border-t border-gold/20 focus:border-gold/60 focus:outline-none transition-colors duration-300 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-gold">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-none h-12 px-4 text-[14px] text-white bg-gray-700 border-b-2 border-l border-r border-t border-gold/20 focus:border-gold/60 focus:outline-none transition-colors duration-300 placeholder:text-gray-400"
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                      <option key={n} value={n} className="bg-gray-700">
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-9">
                <GoldButton
                  onClick={handleSubmit}
                  className="w-full !py-4 uppercase tracking-[0.22em] !text-sm !rounded-none"
                >
                  Send Reservation
                </GoldButton>
              </div>

              <p className="mt-5 text-center text-[10.5px] uppercase tracking-[0.3em] text-muted-warm/80">
                You will be redirected to WhatsApp to confirm your booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
