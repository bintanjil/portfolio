export type AnimationPattern = 
  | "perlin-noise"
  | "circular-orbit"
  | "diagonal-drift"
  | "figure-8"
  | "random-walk";

export type AnimationSpeed = "slow" | "medium" | "fast";

export type IntensityLevel = "low" | "medium" | "high";

export type ColorTheme = 
  | "purple-pink"
  | "blue-teal"
  | "green-yellow"
  | "monochrome"
  | "custom";

export interface BlobConfig {
  id: number;
  color: string;
  size: number;
  opacity: number;
  animationDelay: number;
  patternOffset: number;
}

export interface AnimatedBackgroundProps {
  children: React.ReactNode;
  blobColors?: string[];
  blobCount?: number;
  animationSpeed?: AnimationSpeed;
  pattern?: AnimationPattern;
  theme?: ColorTheme;
  intensity?: IntensityLevel;
  enableParallax?: boolean;
  enableMouseInteraction?: boolean;
  className?: string;
  bgGradient?: string;
}

export interface ColorPreset {
  name: ColorTheme;
  colors: string[];
  gradient: string;
}
