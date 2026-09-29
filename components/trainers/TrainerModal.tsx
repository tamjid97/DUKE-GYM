'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Trainer } from '@/data/trainers';

interface TrainerModalProps {
  trainer: Trainer;
  onClose: () => void;
}

export function TrainerModal({ trainer, onClose }: TrainerModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-charcoal rounded-3xl border border-gold/50 shadow-2xl shadow-gold/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all"
          >
            ✕
          </button>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative aspect-[4/5]">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Right: Info */}
            <div className="p-8 lg:p-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-warm-white mb-2">
                {trainer.name}
              </h2>
              <p className="text-gold font-semibold text-lg mb-4">
                {trainer.role}
              </p>
              <div className="text-sm text-muted-warm mb-6">
                {trainer.experience} Experience
              </div>

              {/* About */}
              <div className="mb-6">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  About
                </h3>
                <p className="text-muted-warm text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>

              {/* Specialization */}
              <div className="mb-6">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Specialization
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs border border-gold/30 text-gold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {trainer.certifications && trainer.certifications.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                    Certifications
                  </h3>
                  <ul className="space-y-1">
                    {trainer.certifications.map((cert, index) => (
                      <li key={index} className="text-muted-warm text-sm flex items-start gap-2">
                        <span className="text-gold">•</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Training Approach */}
              {trainer.trainingApproach && (
                <div className="mb-6">
                  <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                    Training Focus
                  </h3>
                  <p className="text-muted-warm text-sm leading-relaxed">
                    {trainer.trainingApproach}
                  </p>
                </div>
              )}

              {/* Achievements */}
              {trainer.achievements && trainer.achievements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                    Achievements
                  </h3>
                  <ul className="space-y-1">
                    {trainer.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-warm text-sm flex items-start gap-2">
                        <span className="text-gold">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Media */}
              <div className="pt-6 border-t border-gold/20">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  Connect with Trainer
                </h3>
                <div className="flex gap-3">
                  {trainer.social.facebook && trainer.social.facebook !== '#' && (
                    <a
                      href={trainer.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {trainer.social.instagram && trainer.social.instagram !== '#' && (
                    <a
                      href={trainer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {trainer.social.linkedin && trainer.social.linkedin !== '#' && (
                    <a
                      href={trainer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Image */}
            <div className="relative aspect-[4/5]">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Name overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-display text-2xl font-bold text-warm-white mb-1">
                  {trainer.name}
                </h2>
                <p className="text-gold font-semibold mb-1">
                  {trainer.role}
                </p>
                <div className="text-sm text-muted-warm">
                  {trainer.experience} Experience
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              {/* About */}
              <div className="mb-5">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  About
                </h3>
                <p className="text-muted-warm text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>

              {/* Specialization */}
              <div className="mb-5">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Specialization
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs border border-gold/30 text-gold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {trainer.certifications && trainer.certifications.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                    Certifications
                  </h3>
                  <ul className="space-y-1">
                    {trainer.certifications.map((cert, index) => (
                      <li key={index} className="text-muted-warm text-sm flex items-start gap-2">
                        <span className="text-gold">•</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Training Approach */}
              {trainer.trainingApproach && (
                <div className="mb-5">
                  <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                    Training Focus
                  </h3>
                  <p className="text-muted-warm text-sm leading-relaxed">
                    {trainer.trainingApproach}
                  </p>
                </div>
              )}

              {/* Achievements */}
              {trainer.achievements && trainer.achievements.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                    Achievements
                  </h3>
                  <ul className="space-y-1">
                    {trainer.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-warm text-sm flex items-start gap-2">
                        <span className="text-gold">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Media */}
              <div className="pt-5 border-t border-gold/20">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  Connect with Trainer
                </h3>
                <div className="flex gap-3">
                  {trainer.social.facebook && trainer.social.facebook !== '#' && (
                    <a
                      href={trainer.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {trainer.social.instagram && trainer.social.instagram !== '#' && (
                    <a
                      href={trainer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {trainer.social.linkedin && trainer.social.linkedin !== '#' && (
                    <a
                      href={trainer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold hover:text-obsidian transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Close Button for Mobile */}
              <button
                onClick={onClose}
                className="w-full mt-6 py-3 rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all font-semibold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
