"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { getTechIconConfig } from "@/lib/techIcons";
import { ArrowUpRight, Github, ExternalLink, Terminal } from "lucide-react";

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
      className="bg-bg-card rounded-2xl border border-white/[0.08] hover:border-accent-blue/40 overflow-hidden transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] h-full"
    >
      <div className="p-5 sm:p-6 flex flex-col justify-between h-full">
        <div>
          {/* Category Label & Optional Featured Badge */}
          <div className="flex items-center justify-between mb-3 gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-secondary uppercase">
                {project.category}
              </span>
              {project.isFeatured && (
                <span className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue uppercase">
                  FEATURED
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono text-text-muted">0{index + 1}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase group-hover:text-accent-blue transition-colors mb-2">
            {project.title}
          </h3>

          {/* Short Description (1-2 lines, ~25 words max) */}
          <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Optional Image screenshot if provided */}
          {project.image && (
            <div className="mb-4 rounded-xl overflow-hidden border border-white/[0.08]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-36 object-cover"
              />
            </div>
          )}

          {/* Special Colab Note for CrewAI Game */}
          {project.colabNote && (
            <div className="mb-4 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-mono flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 shrink-0" />
              <span>{project.colabNote}</span>
            </div>
          )}

          {/* Technology Stack Chips (Icon + Name) */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => {
              const { icon: TechIcon, color } = getTechIconConfig(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-[#141418] text-[11px] font-mono text-text-primary border border-white/[0.06]"
                >
                  <TechIcon className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* GitHub + Live Demo Buttons */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-text-secondary hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-accent-blue hover:text-white transition-colors"
              >
                {project.id === "crewai-game" ? (
                  <>
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>NOTEBOOK</span>
                  </>
                ) : (
                  <>
                    <span>DEMO</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </>
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
