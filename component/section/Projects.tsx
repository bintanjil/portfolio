import { ArrowUpRight, Github } from "lucide-react";
import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" number="03" eyebrow="Personal Projects" title="Selected Projects">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-950 sm:p-7">
              <div className="flex items-start justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200">
                  <Github className="h-4 w-4" />
                </span>
                <span className="font-mono text-[11px] text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">
                {project.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                {project.longDescription}
              </p>
              <div className="mb-6 mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-4 font-mono text-[13px] text-neutral-600">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950"
                  >
                    View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950"
                  >
                    Frontend <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
