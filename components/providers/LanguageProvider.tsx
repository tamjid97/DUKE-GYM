'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    gym: 'Gym',
    swimmingPool: 'Swimming Pool',
    restaurant: 'Restaurant',
    gameZone: 'Pool & Game Zone',
    trainersPage: 'Trainers',
    membership: 'Membership',
    schedule: 'Schedule',
    tools: 'Tools',
    gallery: 'Gallery',
    blog: 'Blog',
    contact: 'Contact',
    
    // Hero
    ruleYourLegacy: 'Rule Your Legacy',
    heroSubline: 'Gym • Restaurant • Swimming Pool • Game Zone',
    joinNow: 'Join Now',
    bookFreeTour: 'Book a Free Tour',
    
    // Common
    scrollToExplore: 'Scroll to Explore',
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    bookNow: 'Book Now',
    contactUs: 'Contact Us',
    viewAll: 'View All',
    readMore: 'Read More',
    backToTop: 'Back to Top',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp',
    
    // Stats
    members: 'Members',
    trainers: 'Trainers',
    programs: 'Programs',
    years: 'Years',
    expertTrainers: 'Expert Trainers',
    fitnessPrograms: 'Fitness Programs',
    
    // Four Worlds
    fourWorldsTitle: 'Four Worlds, One Building',
    fourWorldsSubtitle: 'Everything you need for your fitness journey under one roof',
    fourWorldsOneBuilding: 'Four Worlds, One Building',
    fourWorldsDesc: 'Everything you need for your fitness journey under one roof',
    
    // Building
    exploreBuilding: 'Explore the Building',
    exploreBuildingDesc: 'Interactive floor plan showing each zone location',
    howToReach: 'How to Reach Each Zone',
    bookGuidedTour: 'Book a Free Guided Tour',
    faq: 'Frequently Asked Questions',
    featuredPrograms: 'Featured Programs',
    membershipPlans: 'Membership Plans',
    ourTrainers: 'Our Trainers',
    zoneHighlights: 'Zone Highlights',
    transformations: 'Transformations',
    testimonials: 'Testimonials',
    finalCTA: 'Ready to Start Your Journey?',
    finalCtaDesc: 'Join Duke Fitness Club today and transform your body and mind.',
    getStarted: 'Get Started Today',
    visitPage: 'Visit Page',
    galleryPreview: 'Gallery Preview',
    viewGallery: 'View Full Gallery',
    membershipPreview: 'Membership Plans',
    viewPlans: 'View All Plans',
    trainersPreview: 'Meet Our Trainers',
    bookSession: 'Book a Session',
    exploreAll: 'Explore All Zones',
    seeResults: 'See Member Results',
    readReviews: 'Read Member Reviews',
    mostPopular: 'Most Popular',
    choosePlan: 'Choose Your Plan',
    planFeatures: 'Plan Features',
    perMonth: '/month',
    perQuarter: '/quarter',
    perYear: '/year',
    memberReviews: 'Member Reviews',
    verified: 'Verified',
    beforeAfter: 'Before / After',
    gymHighlights: 'Gym Highlights',
    restaurantHighlights: 'Restaurant Highlights',
    poolHighlights: 'Pool Highlights',
    arenaHighlights: 'Arena Highlights',
    
    // Contact
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    sendMessage: 'Send Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    message: 'Message',
    floor: 'Floor',
    direction: 'Direction',
    openingHours: 'Opening Hours',
    bookTour: 'Book a Tour',
    
    // Footer
    aboutUs: 'About Us',
    facilities: 'Facilities',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved',
  },
  bn: {
    // Navigation
    home: 'হোম',
    gym: 'জিম',
    swimmingPool: 'সুইমিং পুল',
    restaurant: 'রেস্তোরাঁ',
    gameZone: 'পুল ও গেম জোন',
    trainersPage: 'ট্রেইনার',
    membership: 'মেম্বারশিপ',
    schedule: 'সময়সূচী',
    tools: 'টুলস',
    gallery: 'গ্যালারি',
    blog: 'ব্লগ',
    contact: 'যোগাযোগ',
    
    // Hero
    ruleYourLegacy: 'তোমার উত্তরাধিকার শাসন করো',
    heroSubline: 'জিম • রেস্তোরাঁ • সুইমিং পুল • গেম জোন',
    joinNow: 'যোগ দিন',
    bookFreeTour: 'ফ্রি ট্যুর বুক করুন',
    
    // Common
    scrollToExplore: 'এক্সপ্লোর করতে স্ক্রল করুন',
    learnMore: 'আরও জানুন',
    viewDetails: 'বিস্তারিত দেখুন',
    bookNow: 'বুক করুন',
    contactUs: 'যোগাযোগ করুন',
    viewAll: 'সব দেখুন',
    readMore: 'আরও পড়ুন',
    backToTop: 'উপরে যান',
    callNow: 'এখনই কল করুন',
    whatsapp: 'হোয়াটসঅ্যাপ',
    
    // Stats
    members: 'সদস্য',
    trainers: 'ট্রেইনার',
    programs: 'প্রোগ্রাম',
    years: 'বছর',
    expertTrainers: 'দক্ষ ট্রেইনার',
    fitnessPrograms: 'ফিটনেস প্রোগ্রাম',
    
    // Four Worlds
    fourWorldsTitle: 'চারটি জগত, এক ভবন',
    fourWorldsSubtitle: 'এক ছাদের নিচে আপনার ফিটনেস যাত্রার জন্য সবকিছু',
    fourWorldsOneBuilding: 'চারটি জগত, এক ভবন',
    fourWorldsDesc: 'এক ছাদের নিচে আপনার ফিটনেস যাত্রার জন্য সবকিছু',
    
    // Building
    exploreBuilding: 'ভবন এক্সপ্লোর করুন',
    exploreBuildingDesc: 'প্রতিটি জোনের অবস্থান দেখানো ইন্টারঅ্যাক্টিভ ফ্লোর প্ল্যান',
    howToReach: 'প্রতিটি জোনে কীভাবে পৌঁছাবেন',
    bookGuidedTour: 'ফ্রি গাইডেড ট্যুর বুক করুন',
    faq: 'সাধারণ প্রশ্নাবলী',
    featuredPrograms: 'বৈশিষ্ট প্রোগ্রাম',
    membershipPlans: 'মেম্বারশিপ প্ল্যান',
    ourTrainers: 'আমাদের ট্রেইনার',
    zoneHighlights: 'জোন হাইলাইট',
    transformations: 'রূপান্তর',
    testimonials: 'সাক্ষ্যততা',
    finalCTA: 'আপনার যাত্রা শুরু করতে প্রস্তুত?',
    finalCtaDesc: 'আজই ডিউক ফিটনেস ক্লাবে যোগ দিন এবং আপনার শরীর ও মন রূপান্তর করুন।',
    getStarted: 'আজই শুরু করুন',
    visitPage: 'পেজ দেখুন',
    galleryPreview: 'গ্যালারি প্রিভিউ',
    viewGallery: 'সম্পূর্ণ গ্যালারি দেখুন',
    membershipPreview: 'মেম্বারশিপ প্ল্যান',
    viewPlans: 'সব প্ল্যান দেখুন',
    trainersPreview: 'আমাদের ট্রেইনারদের সাথে পরিচিত হন',
    bookSession: 'সেশন বুক করুন',
    exploreAll: 'সব জোন এক্সপ্লোর করুন',
    seeResults: 'সদস্যদের ফলাফল দেখুন',
    readReviews: 'সদস্যদের রিভিউ পড়ুন',
    mostPopular: 'সবচেয়ে জনপ্রিয়',
    choosePlan: 'আপনার প্ল্যান বেছে নিন',
    planFeatures: 'প্ল্যান ফিচার',
    perMonth: '/মাস',
    perQuarter: '/ত্রৈমাসিক',
    perYear: '/বছর',
    memberReviews: 'সদস্য রিভিউ',
    verified: 'যাচাইকৃত',
    beforeAfter: 'আগে / পরে',
    gymHighlights: 'জিম হাইলাইট',
    restaurantHighlights: 'রেস্তোরাঁ হাইলাইট',
    poolHighlights: 'পুল হাইলাইট',
    arenaHighlights: 'এরিনা হাইলাইট',
    
    // Contact
    address: 'ঠিকানা',
    phone: 'ফোন',
    email: 'ইমেইল',
    hours: 'সময়',
    sendMessage: 'বার্তা পাঠান',
    yourName: 'আপনার নাম',
    yourEmail: 'আপনার ইমেইল',
    message: 'বার্তা',
    floor: 'তলা',
    direction: 'দিক',
    openingHours: 'খোলার সময়',
    bookTour: 'ট্যুর বুক করুন',
    
    // Footer
    aboutUs: 'আমাদের সম্পর্কে',
    facilities: 'সুবিধাসমূহ',
    legal: 'আইনি',
    privacyPolicy: 'গোপনীয়তা নীতি',
    termsOfService: 'সেবার শর্তাবলী',
    allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত',
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('duke-lang') : null;
    if (saved && (saved === 'en' || saved === 'bn')) {
      setLangState(saved as Language);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      try {
        localStorage.setItem('duke-lang', lang);
      } catch {}
    }
  }, [lang]);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}