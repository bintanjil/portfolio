"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{
        x: [0, -2, 2, -2, 2, 0],
        transition: { duration: 0.2 },
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 text-cyan-500 opacity-70"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
          transform: "translateX(-2px)",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 text-red-500 opacity-70"
        style={{
          clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
          transform: "translateX(2px)",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </motion.div>
  );
}
