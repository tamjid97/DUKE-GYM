'use client';

import { siteConfig } from '@/data/siteConfig';
import { FeaturedTrainer } from '@/components/sections/FeaturedTrainer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import { GoldButton } from '@/components/shared/GoldButton';
import { useLang } from '@/components/providers/LanguageProvider';

export default function TrainersPage() {
  const { t, lang } = useLang();

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-500) 8%, transparent) 0%, transparent 50%)',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title={t.ourTrainers}
            subtitle="Expert coaches dedicated to your fitness journey"
          />
        </div>
      </section>

      {/* Featured Trainer */}
      <FeaturedTrainer />

      {/* All Trainers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.trainers.map((trainer) => (
              <Link
                key={trainer.id}
                href={`/trainers/${trainer.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-accent-gradient mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  {trainer.featured && (
                    <div className="absolute top-4 left-4">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                        style={{
                          background: 'var(--accent-gradient)',
                          color: 'var(--obsidian)',
                        }}
                      >
                        {t.featuredCoach}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-warm-white mb-1">
                      {lang === 'bn' ? trainer.nameBn : trainer.name}
                    </h3>
                    <p className="text-accent-500 font-medium mb-2">
                      {lang === 'bn' ? trainer.titleBn : trainer.title}
                    </p>
                    <p className="text-muted-warm text-sm line-clamp-2">
                      {lang === 'bn' ? trainer.shortBioBn : trainer.shortBio}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-accent-500 group-hover:text-accent-400 transition-colors text-sm font-medium">
                  {t.viewDetails} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
