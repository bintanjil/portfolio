import { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionTitle from "@/component/ui/SectionTitle";

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

export const metadata: Metadata = {
  title: "Activity & Timeline | Tanjil Bin Mohiuddin",
  description: "Coding journey, activity statistics, and progress tracking across LeetCode, GitHub, and Codeforces",
};

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
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
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Platform Statistics"
            subtitle="Real-time stats from LeetCode, GitHub, and Codeforces"
          />
          <PlatformStats />
        </div>
      </section>

      {/* Contribution Heatmap */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <ContributionHeatmap />
        </div>
      </section>

      {/* Activity Charts */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Activity Analytics"
            subtitle="Visual representation of coding activity and skill progression"
          />
          <ActivityCharts />
        </div>
      </section>

      {/* Coding Journey Timeline */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Coding Journey Timeline"
            subtitle="Milestones and achievements throughout my programming journey"
          />
          <CodingJourneyTimeline />
        </div>
      </section>
    </div>
  );
}
