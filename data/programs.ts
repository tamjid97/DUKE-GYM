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
  trainer: string;
  description: string;
  image: string;
}

export const programCategories = [
  'All',
  'Strength',
  'Cardio',
  'Cross-Training',
  'Weight Loss',
  'Women',
  'Recovery',
] as const;

export const programs: Program[] = [
  {
    id: 'p1',
    name: 'Iron Foundation',
    category: 'Strength',
    duration: '12 weeks',
    frequency: '4 days/week',
    calories: '400–600/session',
    level: 'Beginner',
    trainer: 'Rakib Hasan',
    description: 'Master the core lifts — squat, bench, deadlift — with progressive overload.',
    image:
      'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p2',
    name: 'Powerhouse',
    category: 'Strength',
    duration: '16 weeks',
    frequency: '5 days/week',
    calories: '500–800/session',
    level: 'Advanced',
    trainer: 'Tanvir Ahmed',
    description: 'Heavy compound movements and accessory work for serious strength gains.',
    image:
      'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p3',
    name: 'Cardio Burn',
    category: 'Cardio',
    duration: '8 weeks',
    frequency: '3 days/week',
    calories: '500–700/session',
    level: 'All Levels',
    trainer: 'Nusrat Jahan',
    description: 'HIIT and steady-state cardio for heart health and endurance.',
    image:
      'https://images.pexels.com/photos/4753995/pexels-photo-4753995.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p4',
    name: 'CrossFit Inferno',
    category: 'Cross-Training',
    duration: '10 weeks',
    frequency: '4 days/week',
    calories: '600–900/session',
    level: 'Intermediate',
    trainer: 'Sajid Khan',
    description: 'Functional movements at high intensity — box jumps, kettlebells, ropes.',
    image:
      'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p5',
    name: 'Lean Cut',
    category: 'Weight Loss',
    duration: '12 weeks',
    frequency: '5 days/week',
    calories: '450–650/session',
    level: 'All Levels',
    trainer: 'Nusrat Jahan',
    description: 'Mixed strength and cardio programming designed for fat loss and tone.',
    image:
      'https://images.pexels.com/photos/2264409/pexels-photo-2264409.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p6',
    name: 'Strong Women',
    category: 'Women',
    duration: '10 weeks',
    frequency: '3 days/week',
    calories: '350–500/session',
    level: 'All Levels',
    trainer: 'Farzana Akter',
    description: 'Women-only strength and conditioning in a private section.',
    image:
      'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p7',
    name: 'Recovery & Mobility',
    category: 'Recovery',
    duration: '6 weeks',
    frequency: '2 days/week',
    calories: '150–250/session',
    level: 'All Levels',
    trainer: 'Rakib Hasan',
    description: 'Foam rolling, stretching, and mobility work to prevent injury and improve range.',
    image:
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'p8',
    name: 'Olympic Lifting',
    category: 'Strength',
    duration: '14 weeks',
    frequency: '4 days/week',
    calories: '500–800/session',
    level: 'Advanced',
    trainer: 'Tanvir Ahmed',
    description: 'Snatch and clean & jerk technique work with accessory lifts.',
    image:
      'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
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
