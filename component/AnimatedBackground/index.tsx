"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { AnimatedBackgroundProps, BlobConfig } from "./types";
import { 
  SPEED_DURATIONS, 
  INTENSITY_OPACITY, 
  getAnimationGenerator 
} from "./animations";
import { getPresetByTheme } from "./presets";

export default function AnimatedBackground({
  children,
  blobColors,
  blobCount = 3,
  animationSpeed = "medium",
  pattern = "perlin-noise",
  theme = "purple-pink",
  intensity = "medium",
  enableParallax = false,
  enableMouseInteraction = false,
  className = "",
  bgGradient,
}: AnimatedBackgroundProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Intersection Observer for performance
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Mouse interaction
  useEffect(() => {
    if (!enableMouseInteraction || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableMouseInteraction, prefersReducedMotion]);

  // Parallax on scroll
  useEffect(() => {
    if (!enableParallax || prefersReducedMotion) return;

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax, prefersReducedMotion]);

  // Get colors from theme or custom
  const colors = useMemo(() => {
    if (blobColors && blobColors.length > 0) {
      return blobColors;
    }
    const preset = getPresetByTheme(theme);
    return preset ? preset.colors : ["#8b5cf6", "#a855f7", "#c026d3"];
  }, [blobColors, theme]);

  // Get gradient
  const gradient = useMemo(() => {
    if (bgGradient) return bgGradient;
    const preset = getPresetByTheme(theme);
    return preset?.gradient || "from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]";
  }, [bgGradient, theme]);

  // Generate blob configurations
  const blobs = useMemo((): BlobConfig[] => {
    return Array.from({ length: Math.min(Math.max(blobCount, 2), 5) }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: 250 + i * 80 + (intensity === "high" ? 100 : intensity === "low" ? -50 : 0),
      opacity: INTENSITY_OPACITY[intensity],
      animationDelay: -(i * (SPEED_DURATIONS[animationSpeed] / blobCount)),
      patternOffset: i * 15,
    }));
  }, [blobCount, colors, intensity, animationSpeed]);

  const duration = SPEED_DURATIONS[animationSpeed];
  const animationGenerator = getAnimationGenerator(pattern);

  // Generate animation styles
  const animationStyles = useMemo(() => {
    if (prefersReducedMotion) return "";
    return blobs.map(blob => animationGenerator(blob.id, duration)).join("\n");
  }, [blobs, animationGenerator, duration, prefersReducedMotion]);

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Animated Blobs */}
      {isVisible && !prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {blobs.map((blob) => (
            <div
              key={blob.id}
              className="absolute rounded-full mix-blend-screen filter blur-3xl"
              style={{
                width: `${blob.size}px`,
                height: `${blob.size}px`,
                backgroundColor: blob.color,
                opacity: blob.opacity,
                left: `${20 + blob.patternOffset}%`,
                top: `${30 + blob.patternOffset}%`,
                animation: `${pattern}-${blob.id} ${duration}s ease-in-out infinite`,
                animationDelay: `${blob.animationDelay}s`,
                willChange: "transform",
                transform: enableMouseInteraction 
                  ? `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                  : undefined,
                transition: enableMouseInteraction ? "transform 0.3s ease-out" : undefined,
              }}
            />
          ))}
        </div>
      )}

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Dynamic Animation Styles */}
      <style jsx>{animationStyles}</style>
    </div>
  );
}

// Export types and utilities
export * from "./types";
export * from "./presets";
