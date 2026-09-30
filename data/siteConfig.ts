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
  // Opening hours - TODO: Confirm real hours with user
  openingHours: {
    weekdays: 'Mon–Fri 5:00 AM – 11:00 PM',
    weekends: 'Sat–Sun 6:00 AM – 10:00 PM',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4008333!2d90.4123!3d23.7932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f6b5b5b5%3A0x6b5b5b5b5b5b5b5b!2sGulshan+2%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000', // Updated for Gulshan 2
  mapLink: 'https://maps.google.com/?q=House+1+Road+1+Gulshan+2+Dhaka+Bangladesh',

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
      slug: 'ahmed-rahman',
      name: 'Ahmed Rahman',
      nameBn: 'আহমেদ রহমান',
      title: 'Strength & Hypertrophy Coach',
      titleBn: 'শক্তি ও হাইপারট্রফি কোচ',
      specialty: 'Strength Training',
      specialtyBn: 'শক্তি প্রশিক্ষণ',
      experience: '8 years',
      experienceBn: '৮ বছর',
      featured: true,
      certifications: ['NASM-CPT', 'CrossFit Level 2', 'Olympic Lifting Coach'],
      image: '/triner/ttttt.jpg',
      category: 'gym',
      shortBio: 'Elite strength coach specializing in hypertrophy and athletic performance. Ahmed brings 8+ years of experience helping members achieve their strength goals.',
      shortBioBn: 'এলিট শক্তি কোচ যিনি হাইপারট্রফি এবং অ্যাথলেটিক পারফরম্যান্সে বিশেষজ্ঞ। আহমেদ ৮+ বছরের অভিজ্ঞতা নিয়ে সদস্যদের তাদের শক্তি লক্ষ্য অর্জনে সাহায্য করেন।',
      bio: 'Ahmed Rahman is an elite strength and conditioning coach with over 8 years of experience in the fitness industry. He specializes in hypertrophy training, Olympic lifting, and athletic performance enhancement. Ahmed holds certifications from NASM and CrossFit Level 2, and has worked with competitive athletes and everyday fitness enthusiasts alike. His coaching philosophy emphasizes progressive overload, proper form, and sustainable results.',
      bioBn: 'আহমেদ রহমান একজন এলিট শক্তি এবং কন্ডিশনিং কোচ যিনি ফিটনেস শিল্পে ৮ বছরেরও বেশি অভিজ্ঞতা সহ। তিনি হাইপারট্রফি ট্রেনিং, অলিম্পিক লিফটিং এবং অ্যাথলেটিক পারফরম্যান্স উন্নতিতে বিশেষজ্ঞ। আহমেদ NASM এবং CrossFit Level 2 থেকে সার্টিফিকেশন অর্জন করেছেন এবং প্রতিযোগিতামূলক অ্যাথলেট এবং দৈনিক ফিটনেস উত্সাহীদের সাথে কাজ করেছেন। তার কোচিং দর্শন প্রগ্রেসিভ ওভারলোড, সঠিক ফর্ম এবং টেকসই ফলাফলের উপর জোর দেয়।',
      specializations: ['Strength Training', 'Hypertrophy', 'Olympic Lifting', 'Personalized Programs'],
      specializationsBn: ['শক্তি প্রশিক্ষণ', 'হাইপারট্রফি', 'অলিম্পিক লিফটিং', 'ব্যক্তিগত প্রোগ্রাম'],
      trainingApproach: 'I believe in building a strong foundation through compound movements and progressive overload. Each program is tailored to the individual\'s goals, experience level, and schedule. My approach combines science-based training with practical, sustainable habits.',
      trainingApproachBn: 'আমি কম্পাউন্ড মুভমেন্ট এবং প্রগ্রেসিভ ওভারলোডের মাধ্যমে একটি শক্তিশালী ভিত্তি তৈরিতে বিশ্বাস করি। প্রতিটি প্রোগ্রাম ব্যক্তির লক্ষ্য, অভিজ্ঞতার স্তর এবং সময়সূচি অনুযায়ী তৈরি করা হয়। আমার পদ্ধতি বিজ্ঞান-ভিত্তিক প্রশিক্ষণের সাথে ব্যবহারিক, টেকসই অভ্যাসগুলির সংমিশ্রণ।',
      programs: ['Strength Transformation', 'Hypertrophy Specialist', 'Athletic Performance', 'Beginner Foundation'],
      programsBn: ['শক্তি রূপান্তর', 'হাইপারট্রফি বিশেষজ্ঞ', 'অ্যাথলেটিক পারফরম্যান্স', 'শিক্ষানবিশ ভিত্তি'],
      availability: ['Mon-Fri: 6AM-10PM', 'Sat-Sun: 8AM-6PM'],
      availabilityBn: ['সোম-শুক্র: সকাল ৬টা-রাত ১০টা', 'শনি-রবি: সকাল ৮টা-সন্ধ্যা ৬টা'],
    },
    {
      id: 2,
      slug: 'fatima-khan',
      name: 'Fatima Khan',
      nameBn: 'ফাতেমা খান',
      title: 'Women\'s Fitness Specialist',
      titleBn: 'নারী ফিটনেস বিশেষজ্ঞ',
      specialty: 'Women\'s Fitness',
      specialtyBn: 'নারী ফিটনেস',
      experience: '6 years',
      experienceBn: '৬ বছর',
      featured: false,
      certifications: ['ACE-CPT', 'Yoga Instructor', 'Pre/Post Natal'],
      image: 'https://images.pexels.com/photos/8411300/pexels-photo-8411300.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'gym',
      shortBio: 'Certified women\'s fitness specialist focusing on strength, flexibility, and holistic wellness. Fatima creates empowering programs for women of all fitness levels.',
      shortBioBn: 'সার্টিফাইড নারী ফিটনেস বিশেষজ্ঞ যিনি শক্তি, নমনীয়তা এবং সামগ্রিক সুস্থতার উপর মনোযোগ দেন। ফাতেমা সকল ফিটনেস স্তরের মহিলাদের জন্য ক্ষমতায়ন কর্মসূচি তৈরি করেন।',
      bio: 'Fatima Khan is a certified personal trainer with 6 years of experience specializing in women\'s fitness. She holds certifications from ACE, Yoga Alliance, and Pre/Post Natal fitness. Fatima\'s approach combines strength training with yoga and mobility work, creating balanced programs that empower women at every stage of their fitness journey.',
      bioBn: 'ফাতেমা খান একজন সার্টিফাইড ব্যক্তিগত প্রশিক্ষক যিনি ৬ বছরের অভিজ্ঞতা সহ নারী ফিটনেসে বিশেষজ্ঞ। তিনি ACE, Yoga Alliance এবং Pre/Post Natal ফিটনেস থেকে সার্টিফিকেশন অর্জন করেছেন। ফাতেমার পদ্ধতি শক্তি প্রশিক্ষণের সাথে যোগ এবং মোবিলিটি কাজের সংমিশ্রণ করে, যা ফিটনেস যাত্রার প্রতিটি পর্যায়ে মহিলাদের ক্ষমতায়ন করে।',
      specializations: ['Strength Training', 'Yoga & Mobility', 'Weight Loss', 'Pre/Post Natal'],
      specializationsBn: ['শক্তি প্রশিক্ষণ', 'যোগ ও মোবিলিটি', 'ওজন কমানো', 'প্রি/পোস্ট ন্যাটাল'],
      trainingApproach: 'My approach focuses on building confidence through strength. I create safe, effective programs that respect each woman\'s unique needs and goals, whether she\'s just starting or looking to advance.',
      trainingApproachBn: 'আমার পদ্ধতি শক্তির মাধ্যমে আত্মবিশ্বাস তৈরির উপর মনোযোগ দেয়। আমি নিরাপদ, কার্যকর প্রোগ্রাম তৈরি করি যা প্রতিটি মহিলার অনন্য প্রয়োজন এবং লক্ষ্যকে সম্মান করে, তিনি যেন শুরু করছেন বা অগ্রসর হচ্ছেন।',
      programs: ['Women\'s Strength', 'Yoga Fusion', 'Prenatal Fitness', 'Postnatal Recovery'],
      programsBn: ['নারী শক্তি', 'যোগ ফিউশন', 'প্রিন্যাটাল ফিটনেস', 'পোস্টন্যাটাল পুনরুদ্ধার'],
      availability: ['Mon-Fri: 7AM-8PM', 'Sat: 9AM-5PM'],
      availabilityBn: ['সোম-শুক্র: সকাল ৭টা-রাত ৮টা', 'শনি: সকাল ৯টা-বিকেল ৫টা'],
    },
    {
      id: 3,
      slug: 'rakib-hassan',
      name: 'Rakib Hassan',
      nameBn: 'রাকিব হাসান',
      title: 'Swimming & Aquatics Coach',
      titleBn: 'সাঁতার ও অ্যাকুয়াটিক্স কোচ',
      specialty: 'Swimming Coach',
      specialtyBn: 'সাঁতার কোচ',
      experience: '10 years',
      experienceBn: '১০ বছর',
      featured: false,
      certifications: ['AUSTSWIM', 'Lifeguard Certified', 'Water Safety Instructor'],
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'pool',
      shortBio: 'Experienced swimming coach with a decade of teaching all skill levels. Rakib specializes in technique refinement and competitive swimming preparation.',
      shortBioBn: 'দশ বছরের অভিজ্ঞতাসহ অভিজ্ঞ সাঁতার কোচ যিনি সকল দক্ষতা স্তর শেখান। রাকিব কৌশল পরিমার্জন এবং প্রতিযোগিতামূলক সাঁতার প্রস্তুতিতে বিশেষজ্ঞ।',
      bio: 'Rakib Hassan brings 10 years of swimming instruction experience to Duke Aqua. He is AUSTSWIM certified and specializes in teaching beginners, advanced stroke refinement, and competitive swimming preparation. Rakib\'s patient approach helps swimmers of all ages build confidence in the water while improving technique and endurance.',
      bioBn: 'রাকিব হাসান ডিউক অ্যাকুয়াতে ১০ বছরের সাঁতার নির্দেশনা অভিজ্ঞতা নিয়ে আসেন। তিনি AUSTSWIM সার্টিফাইড এবং শিক্ষানবিশ, উন্নত স্ট্রোক পরিমার্জন এবং প্রতিযোগিতামূলক সাঁতার প্রস্তুতিতে বিশেষজ্ঞ। রাকিবের ধৈর্যশীল পদ্ধতি সকল বয়সের সাঁতারুদের পানিতে আত্মবিশ্বাস তৈরি করতে সাহায্য করে এবং কৌশল এবং সহনশীলতা উন্নত করে।',
      specializations: ['Beginner Swimming', 'Stroke Technique', 'Competitive Prep', 'Water Safety'],
      specializationsBn: ['শিক্ষানবিশ সাঁতার', 'স্ট্রোক কৌশল', 'প্রতিযোগিতামূলক প্রস্তুতি', 'পানি নিরাপত্তা'],
      trainingApproach: 'I focus on building proper technique from the ground up. Each lesson progresses at the swimmer\'s pace, ensuring comfort and confidence before advancing to more complex skills.',
      trainingApproachBn: 'আমি নিচ থেকে সঠিক কৌশল তৈরির উপর মনোযোগ দিই। প্রতিটি পাঠ সাঁতারুর গতিতে অগ্রসর হয়, আরও জটিল দক্ষতায় অগ্রসর হওয়ার আগে আরাম এবং আত্মবিশ্বাস নিশ্চিত করে।',
      programs: ['Learn to Swim', 'Stroke Correction', 'Competitive Training', 'Private Lessons'],
      programsBn: ['সাঁতার শিখুন', 'স্ট্রোক সংশোধন', 'প্রতিযোগিতামূলক প্রশিক্ষণ', 'ব্যক্তিগত পাঠ'],
      availability: ['Mon-Sat: 6AM-9PM', 'Sun: 8AM-6PM'],
      availabilityBn: ['সোম-শনি: সকাল ৬টা-রাত ৯টা', 'রবি: সকাল ৮টা-সন্ধ্যা ৬টা'],
    },
    {
      id: 4,
      slug: 'sadia-islam',
      name: 'Sadia Islam',
      nameBn: 'সাদিয়া ইসলাম',
      title: 'Game Zone & Events Coordinator',
      titleBn: 'গেম জোন ও ইভেন্টস কোঅর্ডিনেটর',
      specialty: 'Game Zone Coordinator',
      specialtyBn: 'গেম জোন কোঅর্ডিনেটর',
      experience: '4 years',
      experienceBn: '৪ বছর',
      featured: false,
      certifications: ['Event Management', 'Recreation Programming'],
      image: 'https://images.pexels.com/photos/7620295/pexels-photo-7620295.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'arena',
      shortBio: 'Dynamic game zone coordinator specializing in tournaments, leagues, and member events. Sadia creates engaging experiences for all skill levels.',
      shortBioBn: 'ডায়নামিক গেম জোন কোঅর্ডিনেটর যিনি টুর্নামেন্ট, লিগ এবং সদস্য ইভেন্টে বিশেষজ্ঞ। সাদিয়া সকল দক্ষতা স্তরের জন্য আকর্ষণীয় অভিজ্ঞতা তৈরি করেন।',
      bio: 'Sadia Islam manages Duke Arena\'s game zone operations with 4 years of experience in recreation programming. She organizes billiards tournaments, table tennis leagues, and member events that foster community and friendly competition. Sadia ensures every visit to the game zone is fun, welcoming, and well-organized.',
      bioBn: 'সাদিয়া ইসলাম ৪ বছরের রিক্রিয়েশন প্রোগ্রামিং অভিজ্ঞতা সহ ডিউক অ্যারেনার গেম জোন অপারেশন পরিচালনা করেন। তিনি বিলিয়ার্ডস টুর্নামেন্ট, টেবিল টেনিস লিগ এবং সদস্য ইভেন্ট আয়োজন করেন যা সম্প্রদায় এবং বন্ধুত্বপূর্ণ প্রতিযোগিতা গড়ে তোলে। সাদিয়া নিশ্চিত করেন যে গেম জোনে প্রতিটি ভিজিট মজাদার, স্বাগত এবং সুসংগঠিত।',
      specializations: ['Billiards', 'Table Tennis', 'Event Organization', 'Member Engagement'],
      specializationsBn: ['বিলিয়ার্ডস', 'টেবিল টেনিস', 'ইভেন্ট আয়োজন', 'সদস্য জড়িতকরণ'],
      trainingApproach: 'I believe in creating inclusive, fun environments where everyone can enjoy games regardless of skill level. My events are designed to build community and encourage friendly competition.',
      trainingApproachBn: 'আমি অন্তর্ভুক্ত, মজাদার পরিবেশ তৈরিতে বিশ্বাস করি যেখানে দক্ষতার স্তর নির্বিশেষে সবাই গেম উপভোগ করতে পারে। আমার ইভেন্টগুলি সম্প্রদায় গড়ে তোলা এবং বন্ধুত্বপূর্ণ প্রতিযোগিতা উৎসাহিত করার জন্য ডিজাইন করা হয়েছে।',
      programs: ['Tournament Organization', 'League Management', 'Private Events', 'Skill Clinics'],
      programsBn: ['টুর্নামেন্ট আয়োজন', 'লিগ ম্যানেজমেন্ট', 'ব্যক্তিগত ইভেন্ট', 'দক্ষতা ক্লিনিক'],
      availability: ['Mon-Fri: 10AM-10PM', 'Sat-Sun: 12PM-11PM'],
      availabilityBn: ['সোম-শুক্র: সকাল ১০টা-রাত ১০টা', 'শনি-রবি: দুপুর ১২টা-রাত ১১টা'],
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
