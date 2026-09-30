import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cinzel, Hind_Siliguri } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PreloaderOverlay } from '@/components/layout/PreloaderOverlay';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { ThemeProvider, ThemeScript } from '@/components/providers/ThemeProvider';
import { StructuredData } from '@/components/shared/StructuredData';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-display' });
const hindSiliguri = Hind_Siliguri({ subsets: ['bengali', 'latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-bengali' });

export const metadata: Metadata = {
  metadataBase: new URL('https://duke-gym-sable.vercel.app'),
  title: {
    default: 'DUKE FITNESS CLUB — Rule Your Legacy | Gym • Restaurant • Swimming Pool • Game Zone',
    template: '%s | DUKE FITNESS CLUB',
  },
  description:
    'Duke Fitness Club — a luxury fitness and lifestyle destination in Dhaka, Bangladesh. Gym, Duke Kitchen restaurant, Duke Aqua swimming pool, and Duke Arena pool & game zone, all under one roof.',
  keywords: [
    'gym in Dhaka',
    'fitness club Bangladesh',
    'luxury gym Gulshan',
    'swimming pool Dhaka',
    'billiards pool table Dhaka',
    'healthy restaurant Dhaka',
    'Duke Fitness Club',
    'personal trainer Dhaka',
    'membership gym Bangladesh',
  ],
  openGraph: {
    title: 'DUKE FITNESS CLUB — Rule Your Legacy',
    description: 'Gym • Restaurant • Swimming Pool • Game Zone — One Building, Four Worlds.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Duke Fitness Club' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DUKE FITNESS CLUB',
    description: 'Gym • Restaurant • Swimming Pool • Game Zone',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${hindSiliguri.variable}`}>
      <head>
        <ThemeScript />
        <meta name="theme-color" content="#C9A24B" />
      </head>
      <body className="bg-obsidian text-warm-white antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <PreloaderOverlay />
            <ScrollProgress />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <MobileActionBar />
            <FloatingButtons />
            <BackToTop />
            <StructuredData />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
