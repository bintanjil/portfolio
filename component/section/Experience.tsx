import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import { experience } from "@/data/experience";
import { Briefcase, Building2, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-y border-green-100 bg-green-50/40">
      <div className="section-container">
        <SectionTitle
          eyebrow="Career"
          title="Experience"
          subtitle="Building and optimizing enterprise software at Akij iBOS Limited."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-[15px] top-2 w-px bg-neutral-200 sm:left-[19px]" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Reveal key={`${job.role}-${job.period}`} delay={index * 100}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-green-100 bg-white text-green-800 shadow-sm sm:h-10 sm:w-10">
                    <Briefcase className="h-4 w-4" />
                  </span>

                  <div className="rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-md">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-green-800">
                          <Building2 className="h-4 w-4" />
                          {job.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                        <Calendar className="h-3.5 w-3.5" />
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-neutral-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-800" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
