'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { galleryItems, type GalleryItem } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface VideoItemProps {
  item: GalleryItem;
  index: number;
}

function VideoItem({ item, index }: VideoItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMounted) return;

    // Intersection Observer for play/pause based on visibility
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked - wait for user interaction
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.3, // Play when 30% visible
        rootMargin: '0px',
      }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isMounted]);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Height based on aspect ratio for masonry effect
  const getHeight = () => {
    switch (item.aspectRatio) {
      case 'tall':
        return 'h-64 md:h-80 lg:h-96';
      case 'wide':
        return 'h-48 md:h-56 lg:h-64';
      case 'square':
      default:
        return 'h-56 md:h-64 lg:h-72';
    }
  };

  // Check if it's an image file
  const isImage = item.src.endsWith('.jpg') || item.src.endsWith('.jpeg') || item.src.endsWith('.png') || item.src.endsWith('.webp');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-[#d4a843]/30 hover:border-[#d4a843]/60 transition-all duration-300"
    >
      {!hasError ? (
        isImage ? (
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full ${getHeight()} object-cover transition-transform duration-700 group-hover:scale-105`}
            loading="lazy"
            onError={handleError}
            onLoad={handleLoad}
          />
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            alt={item.alt}
            muted
            loop
            playsInline
            autoPlay={isMounted}
            preload="metadata"
            className={`w-full ${getHeight()} object-cover transition-transform duration-700 group-hover:scale-105`}
            onError={handleError}
            onLoadedData={handleLoad}
          />
        )
      ) : (
        <div className={`w-full ${getHeight()} bg-[#1a1a1a] flex items-center justify-center`}>
          <svg
            className="w-12 h-12 text-[#d4a843]/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Category label */}
      <span className="absolute bottom-3 left-3 text-xs font-medium text-[#d4a843] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {item.category}
      </span>
    </motion.div>
  );
}

export function GalleryPreview() {
  const { t } = useLang();

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading label="Gallery" title={t.galleryPreview} />
        
        {/* Masonry Gallery - Responsive columns */}
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 space-y-4">
          {galleryItems.map((item, index) => (
            <VideoItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
