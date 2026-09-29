'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (typeof window === 'undefined') return;
    
    const whatsappNumber = '8801608044682';
    const msg = `Hello DUKE Fitness Club,\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-panel/80 to-smoke/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 lg:p-10 shadow-2xl"
    >
      {/* Section heading */}
      <div className="mb-8">
        <span className="text-xs text-gold tracking-[0.3em] uppercase font-semibold">Send a Message</span>
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-warm-white mt-2">
          Get in Touch
        </h3>
      </div>

      {/* Form fields */}
      <div className="space-y-6">
        {/* Name field */}
        <div className="group">
          <label className="text-xs text-gold/80 tracking-widest uppercase block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-white border border-gold/20 rounded-xl px-5 py-4 text-obsidian placeholder:text-muted-warm/50 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
          />
        </div>

        {/* Phone field */}
        <div className="group">
          <label className="text-xs text-gold/80 tracking-widest uppercase block mb-2 font-medium">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            className="w-full bg-white border border-gold/20 rounded-xl px-5 py-4 text-obsidian placeholder:text-muted-warm/50 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
          />
        </div>

        {/* Message field */}
        <div className="group">
          <label className="text-xs text-gold/80 tracking-widest uppercase block mb-2 font-medium">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="w-full bg-white border border-gold/20 rounded-xl px-5 py-4 text-obsidian placeholder:text-muted-warm/50 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
          />
        </div>

        {/* Submit button */}
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-gold via-champagne to-gold text-obsidian font-bold tracking-[0.2em] uppercase py-4 px-6 shadow-lg transition-all duration-300 hover:shadow-gold/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            Send via WhatsApp
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </motion.button>
      </div>
    </motion.div>
  );
}
