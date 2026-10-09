import Section from "@/component/ui/Section";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-6 gap-y-2 text-[15px] leading-relaxed sm:grid-cols-[10rem_1fr]">
        {skills.map((group) => (
          <div key={group.category} className="contents">
            <dt className="font-medium text-ink">{group.category}</dt>
            <dd className="mb-2 text-ink/80 sm:mb-0">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
