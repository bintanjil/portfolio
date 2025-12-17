"use client";

import { motion } from "framer-motion";

interface FloatingElementsProps {
  count?: number;
}

export default function FloatingElements({ count = 8 }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-white"
          style={{
            width: el.size,
            height: el.size,
            left: el.left,
            top: el.top,
            opacity: 0.4,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            x: [0, 50, -30, 40, -20, 0],
            y: [0, -40, 30, -50, 20, 0],
            opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
