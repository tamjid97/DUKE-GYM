'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { OptionCard } from '@/components/tools/OptionCard';

type ToolId = 'bmi' | 'protein' | 'calorie' | 'onerm';

interface ToolDef {
  id: ToolId;
  label: string;
  sub: string;
  index: string;
  tagline: string;
}

const TOOLS: ToolDef[] = [
  { id: 'bmi', label: 'BMI', sub: 'Body Composition', index: '01', tagline: 'Body Mass Index' },
  { id: 'protein', label: 'Protein', sub: 'Nutrition Target', index: '02', tagline: 'Daily Protein Need' },
  { id: 'calorie', label: 'Calories', sub: 'Energy Balance', index: '03', tagline: 'Daily Maintenance' },
  { id: 'onerm', label: '1-Rep Max', sub: 'Strength Benchmark', index: '04', tagline: 'Estimated Max Lift' },
];

function BMIGauge({ value }: { value: number }) {
  const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));
  const min = 14;
  const max = 38;
  const pct = clamp(((value - min) / (max - min)) * 100, 0, 100);
  const label =
    value < 18.5 ? { t: 'Underweight', c: '#6FA8DC' } :
    value < 25 ? { t: 'Normal', c: '#7BC47F' } :
    value < 30 ? { t: 'Overweight', c: '#E6B98A' } :
    { t: 'Obese', c: '#D46C55' };
  const R = 72;
  const C = 2 * Math.PI * R;
  const offset = C - (pct / 100) * (C * 0.82);
  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-[131deg]">
        <defs>
          <linearGradient id="bmiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C6B2A" />
            <stop offset="50%" stopColor="#F1DDA0" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="10" strokeDasharray={`${C * 0.82} ${C}`} strokeLinecap="round" />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="url(#bmiGrad)"
          strokeWidth="10"
          strokeDasharray={`${C * 0.82} ${C}`}
          strokeLinecap="round"
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: offset, filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-display font-black leading-none"
          style={{
            fontSize: '3.6rem',
            background: 'linear-gradient(135deg, #F1DDA0, #D4AF37 60%, #8C6B2A)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 16px rgba(212,175,55,0.4))',
          }}
        >
          {value.toFixed(1)}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-1 text-[11px] uppercase tracking-[0.3em]"
          style={{ color: label.c }}
        >
          {label.t}
        </motion.div>
      </div>
    </div>
  );
}

function LinearBar({ label, value, max, unit }: { label: string; value: number; max: number; unit: string }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">{label}</span>
        <span className="font-display text-sm text-warm-white">
          {value}
          <span className="ml-1 text-[10px] uppercase tracking-[0.24em] text-[#8E877A]">{unit}</span>
        </span>
      </div>
      <div className="relative h-[4px] w-full bg-[rgba(212,175,55,0.08)]">
        <motion.div
          className="absolute left-0 top-0 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'linear-gradient(90deg, #8C6B2A, #F1DDA0 48%, #D4AF37)',
            boxShadow: '0 0 18px rgba(212,175,55,0.45)',
          }}
        />
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'number',
  suffix,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  placeholder: string;
  type?: string;
  suffix?: string;
}) {
  return (
    <div className="space-y-2.5">
      <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
        <span className="text-xs">●</span>
        {label}
      </label>
      <div className="group relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-[rgba(212,175,55,0.18)] bg-[rgba(10,10,12,0.72)] px-4 py-4 pr-14 text-[15px] text-warm-white transition-all duration-300 focus:border-[rgba(212,175,55,0.55)] focus:bg-[rgba(10,10,12,0.95)] focus:outline-none focus:shadow-[inset_0_0_30px_rgba(212,175,55,0.06)]"
        />
        {suffix && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.24em] text-[#8E877A]">
            {suffix}
          </div>
        )}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[rgba(212,175,55,0.8)] via-[rgba(241,221,160,0.5)] to-transparent transition-all duration-500 group-focus-within:w-full" />
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-2.5">
      <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
        <span className="text-xs">●</span>
        {label}
      </label>
      <div className="group relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-[rgba(212,175,55,0.18)] bg-[rgba(10,10,12,0.72)] px-4 py-4 pr-12 text-[15px] text-warm-white transition-all duration-300 focus:border-[rgba(212,175,55,0.55)] focus:bg-[rgba(10,10,12,0.95)] focus:outline-none"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-[#0A0A0C]">{o.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8E877A]">▾</div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[rgba(212,175,55,0.8)] via-[rgba(241,221,160,0.5)] to-transparent transition-all duration-500 group-focus-within:w-full" />
      </div>
    </div>
  );
}

function SegmentedSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-2.5">
      <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
        <span className="text-xs">●</span>
        {label}
      </label>
      <div className="grid gap-2 border border-[rgba(212,175,55,0.18)] p-1.5 bg-[rgba(10,10,12,0.5)] sm:grid-cols-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              onClick={() => onChange(o.value)}
              className={`relative px-3 py-2.5 text-xs transition-all duration-300 ${
                active
                  ? 'bg-[rgba(212,175,55,0.1)] text-[#F1DDA0] shadow-[inset_0_0_22px_rgba(212,175,55,0.08)]'
                  : 'text-[#A8A39A] hover:text-warm-white'
              }`}
              style={active ? { boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.42)' } : undefined}
            >
              {o.label}
              {active && <span className="absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#D4AF37]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="group btn-gold relative inline-flex w-full items-center justify-center gap-3 overflow-hidden px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em]"
      style={{ borderRadius: 0, minHeight: '56px' }}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <span className="text-xs">→</span>
      </span>
      <span
        aria-hidden
        className="absolute inset-y-0 -left-full w-1/3 -skew-x-12 opacity-60 transition-all duration-700 group-hover:left-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(241,221,160,0.45), transparent)' }}
      />
    </button>
  );
}

export function ToolsCalculators() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<ToolId>('bmi');

  const [bmiState, setBmiState] = useState({ 
    w: '', 
    h: '', 
    hUnit: 'cm' as 'cm' | 'ftin',
    feet: '',
    inches: '',
    age: '', 
    gender: 'male' as 'male' | 'female',
    result: null as null | { bmi: number; category: string },
    error: '' as string
  });
  
  const [pState, setPState] = useState({ 
    w: '', 
    h: '', 
    hUnit: 'cm' as 'cm' | 'ftin',
    feet: '',
    inches: '',
    age: '', 
    gender: 'male' as 'male' | 'female',
    fitnessGoal: 'general' as 'general' | 'muscle' | 'fatloss' | 'strength',
    activityLevel: 'low' as 'low' | 'moderate' | 'active' | 'veryactive',
    result: null as null | { protein: number; range: string },
    error: '' as string
  });
  
  const [cState, setCState] = useState({ age: '', w: '', h: '', gender: 'male' as 'male' | 'female', result: null as null | number });
  const [oState, setOState] = useState({ w: '', reps: '', result: null as null | number });

  const calcBMI = () => {
    const w = parseFloat(bmiState.w);
    let h = 0;
    
    if (bmiState.hUnit === 'cm') {
      h = parseFloat(bmiState.h) / 100;
    } else {
      const feet = parseFloat(bmiState.feet) || 0;
      const inches = parseFloat(bmiState.inches) || 0;
      h = (feet * 12 + inches) * 0.0254;
    }
    
    if (!w) {
      setBmiState({ ...bmiState, error: 'Please enter your weight.' });
      return;
    }
    if (!h || h <= 0) {
      setBmiState({ ...bmiState, error: 'Please enter your height.' });
      return;
    }
    
    setBmiState({ ...bmiState, error: '' });
    const bmi = w / (h * h);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    setBmiState({ ...bmiState, result: { bmi: Math.round(bmi * 10) / 10, category } });
  };

  const calcProtein = () => {
    const w = parseFloat(pState.w);
    
    if (!w) {
      setPState({ ...pState, error: 'Please enter your weight.' });
      return;
    }
    
    setPState({ ...pState, error: '' });
    
    // Protein multipliers based on fitness goal
    const goalMultipliers: Record<string, number> = { 
      general: 1.2, 
      muscle: 1.8, 
      fatloss: 1.6, 
      strength: 2.0 
    };
    
    // Activity level adjustment
    const activityMultipliers: Record<string, number> = { 
      low: 0.9, 
      moderate: 1.0, 
      active: 1.1, 
      veryactive: 1.2 
    };
    
    const baseProtein = w * goalMultipliers[pState.fitnessGoal];
    const adjustedProtein = baseProtein * activityMultipliers[pState.activityLevel];
    const finalProtein = Math.round(adjustedProtein);
    
    // Calculate range
    const minProtein = Math.round(finalProtein * 0.85);
    const maxProtein = Math.round(finalProtein * 1.15);
    
    setPState({ ...pState, result: { protein: finalProtein, range: `${minProtein}–${maxProtein}` } });
  };

  const calcCalories = () => {
    const a = parseFloat(cState.age);
    const w = parseFloat(cState.w);
    const h = parseFloat(cState.h);
    if (!a || !w || !h) return;
    const bmr = cState.gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    setCState({ ...cState, result: Math.round(bmr * 1.55) });
  };

  const calc1RM = () => {
    const w = parseFloat(oState.w);
    const r = parseInt(oState.reps);
    if (!w || !r) return;
    setOState({ ...oState, result: Math.round(w * (1 + r / 30)) });
  };

  const activeTool = TOOLS.find((t) => t.id === active)!;

  const hasAnyResult =
    bmiState.result !== null ||
    pState.result !== null ||
    cState.result !== null ||
    oState.result !== null;

  return (
    <section id="instruments" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute left-0 top-0 h-full w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.15), transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.15), transparent)' }} />

      <div className="relative mx-auto w-full px-6 lg:px-16" style={{ maxWidth: '1600px' }}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
              <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#D4AF37]">
                Performance Instruments
              </span>
            </div>
            <h2
              className="mt-6 font-display font-bold text-warm-white"
              style={{ fontSize: 'clamp(44px, 5.8vw, 92px)', lineHeight: 0.94 }}
            >
              SELECT YOUR
              <br />
              <span className="text-gold-gradient">INSTRUMENT.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
            Four precise benchmarks — used by our elite coaching team to baseline, measure and
            progress every member. Your data stays on your device — nothing is stored.
          </p>
        </motion.div>

        <motion.nav
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mb-14 grid grid-cols-2 gap-px border border-[rgba(212,175,55,0.15)] bg-[rgba(212,175,55,0.15)] lg:grid-cols-4"
        >
          {TOOLS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`group relative flex items-center gap-4 px-5 py-5 text-left transition-all duration-400 ${
                  isActive ? 'bg-[rgba(10,10,12,1)]' : 'bg-[rgba(10,10,12,0.55)] hover:bg-[rgba(10,10,12,0.82)]'
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-400 ${
                    isActive
                      ? 'border-[rgba(212,175,55,0.55)] bg-[rgba(212,175,55,0.08)]'
                      : 'border-[rgba(212,175,55,0.18)] bg-transparent group-hover:border-[rgba(212,175,55,0.35)]'
                  }`}
                >
                  <span className={`text-xl ${isActive ? 'text-[#F1DDA0]' : 'text-[#A8A39A] group-hover:text-warm-white'}`}>
                    {t.index}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className={`text-[10px] uppercase tracking-[0.28em] transition-colors ${isActive ? 'text-[#D4AF37]' : 'text-[#5E574D]'}`}>
                    {t.index} · {t.sub}
                  </div>
                  <div
                    className={`mt-0.5 truncate font-display font-semibold transition-colors ${
                      isActive ? 'text-gold-gradient' : 'text-warm-white'
                    }`}
                    style={{ fontSize: '1.05rem' }}
                  >
                    {t.label}
                  </div>
                </div>
                {isActive && (
                  <span
                    className="absolute left-0 top-0 h-px w-full"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, rgba(241,221,160,0.55), transparent)' }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="tool-active-pill"
                    className="absolute right-5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#D4AF37]"
                    style={{ boxShadow: '0 0 12px rgba(212,175,55,0.8)' }}
                  />
                )}
              </button>
            );
          })}
        </motion.nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative border border-[rgba(212,175,55,0.15)]"
            style={{ background: 'linear-gradient(180deg, rgba(14,14,16,0.94), rgba(10,10,12,0.96))' }}
          >
            <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)' }} />

            <div className="grid grid-cols-1 lg:grid-cols-[11fr_9fr]">
              <div className="relative border-b border-[rgba(212,175,55,0.1)] p-8 lg:border-b-0 lg:border-r lg:p-12 lg:px-14 lg:py-12">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)' }}
                />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#D4AF37]">Instrument {activeTool.index}</span>
                    <span className="text-[#D4AF37] opacity-45">◆</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E877A]">{activeTool.tagline}</span>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-6">
                    <h3
                      className="font-display font-bold leading-none text-warm-white"
                      style={{ fontSize: 'clamp(36px, 4vw, 62px)' }}
                    >
                      {activeTool.label}
                      <span className="mt-2 block text-[13px] font-medium uppercase tracking-[0.28em] text-[#8E877A]">
                        {activeTool.sub}
                      </span>
                    </h3>
                  </div>

                  <div className="mt-10 space-y-8">
                    {active === 'bmi' && (
                      <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                          <Input label="Weight" placeholder="Enter your weight" value={bmiState.w} onChange={(s) => setBmiState({ ...bmiState, w: s, error: '' })} suffix="kg" />
                          <div className="space-y-2.5">
                            <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                              <span className="text-xs">●</span>
                              Height Unit
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                onClick={() => setBmiState({ ...bmiState, hUnit: 'cm', error: '' })}
                                className={`px-4 py-3 text-sm transition-all ${
                                  bmiState.hUnit === 'cm'
                                    ? 'bg-[rgba(212,175,55,0.1)] text-[#F1DDA0] border border-[rgba(212,175,55,0.5)]'
                                    : 'bg-[rgba(10,10,12,0.5)] text-[#A8A39A] border border-[rgba(212,175,55,0.18)] hover:border-[rgba(212,175,55,0.35)]'
                                }`}
                              >
                                CM
                              </button>
                              <button
                                onClick={() => setBmiState({ ...bmiState, hUnit: 'ftin', error: '' })}
                                className={`px-4 py-3 text-sm transition-all ${
                                  bmiState.hUnit === 'ftin'
                                    ? 'bg-[rgba(212,175,55,0.1)] text-[#F1DDA0] border border-[rgba(212,175,55,0.5)]'
                                    : 'bg-[rgba(10,10,12,0.5)] text-[#A8A39A] border border-[rgba(212,175,55,0.18)] hover:border-[rgba(212,175,55,0.35)]'
                                }`}
                              >
                                FT/IN
                              </button>
                            </div>
                          </div>
                          <Input label="Age" placeholder="Enter your age" value={bmiState.age} onChange={(s) => setBmiState({ ...bmiState, age: s, error: '' })} suffix="yrs" />
                        </div>
                        {bmiState.hUnit === 'cm' ? (
                          <div className="grid grid-cols-1 gap-6">
                            <Input label="Height" placeholder="Enter your height" value={bmiState.h} onChange={(s) => setBmiState({ ...bmiState, h: s, error: '' })} suffix="cm" />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-6">
                            <Input label="Feet" placeholder="e.g., 5" value={bmiState.feet} onChange={(s) => setBmiState({ ...bmiState, feet: s, error: '' })} suffix="ft" />
                            <Input label="Inches" placeholder="e.g., 10" value={bmiState.inches} onChange={(s) => setBmiState({ ...bmiState, inches: s, error: '' })} suffix="in" />
                          </div>
                        )}
                        {bmiState.error && (
                          <div className="text-sm text-red-400">{bmiState.error}</div>
                        )}
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                            <span className="text-xs">●</span>
                            Gender
                          </label>
                          <div className="grid grid-cols-2 gap-4">
                            <OptionCard
                              label="MALE"
                              selected={bmiState.gender === 'male'}
                              onClick={() => setBmiState({ ...bmiState, gender: 'male' })}
                            />
                            <OptionCard
                              label="FEMALE"
                              selected={bmiState.gender === 'female'}
                              onClick={() => setBmiState({ ...bmiState, gender: 'female' })}
                            />
                          </div>
                        </div>
                        <PrimaryButton onClick={calcBMI}>CALCULATE MY BMI →</PrimaryButton>
                      </>
                    )}
                    {active === 'protein' && (
                      <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                          <Input label="Weight" placeholder="Enter your weight" value={pState.w} onChange={(s) => setPState({ ...pState, w: s, error: '' })} suffix="kg" />
                          <div className="space-y-2.5">
                            <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                              <span className="text-xs">●</span>
                              Height Unit
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                onClick={() => setPState({ ...pState, hUnit: 'cm', error: '' })}
                                className={`px-4 py-3 text-sm transition-all ${
                                  pState.hUnit === 'cm'
                                    ? 'bg-[rgba(212,175,55,0.1)] text-[#F1DDA0] border border-[rgba(212,175,55,0.5)]'
                                    : 'bg-[rgba(10,10,12,0.5)] text-[#A8A39A] border border-[rgba(212,175,55,0.18)] hover:border-[rgba(212,175,55,0.35)]'
                                }`}
                              >
                                CM
                              </button>
                              <button
                                onClick={() => setPState({ ...pState, hUnit: 'ftin', error: '' })}
                                className={`px-4 py-3 text-sm transition-all ${
                                  pState.hUnit === 'ftin'
                                    ? 'bg-[rgba(212,175,55,0.1)] text-[#F1DDA0] border border-[rgba(212,175,55,0.5)]'
                                    : 'bg-[rgba(10,10,12,0.5)] text-[#A8A39A] border border-[rgba(212,175,55,0.18)] hover:border-[rgba(212,175,55,0.35)]'
                                }`}
                              >
                                FT/IN
                              </button>
                            </div>
                          </div>
                          <Input label="Age" placeholder="Enter your age" value={pState.age} onChange={(s) => setPState({ ...pState, age: s, error: '' })} suffix="yrs" />
                        </div>
                        {pState.hUnit === 'cm' ? (
                          <div className="grid grid-cols-1 gap-6">
                            <Input label="Height" placeholder="Enter your height" value={pState.h} onChange={(s) => setPState({ ...pState, h: s, error: '' })} suffix="cm" />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-6">
                            <Input label="Feet" placeholder="e.g., 5" value={pState.feet} onChange={(s) => setPState({ ...pState, feet: s, error: '' })} suffix="ft" />
                            <Input label="Inches" placeholder="e.g., 10" value={pState.inches} onChange={(s) => setPState({ ...pState, inches: s, error: '' })} suffix="in" />
                          </div>
                        )}
                        {pState.error && (
                          <div className="text-sm text-red-400">{pState.error}</div>
                        )}
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                            <span className="text-xs">●</span>
                            Gender
                          </label>
                          <div className="grid grid-cols-2 gap-4">
                            <OptionCard
                              label="MALE"
                              selected={pState.gender === 'male'}
                              onClick={() => setPState({ ...pState, gender: 'male' })}
                            />
                            <OptionCard
                              label="FEMALE"
                              selected={pState.gender === 'female'}
                              onClick={() => setPState({ ...pState, gender: 'female' })}
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                            <span className="text-xs">●</span>
                            Fitness Goal
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <OptionCard
                              label="GENERAL FITNESS"
                              description="Maintain weight & overall health"
                              selected={pState.fitnessGoal === 'general'}
                              onClick={() => setPState({ ...pState, fitnessGoal: 'general' })}
                            />
                            <OptionCard
                              label="MUSCLE GAIN"
                              description="Build lean muscle mass"
                              selected={pState.fitnessGoal === 'muscle'}
                              onClick={() => setPState({ ...pState, fitnessGoal: 'muscle' })}
                            />
                            <OptionCard
                              label="FAT LOSS"
                              description="Preserve muscle while cutting fat"
                              selected={pState.fitnessGoal === 'fatloss'}
                              onClick={() => setPState({ ...pState, fitnessGoal: 'fatloss' })}
                            />
                            <OptionCard
                              label="STRENGTH TRAINING"
                              description="Maximize strength & power output"
                              selected={pState.fitnessGoal === 'strength'}
                              onClick={() => setPState({ ...pState, fitnessGoal: 'strength' })}
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-[#D4AF37]">
                            <span className="text-xs">●</span>
                            Activity Level
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <OptionCard
                              label="LOW"
                              description="Sedentary or light daily activity"
                              selected={pState.activityLevel === 'low'}
                              onClick={() => setPState({ ...pState, activityLevel: 'low' })}
                            />
                            <OptionCard
                              label="MODERATE"
                              description="3–4 workouts / active routines per week"
                              selected={pState.activityLevel === 'moderate'}
                              onClick={() => setPState({ ...pState, activityLevel: 'moderate' })}
                            />
                            <OptionCard
                              label="ACTIVE"
                              description="5+ intense workouts per week"
                              selected={pState.activityLevel === 'active'}
                              onClick={() => setPState({ ...pState, activityLevel: 'active' })}
                            />
                            <OptionCard
                              label="VERY ACTIVE"
                              description="Daily heavy training or physically active job"
                              selected={pState.activityLevel === 'veryactive'}
                              onClick={() => setPState({ ...pState, activityLevel: 'veryactive' })}
                            />
                          </div>
                        </div>
                        <PrimaryButton onClick={calcProtein}>CALCULATE MY PROTEIN →</PrimaryButton>
                      </>
                    )}
                    {active === 'calorie' && (
                      <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Input label="Age" placeholder="Years" value={cState.age} onChange={(s) => setCState({ ...cState, age: s })} suffix="yrs" />
                          <Input label="Weight" placeholder="kg" value={cState.w} onChange={(s) => setCState({ ...cState, w: s })} suffix="kg" />
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Input label="Height" placeholder="cm" value={cState.h} onChange={(s) => setCState({ ...cState, h: s })} suffix="cm" />
                          <SegmentedSelect
                            label="Gender"
                            value={cState.gender}
                            onChange={(s) => setCState({ ...cState, gender: s })}
                            options={[
                              { value: 'male', label: 'Male' },
                              { value: 'female', label: 'Female' },
                            ]}
                          />
                        </div>
                        <PrimaryButton onClick={calcCalories}>CALCULATE MY CALORIES →</PrimaryButton>
                      </>
                    )}
                    {active === 'onerm' && (
                      <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <Input label="Weight Lifted" placeholder="kg" value={oState.w} onChange={(s) => setOState({ ...oState, w: s })} suffix="kg" />
                          <Input label="Reps Performed" placeholder="reps" value={oState.reps} onChange={(s) => setOState({ ...oState, reps: s })} suffix="reps" />
                        </div>
                        <PrimaryButton onClick={calc1RM}>CALCULATE MY 1-REP MAX →</PrimaryButton>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col p-8 lg:p-12 lg:px-14 lg:py-12">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.12), transparent 70%)', filter: 'blur(40px)' }} />
                </div>
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">Live Reading</span>
                    <span className="text-[#D4AF37] opacity-45">◆</span>
                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#8E877A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      Active
                    </span>
                  </div>

                  <div className="mt-10 flex flex-1 items-center justify-center">
                    <AnimatePresence mode="wait">
                      {active === 'bmi' && bmiState.result ? (
                        <motion.div
                          key="bmi-result"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full"
                        >
                          <BMIGauge value={bmiState.result.bmi} />
                          <div className="mt-8 space-y-4">
                            <LinearBar label="Underweight" value={bmiState.result.bmi < 18.5 ? bmiState.result.bmi : 18.5 * 0.8} max={18.5} unit="BMI" />
                            <LinearBar label="Target range (18.5 – 24.9)" value={bmiState.result.bmi} max={30} unit="BMI" />
                            <LinearBar label="Classified" value={bmiState.result.bmi} max={38} unit="class" />
                          </div>
                          <div className="mt-6 p-4 border border-gold/20 rounded-lg" style={{ background: 'rgba(212,175,55,0.05)' }}>
                            <p className="text-xs text-muted-warm leading-relaxed">
                              Your BMI is a general screening measurement and does not account for muscle mass, body composition or other individual factors.
                            </p>
                          </div>
                        </motion.div>
                      ) : active === 'protein' && pState.result !== null ? (
                        <motion.div
                          key="p-result"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full text-center"
                        >
                          <div className="text-[11px] uppercase tracking-[0.32em] text-[#8E877A] mb-4">YOUR DAILY PROTEIN TARGET</div>
                          <div
                            className="font-display font-black leading-none"
                            style={{
                              fontSize: 'clamp(72px, 9vw, 128px)',
                              background: 'linear-gradient(135deg, #F1DDA0, #D4AF37 60%, #8C6B2A)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              filter: 'drop-shadow(0 4px 24px rgba(212,175,55,0.38))',
                            }}
                          >
                            {pState.result.protein}
                            <span className="ml-2 align-top text-[0.25em] font-semibold text-[#A8A39A]" style={{ WebkitTextFillColor: '#A8A39A' }}>g</span>
                          </div>
                          <div className="mt-4 text-sm text-[#8E877A]">Recommended range: {pState.result.range} g/day</div>
                        </motion.div>
                      ) : active === 'calorie' && cState.result !== null ? (
                        <motion.div
                          key="c-result"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full text-center"
                        >
                          <div
                            className="font-display font-black leading-none"
                            style={{
                              fontSize: 'clamp(62px, 8vw, 118px)',
                              background: 'linear-gradient(135deg, #F1DDA0, #D4AF37 60%, #8C6B2A)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              filter: 'drop-shadow(0 4px 24px rgba(212,175,55,0.38))',
                            }}
                          >
                            {cState.result.toLocaleString()}
                          </div>
                          <div className="mt-4 text-[11px] uppercase tracking-[0.32em] text-[#8E877A]">kcal / day · Maintenance</div>
                          <div className="mt-10 space-y-5">
                            <LinearBar label="Lose fat · −20%" value={Math.round(cState.result * 0.8)} max={Math.round(cState.result * 1.2)} unit="kcal" />
                            <LinearBar label="Maintain" value={cState.result} max={Math.round(cState.result * 1.2)} unit="kcal" />
                            <LinearBar label="Build · +15%" value={Math.round(cState.result * 1.15)} max={Math.round(cState.result * 1.2)} unit="kcal" />
                          </div>
                        </motion.div>
                      ) : active === 'onerm' && oState.result !== null ? (
                        <motion.div
                          key="o-result"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full text-center"
                        >
                          <div
                            className="font-display font-black leading-none"
                            style={{
                              fontSize: 'clamp(72px, 9vw, 128px)',
                              background: 'linear-gradient(135deg, #F1DDA0, #D4AF37 60%, #8C6B2A)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              filter: 'drop-shadow(0 4px 24px rgba(212,175,55,0.38))',
                            }}
                          >
                            {oState.result}
                            <span className="ml-3 align-top text-[0.22em] font-semibold text-[#A8A39A]" style={{ WebkitTextFillColor: '#A8A39A' }}>kg</span>
                          </div>
                          <div className="mt-4 text-[11px] uppercase tracking-[0.32em] text-[#8E877A]">Estimated 1-Rep Max · Epley formula</div>
                          <div className="mt-10 space-y-5">
                            <LinearBar label="Working set · 75%" value={Math.round(oState.result * 0.75)} max={Math.round(oState.result * 1.05)} unit="kg" />
                            <LinearBar label="Est. 1RM" value={oState.result} max={Math.round(oState.result * 1.05)} unit="kg" />
                            <LinearBar label="3RM · 93%" value={Math.round(oState.result * 0.93)} max={Math.round(oState.result * 1.05)} unit="kg" />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`${active}-empty`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center gap-5 text-center"
                        >
                          <div
                            className="flex h-24 w-24 items-center justify-center border border-[rgba(212,175,55,0.2)]"
                            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07), transparent 70%)' }}
                          >
                            <span className="text-4xl text-[#D4AF37]">◉</span>
                          </div>
                          <div>
                            <div className="font-display text-2xl font-semibold text-warm-white">
                              Awaiting Data
                            </div>
                            <p className="mx-auto mt-3 max-w-xs text-sm text-[#B6B0A5]">
                              Enter your details on the left and run your first assessment.
                              Your reading will appear here instantly.
                            </p>
                          </div>
                          <div className="h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)' }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mt-20 border border-[rgba(212,175,55,0.16)] p-10 lg:mt-24 lg:p-14"
          style={{ background: 'linear-gradient(180deg, rgba(14,14,16,0.86), rgba(8,8,9,0.96))' }}
        >
          <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)' }} />
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#D4AF37]">◆</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">Your Results · Your Plan</span>
              </div>
              <h3
                className="mt-5 font-display font-bold text-warm-white"
                style={{ fontSize: 'clamp(34px, 4.4vw, 66px)', lineHeight: 0.96 }}
              >
                NUMBERS ARE THE
                <br />
                <span className="text-gold-gradient">BEGINNING.</span>
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-[#B6B0A5] lg:text-[15px]">
                These instruments give you a calibrated starting point — the map. A Duke trainer writes the
                route: exercise selection, loading, nutrition structure, weekly cadence. Pair your readings
                with 1:1 coaching for a program that is actually yours.
              </p>
              {hasAnyResult && (
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.3em] text-[#8E877A]">
                  {bmiState.result && (
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-[#D4AF37]">●</span>
                      BMI <span className="text-gold-gradient">{bmiState.result.bmi}</span> · {bmiState.result.category}
                    </span>
                  )}
                  {pState.result !== null && (
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-[#D4AF37]">●</span>
                      Protein <span className="text-gold-gradient">{pState.result.protein}g</span> / day
                    </span>
                  )}
                  {cState.result !== null && (
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-[#D4AF37]">●</span>
                      {cState.result.toLocaleString()} <span className="text-gold-gradient">kcal</span>
                    </span>
                  )}
                  {oState.result !== null && (
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-[#D4AF37]">●</span>
                      1RM <span className="text-gold-gradient">{oState.result}kg</span>
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col items-stretch gap-4 lg:min-w-[280px]">
              <a
                href="https://wa.me/8801608044682?text=Hello%20Duke%20Fitness%20Club!%20I%20used%20the%20Performance%20Lab%20calculators%20and%20would%20like%20a%20personalized%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ borderRadius: 0 }}
              >
                Book a Personal Trainer
              </a>
              <a
                href="/membership"
                className="group inline-flex items-center justify-center gap-2 border border-[rgba(212,175,55,0.4)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(212,175,55,0.07)]"
              >
                View Membership Plans
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
