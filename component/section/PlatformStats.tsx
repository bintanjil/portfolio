"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, GitBranch, Trophy, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";

interface Platform {
  name: string;
  username: string;
  icon: React.ReactNode;
  color: string;
  stats: Array<{ label: string; value: string | number }>;
  link: string;
  loading?: boolean;
}

export default function PlatformStats() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      name: "LeetCode",
      username: "tnjl",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      stats: [
        { label: "Problems Solved", value: "Loading..." },
        { label: "Current Streak", value: "Loading..." },
        { label: "Max Streak", value: "Loading..." },
        { label: "Ranking", value: "Loading..." },
      ],
      link: "https://leetcode.com/u/tnjl/",
      loading: true,
    },
    {
      name: "GitHub",
      username: "bintanjil",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      stats: [
        { label: "Contributions", value: "Loading..." },
        { label: "Current Streak", value: "Loading..." },
        { label: "Repositories", value: "Loading..." },
        { label: "Stars Earned", value: "Loading..." },
      ],
      link: "https://github.com/bintanjil",
      loading: true,
    },
    {
      name: "Codeforces",
      username: "tanjill",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Rating", value: "Loading..." },
        { label: "Max Rating", value: "Loading..." },
        { label: "Rank", value: "Loading..." },
        { label: "Problems Solved", value: "Loading..." },
      ],
      link: "https://codeforces.com/profile/tanjill",
      loading: true,
    },
  ]);

  useEffect(() => {
    // Fetch LeetCode data
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setPlatforms((prev) =>
            prev.map((p) =>
              p.name === "LeetCode"
                ? {
                    ...p,
                    stats: [
                      { label: "Problems Solved", value: data.totalSolved || 0 },
                      { label: "Current Streak", value: `${data.currentStreak || 0} days` },
                      { label: "Max Streak", value: `${data.maxStreak || 0} days` },
                      { label: "Ranking", value: data.ranking ? `#${data.ranking.toLocaleString()}` : "N/A" },
                    ],
                    loading: false,
                  }
                : p
            )
          );
        }
      })
      .catch((err) => console.error("LeetCode fetch error:", err));

    // Fetch GitHub data
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setPlatforms((prev) =>
            prev.map((p) =>
              p.name === "GitHub"
                ? {
                    ...p,
                    stats: [
                      { label: "Contributions", value: data.totalContributions?.toLocaleString() || 0 },
                      { label: "Current Streak", value: `${data.currentStreak || 0} days` },
                      { label: "Repositories", value: data.repositories || 0 },
                      { label: "Stars Earned", value: data.stars || 0 },
                    ],
                    loading: false,
                  }
                : p
            )
          );
        }
      })
      .catch((err) => console.error("GitHub fetch error:", err));

    // Fetch Codeforces data
    fetch("/api/codeforces")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setPlatforms((prev) =>
            prev.map((p) =>
              p.name === "Codeforces"
                ? {
                    ...p,
                    stats: [
                      { label: "Rating", value: data.rating || 0 },
                      { label: "Max Rating", value: data.maxRating || 0 },
                      { label: "Rank", value: data.rank || "Unrated" },
                      { label: "Problems Solved", value: data.problemsSolved || 0 },
                    ],
                    loading: false,
                  }
                : p
            )
          );
        }
      })
      .catch((err) => console.error("Codeforces fetch error:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${platform.color}`}>
                  {platform.icon}
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  View Profile →
                </a>
              </div>
              <CardTitle className="text-xl text-slate-100 mt-4">
                {platform.name}
              </CardTitle>
              <p className="text-sm text-slate-400">@{platform.username}</p>
            </CardHeader>
            <CardContent>
              {platform.loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                </div>
              ) : (
                <div className="space-y-3">
                  {platform.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0"
                    >
                      <span className="text-sm text-slate-400">{stat.label}</span>
                      <span className="text-sm font-semibold text-slate-100">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
