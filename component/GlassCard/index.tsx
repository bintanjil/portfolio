"use client";

import { useState } from "react";
import { GlassCardProps, BLUR_VALUES, BORDER_VALUES, PADDING_VALUES } from "./types";

export default function GlassCard({
  children,
  className = "",
  blurIntensity = "medium",
  borderOpacity = "medium",
  hoverEffect = "lift",
  padding = "medium",
  as: Component = "div",
  glowColor = "#8b5cf6",
  animated = true,
}: GlassCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Get CSS values
  const blurClass = BLUR_VALUES[blurIntensity];
  const borderClass = BORDER_VALUES[borderOpacity];
  const paddingClass = PADDING_VALUES[padding];

  // Hover effect classes
  const getHoverClasses = () => {
    if (hoverEffect === "none") return "";
    
    const effects: Record<string, string> = {
      lift: "hover:-translate-y-2 hover:shadow-2xl",
      glow: `hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`,
      scale: "hover:scale-[1.02]",
      shine: "hover:bg-white/[0.08]",
    };

    return `transition-all duration-300 ${effects[hoverEffect] || effects.lift}`;
  };

  // Check for backdrop-filter support
  const hasBackdropSupport = typeof window !== 'undefined' && 
    CSS.supports('backdrop-filter', 'blur(10px)');

  return (
    <Component
      className={`
        relative
        bg-white/[0.03]
        ${blurClass}
        rounded-2xl
        border
        ${borderClass}
        ${paddingClass}
        ${animated ? getHoverClasses() : ""}
        shadow-xl
        shadow-black/10
        overflow-hidden
        group
        ${className}
      `.trim()}
      style={{
        // Fallback for browsers without backdrop-filter support
        background: !hasBackdropSupport 
          ? 'rgba(15, 23, 42, 0.85)'
          : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient glow */}
      <div 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-2xl"
        aria-hidden="true"
      />

      {/* Animated shine effect on hover */}
      {animated && hoverEffect === "shine" && (
        <div
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br from-white/10 via-transparent to-transparent
            transition-opacity duration-500 rounded-2xl pointer-events-none
          `}
          aria-hidden="true"
        />
      )}

      {/* Hover glow effect */}
      {animated && hoverEffect === "glow" && isHovered && (
        <div
          className="absolute inset-0 opacity-50 blur-xl -z-10 rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, ${glowColor}40, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Border glow on hover */}
      {animated && (
        <div
          className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
            transition-opacity duration-300 pointer-events-none
          `}
          style={{
            background: `linear-gradient(135deg, ${glowColor}20, transparent)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom subtle shadow */}
      <div 
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
        aria-hidden="true"
      />
    </Component>
  );
}

// Export types
export * from "./types";
