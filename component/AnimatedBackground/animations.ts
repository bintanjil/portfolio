import { AnimationSpeed, IntensityLevel } from "./types";

// Speed duration mapping
export const SPEED_DURATIONS: Record<AnimationSpeed, number> = {
  slow: 45,
  medium: 30,
  fast: 20,
};

// Intensity opacity mapping
export const INTENSITY_OPACITY: Record<IntensityLevel, number> = {
  low: 0.2,
  medium: 0.35,
  high: 0.5,
};

// Generate Perlin Noise keyframes (smooth organic movement)
export const generatePerlinNoiseAnimation = (index: number, duration: number) => `
  @keyframes perlin-noise-${index} {
    0% { transform: translate(0%, 0%) scale(1); }
    10% { transform: translate(${15 + index * 5}%, ${-10 - index * 3}%) scale(1.05); }
    20% { transform: translate(${-8 + index * 4}%, ${20 + index * 4}%) scale(0.95); }
    30% { transform: translate(${25 - index * 3}%, ${-15 + index * 5}%) scale(1.08); }
    40% { transform: translate(${-18 + index * 6}%, ${8 - index * 4}%) scale(0.92); }
    50% { transform: translate(${12 + index * 4}%, ${-25 + index * 6}%) scale(1.1); }
    60% { transform: translate(${-22 - index * 3}%, ${15 - index * 5}%) scale(0.9); }
    70% { transform: translate(${18 - index * 5}%, ${-18 + index * 4}%) scale(1.05); }
    80% { transform: translate(${-12 + index * 4}%, ${22 + index * 3}%) scale(0.95); }
    90% { transform: translate(${8 - index * 6}%, ${-12 - index * 4}%) scale(1.02); }
    100% { transform: translate(0%, 0%) scale(1); }
  }
`;

// Generate Circular Orbit keyframes
export const generateCircularOrbitAnimation = (index: number, duration: number) => {
  const radiusX = 30 + index * 10;
  const radiusY = 25 + index * 8;
  return `
  @keyframes circular-orbit-${index} {
    0% { transform: translate(0%, 0%) scale(1); }
    25% { transform: translate(${radiusX}%, ${radiusY}%) scale(1.1); }
    50% { transform: translate(0%, ${radiusY * 2}%) scale(0.95); }
    75% { transform: translate(${-radiusX}%, ${radiusY}%) scale(1.05); }
    100% { transform: translate(0%, 0%) scale(1); }
  }
`;
};

// Generate Diagonal Drift keyframes
export const generateDiagonalDriftAnimation = (index: number, duration: number) => {
  const angles = [45, 135, 225, 315];
  const angle = angles[index % angles.length];
  
  const getTransform = (progress: number) => {
    const distance = 200 * progress;
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * distance;
    const y = Math.sin(radians) * distance;
    return `translate(${x - 100}%, ${y - 100}%)`;
  };
  
  return `
  @keyframes diagonal-drift-${index} {
    from { transform: ${getTransform(0)} scale(1); }
    to { transform: ${getTransform(1)} scale(1); }
  }
`;
};

// Generate Figure-8 keyframes
export const generateFigure8Animation = (index: number, duration: number) => {
  const scale = 20 + index * 5;
  return `
  @keyframes figure-8-${index} {
    0% { transform: translate(0%, 0%) scale(1); }
    12.5% { transform: translate(${scale}%, ${-scale * 0.8}%) scale(1.05); }
    25% { transform: translate(${scale * 1.4}%, 0%) scale(1.1); }
    37.5% { transform: translate(${scale}%, ${scale * 0.8}%) scale(1.05); }
    50% { transform: translate(0%, 0%) scale(1); }
    62.5% { transform: translate(${-scale}%, ${-scale * 0.8}%) scale(1.05); }
    75% { transform: translate(${-scale * 1.4}%, 0%) scale(1.1); }
    87.5% { transform: translate(${-scale}%, ${scale * 0.8}%) scale(1.05); }
    100% { transform: translate(0%, 0%) scale(1); }
  }
`;
};

// Generate Random Walk keyframes
export const generateRandomWalkAnimation = (index: number, duration: number) => {
  const points = [
    { x: 0, y: 0 },
    { x: 15 + index * 5, y: -12 - index * 3 },
    { x: -18 + index * 4, y: 8 + index * 6 },
    { x: 22 - index * 6, y: -20 + index * 4 },
    { x: -10 + index * 3, y: 18 - index * 5 },
    { x: 12 - index * 4, y: -15 + index * 6 },
    { x: 0, y: 0 },
  ];
  
  const keyframes = points.map((point, i) => {
    const percentage = (i / (points.length - 1)) * 100;
    const scale = 0.95 + Math.sin((i / points.length) * Math.PI) * 0.15;
    return `${percentage}% { transform: translate(${point.x}%, ${point.y}%) scale(${scale}); }`;
  }).join('\n    ');
  
  return `
  @keyframes random-walk-${index} {
    ${keyframes}
  }
`;
};

// Get animation function based on pattern
export const getAnimationGenerator = (pattern: string) => {
  switch (pattern) {
    case "circular-orbit":
      return generateCircularOrbitAnimation;
    case "diagonal-drift":
      return generateDiagonalDriftAnimation;
    case "figure-8":
      return generateFigure8Animation;
    case "random-walk":
      return generateRandomWalkAnimation;
    case "perlin-noise":
    default:
      return generatePerlinNoiseAnimation;
  }
};
