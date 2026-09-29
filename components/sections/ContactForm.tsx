'use client';

import { useState } from 'react';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink, telLink, mailtoLink } from '@/lib/contact';
import { siteConfig } from '@/data/siteConfig';


export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (typeof window === 'undefined') return;
    
    const msg = `Hello Duke Fitness Club!\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <div className="glass-card corner-ornament p-8">
      <h3 className="font-display text-2xl font-bold text-gold-gradient mb-6">Send a Message</h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs text-gold tracking-widest uppercase block mb-1">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        </div>
        <div>
          <label className="text-xs text-gold tracking-widest uppercase block mb-1">Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        </div>
        <div>
          <label className="text-xs text-gold tracking-widest uppercase block mb-1">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none resize-none" />
        </div>
        <GoldButton onClick={handleSubmit} className="w-full" icon>Send via WhatsApp</GoldButton>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h3 className="section-label mb-4">Contact Details</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="h-5 w-5 text-gold shrink-0 mt-0.5">📍</span>
            <div>
              <div className="text-sm text-warm-white">{siteConfig.address}</div>
              <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:underline">View on Map</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-5 w-5 text-gold shrink-0">📞</span>
            <a href={telLink()} className="text-sm text-warm-white hover:text-gold">{siteConfig.phoneDisplay}</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-5 w-5 text-gold shrink-0">✉️</span>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-warm-white hover:text-gold">{siteConfig.email}</a>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="section-label mb-4">Opening Hours</h3>
        <div className="space-y-3">
          {Object.entries(siteConfig.zones).map(([key, zone]) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <span className="text-warm-white">{zone.title}</span>
              <span className="text-muted-warm flex items-center gap-1">
                <span className="h-3 w-3 text-gold">🕐</span>
                {zone.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="section-label mb-4">How to Reach Each Zone</h3>
        <ul className="space-y-3">
          {Object.entries(siteConfig.zones).map(([key, zone]) => (
            <li key={key} className="text-sm">
              <span className="text-gold font-semibold">{zone.title}:</span>{' '}
              <span className="text-muted-warm">{zone.direction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
