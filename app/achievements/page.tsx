import Achievements from "@/component/section/Achievements";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Tanjil Bin Mohiuddin",
  description: "Competitive programming achievements - LeetCode (1653 Top 16.91%), Codeforces (1211 Pupil), ICPC Dhaka 2025 (519/1842), and IEEE AIUB leadership",
};

export default function AchievementsPage() {
  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={3}
      animationSpeed="medium"
      bgGradient="from-black via-slate-950 to-black"
    >
      <div className="min-h-screen pt-20">
        <Achievements />
      </div>
    </AnimatedBackground>
  );
}
