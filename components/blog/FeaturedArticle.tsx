'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '@/data/blog';

interface FeaturedArticleProps {
  post: BlogPost;
  onRead: () => void;
}

export function FeaturedArticle({ post, onRead }: FeaturedArticleProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest uppercase bg-gold/20 text-gold backdrop-blur-sm rounded-full border border-gold/30">
              {post.category}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              FEATURED ARTICLE
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold text-warm-white leading-tight">
            {post.title}
          </h2>

          <p className="text-muted-warm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-warm">
            <div>
              <span className="text-gold">By</span> {post.author}
            </div>
            <div>•</div>
            <div>{post.date}</div>
            <div>•</div>
            <div>{post.readTime}</div>
          </div>

          <button
            onClick={onRead}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all font-semibold group"
          >
            READ ARTICLE
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
