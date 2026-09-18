import Badge from "@/component/ui/badge";

interface SkillTagProps {
  name: string;
}

export default function SkillTag({ name }: SkillTagProps) {
  return (
    <Badge
      variant="secondary"
      className="cursor-default px-3 py-1.5 text-sm transition-colors hover:bg-green-50 hover:text-green-900"
    >
      {name}
    </Badge>
  );
}
