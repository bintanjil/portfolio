"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import Link from "next/link";
import { 
  TrendingUp, Code, GitBranch, Trophy, Loader2, 
  MapPin, Music, Zap, Calendar, Star, Activity 
} from "lucide-react";

// Spotlight Card with Beam Effect
function SpotlightCard({ 
  children, 
  className = "",
  size = "default" 
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: "small" | "default" | "large" | "wide";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sizeClasses = {
    small: "md:col-span-1 md:row-span-1",
    default: "md:col-span-1 md:row-span-1",
    large: "md:col-span-2 md:row-span-2",
    wide: "md:col-span-2 md:row-span-1",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl ${sizeClasses[size]} ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      )}
      
      {/* Beam Border Trail */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.4), transparent 40%)`,
            maskImage: 'linear-gradient(transparent, transparent calc(100% - 2px), white calc(100% - 2px))',
          }}
        />
      </div>

      {/* Glow Effect on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full group">
        {children}
      </div>
    </motion.div>
  );
}

export default function QuickStats() {
  const [stats, setStats] = useState({
    leetcode: { value: "...", loading: true },
    github: { value: "...", loading: true },
    codeforces: { value: "...", loading: true },
    streak: { value: "...", loading: true },
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [techStack] = useState([
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "MongoDB", "PostgreSQL", "Tailwind"
  ]);

  useEffect(() => {
    // Fetch LeetCode
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats((prev) => ({
            ...prev,
            leetcode: { value: `${data.totalSolved || 0}+`, loading: false },
            streak: { value: `${data.currentStreak || 0}`, loading: false },
          }));
        }
      })
      .catch((err) => console.error("LeetCode error:", err));

    // Fetch GitHub
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats((prev) => ({
            ...prev,
            github: { value: `${data.totalContributions?.toLocaleString() || 0}+`, loading: false },
          }));
        }
      })
      .catch((err) => console.error("GitHub error:", err));

    // Fetch Codeforces
    fetch("/api/codeforces")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats((prev) => ({
            ...prev,
            codeforces: { value: `${data.rating || 0}`, loading: false },
          }));
        }
      })
      .catch((err) => console.error("Codeforces error:", err));

    // Update time every second
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={3}
      animationSpeed="fast"
      bgGradient="from-black via-slate-950 to-black"
    >
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10" suppressHydrationWarning>
          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[160px] gap-3 md:gap-4" suppressHydrationWarning>
            
            {/* Tech Stack - Large Feature */}
            <SpotlightCard size="large" className="col-span-2 row-span-2 md:col-span-3 md:row-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-100">Tech Stack</div>
                    <div className="text-xs text-slate-400">Daily Tools & Frameworks</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 content-start">
                  {techStack.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-slate-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </SpotlightCard>

            {/* Location & Time - Wide */}
            <SpotlightCard size="wide" className="col-span-2 row-span-1 md:col-span-3 md:row-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 mb-1">Based in</div>
                    <div className="text-lg font-semibold text-slate-100">Dhaka, Bangladesh</div>
                    <div className="text-sm text-slate-400 mt-2 font-mono">
                      {currentTime.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                </div>
              </motion.div>
            </SpotlightCard>

            {/* Activity Status - Wide */}
            <SpotlightCard size="wide" className="col-span-2 row-span-1 md:col-span-3 md:row-span-1">
              <Link href="/activity" className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between h-full group-hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Coding Activity</div>
                      <div className="text-lg font-semibold text-slate-100">View Full Timeline →</div>
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" />
                </motion.div>
              </Link>
            </SpotlightCard>
            
            {/* LeetCode - Small */}
            <SpotlightCard size="default" className="col-span-1 row-span-1 md:col-span-2 md:row-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                  {stats.leetcode.loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Code className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-100">{stats.leetcode.value}</div>
                  <div className="text-xs text-slate-400">LeetCode</div>
                </div>
              </motion.div>
            </SpotlightCard>

            {/* GitHub Contributions - Small */}
            <SpotlightCard size="default" className="col-span-1 row-span-1 md:col-span-2 md:row-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  {stats.github.loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <GitBranch className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-100">{stats.github.value}</div>
                  <div className="text-xs text-slate-400">Commits</div>
                </div>
              </motion.div>
            </SpotlightCard>

            {/* Codeforces Rating - Small */}
            <SpotlightCard size="default" className="col-span-1 row-span-1 md:col-span-2 md:row-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  {stats.codeforces.loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Trophy className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-100">{stats.codeforces.value}</div>
                  <div className="text-xs text-slate-400">CF Rating</div>
                </div>
              </motion.div>
            </SpotlightCard>

            {/* Streak - Small */}
            <SpotlightCard size="default" className="col-span-1 row-span-1 md:col-span-2 md:row-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  {stats.streak.loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <TrendingUp className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-100">{stats.streak.value}</div>
                  <div className="text-xs text-slate-400">Day Streak</div>
                </div>
              </motion.div>
            </SpotlightCard>

          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
