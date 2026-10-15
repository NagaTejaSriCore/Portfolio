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
      className="bg-bg-card hover:bg-[#111115] rounded-2xl border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-300 group hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
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
          <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-accent-blue uppercase whitespace-nowrap shrink-0">
            {category.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-text-secondary mb-4 leading-relaxed">
          {category.description}
        </p>

        {/* Skill Chips with Brand-Colored Icons */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const { icon: SkillIcon, color } = getTechIconConfig(skill.name);
            return (
              <span
                key={skill.name}
                style={{
                  ["--brand-color" as any]: color,
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#141418] text-white border border-white/[0.06] hover:border-[var(--brand-color)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <SkillIcon className="w-4 h-4 shrink-0" style={{ color }} />
                <span>{skill.name}</span>
                {skill.suffix && (
                  <span className="text-[10px] text-text-muted font-normal ml-0.5">
                    ({skill.suffix})
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent mt-6 group-hover:via-accent-blue/50 transition-all duration-300" />
    </motion.div>
  );
}
