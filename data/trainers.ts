// ============================================================
// TRAINERS DATA
// ============================================================

export interface Trainer {
  id: string;
  name: string;
  nameBn?: string;
  category: 'Gym' | 'Swimming' | 'Game Zone';
  role: string;
  certifications: string[];
  specialties: string[];
  experience: string;
  image: string;
  social: { facebook?: string; instagram?: string };
  bio: string;
}

export const trainers: Trainer[] = [
  {
    id: 't1',
    name: 'Rakib Hasan',
    category: 'Gym',
    role: 'Head Strength Coach',
    certifications: ['NASM-CPT', 'Precision Nutrition L1'],
    specialties: ['Strength Training', 'Olympic Lifting', 'Recovery'],
    experience: '8 years',
    image:
      'https://images.pexels.com/photos/17210041/pexels-photo-17210041.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Former national powerlifter turned coach. Specializes in building raw strength from the ground up.',
  },
  {
    id: 't2',
    name: 'Tanvir Ahmed',
    category: 'Gym',
    role: 'Strength & Hypertrophy Coach',
    certifications: ['ISSA', 'Kettlebell Specialist'],
    specialties: ['Hypertrophy', 'Olympic Lifting', 'Powerlifting'],
    experience: '6 years',
    image:
      'https://images.pexels.com/photos/8874355/pexels-photo-8874355.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Competitive bodybuilder with a passion for evidence-based training methods.',
  },
  {
    id: 't3',
    name: 'Nusrat Jahan',
    category: 'Gym',
    role: 'Cardio & Weight Loss Specialist',
    certifications: ['ACE-CPT', 'HIIT Instructor'],
    specialties: ['HIIT', 'Weight Loss', 'Cardio'],
    experience: '5 years',
    image:
      'https://images.pexels.com/photos/31245340/pexels-photo-31245340.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Helps members transform through sustainable cardio and nutrition coaching.',
  },
  {
    id: 't4',
    name: 'Farzana Akter',
    category: 'Gym',
    role: "Women's Section Coach",
    certifications: ['NASM-WLS', 'Pre/Post Natal Certified'],
    specialties: ["Women's Fitness", 'Toning', 'Flexibility'],
    experience: '4 years',
    image:
      'https://images.pexels.com/photos/20649585/pexels-photo-20649585.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Creates a comfortable, empowering environment for women to train with confidence.',
  },
  {
    id: 't5',
    name: 'Sajid Khan',
    category: 'Gym',
    role: 'Cross-Training & Functional Coach',
    certifications: ['CrossFit L2', 'Mobility Specialist'],
    specialties: ['Cross-Training', 'Functional', 'Endurance'],
    experience: '7 years',
    image:
      'https://images.pexels.com/photos/15018025/pexels-photo-15018025.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Pushes members beyond their limits with high-intensity functional training.',
  },
  {
    id: 't6',
    name: 'Imran Hossain',
    category: 'Swimming',
    role: 'Head Swimming Coach',
    certifications: ['ASA Level 2', 'Lifeguard Certified'],
    specialties: ['Freestyle', 'Butterfly', 'Competitive'],
    experience: '10 years',
    image:
      'https://images.pexels.com/photos/2629936/pexels-photo-2629936.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'National-level swimmer coaching all ages from beginners to competitors.',
  },
  {
    id: 't7',
    name: 'Shamima Rahman',
    category: 'Swimming',
    role: "Women's & Kids Swimming Coach",
    certifications: ['STA Certified', 'Water Safety Instructor'],
    specialties: ['Beginners', 'Kids', 'Aqua Fitness'],
    experience: '6 years',
    image:
      'https://images.pexels.com/photos/7222168/pexels-photo-7222168.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Patient and encouraging coach specializing in women-only and kids batches.',
  },
  {
    id: 't8',
    name: 'Nayeem Rahman',
    category: 'Game Zone',
    role: 'Arena Manager & Billiards Pro',
    certifications: ['Billiards Association Certified'],
    specialties: ['Billiards', 'Snooker', 'Tournament Organizing'],
    experience: '5 years',
    image:
      'https://images.pexels.com/photos/13211450/pexels-photo-13211450.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1',
    social: { facebook: '#', instagram: '#' },
    bio: 'Organizes weekly tournaments and helps members sharpen their cue game.',
  },
];
