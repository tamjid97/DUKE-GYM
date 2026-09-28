// ============================================================
// SWIMMING POOL DATA — DUKE AQUA
// ============================================================
// Only show what is provided here. Do not invent specs.
// ============================================================

export const poolInfo = {
  size: '25 meters × 12 meters', // [PLACEHOLDER]
  depth: '1.0m shallow end — 2.5m deep end', // [PLACEHOLDER]
  waterTemp: '28–30°C temperature-controlled', // [PLACEHOLDER]
  filtration: 'UV + chlorine dual-filtration system',
  lifeguard: true,
  changingRooms: true,
  showers: true,
  lockers: true,
};

export const poolTimetable = [
  { batch: 'Men', days: 'Sat, Sun, Tue, Thu', time: '6:00 AM – 8:00 AM' },
  { batch: 'Women', days: 'Sat, Sun, Tue, Thu', time: '9:00 AM – 11:00 AM' },
  { batch: 'Kids & Family', days: 'Sat, Fri', time: '4:00 PM – 6:00 PM' },
  { batch: 'Aqua Fitness', days: 'Wed, Fri', time: '5:00 PM – 6:00 PM' },
];

export const swimmingClasses = [
  {
    id: 'sc1',
    name: 'Beginner Swimming',
    level: 'Beginner',
    duration: '4 weeks',
    sessions: '8 sessions',
    fee: 3000,
    description: 'Learn water confidence, floating, and basic freestyle.',
  },
  {
    id: 'sc2',
    name: 'Intermediate Swimming',
    level: 'Intermediate',
    duration: '6 weeks',
    sessions: '12 sessions',
    fee: 4500,
    description: 'Refine technique, build endurance, and learn new strokes.',
  },
  {
    id: 'sc3',
    name: 'Advanced / Competitive',
    level: 'Advanced',
    duration: '8 weeks',
    sessions: '16 sessions',
    fee: 6000,
    description: 'Race training, starts, turns, and competitive preparation.',
  },
  {
    id: 'sc4',
    name: 'Kids Swimming',
    level: 'Kids (5–12)',
    duration: '4 weeks',
    sessions: '8 sessions',
    fee: 2500,
    description: 'Fun, safe lessons for children with certified instructors.',
  },
  {
    id: 'sc5',
    name: 'Women-Only Swimming',
    level: 'All Levels',
    duration: '4 weeks',
    sessions: '8 sessions',
    fee: 3000,
    description: 'Private women-only batch with female coach.',
  },
  {
    id: 'sc6',
    name: 'Aqua Fitness',
    level: 'All Levels',
    duration: '4 weeks',
    sessions: '8 sessions',
    fee: 2500,
    description: 'Low-impact water-based cardio and resistance training.',
  },
];

export const poolPricing = [
  { name: 'Monthly Pool Pass', price: 2500, unit: 'month', note: 'Unlimited access during your batches' },
  { name: 'Per-Visit Ticket', price: 300, unit: 'visit', note: 'Single entry, subject to availability' },
  { name: 'Member Add-On', price: 1000, unit: 'month', note: 'For existing gym members' },
  { name: 'Class Package (8 sessions)', price: 2500, unit: 'package', note: 'Any swimming class' },
];

export const poolRules = [
  'Shower before entering the pool.',
  'Swim cap is mandatory for all swimmers.',
  'Proper swimwear required — no shorts or cotton clothing.',
  'No running on the pool deck.',
  'Children under 12 must be accompanied by an adult.',
  'No food or drinks inside the pool area.',
  'Follow lifeguard instructions at all times.',
  'Persons with open wounds or infections are not allowed.',
];

export const poolFAQ = [
  {
    q: 'Is the pool temperature-controlled?',
    a: 'Yes, the water is maintained at 28–30°C for comfortable swimming year-round.',
  },
  {
    q: 'Are there separate timings for men and women?',
    a: 'Yes, we have dedicated batches for men, women, and kids/family. See the timetable above.',
  },
  {
    q: 'Do I need to know how to swim to join a class?',
    a: 'No, our beginner classes start with water confidence and basic floating.',
  },
  {
    q: 'Is a lifeguard always on duty?',
    a: 'Yes, a certified lifeguard is on duty during all operating hours.',
  },
  {
    q: 'Can timings change?',
    a: 'Yes, timings may change for maintenance or special events. We notify members in advance.',
  },
];
