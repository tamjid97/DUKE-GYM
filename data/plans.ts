// ============================================================
// MEMBERSHIP PLANS
// ============================================================
// Prices in BDT (৳). Replace with real pricing.
// ============================================================

export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  color: string;
  popular?: boolean;
  prices: { monthly: number; quarterly: number; yearly: number };
  features: string[];
  zones: { gym: boolean; restaurant: boolean; pool: boolean; arena: boolean };
}

export const membershipTiers: MembershipTier[] = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Start your journey',
    color: '#A8A39A',
    prices: { monthly: 2000, quarterly: 5400, yearly: 20000 },
    features: [
      'Full gym access',
      'Locker & shower access',
      '2 group classes / week',
      'Free fitness assessment',
    ],
    zones: { gym: true, restaurant: false, pool: false, arena: false },
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Train & dine',
    color: '#D4AF37',
    popular: true,
    prices: { monthly: 3500, quarterly: 9450, yearly: 35000 },
    features: [
      'Full gym access',
      '10% discount at Duke Kitchen',
      '4 group classes / week',
      '1 PT session / month',
      'Free fitness assessment',
    ],
    zones: { gym: true, restaurant: true, pool: false, arena: false },
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tagline: 'Train, dine & swim',
    color: '#E5E4E2',
    prices: { monthly: 5000, quarterly: 13500, yearly: 50000 },
    features: [
      'Full gym access',
      '15% discount at Duke Kitchen',
      'Swimming pool access (scheduled)',
      'Game Zone — 4 hours/week',
      '2 PT sessions / month',
      'Free fitness assessment',
    ],
    zones: { gym: true, restaurant: true, pool: true, arena: true },
  },
  {
    id: 'black',
    name: 'Black Diamond',
    tagline: 'Own the building',
    color: '#1A1A1A',
    prices: { monthly: 8000, quarterly: 21600, yearly: 80000 },
    features: [
      'Unlimited gym, pool & game zone',
      '20% discount at Duke Kitchen',
      'Priority booking all zones',
      '4 PT sessions / month',
      'Free guest pass (2/month)',
      'Personal locker',
      'Nutrition consultation',
    ],
    zones: { gym: true, restaurant: true, pool: true, arena: true },
  },
];

export const specialPasses = [
  {
    name: 'Swimming Only Pass',
    price: 2500,
    period: 'monthly',
    description: 'Unlimited swimming pool access during your scheduled batches.',
  },
  {
    name: 'Family / Couple Combo',
    price: 7000,
    period: 'monthly',
    description: 'Two members, full gym + pool access. Save ৳2,000 vs individual plans.',
  },
];
