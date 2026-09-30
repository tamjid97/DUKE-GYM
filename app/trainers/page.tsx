'use client';

import { useState } from 'react';
import { trainers } from '@/data/trainers';
import { TrainerCard } from '@/components/trainers/TrainerCard';
import { TrainerModal } from '@/components/trainers/TrainerModal';
import { TrainerFilter } from '@/components/trainers/TrainerFilter';
import { useLang } from '@/components/providers/LanguageProvider';

type FilterType = 'owner' | 'manager' | 'male' | 'female';

export default function TrainersPage() {
  const { t } = useLang();
  const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('owner');

  // Filter trainers based on selected filter
  const filteredTrainers = trainers.filter((trainer) => {
    const roleLower = trainer.role.toLowerCase();
    const isOwnerOrManager = roleLower.includes('owner') || roleLower.includes('manager');
    switch (activeFilter) {
      case 'owner':
        return roleLower.includes('owner');
      case 'manager':
        return roleLower.includes('manager');
      case 'male':
        return trainer.gender === 'male' && !isOwnerOrManager;
      case 'female':
        return trainer.gender === 'female' && !isOwnerOrManager;
    }
  });

  return (
    <main className="min-h-screen bg-smoke/30">
      {/* Simple Page Heading */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-warm-white mb-3">
              OUR TRAINERS
            </h1>
            <p className="text-sm lg:text-base text-muted-warm max-w-2xl mx-auto">
              Meet our professional trainers and fitness specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filter Buttons */}
          <TrainerFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTrainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                onViewProfile={() => setSelectedTrainer(trainer)}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredTrainers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-warm text-lg">
                No trainers found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trainer Profile Modal */}
      {selectedTrainer && (
        <TrainerModal
          trainer={selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        />
      )}
    </main>
  );
}
