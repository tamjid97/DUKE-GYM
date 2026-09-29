// ============================================================
// GALLERY DATA
// ============================================================

export interface GalleryItem {
  id: string;
  category: 'Gym' | 'Restaurant' | 'Aqua' | 'Arena' | 'Events';
  src: string;
  alt: string;
  poster?: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export const galleryCategories = ['All', 'Gym', 'Restaurant', 'Aqua', 'Arena', 'Events'] as const;

export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'Gym', src: '/videos/g1.mp4', alt: 'Gym interior', aspectRatio: 'tall' },
  { id: 'g2', category: 'Gym', src: '/videos/g2.mp4', alt: 'Training equipment', aspectRatio: 'wide' },
  { id: 'g3', category: 'Gym', src: '/videos/g3.mp4', alt: 'Weight lifting area', aspectRatio: 'square' },
  { id: 'g8', category: 'Events', src: '/videos/g8.mp4', alt: 'Special events', aspectRatio: 'wide' },
  { id: 'g7', category: 'Arena', src: '/videos/g7.jpg', alt: 'Game zone', aspectRatio: 'tall' },
  { id: 'g9', category: 'Gym', src: '/videos/g9.mp4', alt: 'Personal training', aspectRatio: 'square' },
  { id: 'g4', category: 'Gym', src: '/videos/g4.mp4', alt: 'Cardio zone', aspectRatio: 'tall' },
  { id: 'g5', category: 'Restaurant', src: '/videos/g5.mp4', alt: 'Duke Kitchen dining', aspectRatio: 'wide' },
  { id: 'g6', category: 'Aqua', src: '/videos/g6.mp4', alt: 'Swimming pool', aspectRatio: 'square' },

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
