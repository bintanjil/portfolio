'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Lightbulb, ExternalLink, Github, Calendar, TrendingUp } from 'lucide-react';
import { roadmapProjects, RoadmapProject } from '@/data/roadmap';
import SectionTitle from '@/component/ui/SectionTitle';

export default function Roadmap() {
  const completed = roadmapProjects.filter(p => p.status === 'completed');
  const inProgress = roadmapProjects.filter(p => p.status === 'in-progress');
  const planned = roadmapProjects.filter(p => p.status === 'planned');

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Project Roadmap"
          subtitle="My journey from completed milestones to future innovations"
        />

        {/* Timeline View */}
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500" />

          {/* Completed Projects */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <h3 className="text-2xl font-bold text-green-500">Completed Projects</h3>
            </motion.div>
            <div className="space-y-8">
              {completed.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  align={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>

          {/* In Progress Projects */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Clock className="w-6 h-6 text-blue-500 animate-pulse" />
              <h3 className="text-2xl font-bold text-blue-500">Currently Building</h3>
            </motion.div>
            <div className="space-y-8">
              {inProgress.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  align={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>

          {/* Planned Projects */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Lightbulb className="w-6 h-6 text-purple-500" />
              <h3 className="text-2xl font-bold text-purple-500">Next on the Horizon</h3>
            </motion.div>
            <div className="space-y-8">
              {planned.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  align={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  align,
}: {
  project: RoadmapProject;
  index: number;
  align: 'left' | 'right';
}) {
  const statusColors = {
    completed: 'bg-green-500/10 border-green-500/30 text-green-500',
    'in-progress': 'bg-blue-500/10 border-blue-500/30 text-blue-500',
    planned: 'bg-purple-500/10 border-purple-500/30 text-purple-500',
  };

  const iconColors = {
    completed: 'text-green-500 bg-green-500/20',
    'in-progress': 'text-blue-500 bg-blue-500/20',
    planned: 'text-purple-500 bg-purple-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex ${
        align === 'right' ? 'md:flex-row-reverse' : ''
      } items-center gap-8`}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

      {/* Content */}
      <div className={`flex-1 ml-20 md:ml-0 ${align === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          whileHover={{ 
            scale: 1.06, 
            y: -12,
            rotateZ: 2,
            boxShadow: "0 30px 60px rgba(99,102,241,0.7)"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 15
          }}
          className={`p-6 rounded-2xl border-2 backdrop-blur-sm hover:shadow-[0_30px_60px_rgba(99,102,241,0.7)] transition-all duration-300 cursor-pointer relative overflow-hidden ${statusColors[project.status]}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    iconColors[project.status]
                  }`}
                >
                  {project.status.replace('-', ' ')}
                </span>
                {project.progress && (
                  <span className="text-sm text-muted-foreground">
                    {project.progress}% Complete
                  </span>
                )}
              </div>
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{project.category}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm mb-4 leading-relaxed">{project.description}</p>

          {/* Progress Bar (for in-progress) */}
          {project.progress && (
            <div className="mb-4">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                />
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-background/50 border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-4 space-y-1">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {project.startDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.completionDate
                    ? `${project.startDate} - ${project.completionDate}`
                    : project.startDate}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-background/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-background/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
