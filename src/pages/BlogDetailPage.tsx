import React from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { FramerButton } from '../components/FramerButton';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, CheckCircle2, AlertCircle } from 'lucide-react';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || BLOG_POSTS[0];

  return (
    <div className="pt-28 pb-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1128]/70 hover:text-[#0A1128] bg-white px-4 py-2 rounded-full border border-black/5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Spine Journal
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Category & Title */}
        <div className="space-y-4 mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#E6286B] text-white text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-tight">
            {post.title}
          </h1>

          {/* Author Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover border border-black/10"
              />
              <div>
                <span className="block font-bold text-sm text-[#0A1128]">{post.author}</span>
                <span className="block text-xs text-[#0A1128]/60">{post.authorRole}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#0A1128]/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Feature Cover Image */}
        <div className="rounded-2xl overflow-hidden h-72 sm:h-96 mb-12 bg-zinc-100 shadow-md border border-black/5">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-sm sm:text-base text-[#0A1128]/85 leading-relaxed font-normal">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.bullets && (
                <div className="bg-white rounded-2xl p-6 border border-black/5 space-y-2.5 my-4">
                  {section.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A1128]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.callout && (
                <div className="bg-[#121F42] text-white p-6 rounded-2xl border border-white/10 flex items-start gap-3 my-4">
                  <AlertCircle className="w-5 h-5 text-[#E6286B] mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-[#E6286B] font-medium leading-relaxed italic">
                    {section.callout}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 bg-[#0A1128] text-white rounded-xl p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              Experiencing pain or postural fatigue?
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Schedule a comprehensive clinical assessment with {post.author} at Highfields Chiropractic.
            </p>
          </div>
          <FramerButton variant="accent" onClick={onOpenBooking} className="whitespace-nowrap font-bold">
            Book Assessment Online
          </FramerButton>
        </div>
      </article>
    </div>
  );
};
