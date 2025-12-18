"use client";

import { ReactNode, useMemo } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  bgGradient?: string;
  blobColors?: string[];
  blobCount?: number;
  animationSpeed?: "slow" | "medium" | "fast";
  className?: string;
}

export default function AnimatedBackground({
  children,
  bgGradient = "from-slate-950 via-slate-900 to-black",
  blobColors = ["#8b5cf6", "#ec4899", "#3b82f6"],
  blobCount = 3,
  animationSpeed = "medium",
  className = "",
}: AnimatedBackgroundProps) {
  // Generate blob configurations with diagonal movement angles
  const blobs = useMemo(() => {
    const angles = [45, 135, 225, 315, 60, 120]; // Different diagonal angles
    return Array.from({ length: blobCount }, (_, i) => ({
      id: i,
      color: blobColors[i % blobColors.length],
      size: 300 + (i * 80),
      angle: angles[i % angles.length],
    }));
  }, [blobCount, blobColors]);

  // Animation duration based on speed
  const duration = {
    slow: "40s",
    medium: "25s",
    fast: "15s",
  }[animationSpeed];

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`} suppressHydrationWarning>
      {/* Deep Background Gradient with enhanced darkness */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`} suppressHydrationWarning />
      <div className="absolute inset-0 bg-black/40" suppressHydrationWarning />

      {/* Floating Gradient Blobs - Deeper and more transparent */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className="absolute rounded-full mix-blend-screen filter blur-3xl opacity-20"
            style={{
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              backgroundColor: blob.color,
              animation: `drift-${blob.angle} ${duration} linear infinite`,
              animationDelay: `${blob.id * -5}s`,
            }}
            suppressHydrationWarning
          />
        ))}
      </div>

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
        suppressHydrationWarning
      />
      
      {/* Additional depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" suppressHydrationWarning />

      {/* Content */}
      <div className="relative z-10" suppressHydrationWarning>
        {children}
      </div>

      <style jsx>{`
        /* Diagonal drift animations - seamless loop from edge to edge */
        
        @keyframes drift-45 {
          from {
            transform: translate(-50vw, 150vh) scale(1);
          }
          to {
            transform: translate(150vw, -50vh) scale(1);
          }
        }

        @keyframes drift-135 {
          from {
            transform: translate(150vw, 150vh) scale(1);
          }
          to {
            transform: translate(-50vw, -50vh) scale(1);
          }
        }

        @keyframes drift-225 {
          from {
            transform: translate(150vw, -50vh) scale(1);
          }
          to {
            transform: translate(-50vw, 150vh) scale(1);
          }
        }

        @keyframes drift-315 {
          from {
            transform: translate(-50vw, -50vh) scale(1);
          }
          to {
            transform: translate(150vw, 150vh) scale(1);
          }
        }

        @keyframes drift-60 {
          from {
            transform: translate(-40vw, 140vh) scale(1);
          }
          to {
            transform: translate(140vw, -40vh) scale(1);
          }
        }

        @keyframes drift-120 {
          from {
            transform: translate(140vw, 140vh) scale(1);
          }
          to {
            transform: translate(-40vw, -40vh) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
