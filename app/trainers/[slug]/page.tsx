'use client';

import { notFound } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import Image from 'next/image';
import Link from 'next/link';
import { GoldButton } from '@/components/shared/GoldButton';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useLang } from '@/components/providers/LanguageProvider';

export default function TrainerDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const trainer = siteConfig.trainers.find((t) => t.slug === params.slug);

  if (!trainer) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, color-mix(in srgb, var(--accent-500) 8%, transparent) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Trainer Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-accent-gradient">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
                priority
              />
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
                  ELITE STAFF
                </div>
              </div>

              {/* Experience */}
              <div className="absolute bottom-6 left-6">
                <div className="text-white/90 text-sm font-medium">
                  {lang === 'bn' ? trainer.experienceBn : trainer.experience}
                </div>
              </div>
            </div>

            {/* Right: Trainer Info */}
            <div className="space-y-6">
              <div className="section-label">ELITE STAFF</div>
              
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-accent-gradient leading-tight">
                {lang === 'bn' ? trainer.nameBn : trainer.name}
              </h1>
              
              <p className="text-accent-500 font-medium text-xl">
                {lang === 'bn' ? trainer.titleBn : trainer.title}
              </p>
              
              <p className="text-muted-warm leading-relaxed">
                {lang === 'bn' ? trainer.shortBioBn : trainer.shortBio}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-warm-white">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-500)' }}
                  />
                  <span className="font-medium">Experience:</span>
                  <span className="text-muted-warm">{lang === 'bn' ? trainer.experienceBn : trainer.experience}</span>
                </div>
              </div>

              <div className="pt-4">
                <GoldButton icon>
                  BOOK A SESSION
                </GoldButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="About the Coach" />
            <p className="text-muted-warm leading-relaxed text-lg mt-8">
              {lang === 'bn' ? trainer.bioBn : trainer.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Specializations" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
            {(lang === 'bn' ? trainer.specializationsBn : trainer.specializations).map((spec, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-accent-gradient text-center"
              >
                <div className="text-accent-500 font-medium">{spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Certifications" />
          <div className="flex flex-wrap gap-4 mt-8 max-w-4xl mx-auto">
            {trainer.certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border border-accent-500/30 text-accent-500 font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Training Approach" />
            <p className="text-muted-warm leading-relaxed text-lg mt-8">
              {lang === 'bn' ? trainer.trainingApproachBn : trainer.trainingApproach}
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Training Programs" />
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {(lang === 'bn' ? trainer.programsBn : trainer.programs).map((program, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-accent-gradient"
              >
                <div className="text-warm-white font-medium">{program}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Availability" />
            <div className="mt-8 space-y-3">
              {(lang === 'bn' ? trainer.availabilityBn : trainer.availability).map((avail, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-warm">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-500)' }}
                  />
                  <span>{avail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading title="Ready to Start Your Journey?" />
            <p className="text-muted-warm mt-4 mb-8">
              Book a session with {lang === 'bn' ? trainer.nameBn : trainer.name} and take the first step towards your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton icon>
                BOOK A SESSION
              </GoldButton>
              <Link href="/trainers">
                <GoldButton variant="secondary">
                  VIEW ALL TRAINERS
                </GoldButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
