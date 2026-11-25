import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" number="02" eyebrow="Work Experience" title="Industry Roles">
      <div className="relative border-l border-neutral-200">
        {experience.map((job, i) => (
          <Reveal key={`${job.role}-${job.period}`} delay={i * 80}>
            <article className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full border border-neutral-300 bg-white" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">{job.role}</h3>
                <span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-neutral-500">@ {job.company}</p>
              {job.location && (
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-400">
                  {job.location}
                </p>
              )}
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-neutral-600">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
