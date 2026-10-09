import Section from "@/component/ui/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-9">
        {experience.map((job) => (
          <article key={`${job.role}-${job.period}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-serif text-lg font-semibold text-ink">{job.role}</h3>
              <span className="text-sm tabular-nums text-faint">{job.period}</span>
            </div>
            <p className="text-[15px] text-muted">
              {job.company}
              {job.location && <>, {job.location}</>}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-ink/85 marker:text-faint">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
