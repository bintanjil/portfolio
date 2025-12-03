"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Code, GitBranch, Trophy, Loader2 } from "lucide-react";

export default function QuickStats() {
  const [stats, setStats] = useState([
    {
      icon: <Code className="w-6 h-6" />,
      value: "...",
      label: "LeetCode Problems",
      color: "from-orange-500 to-yellow-500",
      loading: true,
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      value: "...",
      label: "GitHub Contributions",
      color: "from-purple-500 to-indigo-500",
      loading: true,
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "...",
      label: "CF Rating",
      color: "from-blue-500 to-cyan-500",
      loading: true,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "...",
      label: "Day Streak",
      color: "from-green-500 to-emerald-500",
      loading: true,
    },
  ]);

  useEffect(() => {
    // Fetch LeetCode
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats((prev) =>
            prev.map((stat, i) =>
              i === 0
                ? { ...stat, value: `${data.totalSolved || 0}+`, loading: false }
                : i === 3
                ? { ...stat, value: data.currentStreak || 0, loading: false }
                : stat
            )
          );
        }
      })
      .catch((err) => console.error("LeetCode error:", err));

    // Fetch GitHub
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats((prev) =>
            prev.map((stat, i) =>
              i === 1
                ? { ...stat, value: `${data.totalContributions?.toLocaleString() || 0}+`, loading: false }
                : stat
            )
          );
        }
      })
      .catch((err) => console.error("GitHub error:", err));

    // Fetch Codeforces
    fetch("/api/codeforces")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats((prev) =>
            prev.map((stat, i) =>
              i === 2 ? { ...stat, value: data.rating || 0, loading: false } : stat
            )
          );
        }
      })
      .catch((err) => console.error("Codeforces error:", err));
  }, []);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/70 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {stat.loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  stat.icon
                )}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-100 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* View Full Activity Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link
            href="/activity"
            prefetch={true}
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            <span>View Full Activity & Timeline</span>
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
