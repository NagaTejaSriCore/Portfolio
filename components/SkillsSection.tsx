"use client";

import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 scroll-mt-24">
      <SectionHeading
        number="01"
        category="EXPERTISE"
        title="TECHNICAL SKILLS"
        description="Core technologies, frameworks, and AI tools I use to build full-stack applications and intelligent agent systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
