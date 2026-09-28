// ============================================================
// MENU DATA — DUKE KITCHEN
// ============================================================
// Prices in BDT (৳). Replace photos and items as needed.
// ============================================================

export interface MenuItem {
  id: string;
  name: string;
  nameBn?: string;
  category: string;
  price: number;
  calories?: number;
  protein?: number;
  veg?: boolean;
  spicy?: boolean;
  popular?: boolean;
  image: string;
  description: string;
}

export const menuCategories = [
  'Protein Meals',
  'Breakfast',
  'Grill',
  'Smoothies & Shakes',
  'Coffee & Cafe',
  'Desserts',
  'Bengali Specials',
] as const;

export const menuItems: MenuItem[] = [
  {
    id: 'pm1',
    name: 'Grilled Chicken Bowl',
    category: 'Protein Meals',
    price: 420,
    calories: 520,
    protein: 45,
    popular: true,
    image:
      'https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Grilled chicken breast, brown rice, steamed vegetables, and house sauce.',
  },
  {
    id: 'pm2',
    name: 'Beef Steak Plate',
    category: 'Protein Meals',
    price: 650,
    calories: 680,
    protein: 52,
    image:
      'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Pan-seared beef steak with mashed potato and grilled veggies.',
  },
  {
    id: 'pm3',
    name: 'Egg & Avocado Plate',
    category: 'Protein Meals',
    price: 320,
    calories: 380,
    protein: 22,
    veg: true,
    image:
      'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Boiled eggs, avocado slices, whole-grain toast, and fresh salad.',
  },
  {
    id: 'bf1',
    name: 'Protein Pancakes',
    category: 'Breakfast',
    price: 280,
    calories: 340,
    protein: 28,
    popular: true,
    image:
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Whey-protein pancakes with banana, honey, and walnuts.',
  },
  {
    id: 'bf2',
    name: 'Omelette Deluxe',
    category: 'Breakfast',
    price: 250,
    calories: 310,
    protein: 24,
    image:
      'https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Three-egg omelette with spinach, mushroom, and cheese.',
  },
  {
    id: 'gr1',
    name: 'Grilled Salmon',
    category: 'Grill',
    price: 750,
    calories: 450,
    protein: 38,
    image:
      'https://images.pexels.com/photos/16020703/pexels-photo-16020703.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Grilled salmon fillet with lemon butter sauce and asparagus.',
  },
  {
    id: 'gr2',
    name: 'BBQ Chicken Platter',
    category: 'Grill',
    price: 520,
    calories: 590,
    protein: 48,
    spicy: true,
    popular: true,
    image:
      'https://images.pexels.com/photos/13422453/pexels-photo-13422453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'BBQ chicken with grilled vegetables and spicy dip.',
  },
  {
    id: 'sm1',
    name: 'Chocolate Protein Shake',
    category: 'Smoothies & Shakes',
    price: 220,
    calories: 280,
    protein: 30,
    popular: true,
    image:
      'https://images.pexels.com/photos/2424034/pexels-photo-2424034.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Whey protein, banana, cocoa, almond milk, and peanut butter.',
  },
  {
    id: 'sm2',
    name: 'Berry Blast Smoothie',
    category: 'Smoothies & Shakes',
    price: 200,
    calories: 220,
    protein: 8,
    veg: true,
    image:
      'https://images.pexels.com/photos/775030/pexels-photo-775030.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Mixed berries, yogurt, honey, and chia seeds.',
  },
  {
    id: 'cf1',
    name: 'Cold Brew Coffee',
    category: 'Coffee & Cafe',
    price: 180,
    calories: 15,
    veg: true,
    image:
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: '12-hour cold brew, smooth and bold.',
  },
  {
    id: 'cf2',
    name: 'Cappuccino',
    category: 'Coffee & Cafe',
    price: 150,
    calories: 120,
    veg: true,
    image:
      'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Espresso with steamed milk and microfoam.',
  },
  {
    id: 'ds1',
    name: 'Greek Yogurt Parfait',
    category: 'Desserts',
    price: 240,
    calories: 260,
    protein: 15,
    veg: true,
    image:
      'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Greek yogurt, granola, mixed berries, and honey.',
  },
  {
    id: 'bs1',
    name: 'Bengali Thali',
    category: 'Bengali Specials',
    price: 380,
    calories: 650,
    protein: 30,
    popular: true,
    image:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Rice, dal, chicken curry, fish, vegetables, and salad.',
  },
  {
    id: 'bs2',
    name: 'Beef Tehari',
    category: 'Bengali Specials',
    price: 350,
    calories: 720,
    protein: 35,
    spicy: true,
    image:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    description: 'Aromatic basmati rice cooked with spiced beef.',
  },
];

export const comboDeals = [
  {
    name: 'Post-Workout Combo',
    price: 550,
    items: ['Grilled Chicken Bowl', 'Chocolate Protein Shake'],
    save: 90,
  },
  {
    name: 'Breakfast Power Combo',
    price: 480,
    items: ['Protein Pancakes', 'Omelette Deluxe', 'Cold Brew Coffee'],
    save: 130,
  },
  {
    name: 'Bengali Feast Combo',
    price: 650,
    items: ['Bengali Thali', 'Berry Blast Smoothie', 'Greek Yogurt Parfait'],
    save: 170,
  },
];
