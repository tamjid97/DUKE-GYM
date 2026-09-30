'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function DevelopersClient() {
  const developers = [
    {
      name: 'S M Tamjid Hossain Epick',
      role: 'Full Stack Developer',
      location: 'Dhaka, Bangladesh',
      image: '/dev/dev-1.png',
      description: 'Passionate full-stack developer with expertise in building modern web applications. Experienced in creating scalable solutions using cutting-edge technologies.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma'],
      email: 'tamjid@example.com',
      portfolio: 'https://portfolio.example.com',
    },
    {
      name: 'Tanvir Ahmed Sabbir',
      role: 'Full Stack Developer',
      location: 'Dhaka, Bangladesh',
      image: '/dev/dev-2.png',
      description: 'Experienced developer specializing in frontend and backend development. Skilled in creating user-friendly interfaces and robust server-side applications.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma'],
      email: 'tanvir@example.com',
      portfolio: 'https://portfolio.example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto px-6 py-20 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-none tracking-tight text-white mb-4">
            Featured Developers
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the talented developers behind Duke Fitness Club.
          </p>
        </motion.div>

        <div className="space-y-24">
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
              {/* Text Section */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                >
                  <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">
                    Featured Developer
                  </span>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-2">
                    {developer.name}
                  </h2>
                  <p className="text-orange-500 text-lg font-medium mb-1">
                    {developer.role}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-orange-500">📍</span>
                    {developer.location}
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {developer.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <p className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {developer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-orange-500/30 rounded-lg text-white text-sm hover:border-orange-500/60 transition-colors"
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
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-orange-500">✉️</span>
                    <a href={`mailto:${developer.email}`} className="hover:text-orange-500 transition-colors">
                      {developer.email}
                    </a>
                  </div>
                  <motion.a
                    href={developer.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                  >
                    View Portfolio
                  </motion.a>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative aspect-square max-w-[350px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20">
                  <Image
                    src={developer.image}
                    alt={developer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
