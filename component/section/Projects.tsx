import Section from "@/component/ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-9">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-lg font-semibold text-ink">{project.title}</h3>
              <span className="flex gap-3 text-sm">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">
                    [code]
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link">
                    [frontend]
                  </a>
                )}
              </span>
            </div>
            <p className="mt-0.5 text-sm italic text-muted">
              {project.technologies.join(", ")}
            </p>
            <p className="mt-2 text-[15px] leading-7 text-ink/85">{project.longDescription}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
