'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { GoldButton } from '@/components/shared/GoldButton';

// Developer data configuration
// TODO: Fill in real portfolio, github, linkedin, and email links
const developers = [
  {
    name: 'S M Tamjid Hossain Epick',
    role: 'Full Stack Developer',
    location: 'Khulna, Bangladesh',
    image: '/dev/dev-1.png',
    description: 'Passionate full-stack developer with expertise in building modern web applications. Experienced in creating scalable solutions using cutting-edge technologies.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma'],
    portfolio: 'https://tamjid.dev',
    github: 'https://github.com/tamjid97',
    linkedin: 'https://linkedin.com/in/tamjid',
    email: 'tamjid@example.com',
  },
  {
    name: 'Tanvir Ahmed Sabbir',
    role: 'Full Stack Developer',
    location: 'Khulna, Bangladesh',
    image: '/dev/dev-2.png',
    description: 'Experienced developer specializing in frontend and backend development. Skilled in creating user-friendly interfaces and robust server-side applications.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma'],
    portfolio: 'https://tanvir.dev',
    github: 'https://github.com/tanvir',
    linkedin: 'https://linkedin.com/in/tanvir',
    email: 'tanvir@example.com',
  },
];

// Tech stack for "Built With" section
const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Vercel',
];

export function DevelopersClient() {
  return (
    <div className="min-h-screen bg-obsidian pb-16">
      <div className="mx-auto px-6 py-12 lg:px-16" style={{ maxWidth: '1600px' }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-label">THE TEAM</span>
            <div className="h-px w-16 bg-gradient-to-r from-[var(--accent-500)] to-transparent" />
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-tight text-warm-white mb-4">
            Meet the Developers
          </h1>
          <p className="text-muted-warm text-lg max-w-2xl mx-auto">
            The talented minds who designed and built Duke Fitness Club — bringing premium fitness experiences to life through code.
          </p>
        </motion.div>

        {/* Developer Cards */}
        <div className="space-y-24 mb-20">
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid gap-12 lg:gap-16 items-center ${
                index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              }`}
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative aspect-[4/5] max-w-[400px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-[var(--accent-500)]/30 shadow-2xl">
                  <Image
                    src={developer.image}
                    alt={developer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Text Section */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                >
                  <span className="text-[var(--accent-500)] text-sm font-semibold tracking-[0.3em] uppercase">
                    Featured Developer
                  </span>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-warm-white mt-3 mb-2">
                    {developer.name}
                  </h2>
                  <p className="text-[var(--accent-500)] text-lg font-medium mb-1">
                    {developer.role}
                  </p>
                  <p className="text-muted-warm text-sm flex items-center gap-2">
                    <span className="text-[var(--accent-500)]">📍</span>
                    {developer.location}
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-muted-warm text-lg leading-relaxed"
                >
                  {developer.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <p className="text-[var(--accent-500)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {developer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-[var(--accent-500)]/30 rounded-lg text-warm-white text-sm hover:border-[var(--accent-500)]/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  {developer.portfolio && (
                    <a
                      href={developer.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 shimmer-effect cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-highlight), var(--accent-primary) 60%, var(--accent-deep))',
                        color: '#0A0A0C',
                        boxShadow: '0 4px 24px color-mix(in srgb, var(--accent-primary) 30%, transparent)',
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Portfolio
                    </a>
                  )}
                  {developer.github && (
                    <a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 shimmer-effect cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-highlight), var(--accent-primary) 60%, var(--accent-deep))',
                        color: '#0A0A0C',
                        boxShadow: '0 4px 24px color-mix(in srgb, var(--accent-primary) 30%, transparent)',
                      }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {developer.linkedin && (
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 shimmer-effect cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-highlight), var(--accent-primary) 60%, var(--accent-deep))',
                        color: '#0A0A0C',
                        boxShadow: '0 4px 24px color-mix(in srgb, var(--accent-primary) 30%, transparent)',
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {developer.email && (
                    <a
                      href={`mailto:${developer.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 shimmer-effect cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-highlight), var(--accent-primary) 60%, var(--accent-deep))',
                        color: '#0A0A0C',
                        boxShadow: '0 4px 24px color-mix(in srgb, var(--accent-primary) 30%, transparent)',
                      }}
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
