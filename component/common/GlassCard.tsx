"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blurIntensity?: "light" | "medium" | "strong";
  bordered?: boolean;
  hoverable?: boolean;
  padding?: "none" | "small" | "medium" | "large";
  as?: "div" | "section" | "article";
}

export default function GlassCard({
  children,
  className = "",
  blurIntensity = "medium",
  bordered = true,
  hoverable = false,
  padding = "medium",
  as: Component = "div",
}: GlassCardProps) {
  // Blur intensity mapping
  const blurClass = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    strong: "backdrop-blur-xl",
  }[blurIntensity];

  // Padding mapping
  const paddingClass = {
    none: "",
    small: "p-4",
    medium: "p-6 md:p-8",
    large: "p-8 md:p-12",
  }[padding];

  // Border styles
  const borderClass = bordered
    ? "border border-white/10"
    : "";

  // Hover effects
  const hoverClass = hoverable
    ? "transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
    : "transition-colors duration-300";

  return (
    <Component
      className={`
        relative
        bg-white/[0.03]
        ${blurClass}
        rounded-2xl
        ${borderClass}
        ${paddingClass}
        ${hoverClass}
        shadow-xl
        shadow-black/20
        ${className}
      `.trim()}
      style={{
        // Fallback for browsers without backdrop-filter support
        background: typeof window !== 'undefined' && 
          !CSS.supports('backdrop-filter', 'blur(10px)')
          ? 'rgba(15, 23, 42, 0.85)'
          : undefined,
      }}
      suppressHydrationWarning
    >
      {/* Gradient overlay for extra depth */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"
        aria-hidden="true"
        suppressHydrationWarning
      />
      
      {/* Content */}
      <div className="relative z-10" suppressHydrationWarning>
        {children}
      </div>
    </Component>
  );
}
