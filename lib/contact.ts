// ============================================================
// WhatsApp & Email helpers
// ============================================================

import { siteConfig } from '@/data/siteConfig';

export function waLink(message: string): string {
  const whatsappNumber = '8801608044682';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function telLink(): string {
  return `tel:+8801608044682`;
}
