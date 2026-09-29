'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { BlogPost } from '@/data/blog';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  relatedPosts?: BlogPost[];
  onReadRelated: (post: BlogPost) => void;
}

export function ArticleModal({ post, onClose, relatedPosts = [], onReadRelated }: ArticleModalProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (post) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [post]);

  if (!post) return null;

  const handleShare = (platform: string) => {
    if (typeof window === 'undefined') return;
    
    const url = window.location.href;
    const title = post.title;
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-charcoal rounded-2xl border border-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 border border-gold/50 text-gold hover:bg-gold/10 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 text-xs font-semibold tracking-widest uppercase bg-gold/20 text-gold backdrop-blur-sm rounded-full border border-gold/30">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-warm mb-6">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="text-gold">By {post.author}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-warm-white mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Article Content */}
              <div className="prose prose-invert prose-lg max-w-none space-y-6">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-warm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gold/20">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">
                  SHARE ARTICLE
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-3 rounded-lg bg-black/50 border border-gold/30 text-gold hover:bg-gold/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="p-3 rounded-lg bg-black/50 border border-gold/30 text-gold hover:bg-gold/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="p-3 rounded-lg bg-black/50 border border-gold/30 text-gold hover:bg-gold/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gold/20">
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-gold mb-6">
                    YOU MAY ALSO LIKE
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.slice(0, 3).map((relatedPost) => (
                      <div
                        key={relatedPost.slug}
                        onClick={() => onReadRelated(relatedPost)}
                        className="cursor-pointer group"
                      >
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="font-display text-sm font-bold text-warm-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-warm">{relatedPost.readTime}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Back Button */}
              <button
                onClick={onClose}
                className="mt-8 w-full py-3 rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all font-semibold"
              >
                BACK TO BLOG
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
