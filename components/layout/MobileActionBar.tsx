'use client';

import { Phone, MessageCircle, UserPlus } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { waLink, telLink } from '@/lib/contact';
import { useLang } from '@/components/providers/LanguageProvider';

export function MobileActionBar() {
  const { t } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="glass-card flex items-center justify-around border-t border-gold/20 rounded-t-2xl px-2 py-2">
        <a href={telLink()} className="flex flex-col items-center gap-1 px-4 py-1.5 text-warm-white">
          <Phone className="h-5 w-5 text-gold" />
          <span className="text-[10px]">{t.callNow}</span>
        </a>
        <a
          href={waLink('Hello Duke Fitness Club! I have a question.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-1.5 text-warm-white"
        >
          <MessageCircle className="h-5 w-5 text-gold" />
          <span className="text-[10px]">{t.whatsapp}</span>
        </a>
        <a
          href={waLink('Hello Duke Fitness Club! I would like to join.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex flex-col items-center gap-1 rounded-full px-6 py-2"
        >
          <UserPlus className="h-5 w-5" />
          <span className="text-[10px]">{t.joinNow}</span>
        </a>
      </div>
    </div>
  );
}
