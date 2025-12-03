"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/component/ui/SectionTitle";
import BlogCard from "@/component/blog/BlogCard";
import TimelineBlog from "@/component/blog/TimelineBlog";
import { BlogMetadata } from "@/lib/blog";
import { LayoutGrid, GitBranch, Filter } from "lucide-react";

interface BlogSectionProps {
  posts: BlogMetadata[];
  categories: string[];
}

export default function BlogSection({ posts, categories }: BlogSectionProps) {
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(139,92,246,0.12),transparent_40%)]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          title="Idea Journal"
          subtitle="Dev notes, competitive programming, research, and project logs"
        />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-slate-400" />
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === "All"
                  ? "bg-indigo-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-indigo-500 text-white"
                  : "text-slate-400 hover:text-slate-300"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "timeline"
                  ? "bg-indigo-500 text-white"
                  : "text-slate-400 hover:text-slate-300"
              }`}
              title="Timeline View"
            >
              <GitBranch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Posts Count */}
        <motion.p
          key={filteredPosts.length}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-400 mb-6"
        >
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </motion.p>

        {/* Content */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No posts found in this category</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <TimelineBlog posts={filteredPosts} />
        )}
      </div>
    </section>
  );
}
