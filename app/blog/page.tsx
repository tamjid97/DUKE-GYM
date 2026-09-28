import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GlassCard } from '@/components/shared/GlassCard';
import { GoldButton } from '@/components/shared/GoldButton';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Tips & Articles',
  description: 'Training tips, swimming guides, nutrition advice, and club news from Duke Fitness Club experts.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Read"
        title="Blog & Tips"
        subtitle="Expert advice on training, nutrition, swimming, and lifestyle from our team."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <GlassCard key={post.slug} className="overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-gold/20 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-warm mb-2">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-warm-white mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-warm line-clamp-2 mb-4">{post.excerpt}</p>
                  <p className="text-xs text-gold">By {post.author}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
