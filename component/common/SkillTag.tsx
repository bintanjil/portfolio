import Badge from "@/component/ui/badge";

interface SkillTagProps {
  name: string;
}

export default function SkillTag({ name }: SkillTagProps) {
  return (
    <Badge
      variant="secondary"
      className="cursor-default px-3 py-1.5 text-sm transition-colors hover:bg-indigo-50 hover:text-indigo-700"
    >
      {name}
    </Badge>
  );
}
