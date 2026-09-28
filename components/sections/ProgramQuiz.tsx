'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, programs } from '@/data/programs';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { ArrowRight, RotateCcw } from 'lucide-react';

export function ProgramQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof programs[0] | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // Determine recommendation
      const goal = newAnswers[0];
      const level = newAnswers[1];
      const freq = newAnswers[2];

      let recommended = programs.find((p) => p.category === goal && p.level === level);
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

  return (
    <div className="glass-card corner-ornament p-8 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              {quizQuestions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-gold' : 'bg-smoke'}`}
                />
              ))}
            </div>
            <p className="text-xs text-gold tracking-widest uppercase mb-2">
              Question {step + 1} of {quizQuestions.length}
            </p>
            <h3 className="font-display text-2xl font-bold text-warm-white mb-6">
              {quizQuestions[step].question}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {quizQuestions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="rounded-lg border border-gold/20 p-4 text-left text-sm text-warm-white transition-all hover:border-gold/60 hover:bg-gold/5"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-xs text-gold tracking-widest uppercase mb-2">Your Recommended Program</p>
            <h3 className="font-display text-3xl font-bold text-gold-gradient mb-3">{result.name}</h3>
            <p className="text-sm text-muted-warm mb-6">{result.description}</p>
            <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
              <div className="glass-card p-3"><span className="text-gold text-xs block">Duration</span><span className="text-warm-white">{result.duration}</span></div>
              <div className="glass-card p-3"><span className="text-gold text-xs block">Level</span><span className="text-warm-white">{result.level}</span></div>
              <div className="glass-card p-3"><span className="text-gold text-xs block">Frequency</span><span className="text-warm-white">{result.frequency}</span></div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <GoldButton href={waLink(`Hello Duke Fitness Club! I took the quiz and got recommended "${result.name}". I'd like to know more.`)} external icon>
                Book This Program
              </GoldButton>
              <button onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm text-gold hover:bg-gold/10 transition-colors">
                <RotateCcw className="h-4 w-4" /> Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
