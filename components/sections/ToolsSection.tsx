'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/shared/GlassCard';
import { GoldButton } from '@/components/shared/GoldButton';
import { waLink } from '@/lib/contact';
import { Calculator, Flame, Dumbbell, Target } from 'lucide-react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return;
    const bmi = w / (h * h);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    setResult({ bmi: Math.round(bmi * 10) / 10, category });
  };

  return (
    <GlassCard className="p-6">
      <h3 className="font-display text-lg font-bold text-gold-gradient mb-4">BMI Calculator</h3>
      <div className="space-y-3">
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        <button onClick={calculate} className="btn-gold w-full rounded-full py-2.5 text-sm font-semibold">Calculate</button>
      </div>
      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center">
          <div className="font-display text-3xl text-gold-gradient">{result.bmi}</div>
          <div className="text-sm text-muted-warm mt-1">{result.category}</div>
        </motion.div>
      )}
    </GlassCard>
  );
}

function ProteinCalculator() {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('moderate');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w) return;
    const multipliers: Record<string, number> = { sedentary: 0.8, moderate: 1.4, active: 1.8, athlete: 2.2 };
    setResult(Math.round(w * multipliers[activity]));
  };

  return (
    <GlassCard className="p-6">
      <h3 className="font-display text-lg font-bold text-gold-gradient mb-4">Protein Calculator</h3>
      <div className="space-y-3">
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none">
          <option value="sedentary" className="bg-smoke">Sedentary (0.8g/kg)</option>
          <option value="moderate" className="bg-smoke">Moderate (1.4g/kg)</option>
          <option value="active" className="bg-smoke">Active (1.8g/kg)</option>
          <option value="athlete" className="bg-smoke">Athlete (2.2g/kg)</option>
        </select>
        <button onClick={calculate} className="btn-gold w-full rounded-full py-2.5 text-sm font-semibold">Calculate</button>
      </div>
      {result !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center">
          <div className="font-display text-3xl text-gold-gradient">{result}g</div>
          <div className="text-sm text-muted-warm mt-1">Daily protein target</div>
        </motion.div>
      )}
    </GlassCard>
  );
}

function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height);
    if (!a || !w || !h) return;
    let bmr = gender === 'male' ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
    setResult(Math.round(bmr * 1.55));
  };

  return (
    <GlassCard className="p-6">
      <h3 className="font-display text-lg font-bold text-gold-gradient mb-4">Daily Calorie Calculator</h3>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
          <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        </div>
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none">
          <option value="male" className="bg-smoke">Male</option>
          <option value="female" className="bg-smoke">Female</option>
        </select>
        <button onClick={calculate} className="btn-gold w-full rounded-full py-2.5 text-sm font-semibold">Calculate</button>
      </div>
      {result !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center">
          <div className="font-display text-3xl text-gold-gradient">{result.toLocaleString()}</div>
          <div className="text-sm text-muted-warm mt-1">kcal/day (maintenance)</div>
        </motion.div>
      )}
    </GlassCard>
  );
}

function OneRepMaxCalculator() {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), r = parseInt(reps);
    if (!w || !r) return;
    setResult(Math.round(w * (1 + r / 30)));
  };

  return (
    <GlassCard className="p-6">
      <h3 className="font-display text-lg font-bold text-gold-gradient mb-4">1-Rep Max Calculator</h3>
      <div className="space-y-3">
        <input type="number" placeholder="Weight lifted (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        <input type="number" placeholder="Reps performed" value={reps} onChange={(e) => setReps(e.target.value)} className="w-full rounded-lg border border-gold/20 bg-smoke/50 px-4 py-2.5 text-sm text-warm-white focus:border-gold/50 focus:outline-none" />
        <button onClick={calculate} className="btn-gold w-full rounded-full py-2.5 text-sm font-semibold">Calculate</button>
      </div>
      {result !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center">
          <div className="font-display text-3xl text-gold-gradient">{result} kg</div>
          <div className="text-sm text-muted-warm mt-1">Estimated 1-Rep Max</div>
        </motion.div>
      )}
    </GlassCard>
  );
}

export function ToolsSection() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <BMICalculator />
        <ProteinCalculator />
        <CalorieCalculator />
        <OneRepMaxCalculator />
      </div>
      <div className="mt-12 text-center">
        <div className="glass-card corner-ornament p-8 max-w-2xl mx-auto">
          <Target className="h-10 w-10 text-gold mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold text-gold-gradient mb-2">Your Results, Your Plan</h3>
          <p className="text-sm text-muted-warm mb-6">
            Use these numbers to guide your training and nutrition. For a personalized workout and meal plan, book a session with one of our expert trainers.
          </p>
          <GoldButton href={waLink('Hello Duke Fitness Club! I used your calculators and would like a personalized plan.')} external icon>
            Book a Trainer
          </GoldButton>
        </div>
      </div>
    </div>
  );
}
