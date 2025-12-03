"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Loader2 } from "lucide-react";

export default function ContributionHeatmap() {
  const [heatmapData, setHeatmapData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        console.log("GitHub heatmap data:", data);
        if (data.heatmapData && data.heatmapData.length > 0) {
          setHeatmapData(data.heatmapData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("GitHub heatmap error:", err);
        setLoading(false);
      });
  }, []);

  const getColor = (level: number) => {
    const colors = [
      "#0f172a", // Level 0 - no activity
      "#1e3a5f", // Level 1 - low
      "#3b82f6", // Level 2 - medium
      "#8b5cf6", // Level 3 - high
      "#a855f7", // Level 4 - very high
    ];
    return colors[level] || colors[0];
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-slate-100">Contribution Activity</CardTitle>
        <p className="text-sm text-slate-400">Your coding activity over the last year</p>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
          </div>
        ) : heatmapData.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-400 mb-2">No contribution data available</p>
            <p className="text-sm text-slate-500">
              Add GITHUB_TOKEN to .env.local for accurate data
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {heatmapData.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.01 }}
                className="group relative"
              >
                <div
                  className="w-4 h-4 rounded-sm cursor-pointer transition-transform hover:scale-125"
                  style={{ backgroundColor: getColor(week.level) }}
                  title={`${week.contributions} contributions on ${week.date}`}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="font-semibold">{week.contributions} contributions</div>
                  <div className="text-slate-400">{week.date}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: getColor(level) }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
        )}
      </CardContent>
    </Card>
  );
}
