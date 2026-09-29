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
  phone: '+8801608044682',
  phoneDisplay: '01608044682',
  whatsapp: '8801608044682',
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
      // Gym-specific details
      equipment: [
        'Hammer Strength machines',
        'Free weights up to 50kg',
        'Cardio theater with screens',
        'Functional training zone',
        'Olympic lifting platform',
        'Recovery zone with massage guns',
      ],
      zones: [
        { name: 'Weights Zone', description: 'Free weights and machines for all levels' },
        { name: 'Cardio Zone', description: 'Treadmills, bikes, ellipticals with entertainment' },
        { name: 'Functional Training', description: 'TRX, kettlebells, battle ropes' },
        { name: 'Women\'s Section', description: 'Private area with female trainers' },
        { name: 'Personal Training Studio', description: '1-on-1 sessions with certified trainers' },
        { name: 'Recovery Zone', description: 'Massage guns, stretching area, sauna' },
      ],
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
      // Restaurant-specific details
      menuCategories: [
        'Protein Bowls',
        'Grilled Specialties',
        'Healthy Smoothies',
        'Bengali Fusion',
        'Meal Plans',
        'Desserts',
      ],
      seating: 60,
      takeoutAvailable: true,
      deliveryAvailable: false,
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
      // Pool-specific details
      size: '25m x 12m',
      depth: '1.2m - 2.5m',
      temperature: '26-28°C',
      filtration: 'Ozone + UV treatment',
      lifeguard: true,
      changingRooms: true,
      showers: true,
      lockers: true,
      // Swimming timetable
      timetable: {
        men: '6:00 AM - 9:00 AM, 2:00 PM - 5:00 PM, 8:00 PM - 9:00 PM',
        women: '9:00 AM - 12:00 PM, 5:00 PM - 8:00 PM',
        kids: '12:00 PM - 2:00 PM (weekends only)',
        family: 'Saturday 10:00 AM - 1:00 PM',
      },
      // Swimming classes
      classes: [
        { name: 'Beginner', duration: '45 min', price: 800 },
        { name: 'Intermediate', duration: '45 min', price: 1000 },
        { name: 'Advanced', duration: '60 min', price: 1200 },
        { name: 'Kids (6-12)', duration: '30 min', price: 600 },
        { name: 'Women Only', duration: '45 min', price: 900 },
        { name: 'Aqua Fitness', duration: '45 min', price: 700 },
      ],
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
      // Arena-specific details
      games: [
        { name: 'Billiards', tables: 4, hourlyRate: 500 },
        { name: 'Snooker', tables: 2, hourlyRate: 600 },
        { name: 'Table Tennis', tables: 3, hourlyRate: 300 },
        { name: 'Foosball', tables: 2, hourlyRate: 200 },
        { name: 'Console Gaming', stations: 6, hourlyRate: 400 },
        { name: 'Board Games', available: true, hourlyRate: 100 },
      ],
      memberDiscount: 20, // percentage
    },
  },

  // --- Membership Plans ---
  membership: {
    plans: [
      {
        id: 'silver',
        name: 'Silver',
        nameBn: 'সিলভার',
        price: 2500,
        duration: 'monthly',
        features: ['Gym access', 'Basic equipment', 'Locker access'],
        zones: ['gym'],
        popular: false,
      },
      {
        id: 'gold',
        name: 'Gold',
        nameBn: 'গোল্ড',
        price: 4000,
        duration: 'monthly',
        features: ['Gym access', 'All equipment', 'Personal training (2 sessions)', 'Restaurant discount (10%)'],
        zones: ['gym', 'restaurant'],
        popular: true,
      },
      {
        id: 'platinum',
        name: 'Platinum',
        nameBn: 'প্ল্যাটিনাম',
        price: 6000,
        duration: 'monthly',
        features: ['All zones access', 'Personal training (4 sessions)', 'Restaurant discount (15%)', 'Pool priority booking'],
        zones: ['gym', 'restaurant', 'pool', 'arena'],
        popular: false,
      },
      {
        id: 'black-diamond',
        name: 'Black Diamond',
        nameBn: 'ব্ল্যাক ডায়মন্ড',
        price: 10000,
        duration: 'monthly',
        features: ['VIP access to all zones', 'Unlimited personal training', 'Private locker', 'Restaurant discount (20%)', 'Event invitations'],
        zones: ['gym', 'restaurant', 'pool', 'arena'],
        popular: false,
      },
    ],
    swimmingOnly: {
      name: 'Swimming Only Pass',
      nameBn: 'সুইমিং অনলি পাস',
      price: 1500,
      duration: 'monthly',
      features: ['Pool access during allocated batches', 'Locker access', 'Shower access'],
    },
    familyPass: {
      name: 'Family/Couple Pass',
      nameBn: 'ফ্যামিলি/কাপল পাস',
      price: 8000,
      duration: 'monthly',
      features: ['Access for 2 adults + 2 children', 'All zones access', 'Family discounts'],
    },
  },

  // --- Trainers ---
  trainers: [
    {
      id: 1,
      name: 'Ahmed Rahman',
      nameBn: 'আহমেদ রহমান',
      specialty: 'Strength Training',
      specialtyBn: 'শক্তি প্রশিক্ষণ',
      experience: '8 years',
      certifications: ['NASM-CPT', 'CrossFit Level 2'],
      image: 'https://images.pexels.com/photos/1182822/pexels-photo-1182822.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'gym',
    },
    {
      id: 2,
      name: 'Fatima Khan',
      nameBn: 'ফাতেমা খান',
      specialty: 'Women\'s Fitness',
      specialtyBn: 'নারী ফিটনেস',
      experience: '6 years',
      certifications: ['ACE-CPT', 'Yoga Instructor'],
      image: 'https://images.pexels.com/photos/8411300/pexels-photo-8411300.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'gym',
    },
    {
      id: 3,
      name: 'Rakib Hassan',
      nameBn: 'রাকিব হাসান',
      specialty: 'Swimming Coach',
      specialtyBn: 'সাঁতার কোচ',
      experience: '10 years',
      certifications: ['AUSTSWIM', 'Lifeguard Certified'],
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'pool',
    },
    {
      id: 4,
      name: 'Sadia Islam',
      nameBn: 'সাদিয়া ইসলাম',
      specialty: 'Game Zone Coordinator',
      specialtyBn: 'গেম জোন কোঅর্ডিনেটর',
      experience: '4 years',
      certifications: ['Event Management'],
      image: 'https://images.pexels.com/photos/7620295/pexels-photo-7620295.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'arena',
    },
  ],

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
