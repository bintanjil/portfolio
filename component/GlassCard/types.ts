export type BlurIntensity = "light" | "medium" | "strong" | "extra-strong";

export type BorderOpacity = "none" | "low" | "medium" | "high";

export type HoverEffect = "none" | "lift" | "glow" | "scale" | "shine";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blurIntensity?: BlurIntensity;
  borderOpacity?: BorderOpacity;
  hoverEffect?: HoverEffect;
  padding?: "none" | "small" | "medium" | "large" | "xl";
  as?: "div" | "section" | "article" | "aside";
  glowColor?: string;
  animated?: boolean;
}

export const BLUR_VALUES: Record<BlurIntensity, string> = {
  light: "backdrop-blur-sm",
  medium: "backdrop-blur-md",
  strong: "backdrop-blur-lg",
  "extra-strong": "backdrop-blur-xl",
};

export const BORDER_VALUES: Record<BorderOpacity, string> = {
  none: "border-transparent",
  low: "border-white/5",
  medium: "border-white/10",
  high: "border-white/20",
};

export const PADDING_VALUES: Record<string, string> = {
  none: "",
  small: "p-4",
  medium: "p-6 md:p-8",
  large: "p-8 md:p-10",
  xl: "p-10 md:p-12",
};
