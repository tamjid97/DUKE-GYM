'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { GoldButton } from '@/components/shared/GoldButton';

export function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call or WhatsApp message
    const whatsappNumber = siteConfig.whatsapp;
    const msg = `Hello DUKE Fitness Club,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const infoCards = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Address',
      value: siteConfig.address,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: siteConfig.phoneDisplay,
      link: `tel:${siteConfig.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Opening Hours',
      value: `${siteConfig.openingHours.weekdays}\n${siteConfig.openingHours.weekends}`,
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">CONTACT</span>
            <div className="h-px w-16 bg-gradient-to-r from-[var(--accent-500)] to-transparent" />
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-warm-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-muted-warm text-sm lg:text-base max-w-2xl mx-auto">
            Have questions? Want to book a tour? We're here to help you start your fitness journey.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Left Column: Info Cards + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl"
                >
                  <div className="text-[var(--accent-500)] mb-2">{card.icon}</div>
                  <div className="text-xs text-muted-warm uppercase tracking-wider mb-1">{card.label}</div>
                  {card.link ? (
                    <a
                      href={card.link}
                      className="text-sm text-warm-white hover:text-[var(--accent-500)] transition-colors block whitespace-pre-line"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <div className="text-sm text-warm-white whitespace-pre-line">{card.value}</div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative rounded-2xl overflow-hidden border border-[var(--accent-500)]/30 shadow-2xl"
              style={{ minHeight: '300px' }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-obsidian/30 pointer-events-none z-10" />
              {/* Map iframe */}
              <iframe
                src={siteConfig.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(1.1)', position: 'absolute', inset: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Duke Fitness Club Location"
                className="w-full h-full"
              />
              {/* Open in Maps button */}
              <motion.a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 z-20 bg-gradient-to-r from-[var(--accent-500)] via-[var(--accent-400)] to-[var(--accent-500)] text-obsidian font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 hover:shadow-[var(--accent-500)]/30 transition-all duration-300 text-xs"
              >
                Open in Maps
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 rounded-2xl border border-[var(--accent-500)]/20">
              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="text-xs text-[var(--accent-500)]/80 tracking-widest uppercase block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-white/5 border border-[var(--accent-500)]/20 rounded-xl px-5 py-4 text-warm-white placeholder:text-muted-warm/50 focus:border-[var(--accent-500)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 transition-all duration-300"
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label className="text-xs text-[var(--accent-500)]/80 tracking-widest uppercase block mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full bg-white/5 border border-[var(--accent-500)]/20 rounded-xl px-5 py-4 text-warm-white placeholder:text-muted-warm/50 focus:border-[var(--accent-500)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 transition-all duration-300"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="text-xs text-[var(--accent-500)]/80 tracking-widest uppercase block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full bg-white/5 border border-[var(--accent-500)]/20 rounded-xl px-5 py-4 text-warm-white placeholder:text-muted-warm/50 focus:border-[var(--accent-500)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 transition-all duration-300"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="text-xs text-[var(--accent-500)]/80 tracking-widest uppercase block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-[var(--accent-500)]/20 rounded-xl px-5 py-4 text-warm-white placeholder:text-muted-warm/50 focus:border-[var(--accent-500)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-[var(--accent-500)] via-[var(--accent-400)] to-[var(--accent-500)] text-obsidian font-bold tracking-[0.2em] uppercase py-4 px-6 shadow-lg transition-all duration-300 hover:shadow-[var(--accent-500)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      'SENDING...'
                    ) : submitSuccess ? (
                      'SENT ✓'
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
