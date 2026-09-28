'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function Counter({ target, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, target, motionValue]);

  useEffect(() => {
    return spring.on('change', (val) => {
      setDisplay(Math.floor(val));
    });
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}
