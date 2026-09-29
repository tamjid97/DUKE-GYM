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

  certifications: string[];

  specialties: string[];

  experience: string;

  image: string;

  social: {
    facebook?: string;
    instagram?: string;
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
  // 01 — RAKIB HASAN
  // ============================================================
  {
    id: 't1',
    slug: 'rakib-hasan',

    name: 'Rakib Hasan',
    nameBn: 'রাকিব হাসান',

    category: 'Gym',

    role: 'Head Strength Coach',

    certifications: ['NASM-CPT', 'Precision Nutrition L1'],

    specialties: [
      'Strength Training',
      'Olympic Lifting',
      'Recovery',
    ],

    experience: '8 years',

    image:
      'https://images.pexels.com/photos/17210041/pexels-photo-17210041.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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

    certifications: ['ISSA', 'Kettlebell Specialist'],

    specialties: [
      'Hypertrophy',
      'Olympic Lifting',
      'Powerlifting',
    ],

    experience: '6 years',

    image:
      'https://images.pexels.com/photos/8874355/pexels-photo-8874355.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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

    certifications: ['ACE-CPT', 'HIIT Instructor'],

    specialties: [
      'HIIT',
      'Weight Loss',
      'Cardio',
    ],

    experience: '5 years',

    image:
      'https://images.pexels.com/photos/31245340/pexels-photo-31245340.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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
      'https://images.pexels.com/photos/20649585/pexels-photo-20649585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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
      'https://images.pexels.com/photos/15018025/pexels-photo-15018025.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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
      'https://images.pexels.com/photos/2629936/pexels-photo-2629936.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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
      'https://images.pexels.com/photos/7222168/pexels-photo-7222168.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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
      'https://images.pexels.com/photos/13211450/pexels-photo-13211450.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&dpr=1',

    social: {
      facebook: '#',
      instagram: '#',
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