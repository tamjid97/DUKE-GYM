'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig, type ZoneKey } from '@/data/siteConfig';
import { useLang } from '@/components/providers/LanguageProvider';
import { GoldButton } from '@/components/shared/GoldButton';
import { cn } from '@/lib/utils';

const zoneColors: Record<ZoneKey, string> = {
  gym: '#D4AF37',
  restaurant: '#F1DDA0',
  pool: '#40A4C8',
  arena: '#D4AF37',
};

export function BuildingMap() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<ZoneKey | null>(null);

  const zones = Object.entries(siteConfig.zones) as [ZoneKey, typeof siteConfig.zones[ZoneKey]][];

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      {/* SVG floor plan */}
      <div className="flex-1">
        <div className="glass-card corner-ornament relative p-6">
          <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
            {/* Building outline */}
            <rect x="20" y="20" width="360" height="260" rx="8" stroke="#D4AF37" strokeWidth="2" opacity="0.4" fill="#22262A" />
            <text x="200" y="15" textAnchor="middle" fill="#A8A39A" fontSize="10" fontFamily="serif">DUKE FITNESS CLUB</text>

            {/* Floor dividers */}
            <line x1="20" y1="85" x2="380" y2="85" stroke="#D4AF37" strokeWidth="1" opacity="0.2" />
            <line x1="20" y1="150" x2="380" y2="150" stroke="#D4AF37" strokeWidth="1" opacity="0.2" />
            <line x1="20" y1="215" x2="380" y2="215" stroke="#D4AF37" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="20" x2="200" y2="85" stroke="#D4AF37" strokeWidth="1" opacity="0.2" />

            {/* Floor labels */}
            <text x="25" y="80" fill="#A8A39A" fontSize="7">3F</text>
            <text x="25" y="145" fill="#A8A39A" fontSize="7">2F</text>
            <text x="25" y="210" fill="#A8A39A" fontSize="7">GF</text>

            {/* Zone rectangles */}
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
                  <rect
                    x={pos.x}
                    y={pos.y}
                    width={pos.w}
                    height={pos.h}
                    rx="4"
                    fill={isActive ? zoneColors[key] : '#2A2E33'}
                    fillOpacity={isActive ? 0.3 : 1}
                    stroke={isActive ? zoneColors[key] : '#D4AF37'}
                    strokeWidth={isActive ? 2 : 1}
                    className="transition-all duration-300"
                  />
                  <text x={pos.x + pos.w / 2} y={pos.y + pos.h / 2 - 5} textAnchor="middle" fill={isActive ? zoneColors[key] : '#F5F1E6'} fontSize="11" fontWeight="bold" fontFamily="serif">
                    {zone.title}
                  </text>
                  <text x={pos.x + pos.w / 2} y={pos.y + pos.h / 2 + 10} textAnchor="middle" fill="#A8A39A" fontSize="7">
                    {lang === 'bn' ? zone.floorBn : zone.floor}
                  </text>
                </g>
              );
            })}

            {/* Lift */}
            <rect x="185" y="90" width="15" height="15" fill="#2A2E33" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
            <text x="192" y="100" textAnchor="middle" fill="#A8A39A" fontSize="6">LIFT</text>

            {/* Entrance */}
            <rect x="185" y="225" width="30" height="10" fill="#D4AF37" opacity="0.3" />
            <text x="200" y="250" textAnchor="middle" fill="#A8A39A" fontSize="7">ENTRANCE</text>
          </svg>
        </div>
      </div>

      {/* Active zone info */}
      <div className="flex-1 lg:max-w-sm">
        <motion.div
          key={active || 'none'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card corner-ornament p-6"
        >
          {active ? (
            <div>
              <h3 className="font-display text-xl font-bold text-gold-gradient mb-1">
                {siteConfig.zones[active].title}
              </h3>
              <p className="text-sm text-muted-warm mb-4">{siteConfig.zones[active].tagline}</p>
              <p className="text-sm text-warm-white mb-4">{siteConfig.zones[active].description}</p>
              <div className="space-y-2 text-sm">
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
              </div>
              <div className="mt-5">
                <GoldButton href={`/${siteConfig.zones[active].slug}`} variant="outline" icon>
                  {t.visitPage}
                </GoldButton>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-warm text-sm">{t.exploreBuildingDesc}</p>
              <p className="text-gold text-sm mt-2">Hover or tap a zone above</p>
            </div>
          )}
        </motion.div>

        {/* How to reach list */}
        <div className="mt-4 glass-card p-5">
          <h4 className="section-label mb-3">{t.howToReach}</h4>
          <ul className="space-y-3">
            {zones.map(([key, zone]) => (
              <li key={key} className="text-sm">
                <span className="text-gold font-semibold">{zone.title}:</span>{' '}
                <span className="text-muted-warm">{lang === 'bn' ? zone.directionBn : zone.direction}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
