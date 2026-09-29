'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';

export function FeaturedTrainer() {
  const { t, lang } = useLang();
  
  // Get the featured trainer
  const featuredTrainer = siteConfig.trainers.find(t => t.featured) || siteConfig.trainers[0];
  
  if (!featuredTrainer) return null;

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, color-mix(in srgb, var(--accent-500) 5%, transparent) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Trainer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-accent-gradient">
              <img
                src={featuredTrainer.image}
                alt={featuredTrainer.name}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <div
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'var(--accent-gradient)',
                    color: 'var(--obsidian)',
                  }}
                >
                  {t.featuredCoach}
                </div>
              </div>

              {/* Experience indicator */}
              <div className="absolute bottom-6 left-6">
                <div className="text-white/90 text-sm font-medium">
                  {featuredTrainer.experience}
                </div>
              </div>
            </div>

            {/* Subtle glow */}
            <div
              className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl -z-10"
              style={{
                background: 'var(--accent-gradient)',
              }}
            />
          </motion.div>

          {/* Right: Trainer Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="section-label"
            >
              {t.meetOurCoach}
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-3xl lg:text-4xl font-bold text-accent-gradient leading-tight"
            >
              {t.trainWithBest}
            </motion.h2>

            {/* Trainer Name */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="font-display text-2xl font-bold text-warm-white mb-2">
                {lang === 'bn' ? featuredTrainer.nameBn : featuredTrainer.name}
              </h3>
              <p className="text-accent-500 font-medium text-base">
                {lang === 'bn' ? featuredTrainer.titleBn : featuredTrainer.title}
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-muted-warm text-sm leading-relaxed"
            >
              {lang === 'bn' ? featuredTrainer.shortBioBn : featuredTrainer.shortBio}
            </motion.p>

            {/* Expertise Items */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-2"
            >
              {(lang === 'bn' ? featuredTrainer.specializationsBn : featuredTrainer.specializations).slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-warm-white text-sm">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--accent-500)' }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href={`/trainers/${featuredTrainer.slug}`}>
                <GoldButton icon>
                  {t.viewTrainerProfile}
                </GoldButton>
              </Link>
              <Link
                href="/trainers"
                className="flex items-center gap-2 text-accent-500 hover:text-accent-400 transition-colors text-sm font-medium self-center sm:self-auto"
              >
                {t.viewAllTrainers} →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
