import Badge from "@/component/ui/badge";

interface SkillTagProps {
  skill: {
    name: string;
    level: string;
  };
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <Badge variant="secondary" className="text-sm py-1.5 px-3 bg-slate-900/50 text-slate-300 hover:bg-indigo-950/50 hover:text-indigo-400 transition-colors border border-slate-800">
      {skill.name}
    </Badge>
  );
}