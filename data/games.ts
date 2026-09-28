// ============================================================
// POOL & GAME ZONE DATA — DUKE ARENA
// ============================================================

export interface Game {
  id: string;
  name: string;
  icon: string;
  pricePerHour: number;
  priceMember: number;
  available: boolean;
  image: string;
}

export const games: Game[] = [
  {
    id: 'billiards',
    name: 'Billiards / Pool',
    icon: 'Circle',
    pricePerHour: 200,
    priceMember: 120,
    available: true,
    image:
      'https://images.pexels.com/photos/31512997/pexels-photo-31512997.png?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'snooker',
    name: 'Snooker',
    icon: 'Circle',
    pricePerHour: 250,
    priceMember: 150,
    available: true,
    image:
      'https://images.pexels.com/photos/6032656/pexels-photo-6032656.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'tabletennis',
    name: 'Table Tennis',
    icon: 'Circle',
    pricePerHour: 150,
    priceMember: 80,
    available: true,
    image:
      'https://images.pexels.com/photos/12590620/pexels-photo-12590620.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'foosball',
    name: 'Foosball',
    icon: 'Circle',
    pricePerHour: 120,
    priceMember: 60,
    available: true,
    image:
      'https://images.pexels.com/photos/9423176/pexels-photo-9423176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'console',
    name: 'Console / PC Gaming',
    icon: 'Gamepad2',
    pricePerHour: 180,
    priceMember: 100,
    available: true,
    image:
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
  {
    id: 'boardgames',
    name: 'Board Games',
    icon: 'Dices',
    pricePerHour: 80,
    priceMember: 40,
    available: true,
    image:
      'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  },
];

export const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
  '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM',
];

// Booked slots (would come from backend in production)
export const bookedSlots = [
  { game: 'billiards', date: '2026-09-28', slot: '4:00 PM' },
  { game: 'billiards', date: '2026-09-28', slot: '7:00 PM' },
  { game: 'snooker', date: '2026-09-28', slot: '6:00 PM' },
  { game: 'tabletennis', date: '2026-09-28', slot: '3:00 PM' },
];

export const tournaments = [
  { day: 'Saturday', time: '4:00 PM', game: 'Billiards Tournament', prize: '৳5,000' },
  { day: 'Sunday', time: '6:00 PM', game: 'Table Tennis League', prize: '৳3,000' },
  { day: 'Wednesday', time: '6:00 PM', game: 'Foosball Night', prize: '৳2,000' },
  { day: 'Friday', time: '8:00 PM', game: 'Gaming Night', prize: '৳4,000' },
];

export const leaderboard = [
  { rank: 1, name: 'Arif Rahman', points: 2850, game: 'Billiards' },
  { rank: 2, name: 'Sabbir Mahmud', points: 2400, game: 'Table Tennis' },
  { rank: 3, name: 'Jihan Karim', points: 2100, game: 'Snooker' },
  { rank: 4, name: 'Tahsin Bashar', points: 1950, game: 'Foosball' },
  { rank: 5, name: 'Rakibul Islam', points: 1700, game: 'Console Gaming' },
];

export const eventPackages = [
  {
    name: 'Birthday Bash',
    price: 8000,
    duration: '3 hours',
    includes: ['2 billiards tables', '1 table tennis', 'Reserved seating', 'Cake cutting area', '10 guests included'],
  },
  {
    name: 'Corporate Challenge',
    price: 15000,
    duration: '4 hours',
    includes: ['Full arena access', 'Tournament setup', 'Catering from Duke Kitchen', 'Trophy for winners', '20 guests included'],
  },
  {
    name: 'Friends Night Out',
    price: 5000,
    duration: '2 hours',
    includes: ['1 billiards table', '1 foosball table', 'Console gaming', 'Snacks platter', '6 guests included'],
  },
];
