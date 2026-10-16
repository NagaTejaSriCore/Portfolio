"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "@/data/skills";
import { getTechIconConfig } from "@/lib/techIcons";
import { Code2, Bot, Globe, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "languages-core": Code2,
  "web-development": Globe,
  "databases-orm": Database,
  "genai-agents": Bot,
  "databases-tools": Wrench,
};

export default function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const HeaderIcon = categoryIcons[category.id] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bg-card rounded-2xl border border-border-subtle p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-300 group hover:border-accent-blue"
    >
      <div>
        {/* Header Row */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform shrink-0">
              <HeaderIcon className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-black tracking-tight text-white uppercase truncate">
              {category.title}
            </h3>
          </div>
          <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-bg-card border border-border-subtle text-accent-blue uppercase whitespace-nowrap shrink-0">
            {category.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-text-secondary mb-4 leading-relaxed">
          {category.description}
        </p>

        {/* Skill Chips */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const { icon: SkillIcon } = getTechIconConfig(skill.name);
            return (
              <span
                key={skill.name}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-card text-white border border-border-subtle hover:border-accent-blue hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <SkillIcon className="w-4 h-4 shrink-0 text-accent-blue" />
                <span>{skill.name}</span>
                {skill.suffix && (
                  <span className="text-[10px] text-text-secondary font-normal ml-0.5">
                    ({skill.suffix})
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      <div className="w-full h-[1px] bg-border-subtle mt-6 group-hover:bg-accent-blue/40 transition-all duration-300" />
    </motion.div>
  );
}
