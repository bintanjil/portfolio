"use client";

import { useMemo, useState } from "react";
import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import ProjectCard from "@/component/common/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Projects"
          subtitle="A selection of enterprise and full-stack projects I've built."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active === category
                  ? "bg-indigo-600 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
