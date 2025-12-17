"use client";

import { Metadata } from "next";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import SectionTitle from "@/component/ui/SectionTitle";
import { useEffect } from "react";
import { toast } from "sonner";
import { playSound } from "@/lib/sounds";

// Lazy load heavy client components with loading states
const PlatformStats = dynamic(() => import("@/component/section/PlatformStats"), {
  loading: () => <div className="h-64 bg-slate-800 rounded-xl animate-pulse" />
});
const ActivityCharts = dynamic(() => import("@/component/section/ActivityCharts"), {
  loading: () => <div className="h-96 bg-slate-800 rounded-xl animate-pulse" />
});
const CodingJourneyTimeline = dynamic(() => import("@/component/section/CodingJourneyTimeline"), {
  loading: () => <div className="h-96 bg-slate-800 rounded-xl animate-pulse" />
});
const ContributionHeatmap = dynamic(() => import("@/component/section/ContributionHeatmap"), {
  loading: () => <div className="h-64 bg-slate-800 rounded-xl animate-pulse" />
});

export default function ActivityPage() {
  useEffect(() => {
    playSound('notification');
    toast.info("Activity Dashboard", {
      description: "View coding statistics and contributions",
      duration: 3000,
    });
  }, []);

  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={4}
      animationSpeed="medium"
      bgGradient="from-black via-slate-950 to-black"
    >
      <div className="min-h-screen" suppressHydrationWarning>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent" suppressHydrationWarning />
          <div className="container mx-auto px-6 relative" suppressHydrationWarning>
            <div className="text-center max-w-3xl mx-auto" suppressHydrationWarning>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 mb-4">
                My Coding Journey
              </h1>
              <p className="text-lg text-slate-400">
                Track my progress, streaks, and achievements across multiple coding platforms
              </p>
            </div>
          </div>
        </section>

        {/* Platform Stats */}
        <section className="py-12 relative">
          <div className="container mx-auto px-6" suppressHydrationWarning>
            <SectionTitle
              title="Platform Statistics"
              subtitle="Real-time stats from LeetCode, GitHub, and Codeforces"
            />
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              suppressHydrationWarning
            >
              <PlatformStats />
            </motion.div>
        </div>
      </section>

      {/* Contribution Heatmap */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6" suppressHydrationWarning>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            suppressHydrationWarning
          >
            <ContributionHeatmap />
          </motion.div>
        </div>
      </section>

      {/* Activity Charts */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6" suppressHydrationWarning>
          <SectionTitle
            title="Activity Analytics"
            subtitle="Visual representation of coding activity and skill progression"
          />
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            suppressHydrationWarning
          >
            <ActivityCharts />
          </motion.div>
        </div>
      </section>

      {/* Coding Journey Timeline */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6" suppressHydrationWarning>
          <SectionTitle
            title="Coding Journey Timeline"
            subtitle="Milestones and achievements throughout my programming journey"
          />
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            suppressHydrationWarning
          >
            <CodingJourneyTimeline />
          </motion.div>
        </div>
      </section>
    </div>
    </AnimatedBackground>
  );
}
