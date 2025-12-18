"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/component/ui/SectionTitle";
import ProjectCard from "@/component/common/ProjectCard";
import FloatingElements from "@/component/common/FloatingElements";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/component/animations";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="projects" className="section-padding pt-32 bg-black relative overflow-hidden">
        <div className="section-container relative z-10">
          <SectionTitle
            title="Projects"
            subtitle="A selection of my recent work and personal projects"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding pt-32 bg-black relative overflow-hidden">{/* Simple elegant background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.12),transparent_40%)]" suppressHydrationWarning />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(139,92,246,0.12),transparent_40%)]" suppressHydrationWarning />
      </div>
      <div className="section-container relative z-10" suppressHydrationWarning>
        <ScrollReveal direction="up">
          <SectionTitle
            title="Projects"
            subtitle="A selection of my recent work and personal projects"
          />
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}