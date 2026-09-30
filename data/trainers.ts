// ============================================================
// TRAINERS DATA
// ============================================================

export interface Trainer {
  id: string;
  slug: string;

  name: string;
  nameBn?: string;

  category: 'Gym' | 'Swimming' | 'Game Zone';

  role: string;

  gender: 'male' | 'female';

  certifications: string[];

  specialties: string[];

  experience: string;

  image: string;

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };

  // Short description for homepage / trainer cards
  shortBio: string;

  // Full biography for trainer details page
  bio: string;

  // Coaching philosophy
  trainingApproach?: string;

  // Achievements / highlights
  achievements?: string[];

  // Available training days
  availability?: string[];

  // Featured trainer on homepage
  featured?: boolean;
}

export const trainers: Trainer[] = [
  // ============================================================
  // 01 — SK DUKE (Owner)
  // ============================================================
  {
    id: 't0',
    slug: 'sk-duke',

    name: 'Sk Duke',
    nameBn: 'স্ক ডিউক',

    category: 'Gym',

    role: 'Owner & Director',

    gender: 'male',

    certifications: ['MBA', 'Fitness Management Certified'],

    specialties: [
      'Gym Management',
      'Business Strategy',
      'Member Relations',
    ],

    experience: '12 years',

    image:
      '/triner/ttttt.jpg',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Founder and owner of DUKE Fitness Club, dedicated to providing world-class fitness facilities and expert training.',

    bio:
      'Sk Duke is the founder and owner of DUKE Fitness Club. With over 12 years of experience in the fitness industry, he has built a premium facility that combines state-of-the-art equipment with expert coaching. His vision is to provide a world-class fitness experience that helps members achieve their health and wellness goals in a supportive environment.',

    trainingApproach:
      'A member-centric approach focused on quality service, expert guidance, and creating a welcoming community atmosphere.',

    achievements: [
      '12+ Years in Fitness Industry',
      'Founded DUKE Fitness Club',
      'MBA in Business Management',
      'Fitness Management Certified',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],

    featured: true,
  },

  // ============================================================
  // 02 — SABA KHAN (Manager)
  // ============================================================
  {
    id: 't00',
    slug: 'saba-khan',

    name: 'Saba Khan',
    nameBn: 'সাবা খান',

    category: 'Gym',

    role: 'General Manager',

    gender: 'female',

    certifications: ['Sports Management', 'Customer Relations'],

    specialties: [
      'Operations Management',
      'Member Services',
      'Team Leadership',
    ],

    experience: '8 years',

    image:
      '/videos/g7.jpg',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Managing daily operations and ensuring exceptional member experience at DUKE Fitness Club.',

    bio:
      'Saba Khan oversees all operations at DUKE Fitness Club, ensuring smooth day-to-day functioning and maintaining the highest standards of service. With 8 years of experience in fitness management, she leads the team with dedication and ensures every member receives personalized attention and support.',

    trainingApproach:
      'A service-oriented approach focused on operational excellence, team coordination, and member satisfaction.',

    achievements: [
      '8+ Years in Management',
      'Sports Management Certified',
      'Customer Relations Expert',
      'Operations Specialist',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],

    featured: false,
  },

  // ============================================================
  // 03 — RAKIB HASAN
  // ============================================================
  {
    id: 't1',
    slug: 'rakib-hasan',

    name: 'Rakib Hasan',
    nameBn: 'রাকিব হাসান',

    category: 'Gym',

    role: 'Head Strength Coach',

    gender: 'male',

    certifications: ['NASM-CPT', 'Precision Nutrition L1'],

    specialties: [
      'Strength Training',
      'Olympic Lifting',
      'Recovery',
    ],

    experience: '8 years',

    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Building stronger bodies through structured strength training and intelligent recovery.',

    bio:
      'Former national powerlifter turned coach. Rakib specializes in building raw strength from the ground up through structured programming, progressive overload, Olympic lifting, and proper recovery strategies. His coaching approach focuses on long-term performance rather than quick results.',

    trainingApproach:
      'A structured, progressive and performance-focused approach built around proper technique, strength development and sustainable recovery.',

    achievements: [
      '8+ Years Coaching Experience',
      'Former Competitive Powerlifter',
      'NASM Certified Personal Trainer',
      'Precision Nutrition Level 1',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
    ],

    featured: true,
  },

  // ============================================================
  // 02 — TANVIR AHMED
  // ============================================================
  {
    id: 't2',
    slug: 'tanvir-ahmed',

    name: 'Tanvir Ahmed',
    nameBn: 'তানভীর আহমেদ',

    category: 'Gym',

    role: 'Strength & Hypertrophy Coach',

    gender: 'male',

    certifications: ['ISSA', 'Kettlebell Specialist'],

    specialties: [
      'Hypertrophy',
      'Olympic Lifting',
      'Powerlifting',
    ],

    experience: '6 years',

    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Helping members build muscle, strength and confidence through evidence-based training.',

    bio:
      'Competitive bodybuilder with a passion for evidence-based training methods. Tanvir focuses on hypertrophy, strength development and proper exercise execution to help members build sustainable muscle and performance.',

    trainingApproach:
      'Evidence-based training focused on progressive overload, proper form, muscle development and consistent progression.',

    achievements: [
      '6+ Years Coaching Experience',
      'Competitive Bodybuilder',
      'ISSA Certified Trainer',
      'Kettlebell Specialist',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Thursday',
    ],

    featured: false,
  },

  // ============================================================
  // 03 — NUSRAT JAHAN
  // ============================================================
  {
    id: 't3',
    slug: 'nusrat-jahan',

    name: 'Nusrat Jahan',
    nameBn: 'নুসরাত জাহান',

    category: 'Gym',

    role: 'Cardio & Weight Loss Specialist',

    gender: 'female',

    certifications: ['ACE-CPT', 'HIIT Instructor'],

    specialties: [
      'HIIT',
      'Weight Loss',
      'Cardio',
    ],

    experience: '5 years',

    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Helping members improve fitness, endurance and confidence through sustainable training.',

    bio:
      'Nusrat helps members improve their cardiovascular fitness and overall conditioning through structured cardio, HIIT and sustainable training programs. Her coaching style focuses on consistency, confidence and practical fitness habits.',

    trainingApproach:
      'A balanced approach combining cardio conditioning, HIIT and sustainable training habits.',

    achievements: [
      '5+ Years Coaching Experience',
      'ACE Certified Personal Trainer',
      'Certified HIIT Instructor',
      'Cardio & Conditioning Specialist',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],

    featured: false,
  },

  // ============================================================
  // 04 — FARZANA AKTER
  // ============================================================
  {
    id: 't4',
    slug: 'farzana-akter',

    name: 'Farzana Akter',
    nameBn: 'ফারজানা আক্তার',

    category: 'Gym',

    role: "Women's Section Coach",

    gender: 'female',

    certifications: [
      'NASM-WLS',
      'Pre/Post Natal Certified',
    ],

    specialties: [
      "Women's Fitness",
      'Toning',
      'Flexibility',
    ],

    experience: '4 years',

    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Creating a comfortable and empowering environment for women to train with confidence.',

    bio:
      'Farzana specializes in women-focused fitness programs designed to create a comfortable, supportive and empowering training environment. Her programs combine strength, mobility, flexibility and sustainable fitness habits.',

    trainingApproach:
      'A supportive and confidence-focused approach designed around individual goals, proper movement and sustainable progress.',

    achievements: [
      '4+ Years Coaching Experience',
      'NASM Weight Loss Specialist',
      'Pre/Post Natal Certified',
      "Women's Fitness Specialist",
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Wednesday',
      'Thursday',
    ],

    featured: false,
  },

  // ============================================================
  // 05 — SAJID KHAN
  // ============================================================
  {
    id: 't5',
    slug: 'sajid-khan',

    name: 'Sajid Khan',
    nameBn: 'সাজিদ খান',

    category: 'Gym',

    role: 'Cross-Training & Functional Coach',

    gender: 'male',

    certifications: [
      'CrossFit L2',
      'Mobility Specialist',
    ],

    specialties: [
      'Cross-Training',
      'Functional Training',
      'Endurance',
    ],

    experience: '7 years',

    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Combining functional movement, endurance and high-intensity training to build complete athletic performance.',

    bio:
      'Sajid pushes members beyond their limits through high-intensity functional training, cross-training and endurance-focused programs. His sessions are designed to improve strength, mobility, conditioning and overall athletic performance.',

    trainingApproach:
      'High-energy functional training focused on movement quality, conditioning, endurance and athletic performance.',

    achievements: [
      '7+ Years Coaching Experience',
      'CrossFit Level 2',
      'Certified Mobility Specialist',
      'Functional Training Expert',
    ],

    availability: [
      'Saturday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],

    featured: false,
  },

  // ============================================================
  // 06 — IMRAN HOSSAIN
  // ============================================================
  {
    id: 't6',
    slug: 'imran-hossain',

    name: 'Imran Hossain',
    nameBn: 'ইমরান হোসাইন',

    category: 'Swimming',

    role: 'Head Swimming Coach',

    gender: 'male',

    certifications: [
      'ASA Level 2',
      'Lifeguard Certified',
    ],

    specialties: [
      'Freestyle',
      'Butterfly',
      'Competitive Swimming',
    ],

    experience: '10 years',

    image:
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Helping swimmers develop technique, confidence and competitive performance in the water.',

    bio:
      'National-level swimmer and experienced swimming coach. Imran works with swimmers of different skill levels, from beginners learning fundamental techniques to advanced athletes preparing for competitive swimming.',

    trainingApproach:
      'Technique-first swimming development focused on water confidence, efficient movement and competitive performance.',

    achievements: [
      '10+ Years Coaching Experience',
      'National-Level Swimming Background',
      'ASA Level 2 Certified',
      'Certified Lifeguard',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
    ],

    featured: false,
  },

  // ============================================================
  // 07 — SHAMIMA RAHMAN
  // ============================================================
  {
    id: 't7',
    slug: 'shamima-rahman',

    name: 'Shamima Rahman',
    nameBn: 'শামীমা রহমান',

    category: 'Swimming',

    role: "Women's & Kids Swimming Coach",

    gender: 'female',

    certifications: [
      'STA Certified',
      'Water Safety Instructor',
    ],

    specialties: [
      'Beginners',
      'Kids Swimming',
      'Aqua Fitness',
    ],

    experience: '6 years',

    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'A patient and encouraging swimming coach specializing in women and kids training.',

    bio:
      'Shamima creates a patient, encouraging and comfortable learning environment for women and children. She specializes in beginner swimming, water confidence, kids batches and aqua fitness programs.',

    trainingApproach:
      'Patient, safety-focused instruction designed to build confidence and swimming fundamentals step by step.',

    achievements: [
      '6+ Years Coaching Experience',
      'STA Certified Swimming Instructor',
      'Water Safety Instructor',
      'Kids Swimming Specialist',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],

    featured: false,
  },

  // ============================================================
  // 08 — NAYEEM RAHMAN
  // ============================================================
  {
    id: 't8',
    slug: 'nayeem-rahman',

    name: 'Nayeem Rahman',
    nameBn: 'নাঈম রহমান',

    category: 'Game Zone',

    role: 'Arena Manager & Billiards Pro',

    gender: 'male',

    certifications: [
      'Billiards Association Certified',
    ],

    specialties: [
      'Billiards',
      'Snooker',
      'Tournament Organizing',
    ],

    experience: '5 years',

    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1500&fit=crop',

    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },

    shortBio:
      'Helping players sharpen their cue skills while creating a competitive and welcoming game-zone experience.',

    bio:
      'Nayeem manages the game zone while helping members improve their billiards and snooker skills. He also organizes regular tournaments and competitive events to create an engaging community around the game zone.',

    trainingApproach:
      'A practical and competitive approach focused on technique, consistency, strategy and match experience.',

    achievements: [
      '5+ Years Experience',
      'Billiards Association Certified',
      'Tournament Organizer',
      'Arena Management Experience',
    ],

    availability: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Thursday',
    ],

    featured: false,
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get the featured trainer for the homepage
 */
export const featuredTrainer = trainers.find(
  (trainer) => trainer.featured
);

/**
 * Get trainer by slug
 */
export const getTrainerBySlug = (slug: string) => {
  return trainers.find((trainer) => trainer.slug === slug);
};

/**
 * Get trainers by category
 */
export const getTrainersByCategory = (
  category: Trainer['category']
) => {
  return trainers.filter(
    (trainer) => trainer.category === category
  );
};