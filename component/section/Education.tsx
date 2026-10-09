import Section from "@/component/ui/Section";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-serif text-lg font-semibold text-ink">{education.degree}</h3>
        <span className="text-sm tabular-nums text-faint">{education.duration}</span>
      </div>
      <p className="text-[15px] text-muted">{education.institution}</p>
      <p className="mt-2 text-[15px] text-ink/90">
        CGPA <span className="font-medium">{education.gpa}</span>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-7 text-ink/90 marker:text-faint">
        {education.awards.map((award) => (
          <li key={award.title}>
            <span className="font-medium">{award.title}</span> ({award.period}).{" "}
            {award.description}
          </li>
        ))}
      </ul>
    </Section>
  );
}
