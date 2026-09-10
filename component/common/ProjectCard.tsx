"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import Badge from "@/component/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="flex h-full flex-col border-t-4 border-t-indigo-600 transition-all duration-300 hover:-transtone-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="mb-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <CardTitle className="flex items-start justify-between gap-4">
          {project.title}
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="text-stone-500 transition-colors hover:text-indigo-600"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="text-stone-500 transition-colors hover:text-indigo-600"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </div>
        </CardTitle>
        <p className="text-sm text-stone-600">{project.description}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p
          className={cn(
            "text-sm leading-relaxed text-stone-600",
            !open && "line-clamp-2"
          )}
        >
          {project.longDescription}
        </p>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          {open ? "Show less" : "Show details"}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300",
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0">
            <h4 className="mb-2 text-sm font-semibold text-stone-900">
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-stone-600">
                  <span className="text-indigo-600">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-stone-100 pt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
