"use client";

import { motion } from "framer-motion";

interface SVGPathAnimationProps {
  path: string;
  duration?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  viewBox?: string;
}

export default function SVGPathAnimation({
  path,
  duration = 2,
  strokeColor = "#6366f1",
  strokeWidth = 2,
  className = "",
  viewBox = "0 0 100 100",
}: SVGPathAnimationProps) {
  return (
    <svg viewBox={viewBox} className={className}>
      <motion.path
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration, ease: "easeInOut" },
          opacity: { duration: 0.2 },
        }}
      />
    </svg>
  );
}
