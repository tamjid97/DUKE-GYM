// ============================================================
// GALLERY DATA
// ============================================================

export interface GalleryItem {
  id: string;
  category: 'Gym' | 'Restaurant' | 'Aqua' | 'Arena' | 'Events';
  image: string;
  alt: string;
  video?: boolean;
}

export const galleryCategories = ['All', 'Gym', 'Restaurant', 'Aqua', 'Arena', 'Events'] as const;

export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'Gym', image: 'https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1', alt: 'Gym interior' },
  { id: 'g2', category: 'Gym', image: 'https://images.pexels.com/photos/6739958/pexels-photo-6739958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Punching bags' },
  { id: 'g3', category: 'Gym', image: 'https://images.pexels.com/photos/29149073/pexels-photo-29149073.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Dumbbells rack' },
  { id: 'g4', category: 'Restaurant', image: 'https://images.pexels.com/photos/6111932/pexels-photo-6111932.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1', alt: 'Gourmet plate' },
  { id: 'g5', category: 'Restaurant', image: 'https://images.pexels.com/photos/16020703/pexels-photo-16020703.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Salmon dish' },
  { id: 'g6', category: 'Restaurant', image: 'https://images.pexels.com/photos/2424034/pexels-photo-2424034.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Smoothie' },
  { id: 'g7', category: 'Aqua', image: 'https://images.pexels.com/photos/23916836/pexels-photo-23916836.png?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1', alt: 'Indoor pool' },
  { id: 'g8', category: 'Aqua', image: 'https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Pool area' },
  { id: 'g9', category: 'Aqua', image: 'https://images.pexels.com/photos/7222171/pexels-photo-7222171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Swimming' },
  { id: 'g10', category: 'Arena', image: 'https://images.pexels.com/photos/31512997/pexels-photo-31512997.png?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1', alt: 'Billiards table' },
  { id: 'g11', category: 'Arena', image: 'https://images.pexels.com/photos/6032656/pexels-photo-6032656.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Billiards lounge' },
  { id: 'g12', category: 'Arena', image: 'https://images.pexels.com/photos/10627127/pexels-photo-10627127.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Playing billiards' },
  { id: 'g13', category: 'Events', image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Steak dinner' },
  { id: 'g14', category: 'Events', image: 'https://images.pexels.com/photos/13422453/pexels-photo-13422453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'BBQ grill' },
  { id: 'g15', category: 'Events', image: 'https://images.pexels.com/photos/4753998/pexels-photo-4753998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Cross training' },
];

// Testimonials — placeholder data, replace with real reviews
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'ts1',
    name: 'Arif Rahman',
    role: 'Member — 2 years',
    rating: 5,
    text: 'Best gym in Dhaka, hands down. The equipment is top-class and the trainers actually care about your progress. Duke Kitchen\u2019s meal plans changed my fitness game completely.',
    image: 'https://images.pexels.com/photos/17210041/pexels-photo-17210041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 'ts2',
    name: 'Nadia Sultana',
    role: 'Member — 1 year',
    rating: 5,
    text: 'The women\u2019s section is fantastic — private, well-equipped, and Farzana is an amazing coach. The swimming pool is clean and well-maintained with separate timings.',
    image: 'https://images.pexels.com/photos/31245340/pexels-photo-31245340.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 'ts3',
    name: 'Sabbir Mahmud',
    role: 'Member — 3 years',
    rating: 5,
    text: 'I joined for the gym but stayed for everything. After training I grab a protein shake at Duke Kitchen, then play billiards with friends at the Arena. It\u2019s a whole lifestyle.',
    image: 'https://images.pexels.com/photos/8874355/pexels-photo-8874355.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    id: 'ts4',
    name: 'Tahmina Akter',
    role: 'Member — 6 months',
    rating: 5,
    text: 'My kids learn swimming here and I use the gym at the same time. The family combo pass makes it affordable. The whole place feels premium and safe.',
    image: 'https://images.pexels.com/photos/20649585/pexels-photo-20649585.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];

// Before/After transformations — placeholder data
export const transformations = [
  {
    id: 'tr1',
    name: 'Rakibul Islam',
    duration: '8 months',
    before:
      'https://images.pexels.com/photos/29886673/pexels-photo-29886673.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    after:
      'https://images.pexels.com/photos/17210041/pexels-photo-17210041.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    result: 'Lost 15kg, gained visible muscle definition',
  },
  {
    id: 'tr2',
    name: 'Sumaiya Karim',
    duration: '6 months',
    before:
      'https://images.pexels.com/photos/20649585/pexels-photo-20649585.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    after:
      'https://images.pexels.com/photos/31245340/pexels-photo-31245340.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    result: 'Lost 8kg, improved strength and confidence',
  },
];

// FAQ
export const faqs = [
  {
    q: 'Where is Duke Fitness Club located?',
    a: 'We are located in Gulshan 2, Dhaka. See the Contact page for the exact address and a map.',
  },
  {
    q: 'How many zones does the club have?',
    a: 'Four: Duke Gym, Duke Kitchen (restaurant), Duke Aqua (swimming pool), and Duke Arena (pool & game zone with billiards, table tennis, and more).',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes, we offer a free tour and trial session. Book through the Join Now button or call us directly.',
  },
  {
    q: 'Can I use all four zones with one membership?',
    a: 'It depends on your tier. Silver covers the gym, Gold adds restaurant discounts, Platinum adds swimming and game zone hours, and Black Diamond includes everything with priority booking.',
  },
  {
    q: 'Is there a women\u2019s section?',
    a: 'Yes, the gym has a dedicated women\u2019s section with a female trainer, and the pool has separate women-only batches.',
  },
  {
    q: 'How do I book a swimming or game zone slot?',
    a: 'You can book through the respective zone page or send us a WhatsApp message with your preferred date and time.',
  },
];
