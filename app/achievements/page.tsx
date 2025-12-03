import Achievements from "@/component/section/Achievements";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Tanjil Bin Mohiuddin",
  description: "Competitive programming achievements - LeetCode (1653 Top 16.91%), Codeforces (1211 Pupil), ICPC Dhaka 2025 (519/1842), and IEEE AIUB leadership",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <Achievements />
    </div>
  );
}
