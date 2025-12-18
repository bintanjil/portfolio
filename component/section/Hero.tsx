"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import Button from "@/component/ui/button";
import SocialLinks from "@/component/common/SocialLinks";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import { TextScramble, ScrollReveal, ParallaxSection } from "@/component/animations";
import { TypingAnimation, GlitchText } from "@/component/effects";
import Link from "next/link";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { playSound } from "@/lib/sounds";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    playSound('notification');
    toast.success("CV Download Started!", {
      description: "Your download will begin shortly",
      duration: 2000,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">{/* Floating tech badges */}
        <div className="absolute top-20 left-1/4 px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-sm border border-indigo-500/30 text-xs text-indigo-300 font-medium animate-float shadow-lg shadow-indigo-500/20" style={{ animationDelay: '0s', animationDuration: '6s' }} suppressHydrationWarning>
          ASP.NET
        </div>
        <div className="absolute top-1/3 right-1/4 px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-sm border border-violet-500/30 text-xs text-violet-300 font-medium animate-float shadow-lg shadow-violet-500/20" style={{ animationDelay: '2s', animationDuration: '7s' }} suppressHydrationWarning>
          NestJS
        </div>
        <div className="absolute bottom-1/4 left-1/5 px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-sm border border-purple-500/30 text-xs text-purple-300 font-medium animate-float shadow-lg shadow-purple-500/20" style={{ animationDelay: '4s', animationDuration: '8s' }} suppressHydrationWarning>
          C++
        </div>

      <div className="section-container relative z-10" suppressHydrationWarning>
        <div className="grid lg:grid-cols-2 gap-12 items-center" suppressHydrationWarning>
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            suppressHydrationWarning
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium backdrop-blur-sm border border-indigo-500/20" suppressHydrationWarning>
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-tight">
              <span className="block text-3xl md:text-4xl font-semibold text-slate-400 mb-2">Hi, I'm</span>
              <GlitchText>
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  <TextScramble text={personalInfo.name} />
                </span>
              </GlitchText>
            </h1>

            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text" suppressHydrationWarning>
              <TypingAnimation
                texts={[
                  personalInfo.title,
                  "Full-Stack Developer",
                  "Competitive Programmer",
                  "Problem Solver"
                ]}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2500}
              />
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4" suppressHydrationWarning>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link href="/contact" prefetch={true}>
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:via-violet-500 hover:to-purple-500 text-white shadow-lg hover:shadow-[0_20px_40px_rgba(99,102,241,0.6)] transition-all duration-300 border-0"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link href="/resume/Tanjil_Cv.pdf" target="_blank" onClick={handleDownloadCV}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-700 hover:bg-slate-900/70 hover:border-indigo-400 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </Link>
              </motion.div>
            </div>

            <div className="pt-6" suppressHydrationWarning>
              <SocialLinks />
            </div>
          </div>

          {/* Profile Picture */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            suppressHydrationWarning
          >
            <div className="relative w-full max-w-md mx-auto" suppressHydrationWarning>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full opacity-20 blur-3xl animate-pulse" suppressHydrationWarning />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-1000" suppressHydrationWarning />

              {/* Profile image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-indigo-500/30 transform hover:scale-105 hover:rotate-2 transition-all duration-500 animate-bounceIn group" suppressHydrationWarning>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 group-hover:opacity-30 transition-opacity" suppressHydrationWarning />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" suppressHydrationWarning />
                <Image
                  src="/tanjil.jpeg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 animate-float border border-slate-700" suppressHydrationWarning>
                <div className="flex items-center gap-2" suppressHydrationWarning>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" suppressHydrationWarning />
                  <span className="text-sm font-medium text-slate-200">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" suppressHydrationWarning>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full p-1" suppressHydrationWarning>
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full mx-auto animate-scroll" suppressHydrationWarning />
        </div>
      </div>
    </section>
  );
}