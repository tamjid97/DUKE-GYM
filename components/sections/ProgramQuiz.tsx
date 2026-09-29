'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { quizQuestions, programs } from '@/data/programs';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { RotateCcw } from 'lucide-react';

export function ProgramQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof programs[0] | null>(null);
  const reduceMotion = useReducedMotion();

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      const goal = newAnswers[0];
      const level = newAnswers[1];
      const freq = newAnswers[2];
      void freq;

      let recommended = programs.find((p) => p.category === goal && p.level === level);
      if (!recommended) {
        recommended = programs.find((p) => p.category === goal);
      }
      if (!recommended) {
        recommended = programs.find((p) => p.category === goal);
      }
      if (!recommended) recommended = programs[0];
      setResult(recommended);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const progress = result ? 1 : (step + 1) / quizQuestions.length;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
          <span>{result ? 'Complete' : `Question ${String(step + 1).padStart(2, '0')} / ${String(quizQuestions.length).padStart(2, '0')}`}</span>
          <span className="text-[#A8A39A]">Find / Fit</span>
        </div>
        <div className="h-px w-full bg-[rgba(212,175,55,0.12)]">
          <div
            className="h-px origin-left bg-gradient-to-r from-[#8C6B2A] via-[#D4AF37] to-[#F1DDA0] transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={step}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.32 }}
          >
            <h3
              className="mb-10 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.15 }}
            >
              {quizQuestions[step].question}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {quizQuestions[step].options.map((opt, i) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="group editorial-card flex min-h-[108px] items-center justify-between gap-4 px-6 py-6 text-left hover:bg-[rgba(212,175,55,0.06)]"
                >
                  <span className="flex items-center gap-5">
                    <span className="font-display text-[12px] text-[rgba(212,175,55,0.45)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-[17px] font-semibold uppercase tracking-[0.12em] text-warm-white transition-colors group-hover:text-[#F1DDA0]">
                      {opt.label}
                    </span>
                  </span>
                  <span className="text-[#D4AF37] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden" style={{ borderRadius: '12px' }}>
              <img src={result.image} alt={result.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.36em] text-[#D4AF37]">Your Duke Program</p>
              <h3 className="mt-3 font-display text-4xl font-bold text-gold-gradient">{result.name}</h3>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[#A8A39A]">Why this fits you</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-warm">{result.description}</p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
                <div className="editorial-card p-3">
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">Duration</span>
                  <span className="text-warm-white">{result.duration}</span>
                </div>
                <div className="editorial-card p-3">
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">Level</span>
                  <span className="text-warm-white">{result.level}</span>
                </div>
                <div className="editorial-card p-3">
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">Frequency</span>
                  <span className="text-warm-white">{result.frequency}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GoldButton
                  href={waLink(`Hello Duke Fitness Club! I took the quiz and got recommended "${result.name}". I'd like to know more.`)}
                  external
                  icon
                  className="rounded-none"
                >
                  View Program
                </GoldButton>
                <GoldButton
                  href={waLink(`Hello Duke Fitness Club! I would like to book a personal trainer for the "${result.name}" program.`)}
                  external
                  variant="secondary"
                  className="rounded-none"
                >
                  Book a Trainer
                </GoldButton>
              </div>
              <button
                onClick={reset}
                className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#A8A39A] transition-colors hover:text-[#D4AF37]"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
