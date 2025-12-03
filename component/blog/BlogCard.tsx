"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Tag, BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/component/ui/card";
import Badge from "@/component/ui/badge";
import { BlogMetadata } from "@/lib/blog";

interface BlogCardProps {
  post: BlogMetadata;
  index: number;
}

const categoryColors: Record<string, string> = {
  "Dev Notes": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Competitive Programming": "bg-orange-500/10 text-orange-400 border-orange-500/30",
  "Research Journey": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Project Logs": "bg-green-500/10 text-green-400 border-green-500/30",
};

export default function BlogCard({ post, index }: BlogCardProps) {
  const categoryColor = categoryColors[post.category] || "bg-slate-500/10 text-slate-400 border-slate-500/30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1 hover:border-indigo-500/50 cursor-pointer h-full">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-3">
              <Badge className={`${categoryColor} border`}>
                {post.category}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-400 line-clamp-3">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800/50 text-xs text-slate-300 border border-slate-700/50"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-800/50 text-xs text-slate-400">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 pt-2 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Read more</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
