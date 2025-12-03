"use client";

import { motion } from "framer-motion";
import { BlogMetadata } from "@/lib/blog";
import { Calendar, Tag } from "lucide-react";
import Link from "next/link";

interface TimelineBlogProps {
  posts: BlogMetadata[];
}

const categoryColors: Record<string, string> = {
  "Dev Notes": "bg-blue-500 border-blue-500",
  "Competitive Programming": "bg-orange-500 border-orange-500",
  "Research Journey": "bg-purple-500 border-purple-500",
  "Project Logs": "bg-green-500 border-green-500",
};

export default function TimelineBlog({ posts }: TimelineBlogProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-violet-500" />

      <div className="space-y-12">
        {posts.map((post, index) => {
          const categoryColor = categoryColors[post.category] || "bg-slate-500 border-slate-500";
          
          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-20"
            >
              {/* Timeline Node */}
              <div className={`absolute left-5 w-6 h-6 rounded-full ${categoryColor} border-4 border-slate-950 shadow-lg`} />

              {/* Timeline Content */}
              <Link href={`/blog/${post.slug}`}>
                <div className="group cursor-pointer">
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  {/* Content Card */}
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColor.replace('bg-', 'bg-').replace('border-', 'text-')} bg-opacity-10`}>
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800/50 text-xs text-slate-300 border border-slate-700/50"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
