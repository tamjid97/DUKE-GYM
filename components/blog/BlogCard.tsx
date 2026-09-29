'use client';

import { motion } from 'framer-motion';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
  onRead: () => void;
}

export function BlogCard({ post, onRead }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group relative bg-charcoal rounded-2xl overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold backdrop-blur-sm rounded-full border border-gold/30">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-muted-warm mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-warm-white mb-3 leading-tight group-hover:text-gold transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-warm line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author */}
        <p className="text-xs text-gold mb-4">
          By {post.author}
        </p>

        {/* Read Button */}
        <button
          onClick={onRead}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-champagne transition-colors group-hover:translate-x-1 duration-300"
        >
          READ ARTICLE
          <span>→</span>
        </button>
      </div>
    </motion.article>
  );
}
