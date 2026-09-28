// ============================================================
// BLOG / TIPS DATA
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'beginner-strength-training-guide',
    title: 'The Beginner\u2019s Guide to Strength Training',
    excerpt: 'Everything you need to know before you pick up your first barbell at Duke Gym.',
    date: '2026-09-15',
    author: 'Rakib Hasan',
    category: 'Training',
    readTime: '5 min',
    image:
      'https://images.pexels.com/photos/17840/pexels-photo-17840.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    content: [
      'Strength training is the foundation of any serious fitness journey. At Duke Gym, we believe everyone should learn to move well before adding weight.',
      'Start with the big compound movements: squat, bench press, deadlift, overhead press, and rows. These exercises recruit the most muscle and give you the best return on your time investment.',
      'Progressive overload is the key principle. Each week, try to add a small amount of weight or do one more rep. Over months, this compounds into significant strength gains.',
      'Rest is just as important as the workout itself. Muscles grow during recovery, not during training. Aim for 48 hours between training the same muscle group.',
      'Book a free fitness assessment with one of our coaches to get a personalized plan that matches your goals and experience level.',
    ],
  },
  {
    slug: 'swimming-benefits-bangladesh',
    title: 'Why Swimming is the Perfect Exercise in Bangladesh\u2019s Climate',
    excerpt: 'Beat the heat and build full-body fitness with Duke Aqua\u2019s indoor pool.',
    date: '2026-09-10',
    author: 'Imran Hossain',
    category: 'Swimming',
    readTime: '4 min',
    image:
      'https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    content: [
      'Bangladesh\u2019s hot and humid climate makes many forms of exercise uncomfortable, especially during summer. Swimming offers a refreshing alternative that works your entire body.',
      'Swimming is a low-impact exercise, meaning it puts minimal stress on your joints while still providing an excellent cardiovascular workout. This makes it ideal for people of all ages and fitness levels.',
      'At Duke Aqua, our temperature-controlled indoor pool means you can swim comfortably year-round, regardless of the weather outside.',
      'Beyond physical fitness, swimming is excellent for mental health. The rhythmic nature of swimming can be meditative, reducing stress and anxiety.',
      'We offer classes for all levels — from absolute beginners learning water confidence to advanced swimmers preparing for competitions.',
    ],
  },
  {
    slug: 'nutrition-meal-prep-tips',
    title: 'Meal Prep 101: Eat Like a Duke Champion',
    excerpt: 'How Duke Kitchen helps you fuel your training without spending hours in the kitchen.',
    date: '2026-09-05',
    author: 'Nusrat Jahan',
    category: 'Nutrition',
    readTime: '6 min',
    image:
      'https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    content: [
      'You can\u2019t out-train a bad diet. Nutrition is the other half of the fitness equation, and it\u2019s where many people struggle.',
      'Meal prep doesn\u2019t have to be complicated. Start simple: pick a protein source, a complex carbohydrate, and vegetables for each meal. Cook in bulk twice a week.',
      'Duke Kitchen offers meal-plan subscriptions designed specifically for gym members. Our protein meals are portioned and calorie-counted so you don\u2019t have to think about it.',
      'Aim for 1.6–2.2 grams of protein per kilogram of body weight per day, depending on your training intensity and goals.',
      'Stay hydrated. In Bangladesh\u2019s climate, you need more water than you think — especially when training hard. Aim for at least 3 liters per day.',
      'Use our protein calculator on the Tools page to find out exactly how much protein you need based on your body weight and activity level.',
    ],
  },
];
