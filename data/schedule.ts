// ============================================================
// SCHEDULE DATA — Weekly timetable
// ============================================================

export interface ScheduleSlot {
  day: string;
  start: string;
  end: string;
  activity: string;
  trainer: string;
  zone: 'gym-men' | 'gym-women' | 'classes' | 'swimming' | 'arena';
}

export const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export const scheduleTabs = [
  { id: 'gym-men', label: 'Gym — Men' },
  { id: 'gym-women', label: 'Gym — Women' },
  { id: 'classes', label: 'Classes' },
  { id: 'swimming', label: 'Swimming' },
  { id: 'arena', label: 'Game Zone' },
] as const;

export const schedule: ScheduleSlot[] = [
  // Gym Men
  { day: 'Sat', start: '06:00', end: '08:00', activity: 'Strength Training', trainer: 'Rakib Hasan', zone: 'gym-men' },
  { day: 'Sat', start: '17:00', end: '19:00', activity: 'Cross-Training', trainer: 'Sajid Khan', zone: 'gym-men' },
  { day: 'Sun', start: '06:00', end: '08:00', activity: 'Hypertrophy', trainer: 'Tanvir Ahmed', zone: 'gym-men' },
  { day: 'Mon', start: '17:00', end: '19:00', activity: 'Olympic Lifting', trainer: 'Tanvir Ahmed', zone: 'gym-men' },
  { day: 'Tue', start: '06:00', end: '08:00', activity: 'Strength Training', trainer: 'Rakib Hasan', zone: 'gym-men' },
  { day: 'Wed', start: '17:00', end: '19:00', activity: 'Cardio Burn', trainer: 'Nusrat Jahan', zone: 'gym-men' },
  { day: 'Thu', start: '06:00', end: '08:00', activity: 'CrossFit Inferno', trainer: 'Sajid Khan', zone: 'gym-men' },

  // Gym Women
  { day: 'Sat', start: '09:00', end: '11:00', activity: 'Strong Women', trainer: 'Farzana Akter', zone: 'gym-women' },
  { day: 'Sun', start: '09:00', end: '11:00', activity: 'Toning & Sculpt', trainer: 'Farzana Akter', zone: 'gym-women' },
  { day: 'Tue', start: '09:00', end: '11:00', activity: 'Strong Women', trainer: 'Farzana Akter', zone: 'gym-women' },
  { day: 'Thu', start: '09:00', end: '11:00', activity: 'Cardio & Core', trainer: 'Farzana Akter', zone: 'gym-women' },

  // Classes
  { day: 'Sat', start: '18:00', end: '19:00', activity: 'HIIT Class', trainer: 'Nusrat Jahan', zone: 'classes' },
  { day: 'Sun', start: '18:00', end: '19:00', activity: 'Yoga & Mobility', trainer: 'Rakib Hasan', zone: 'classes' },
  { day: 'Mon', start: '18:00', end: '19:00', activity: 'Spin Class', trainer: 'Nusrat Jahan', zone: 'classes' },
  { day: 'Wed', start: '18:00', end: '19:00', activity: 'Yoga & Mobility', trainer: 'Rakib Hasan', zone: 'classes' },
  { day: 'Fri', start: '10:00', end: '11:30', activity: 'Bootcamp', trainer: 'Sajid Khan', zone: 'classes' },

  // Swimming
  { day: 'Sat', start: '06:00', end: '08:00', activity: 'Men — Lap Swim', trainer: 'Imran Hossain', zone: 'swimming' },
  { day: 'Sat', start: '09:00', end: '11:00', activity: 'Women — Swim Batch', trainer: 'Shamima Rahman', zone: 'swimming' },
  { day: 'Sat', start: '16:00', end: '18:00', activity: 'Kids & Family', trainer: 'Shamima Rahman', zone: 'swimming' },
  { day: 'Sun', start: '06:00', end: '08:00', activity: 'Men — Lap Swim', trainer: 'Imran Hossain', zone: 'swimming' },
  { day: 'Sun', start: '09:00', end: '11:00', activity: 'Women — Swim Batch', trainer: 'Shamima Rahman', zone: 'swimming' },
  { day: 'Tue', start: '06:00', end: '08:00', activity: 'Men — Lap Swim', trainer: 'Imran Hossain', zone: 'swimming' },
  { day: 'Thu', start: '09:00', end: '11:00', activity: 'Women — Swim Batch', trainer: 'Shamima Rahman', zone: 'swimming' },
  { day: 'Fri', start: '16:00', end: '18:00', activity: 'Kids & Family', trainer: 'Shamima Rahman', zone: 'swimming' },

  // Game Zone
  { day: 'Sat', start: '16:00', end: '18:00', activity: 'Billiards Tournament', trainer: 'Nayeem Rahman', zone: 'arena' },
  { day: 'Sun', start: '18:00', end: '20:00', activity: 'Table Tennis League', trainer: 'Nayeem Rahman', zone: 'arena' },
  { day: 'Wed', start: '18:00', end: '20:00', activity: 'Foosball Night', trainer: 'Nayeem Rahman', zone: 'arena' },
  { day: 'Fri', start: '20:00', end: '23:00', activity: 'Gaming Night', trainer: 'Nayeem Rahman', zone: 'arena' },
];
