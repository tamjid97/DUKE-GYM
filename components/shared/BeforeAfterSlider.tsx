'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-gold/20 smoky-fog select-none"
      onMouseMove={handleMove}
      onMouseDown={(e) => { dragging.current = true; updatePosition(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={handleMove}
      onTouchStart={(e) => { dragging.current = true; updatePosition(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After (full) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <span className="absolute bottom-3 right-3 z-10 rounded-full bg-obsidian/70 px-3 py-1 text-xs text-gold backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (position / 100)}%` }}
          loading="lazy"
        />
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-obsidian/70 px-3 py-1 text-xs text-gold backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-obsidian">
          <div className="flex gap-0.5">
            <span className="text-gold text-xs">◀</span>
            <span className="text-gold text-xs">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}
