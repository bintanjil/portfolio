import { GraduationCap, Star } from "lucide-react";
import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" number="05" eyebrow="Education" title="Academic Background">
      <Reveal>
        <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 sm:px-8">
            <span>Undergraduate</span>
            <span className="text-neutral-950">{education.status}</span>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  {education.degree}
                </h3>
                <p className="mt-1 text-neutral-500">{education.institution}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                  <li>
                    • CGPA <span className="text-neutral-950">{education.gpa}</span>
                  </li>
                  <li>• {education.duration}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-3 border-t border-neutral-200 pt-6 sm:grid-cols-2">
              {education.awards.map((award) => (
                <div key={award.title} className="rounded-xl border border-neutral-200 p-4">
                  <p className="flex items-center gap-2 font-semibold text-neutral-950">
                    <Star className="h-4 w-4" />
                    {award.title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-400">
                    {award.period}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
