'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Users, Clock, Utensils } from 'lucide-react';
import { trainers } from '@/data/trainers';
import { GoldButton } from '@/components/shared/GoldButton';

export function FeaturedTrainer() {
  const trainerCount = trainers.length;

  const features = [
    {
      icon: <Check className="w-4 h-4" />,
      text: 'Certified & experienced trainers',
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: 'Personalized training programs',
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: 'Flexible scheduling',
    },
    {
      icon: <Utensils className="w-4 h-4" />,
      text: 'Nutrition guidance included',
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
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
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left: Trainer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] lg:aspect-[1/1] rounded-2xl overflow-hidden border-accent-gradient max-w-[350px] lg:max-w-[400px] mx-auto">
              {/* Use first featured trainer image */}
              <img
                src={trainers[0]?.image || '/videos/g7.jpg'}
                alt="Duke Fitness Club Trainers"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Elite Staff Badge */}
              <div className="absolute bottom-6 left-6">
                <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
                  <Users className="w-4 h-4 text-[var(--accent-500)]" />
                  <span className="text-xs font-semibold text-[var(--accent-500)] tracking-wider uppercase">
                    Elite Staff
                  </span>
                  <span className="text-xs text-white/80">• {trainerCount}+ Expert Coaches</span>
                </div>
              </div>

              {/* Gold dot accent */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[var(--accent-500)]" />
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
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="section-label">ELITE STAFF</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-500)] to-transparent" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-3xl lg:text-5xl font-bold leading-tight"
            >
              <span className="text-warm-white">MEET OUR</span>
              <br />
              <span className="text-accent-gradient">FITNESS COACHES</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-warm text-sm lg:text-base leading-relaxed"
            >
              Our team of certified fitness professionals brings years of experience across strength training, swimming, nutrition, and specialized coaching. Every trainer is dedicated to helping you achieve your personal fitness goals with personalized programs and expert guidance.
            </motion.p>

            {/* Feature Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <span className="text-[var(--accent-500)]">{feature.icon}</span>
                  <span className="text-xs text-warm-white">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-4"
            >
              <Link href="/trainers">
                <GoldButton icon>
                  VIEW OUR TRAINERS
                </GoldButton>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
