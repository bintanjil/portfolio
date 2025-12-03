"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Prevent SSR hydration mismatch
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Spinning ring loader */}
            <div className="relative w-40 h-40">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="50 390"
                  />
                  <defs>
                    <linearGradient id="gradient1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <svg viewBox="0 0 128 128" className="w-full h-full">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="60 290"
                  />
                  <defs>
                    <linearGradient id="gradient2">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <svg viewBox="0 0 96 96" className="w-full h-full">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="40 220"
                  />
                  <defs>
                    <linearGradient id="gradient3">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Center content */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(99, 102, 241, 0.5)',
                      '0 0 40px rgba(139, 92, 246, 0.8)',
                      '0 0 20px rgba(99, 102, 241, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl font-black bg-gradient-to-br from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                >
                  T
                </motion.div>
              </motion.div>
            </div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center space-y-2"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Tanjil Bin Mohiuddin
              </h2>
              <p className="text-slate-400 text-sm">Full-Stack Developer</p>
            </motion.div>

            {/* Progress indicator */}
            <div className="w-80 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-slate-400"
                >
                  {progress < 25 && "Loading"}
                  {progress >= 25 && progress < 50 && "Preparing"}
                  {progress >= 50 && progress < 75 && "Setting up"}
                  {progress >= 75 && progress < 100 && "Almost ready"}
                  {progress === 100 && "Done"}
                </motion.span>
                <span className="text-indigo-400 font-bold">{progress}%</span>
              </div>

              <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full relative"
                >
                  <motion.div
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Pulse dots */}
              <div className="flex justify-center gap-3 pt-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
