"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { getTechIconConfig } from "@/lib/techIcons";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-bg-card rounded-2xl border border-border-subtle hover:border-accent-blue overflow-hidden transition-all duration-300 group flex flex-col justify-between h-full"
    >
      <div className="p-5 sm:p-6 flex flex-col justify-between h-full">
        <div>
          {/* Category Label & Optional Featured Badge */}
          <div className="flex items-center justify-between mb-3 gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary uppercase">
                {project.category}
              </span>
              {project.isFeatured && (
                <span className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue uppercase">
                  FEATURED
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono text-text-secondary">0{index + 1}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase group-hover:text-accent-blue transition-colors mb-2">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technology Stack Chips (Icon + Name) */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => {
              const { icon: TechIcon } = getTechIconConfig(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-bg-card text-[11px] font-mono text-text-primary border border-border-subtle"
                >
                  <TechIcon className="w-3.5 h-3.5 shrink-0 text-accent-blue" />
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Live Demo + GitHub Buttons */}
        <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-accent-blue hover:text-white transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-text-secondary hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
