"use client";

import Projects from "@/component/section/Project";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import PageTransition from "@/component/common/PageTransition";
import { useEffect } from "react";
import { toast } from "sonner";
import { playSound } from "@/lib/sounds";

export default function ProjectsPage() {
  useEffect(() => {
    playSound('notification');
    toast.info("Projects Page", {
      description: "Explore my latest work and projects",
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
      <div className="min-h-screen pt-20">
        <Projects />
      </div>
    </AnimatedBackground>
  );
}