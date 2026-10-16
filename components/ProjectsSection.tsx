"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

const filterTabs = ["All", "AI & GenAI", "Full-Stack"] as const;

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<typeof filterTabs[number]>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 scroll-mt-24">
      <SectionHeading
        number="03"
        category="SELECTED WORK"
        title="PROJECTS"
        description="Projects I've built exploring agentic AI, intelligent automation, and full-stack web applications."
      />

      {/* Filter Tabs */}
      <div className="flex items-center justify-start space-x-2 mb-8 overflow-x-auto pb-2">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all border ${
              activeTab === tab
                ? "bg-accent-blue text-white border-accent-blue shadow-md shadow-accent-blue/20"
                : "bg-bg-card text-text-secondary border-border-subtle hover:border-accent-blue hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Compact 2-column grid (1 on mobile, 3 on 2xl) */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
