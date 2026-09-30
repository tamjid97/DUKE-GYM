// ============================================================
// PROGRAMS DATA — DUKE GYM
// ============================================================

export interface Program {
  id: string;
  name: string;
  category: string;
  duration: string;
  frequency: string;
  calories: string;
  level: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'ALL LEVELS';
  trainer: string;
  description: string;
  tags: string[];
  popular?: boolean;
  image: string;
}

export const programCategories = [
  'ALL',
  'STRENGTH',
  'CARDIO',
  'WEIGHT LOSS',
  'CROSS TRAINING',
  'PERSONAL',
] as const;

export const programs: Program[] = [
  {
    id: 'p1',
    name: 'Strength Training',
    category: 'STRENGTH',
    duration: '60 min',
    frequency: '4x/week',
    calories: '600–850 kcal',
    level: 'Advanced',
    difficulty: 'ADVANCED',
    trainer: 'Rakib Hasan',
    description: 'Build raw power with progressive overload.',
    tags: ['Barbell Mastery', 'Heavy Lifts', 'Progressive Overload'],
    image:
      'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p2',
    name: 'Weight Loss',
    category: 'WEIGHT LOSS',
    duration: '45 min',
    frequency: '5x/week',
    calories: '500–750 kcal',
    level: 'Beginner',
    difficulty: 'BEGINNER',
    trainer: 'Nusrat Jahan',
    description: 'Burn fat efficiently with science-backed routines.',
    tags: ['Fat Burn', 'High Sweat', 'Metabolic Boost'],
    image:
      'https://images.pexels.com/photos/2264409/pexels-photo-2264409.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p3',
    name: 'Muscle Building',
    category: 'STRENGTH',
    duration: '60 min',
    frequency: '4x/week',
    calories: '550–800 kcal',
    level: 'Intermediate',
    difficulty: 'INTERMEDIATE',
    trainer: 'Tanvir Ahmed',
    description: 'Hypertrophy-focused training for lean mass.',
    tags: ['Hypertrophy', 'Mass Gain', 'Sculpting'],
    image:
      'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p4',
    name: 'Cross Training',
    category: 'CROSS TRAINING',
    duration: '60 min',
    frequency: '3x/week',
    calories: '700–1000 kcal',
    level: 'Advanced',
    difficulty: 'ADVANCED',
    trainer: 'Sajid Khan',
    description: 'Functional fitness for full-body power.',
    tags: ['Olympic Bar', 'Agility', 'High Intensity'],
    image:
      'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p5',
    name: 'Personal Training',
    category: 'PERSONAL',
    duration: '60 min',
    frequency: '1-on-1',
    calories: 'Customized',
    level: 'All Levels',
    difficulty: 'ALL LEVELS',
    trainer: 'VIP Coach',
    description: 'One-on-one coaching for faster results.',
    tags: ['VIP Coach', 'Custom Meal', '100% Focus'],
    popular: true,
    image:
      'https://images.pexels.com/photos/4753995/pexels-photo-4753995.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p6',
    name: 'Cardio & Conditioning',
    category: 'CARDIO',
    duration: '45 min',
    frequency: '4x/week',
    calories: '450–700 kcal',
    level: 'Intermediate',
    difficulty: 'INTERMEDIATE',
    trainer: 'Nusrat Jahan',
    description: 'Improve endurance and heart health.',
    tags: ['Stamina', 'Heart Health', 'Endurance'],
    image:
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
];

// Quiz options for "Find Your Program"
export const quizQuestions = [
  {
    question: 'What is your primary goal?',
    options: [
      { label: 'Build Muscle', value: 'Strength' },
      { label: 'Lose Weight', value: 'Weight Loss' },
      { label: 'Get Fit & Healthy', value: 'Cardio' },
      { label: 'Improve Performance', value: 'Cross-Training' },
    ],
  },
  {
    question: 'What is your experience level?',
    options: [
      { label: 'Beginner', value: 'Beginner' },
      { label: 'Intermediate', value: 'Intermediate' },
      { label: 'Advanced', value: 'Advanced' },
    ],
  },
  {
    question: 'How many days per week can you train?',
    options: [
      { label: '2–3 days', value: 'low' },
      { label: '4–5 days', value: 'mid' },
      { label: '5–6 days', value: 'high' },
    ],
  },
];
