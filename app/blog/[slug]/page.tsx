import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Idea Journal`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    "Dev Notes": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Competitive Programming": "bg-orange-500/10 text-orange-400 border-orange-500/30",
    "Research Journey": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Project Logs": "bg-green-500/10 text-green-400 border-green-500/30",
  };

  const categoryColor = categoryColors[post.category] || "bg-slate-500/10 text-slate-400 border-slate-500/30";

  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${categoryColor}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-slate-800">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-800/50 text-sm text-slate-300 border border-slate-700/50"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div
                className="prose prose-invert prose-slate max-w-none
                  prose-headings:text-slate-100 prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-slate-300 prose-p:leading-relaxed prose-p:my-4
                  prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-200 prose-strong:font-semibold
                  prose-code:text-indigo-400 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg
                  prose-ul:text-slate-300 prose-ul:my-4
                  prose-ol:text-slate-300 prose-ol:my-4
                  prose-li:my-2
                  prose-blockquote:border-l-indigo-500 prose-blockquote:text-slate-300 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* Navigation to other posts */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all duration-200 hover:scale-105"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
