import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { FramerButton } from '../components/FramerButton';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Ergonomics & Posture',
    'Technique Guide',
    'Neurology & Wellness',
    'Clinical Symptoms',
  ];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const featured = filteredPosts[0];
  const others = filteredPosts.slice(1);

  return (
    <div className="pt-28 pb-20">
      {/* Top Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-wider mb-4">
          Clinical Guidance & Education
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A1128] mb-6">
          Spine & Wellness Journal
        </h1>
        <p className="text-base sm:text-xl text-[#0A1128]/75 max-w-3xl mx-auto leading-relaxed">
          Evidence-based articles on spinal ergonomics, nervous system mechanics, and sports rehabilitation written by our Highfields clinical team.
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#204CB8] text-white shadow-sm'
                  : 'bg-white text-[#0A1128]/70 hover:text-[#0A1128] border border-black/5 hover:border-black/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Big Post */}
      {featured && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div
            onClick={() => onNavigate(`blog-${featured.slug}`)}
            className="bg-white rounded-2xl p-6 sm:p-10 border border-black/5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 rounded-xl overflow-hidden h-72 sm:h-96 bg-zinc-100">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#E6286B] text-white text-xs font-bold uppercase tracking-wider">
                {featured.category}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A1128] group-hover:text-black leading-tight">
                {featured.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#0A1128]/75 line-clamp-3 leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.authorImage}
                    alt={featured.author}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#0A1128]">{featured.author}</span>
                    <span className="block text-[10px] text-[#0A1128]/60">{featured.date} • {featured.readTime}</span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#0A1128] text-white flex items-center justify-center group-hover:bg-[#E6286B] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Other Articles */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate(`blog-${post.slug}`)}
              className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-zinc-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0A1128] text-[10px] font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#0A1128]/60 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0A1128] mb-2 group-hover:text-black line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#0A1128]/75 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0A1128]">
                <span>By {post.author}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
