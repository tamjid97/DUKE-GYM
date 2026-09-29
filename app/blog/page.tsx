'use client';

import { useState } from 'react';
import { blogPosts, BlogPost } from '@/data/blog';
import { FeaturedArticle } from '@/components/blog/FeaturedArticle';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogFilter } from '@/components/blog/BlogFilter';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { ArticleModal } from '@/components/blog/ArticleModal';

type CategoryType = 'all' | 'training' | 'nutrition' | 'swimming' | 'recovery' | 'lifestyle';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = activeFilter === 'all' || post.category.toLowerCase() === activeFilter;
    const searchMatch = 
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Get featured post (first post)
  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.filter(post => post.slug !== featuredPost?.slug);

  // Get related posts (excluding current)
  const getRelatedPosts = (currentPost: BlogPost) => {
    return blogPosts.filter(post => post.slug !== currentPost.slug).slice(0, 3);
  };

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleReadRelated = (post: BlogPost) => {
    setSelectedPost(post);
  };

  return (
    <>
      {/* Blog Intro */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--accent-500) 5%, transparent) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Eyebrow */}
          <div className="text-center mb-4">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">
              READ • LEARN • GROW
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-accent-gradient text-center mb-4">
            BLOG & TIPS
          </h1>

          {/* Subtitle */}
          <p className="text-muted-warm text-center max-w-2xl mx-auto text-lg">
            Expert advice on training, nutrition, swimming, recovery and lifestyle from the DUKE team.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <FeaturedArticle post={featuredPost} onRead={() => handleReadPost(featuredPost)} />
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-warm-white mb-2">
              LATEST ARTICLES
            </h2>
          </div>

          {/* Search and Filter */}
          <BlogSearch onSearch={setSearchQuery} />
          <BlogFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          {/* Article Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} onRead={() => handleReadPost(post)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-warm text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <ArticleModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          relatedPosts={getRelatedPosts(selectedPost)}
          onReadRelated={handleReadRelated}
        />
      )}
    </>
  );
}
