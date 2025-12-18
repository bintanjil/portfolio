import About from "@/component/section/About";
import Education from "@/component/section/Education";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tanjil Bin Mohiuddin",
  description: "Learn more about Tanjil Bin Mohiuddin - Computer Science student and Full-Stack Developer",
};

export default function AboutPage() {
  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={4}
      animationSpeed="medium"
      bgGradient="from-black via-slate-950 to-black"
    >
      <div className="min-h-screen">
        <About />
        <Education />
      </div>
    </AnimatedBackground>
  );
}