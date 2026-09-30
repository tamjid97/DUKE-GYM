'use client';

import { useState, useRef } from 'react';
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { siteConfig, type ZoneKey } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';
import { cn } from '@/lib/utils';

const zoneTextures: Record<ZoneKey, string> = {
  gym: 'dumbbell',
  restaurant: 'plate',
  pool: 'wave',
  arena: 'cue',
};

export function BuildingMap() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<ZoneKey | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D tilt effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const zones = Object.entries(siteConfig.zones) as [ZoneKey, typeof siteConfig.zones[ZoneKey]][];

  const getZonePattern = (zone: ZoneKey) => {
    switch (zone) {
      case 'gym':
        return (
          <pattern id="gym-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M10 2 L12 10 L20 10 L14 16 L16 24 L10 18 L4 24 L6 16 L0 10 L8 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        );
      case 'restaurant':
        return (
          <pattern id="restaurant-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        );
      case 'pool':
        return (
          <pattern id="pool-pattern" patternUnits="userSpaceOnUse" width="30" height="15">
            <path d="M0 7.5 Q7.5 0 15 7.5 T30 7.5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        );
      case 'arena':
        return (
          <pattern id="arena-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
            <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.1" />
          </pattern>
        );
    }
  };

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blueprint grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, var(--accent-500) 1px, transparent 1px),
              linear-gradient(var(--accent-500) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Radial gold glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent-500) 8%, transparent) 0%, transparent 60%)',
          }}
        />
        
        {/* Smoky fog texture */}
        <div className="absolute inset-0 fog-drift opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Lion watermark */}
        <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none" style={{ color: 'var(--accent-500)' }}>
          <svg width="300" height="300" viewBox="0 0 120 120" fill="currentColor">
            <path d="M60 15 L75 25 L85 20 L80 38 L95 42 L85 55 L92 70 L75 68 L70 85 L60 78 L50 85 L45 68 L28 70 L35 55 L25 42 L40 38 L35 20 L45 25 Z" />
          </svg>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* SVG floor plan with 3D tilt */}
        <div className="flex-1 perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: 'preserve-3d',
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--smoke) 70%, transparent), color-mix(in srgb, var(--obsidian) 90%, transparent))',
              boxShadow: '0 25px 50px -12px color-mix(in srgb, var(--accent-500) 15%, transparent), 0 0 40px color-mix(in srgb, var(--accent-500) 8%, transparent)',
            }}
            className="relative p-8 rounded-2xl border-accent-gradient"
          >
            {/* Inner shadow for depth */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 2px 10px color-mix(in srgb, var(--obsidian) 50%, transparent)',
              }}
            />

            {/* Refined corner ornaments */}
            <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none" style={{ color: 'var(--accent-500)' }}>
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: 'currentColor' }} />
              <div className="absolute top-1 left-1 w-2 h-2 bg-[currentColor] transform rotate-45" />
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none" style={{ color: 'var(--accent-500)' }}>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: 'currentColor' }} />
              <div className="absolute top-1 right-1 w-2 h-2 bg-[currentColor] transform rotate-45" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 pointer-events-none" style={{ color: 'var(--accent-500)' }}>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: 'currentColor' }} />
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-[currentColor] transform rotate-45" />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none" style={{ color: 'var(--accent-500)' }}>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: 'currentColor' }} />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-[currentColor] transform rotate-45" />
            </div>

            <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" style={{ color: 'var(--accent-500)' }}>
              <defs>
                {zones.map(([key]) => (
                  <React.Fragment key={key}>{getZonePattern(key)}</React.Fragment>
                ))}
              </defs>

              {/* Building outline */}
              <rect x="20" y="20" width="360" height="260" rx="8" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="var(--panel)" />
              <text x="200" y="15" textAnchor="middle" fill="var(--muted-warm)" fontSize="10" fontFamily="serif" letterSpacing="2">DUKE FITNESS CLUB</text>

              {/* Floor dividers */}
              <line x1="20" y1="85" x2="380" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.15" />
              <line x1="20" y1="150" x2="380" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.15" />
              <line x1="20" y1="215" x2="380" y2="215" stroke="currentColor" strokeWidth="1" opacity="0.15" />
              <line x1="200" y1="20" x2="200" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.15" />

              {/* Floor labels */}
              <text x="25" y="80" fill="var(--muted-warm)" fontSize="7" letterSpacing="1">3F</text>
              <text x="25" y="145" fill="var(--muted-warm)" fontSize="7" letterSpacing="1">2F</text>
              <text x="25" y="210" fill="var(--muted-warm)" fontSize="7" letterSpacing="1">GF</text>

              {/* Zone rectangles with patterns */}
              {zones.map(([key, zone], i) => {
                const positions: Record<ZoneKey, { x: number; y: number; w: number; h: number }> = {
                  gym: { x: 210, y: 25, w: 160, h: 55 },
                  restaurant: { x: 25, y: 25, w: 170, h: 55 },
                  pool: { x: 25, y: 90, w: 350, h: 55 },
                  arena: { x: 25, y: 155, w: 350, h: 55 },
                };
                const pos = positions[key];
                const isActive = active === key;
                return (
                  <g key={key} onMouseEnter={() => setActive(key)} onMouseLeave={() => setActive(null)} onClick={() => setActive(key)} style={{ cursor: 'pointer' }}>
                    {/* Pattern background */}
                    <rect
                      x={pos.x}
                      y={pos.y}
                      width={pos.w}
                      height={pos.h}
                      rx="4"
                      fill={`url(#${key}-pattern)`}
                      opacity={isActive ? 0.3 : 0.1}
                    />
                    {/* Zone rectangle */}
                    <rect
                      x={pos.x}
                      y={pos.y}
                      width={pos.w}
                      height={pos.h}
                      rx="4"
                      fill={isActive ? 'currentColor' : 'var(--panel)'}
                      fillOpacity={isActive ? 0.15 : 0.8}
                      stroke="currentColor"
                      strokeWidth={isActive ? 2 : 1}
                      strokeOpacity={isActive ? 1 : 0.3}
                      className="transition-all duration-300"
                    />
                    {/* Glow effect on active */}
                    {isActive && (
                      <rect
                        x={pos.x - 2}
                        y={pos.y - 2}
                        width={pos.w + 4}
                        height={pos.h + 4}
                        rx="6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                        filter="blur(4px)"
                      />
                    )}
                    <text x={pos.x + pos.w / 2} y={pos.y + pos.h / 2 - 5} textAnchor="middle" fill={isActive ? 'currentColor' : 'var(--warm-white)'} fontSize="11" fontWeight="bold" fontFamily="serif" className="transition-colors duration-300">
                      {zone.title}
                    </text>
                    <text x={pos.x + pos.w / 2} y={pos.y + pos.h / 2 + 10} textAnchor="middle" fill="var(--muted-warm)" fontSize="7" letterSpacing="1">
                      {lang === 'bn' ? zone.floorBn : zone.floor}
                    </text>
                  </g>
                );
              })}

              {/* Lift with refined icon */}
              <g>
                <rect x="185" y="90" width="15" height="15" fill="var(--panel)" stroke="currentColor" strokeWidth="1" opacity="0.5" rx="2" />
                <path d="M189 98 L192 95 L195 98" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M189 100 L192 103 L195 100" stroke="currentColor" strokeWidth="1" fill="none" />
                <text x="192" y="112" textAnchor="middle" fill="var(--muted-warm)" fontSize="5" letterSpacing="1">LIFT</text>
              </g>

              {/* Entrance with pulsing glow */}
              <g>
                <motion.rect
                  x="185"
                  y="225"
                  width="30"
                  height="10"
                  fill="currentColor"
                  opacity={0.3}
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  rx="2"
                />
                <motion.rect
                  x="185"
                  y="225"
                  width="30"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity={0.5}
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  rx="2"
                />
                <path d="M197 242 L200 245 L203 242" stroke="currentColor" strokeWidth="1" fill="none" />
                <text x="200" y="255" textAnchor="middle" fill="currentColor" fontSize="6" letterSpacing="1" fontWeight="bold">ENTRANCE</text>
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Active zone info */}
        <div className="flex-1 lg:max-w-sm">
          <motion.div
            key={active || 'none'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--smoke) 70%, transparent), color-mix(in srgb, var(--obsidian) 90%, transparent))',
              border: '1px solid transparent',
              boxShadow: '0 10px 30px color-mix(in srgb, var(--accent-500) 10%, transparent)',
            }}
          >
            {/* Gradient border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, var(--accent-deep), var(--accent-primary), var(--accent-highlight))',
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
              }}
            />

            <div className="relative z-10">
              {active ? (
                <div>
                  <motion.h3
                    className="font-display text-xl font-bold text-accent-gradient mb-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {siteConfig.zones[active].title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-warm mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {siteConfig.zones[active].tagline}
                  </motion.p>
                  <motion.p
                    className="text-sm text-warm-white mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {siteConfig.zones[active].description}
                  </motion.p>
                  <motion.div
                    className="space-y-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-gold font-semibold min-w-[60px]">{t.floor}:</span>
                      <span className="text-muted-warm">{lang === 'bn' ? siteConfig.zones[active].floorBn : siteConfig.zones[active].floor}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gold font-semibold min-w-[60px]">{t.direction}:</span>
                      <span className="text-muted-warm">{lang === 'bn' ? siteConfig.zones[active].directionBn : siteConfig.zones[active].direction}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gold font-semibold min-w-[60px]">{t.openingHours}:</span>
                      <span className="text-muted-warm">{lang === 'bn' ? siteConfig.zones[active].hoursBn : siteConfig.zones[active].hours}</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="mt-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <GoldButton href={`/${siteConfig.zones[active].slug}`} variant="secondary" icon>
                      {t.visitPage}
                    </GoldButton>
                  </motion.div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-warm text-sm">{t.exploreBuildingDesc}</p>
                  <p className="text-gold text-sm mt-2">Hover or tap a zone above</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* How to reach list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 p-5 rounded-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--smoke) 70%, transparent), color-mix(in srgb, var(--obsidian) 90%, transparent))',
              border: '1px solid transparent',
              boxShadow: '0 10px 30px color-mix(in srgb, var(--accent-500) 10%, transparent)',
            }}
          >
            {/* Gradient border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, var(--accent-deep), var(--accent-primary), var(--accent-highlight))',
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
              }}
            />

            <div className="relative z-10">
              <h4 className="section-label mb-3">{t.howToReach}</h4>
              <ul className="space-y-3">
                {zones.map(([key, zone]) => (
                  <li key={key} className="text-sm flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: 'var(--accent-500)' }}
                    />
                    <span className="text-gold font-semibold">{zone.title}:</span>{' '}
                    <span className="text-muted-warm">{lang === 'bn' ? zone.directionBn : zone.direction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
