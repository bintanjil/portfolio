import Hero from "@/component/section/Hero";
import QuickStats from "@/component/section/QuickStats";
import PageLoader from "@/component/ui/PageLoader";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin | Software Engineer",
  description: "Portfolio of Tanjil Bin Mohiuddin - Software Engineer and Full-Stack Developer specializing in ASP.NET, NestJS, and Next.js",
};

export default function Home() {
  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={4}
      animationSpeed="medium"
      bgGradient="from-black via-slate-950 to-black"
    >
      <PageLoader />
      <Hero />
      <QuickStats />
    </AnimatedBackground>
  );
}
