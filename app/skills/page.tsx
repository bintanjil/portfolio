import Skills from "@/component/section/Skills";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Tanjil Bin Mohiuddin",
  description: "Technical skills including C++, C#, ASP.NET, NestJS, Entity Framework, PostgreSQL, and full-stack development",
};

export default function SkillsPage() {
  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={3}
      animationSpeed="slow"
      bgGradient="from-black via-slate-950 to-black"
    >
      <div className="min-h-screen pt-20">
        <Skills />
      </div>
    </AnimatedBackground>
  );
}