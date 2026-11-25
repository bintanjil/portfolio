import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" number="06" eyebrow="Technical Skills" title="Toolkit">
      <Reveal>
        <ul className="border-t border-neutral-200">
          {skills.map((group, i) => (
            <li
              key={group.category}
              className="flex flex-col gap-3 border-b border-neutral-200 py-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex w-56 shrink-0 items-center gap-4">
                <span className="font-mono text-[11px] text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium text-neutral-950">{group.category}</span>
              </span>
              <span className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 px-3 py-0.5 font-mono text-[11px] text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
