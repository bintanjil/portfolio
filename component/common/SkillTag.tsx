"use client";

import { motion } from "framer-motion";
import Badge from "@/component/ui/badge";

interface SkillTagProps {
  skill: {
    name: string;
    level: string;
  };
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.15, 
        rotate: 5,
        y: -5
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Badge variant="secondary" className="text-sm py-1.5 px-3 bg-slate-900/50 text-slate-300 hover:bg-gradient-to-r hover:from-indigo-950/80 hover:to-violet-950/80 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:border-indigo-500/50 transition-all duration-300 border border-slate-800 cursor-pointer">
        {skill.name}
      </Badge>
    </motion.div>
  );
}