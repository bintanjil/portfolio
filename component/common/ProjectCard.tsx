import { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/component/ui/card";
import Badge from "@/component/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 border-slate-800 bg-slate-900/50 group hover:scale-[1.02] hover:border-indigo-500/50 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-4 text-slate-100">
          <span className="group-hover:text-indigo-400 transition-colors">{project.title}</span>
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            )}
          </div>
        </CardTitle>
        <CardDescription className="text-slate-400">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm text-slate-100">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="text-sm text-slate-400 flex gap-2">
                <span className="text-indigo-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}