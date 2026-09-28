// ============================================================
// WhatsApp & Email helpers
// ============================================================

import { siteConfig } from '@/data/siteConfig';

export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function telLink(): string {
  return `tel:${siteConfig.phone}`;
}
