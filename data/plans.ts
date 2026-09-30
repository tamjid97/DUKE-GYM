// ============================================================
// MEMBERSHIP PLANS
// ============================================================
// Prices in BDT (৳). Updated pricing structure.
// ============================================================

export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  color: string;
  popular?: boolean;
  duration: string;
  price: number;
  features: string[];
}

export const admissionFee = 2000;
export const monthlyFee = 1000;
export const promotionalAdmissionFee = 1000; // 50% off for first 100 members

export const longTermPlans: MembershipTier[] = [
  {
    id: '1-day',
    name: '1 Day',
    tagline: 'Day pass',
    color: '#CD7F32',
    duration: '1 DAY',
    price: 200,
    features: [
      'Full gym access',
      'Locker & shower access',
      'Modern equipment',
      'Air conditioned environment',
    ],
  },
  {
    id: '7-days',
    name: '7 Days',
    tagline: 'Quick start',
    color: '#C0C0C0',
    duration: '7 DAYS',
    price: 500,
    features: [
      'Full gym access',
      'Locker & shower access',
      'Modern equipment',
      'Air conditioned environment',
    ],
  },
  {
    id: '15-days',
    name: '15 Days',
    tagline: 'Short term',
    color: '#D4AF37',
    duration: '15 DAYS',
    price: 1000,
    features: [
      'Full gym access',
      'Locker & shower access',
      'Modern equipment',
      'Air conditioned environment',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze',
    tagline: 'Start your journey',
    color: '#CD7F32',
    duration: '3 MONTHS',
    price: 2500,
    features: [
      'Full gym access',
      'Locker & shower access',
      'Modern equipment',
      'Air conditioned environment',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Commit to growth',
    color: '#C0C0C0',
    duration: '6 MONTHS',
    price: 5000,
    features: [
      'Full gym access',
      'Locker & shower access',
      'Modern equipment',
      'Professional training guidance',
      'Priority support',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Maximum value',
    color: '#D4AF37',
    popular: true,
    duration: '12 MONTHS',
    price: 10000,
    features: [
      'Full gym access',
      'Locker & shower access',
      'Modern equipment',
      'Professional training guidance',
      'Priority support',
      'Special member events',
    ],
  },
];

export const membershipBenefits = [
  { icon: 'dumbbell', title: 'Full Gym Access', description: 'Access to all gym equipment and facilities' },
  { icon: 'barbell', title: 'Modern Equipment', description: 'State-of-the-art fitness machines' },
  { icon: 'lock', title: 'Locker Facilities', description: 'Secure storage for your belongings' },
  { icon: 'wind', title: 'Air Conditioned', description: 'Comfortable workout environment' },
  { icon: 'user', title: 'Professional Training', description: 'Expert guidance from certified trainers' },
  { icon: 'shield', title: 'Clean & Safe', description: 'Hygienic and secure environment' },
  { icon: 'maximize', title: 'Spacious Area', description: 'Large workout space for comfort' },
  { icon: 'headphones', title: 'Member Support', description: 'Dedicated customer service' },
];
