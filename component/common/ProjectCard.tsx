"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/component/ui/card";
import Badge from "@/component/ui/badge";
import { Github, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`project-card-${project.id}`}
        onClick={() => setIsOpen(true)}
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          rotateX: 5,
          y: -10,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        style={{ perspective: 1000 }}
        className="cursor-pointer"
      >
      <Card className="flex flex-col h-full hover:shadow-[0_20px_60px_rgba(99,102,241,0.6)] transition-all duration-500 border-slate-800 bg-slate-900/50 group hover:border-indigo-500/80 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
      <CardHeader>
        <motion.div layoutId={`project-title-${project.id}`}>
        <CardTitle className="flex items-start justify-between gap-4 text-slate-100">
          <span className="group-hover:text-indigo-400 transition-colors">{project.title}</span>
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            )}
          </div>
        </CardTitle>
        </motion.div>
        <motion.div layoutId={`project-description-${project.id}`}>
        <CardDescription className="text-slate-400">{project.description}</CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm text-slate-100">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-slate-400 flex gap-2">
                <span className="text-indigo-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.div className="mt-auto" layoutId={`project-tech-${project.id}`}>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary">+{project.technologies.length - 4}</Badge>
            )}
          </div>
        </motion.div>
      </CardContent>
    </Card>
    </motion.div>

    {/* Full Screen Modal */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          suppressHydrationWarning
        >
          <motion.div
            layoutId={`project-card-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative"
            suppressHydrationWarning
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6 text-slate-300" />
            </button>

            <div className="p-8">
              {/* Title */}
              <motion.div layoutId={`project-title-${project.id}`} className="mb-4">
                <h2 className="text-4xl font-bold text-slate-100 mb-4">{project.title}</h2>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Source
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div layoutId={`project-description-${project.id}`} className="mb-6">
                <p className="text-lg text-slate-300">{project.description}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex gap-3 text-slate-400"
                    >
                      <span className="text-indigo-400 text-xl">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div
                layoutId={`project-tech-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}