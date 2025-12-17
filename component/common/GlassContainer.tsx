"use client";

import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centerContent?: boolean;
}

/**
 * Wrapper component that provides consistent spacing and max-width
 * for glass cards within sections
 */
export default function GlassContainer({
  children,
  className = "",
  maxWidth = "xl",
  centerContent = true,
}: GlassContainerProps) {
  const maxWidthClass = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-6xl",
    "2xl": "max-w-7xl",
    full: "max-w-full",
  }[maxWidth];

  const centerClass = centerContent ? "mx-auto" : "";

  return (
    <div className={`${maxWidthClass} ${centerClass} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
