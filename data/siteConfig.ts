// ============================================================
// DUKE FITNESS CLUB — MASTER CONFIG FILE
// ============================================================
// Change EVERYTHING about the club here. Every page reads from
// this single file so prices, hours, and info never contradict.
// Items marked [PLACEHOLDER] should be replaced with real data.
// ============================================================

export const siteConfig = {
  name: 'DUKE FITNESS CLUB',
  shortName: 'DUKE',
  tagline: 'Rule Your Legacy',
  taglineBn: 'তোমার উত্তরাধিকার শাসন করো',
  subtitle: 'Gym • Restaurant • Swimming Pool • Game Zone',

  // --- Contact ---
  phone: '+8801700000000', // [PLACEHOLDER]
  phoneDisplay: '+880 1700-000000',
  whatsapp: '8801700000000', // [PLACEHOLDER] no + or spaces
  email: 'info@dukefitnessclub.com', // [PLACEHOLDER]
  address: 'House 1, Road 1, Gulshan 2, Dhaka 1212, Bangladesh', // [PLACEHOLDER]
  addressBn: 'বাড়ি ১, রোড ১, গুলশান ২, ঢাকা ১২১২, বাংলাদেশ', // [PLACEHOLDER]
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5!2d90.4!3d23.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzI0LjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v0', // [PLACEHOLDER]
  mapLink: 'https://maps.google.com/?q=Gulshan+2+Dhaka', // [PLACEHOLDER]

  // --- Social ---
  social: {
    facebook: 'https://facebook.com/dukefitnessclub', // [PLACEHOLDER]
    instagram: 'https://instagram.com/dukefitnessclub', // [PLACEHOLDER]
    youtube: 'https://youtube.com/@dukefitnessclub', // [PLACEHOLDER]
    tiktok: 'https://tiktok.com/@dukefitnessclub', // [PLACEHOLDER]
  },

  // --- Stats (real numbers only) ---
  stats: {
    members: 1200,
    trainers: 18,
    programs: 24,
    years: 5,
  },

  // --- Claims (set false if not true) ---
  claims: {
    freeTrial: true,
    cancelAnytime: true,
    moneyBack: false,
  },

  // --- Four Zones ---
  zones: {
    gym: {
      slug: 'gym',
      name: 'Gym',
      nameBn: 'জিম',
      title: 'DUKE GYM',
      floor: 'Ground Floor — East Wing',
      floorBn: 'নিচতলা — পূর্ব শাখা',
      direction: 'Enter main gate, turn right',
      directionBn: 'প্রধান ফটক থেকে ডানে ঘুরুন',
      hours: '6:00 AM – 11:00 PM',
      hoursBn: 'সকাল ৬:০০ – রাত ১১:০০',
      tagline: 'Iron & Excellence',
      description:
        'State-of-the-art weights, cardio, functional training, women\u2019s section, and personal training studio.',
      image:
        'https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    restaurant: {
      slug: 'restaurant',
      name: 'Restaurant',
      nameBn: 'রেস্তোরাঁ',
      title: 'DUKE KITCHEN',
      floor: 'Ground Floor — West Wing',
      floorBn: 'নিচতলা — পশ্চিম শাখা',
      direction: 'Enter main gate, turn left',
      directionBn: 'প্রধান ফটক থেকে বামে ঘুরুন',
      hours: '8:00 AM – 11:00 PM',
      hoursBn: 'সকাল ৮:০০ – রাত ১১:০০',
      tagline: 'Fuel Your Reign',
      description:
        'Fitness-focused healthy dining — protein meals, grills, smoothies, Bengali specials, and meal plans for members.',
      image:
        'https://images.pexels.com/photos/6111932/pexels-photo-6111932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    pool: {
      slug: 'swimming-pool',
      name: 'Swimming Pool',
      nameBn: 'সুইমিং পুল',
      title: 'DUKE AQUA',
      floor: '2nd Floor — North Wing',
      floorBn: '২য় তলা — উত্তর শাখা',
      direction: 'Take lift to 2nd floor, exit left',
      directionBn: 'লিফটে ২য় তলা, বামে যান',
      hours: '6:00 AM – 9:00 PM (separate batches)',
      hoursBn: 'সকাল ৬:০০ – সন্ধ্যা ৯:০০ (আলাদা ব্যাচ)',
      tagline: 'Water & Power',
      description:
        'Temperature-controlled indoor pool with separate timings for men, women, and kids/family batches. Lifeguard on duty.',
      image:
        'https://images.pexels.com/photos/23916836/pexels-photo-23916836.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    arena: {
      slug: 'pool-game-zone',
      name: 'Pool & Game Zone',
      nameBn: 'পুল ও গেম জোন',
      title: 'DUKE ARENA',
      floor: '3rd Floor — South Wing',
      floorBn: '৩য় তলা — দক্ষিণ শাখা',
      direction: 'Take lift to 3rd floor, exit right',
      directionBn: 'লিফটে ৩য় তলা, ডানে যান',
      hours: '10:00 AM – 12:00 AM (Midnight)',
      hoursBn: 'সকাল ১০:০০ – রাত ১২:০০',
      tagline: 'Play Like Royalty',
      description:
        'Billiards, snooker, table tennis, foosball, console gaming, and board games. Hourly booking, tournaments, and event packages.',
      image:
        'https://images.pexels.com/photos/31512997/pexels-photo-31512997.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },

  // --- Navigation ---
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Gym', href: '/gym' },
    { label: 'Swimming Pool', href: '/swimming-pool' },
    { label: 'Restaurant', href: '/restaurant' },
    { label: 'Game Zone', href: '/pool-game-zone' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Membership', href: '/membership' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Tools', href: '/tools' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export type ZoneKey = keyof typeof siteConfig.zones;
export type SiteConfig = typeof siteConfig;
