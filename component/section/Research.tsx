import { Brain, Eye, Images, MessagesSquare, Microscope, Sparkles } from "lucide-react";
import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import { researchProjects, researchInterests } from "@/data/research";

const interestIcons = [Images, Eye, MessagesSquare, Brain];

export default function Research() {
  return (
    <Section id="research" number="01" eyebrow="Research" title="Research Focus">
      <div className="space-y-6">
        {researchProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 sm:px-8">
                <span>{project.kind}</span>
                <span className="inline-flex shrink-0 items-center gap-2 text-neutral-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  {project.status}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                    <Microscope className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-u">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    {project.affiliation && (
                      <p className="mt-1 text-neutral-500">
                        {project.affiliationLink ? (
                          <a href={project.affiliationLink} target="_blank" rel="noopener noreferrer" className="link-u">
                            {project.affiliation}
                          </a>
                        ) : (
                          project.affiliation
                        )}
                      </p>
                    )}
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                      <li>• {project.area}</li>
                      {project.started && <li>• Since {project.started}</li>}
                      {project.supervisor && (
                        <li>
                          • With{" "}
                          {project.supervisorLink ? (
                            <a
                              href={project.supervisorLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-u text-neutral-950"
                            >
                              {project.supervisor}
                            </a>
                          ) : (
                            <span className="text-neutral-950">{project.supervisor}</span>
                          )}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-200 pt-6">
                  <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <Sparkles className="h-3.5 w-3.5 text-neutral-950" />
                    Summary
                  </p>
                  <p className="mt-3 max-w-3xl text-xl leading-relaxed text-neutral-800">
                    {project.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-[15px] text-neutral-600">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span
                        key={method}
                        className="rounded-full border border-neutral-200 px-3 py-1 font-mono text-[11px] text-neutral-600"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {researchInterests.map((interest, i) => {
          const Icon = interestIcons[i % interestIcons.length];
          return (
            <Reveal key={interest} delay={i * 70}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-neutral-200 p-4 transition-colors hover:border-neutral-950">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-medium leading-snug text-neutral-950">{interest}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
