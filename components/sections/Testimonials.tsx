'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';
import { testimonials } from '@/data/gallery';
import { useLang } from '@/components/providers/LanguageProvider';

interface TestimonialsProps {
  forceReveal?: boolean;
}

export function Testimonials({ forceReveal }: TestimonialsProps) {
  const { t } = useLang();
  const [revealed, setRevealed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceReveal && !revealed) {
      setRevealed(true);
    }
  }, [forceReveal, revealed]);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || isReducedMotion || testimonials.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isReducedMotion]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Touch swipe support
  const touchStartRef = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const currentTestimonial = testimonials[currentIndex];
  const initial = currentTestimonial.name.charAt(0).toUpperCase();

  const isControlled = forceReveal !== undefined;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    goToSlide(index);
  };

  const handlePrevClick = () => {
    setDirection(-1);
    goToPrevious();
  };

  const handleNextClick = () => {
    setDirection(1);
    goToNext();
  };

  const SectionContent = () => (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col gap-3 items-center text-center mb-12">
        <span className="section-label">Reviews</span>
        <h2 className="font-display text-3xl font-bold text-warm-white sm:text-4xl lg:text-5xl">
          {t.memberReviews}
        </h2>
        <div className="diamond-divider mt-2">
          <div className="diamond" />
        </div>
      </div>

      {/* Featured Slider */}
      <div
        ref={containerRef}
        className="relative min-h-[500px] lg:min-h-[600px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Member testimonials"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Large Portrait Image */}
              <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden">
                  {/* Verified Badge */}
                  <div className="absolute top-4 left-4 z-10 glass-card px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a843]" />
                    <span className="text-xs font-medium text-[#d4a843] tracking-wider">VERIFIED MEMBER</span>
                  </div>
                  
                  {/* Image or Fallback */}
                  {currentTestimonial.largeImage ? (
                    <img
                      src={currentTestimonial.largeImage}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#d4a843]/20 to-[#d4a843]/5 flex items-center justify-center">
                      <span className="text-8xl font-display font-bold text-[#d4a843]/30">{initial}</span>
                    </div>
                  )}
                  
                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Overlapping Card */}
              <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start lg:-ml-20 z-10">
                <div className="glass-card p-8 lg:p-10 max-w-lg w-full rounded-2xl border border-[#d4a843]/20"
                  style={{
                    boxShadow: '0 0 0 1px color-mix(in srgb, var(--accent-400) 15%, transparent), 0 25px 50px -20px rgba(0,0,0,0.7)',
                  }}
                >
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#d4a843] text-[#d4a843]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#d4a843] tracking-wider">5.0 / 5.0 RATING</span>
                  </div>

                  {/* Quote */}
                  <p className="text-lg lg:text-xl text-warm-white leading-relaxed mb-6 font-light">
                    "{currentTestimonial.quote}"
                  </p>

                  {/* Gold Line */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#d4a843] to-transparent mb-4" />

                  {/* Name and Member Since */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-warm-white mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm text-[#d4a843] tracking-widest uppercase">
                      Member — {currentTestimonial.memberSince}
                    </p>
                  </div>

                  {/* Decorative Quote Mark */}
                  <Quote className="absolute top-4 right-4 w-16 h-16 text-[#d4a843]/5" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {testimonials.length > 1 && (
          <div className="absolute bottom-0 right-0 lg:bottom-8 lg:right-8 flex items-center gap-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#d4a843]'
                      : 'w-2 bg-[#d4a843]/30 hover:bg-[#d4a843]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1} of ${testimonials.length}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevClick}
                className="w-10 h-10 rounded-full border border-[#d4a843]/30 flex items-center justify-center text-[#d4a843] hover:bg-[#d4a843]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextClick}
                className="w-10 h-10 rounded-full border border-[#d4a843]/30 flex items-center justify-center text-[#d4a843] hover:bg-[#d4a843]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isControlled) {
    return (
      <motion.section
        className="relative py-20 lg:py-28 bg-smoke/30"
        variants={sectionVariants}
        initial="hidden"
        animate={revealed ? 'show' : 'hidden'}
      >
        <SectionContent />
      </motion.section>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 bg-smoke/30">
      <SectionContent />
    </section>
  );
}
