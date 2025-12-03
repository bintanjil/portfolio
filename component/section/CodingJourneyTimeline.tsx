"use client";

import { motion } from "framer-motion";
import { journeyTimeline } from "@/data/activityData";

export default function CodingJourneyTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-purple-500" />

      <div className="space-y-12">
        {journeyTimeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-20"
          >
            {/* Timeline dot with icon */}
            <div className="absolute left-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/50 ring-4 ring-slate-950">
                {item.icon}
              </div>
            </div>

            {/* Content card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/70 transition-all group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  {item.year}
                </h3>
                <span className="text-sm text-slate-500 font-mono">{item.year}</span>
              </div>

              <h4 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h4>

              <p className="text-slate-400 mb-4">{item.description}</p>

              {/* Achievements */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300 mb-2">Key Achievements:</p>
                <ul className="space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
