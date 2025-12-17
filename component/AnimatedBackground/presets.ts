import { ColorPreset } from "./types";

export const COLOR_PRESETS: ColorPreset[] = [
  {
    name: "purple-pink",
    colors: ["#8b5cf6", "#a855f7", "#c026d3", "#ec4899"],
    gradient: "from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]",
  },
  {
    name: "blue-teal",
    colors: ["#3b82f6", "#2563eb", "#06b6d4", "#14b8a6"],
    gradient: "from-[#0a1628] via-[#0f2744] to-[#0a1628]",
  },
  {
    name: "green-yellow",
    colors: ["#10b981", "#14b8a6", "#22c55e", "#eab308"],
    gradient: "from-[#0a1e15] via-[#0f2920] to-[#0a1e15]",
  },
  {
    name: "monochrome",
    colors: ["#6b7280", "#9ca3af", "#d1d5db", "#e5e7eb"],
    gradient: "from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]",
  },
];

export const getPresetByTheme = (theme: string): ColorPreset | undefined => {
  return COLOR_PRESETS.find(preset => preset.name === theme);
};
