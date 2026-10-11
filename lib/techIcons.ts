import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiGoogle,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
  SiVite,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";

import {
  Bot,
  Globe,
  Layers,
  Database,
  Workflow,
  MessageSquare,
  Brain,
  Server,
  Cpu,
  Terminal,
  Code2,
} from "lucide-react";

export interface TechIconConfig {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const techIconMap: Record<string, TechIconConfig> = {
  // Languages & Core
  Python: { icon: SiPython, color: "#3776AB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  SQL: { icon: Database, color: "#3178C6" },
  OOP: { icon: Code2, color: "#3B82F6" },
  DBMS: { icon: Database, color: "#3B82F6" },
  "Data Structures & Algorithms": { icon: Layers, color: "#3B82F6" },
  DSA: { icon: Layers, color: "#3B82F6" },

  // GenAI & Agentic AI
  "Prompt Engineering": { icon: Terminal, color: "#3B82F6" },
  "Gemini API": { icon: SiGoogle, color: "#8E75B2" },
  Gemini: { icon: SiGoogle, color: "#8E75B2" },
  "OpenAI API": { icon: TbBrandOpenai, color: "#10A37F" },
  OpenAI: { icon: TbBrandOpenai, color: "#10A37F" },
  "Groq API": { icon: Cpu, color: "#F55036" },
  Groq: { icon: Cpu, color: "#F55036" },
  "RAG Fundamentals": { icon: Database, color: "#3B82F6" },
  RAG: { icon: Database, color: "#3B82F6" },
  "AI Agents": { icon: Bot, color: "#3B82F6" },
  "Multi-Agent Workflows": { icon: Workflow, color: "#3B82F6" },
  CrewAI: { icon: Bot, color: "#FF5A50" },
  Chatbots: { icon: MessageSquare, color: "#3B82F6" },
  "AI Chatbot": { icon: MessageSquare, color: "#3B82F6" },
  "Machine Learning Fundamentals": { icon: Brain, color: "#3B82F6" },

  // Web Development
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  CSS: { icon: SiCss, color: "#1572B6" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#E4E4E7" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#E4E4E7" },
  Flask: { icon: SiFlask, color: "#E4E4E7" },
  "REST APIs": { icon: Server, color: "#3B82F6" },
  "Responsive Web Design": { icon: Globe, color: "#3B82F6" },

  // Databases, Tools & Deployment
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  SQLite: { icon: SiSqlite, color: "#003B57" },
  Supabase: { icon: SiSupabase, color: "#3FCF8E" },
  "Prisma ORM": { icon: SiPrisma, color: "#5A67D8" },
  Prisma: { icon: SiPrisma, color: "#5A67D8" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#E4E4E7" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "Google Colab": { icon: SiGooglecolab, color: "#F9AB00" },
  Vercel: { icon: SiVercel, color: "#E4E4E7" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },
  Render: { icon: SiRender, color: "#46E3B7" },

  // Project Extras
  Vite: { icon: SiVite, color: "#646CFF" },
  ngrok: { icon: Globe, color: "#1F1E24" },
};

export function getTechIconConfig(techName: string): TechIconConfig {
  if (techIconMap[techName]) {
    return techIconMap[techName];
  }

  // Case-insensitive or partial match fallback
  const trimmed = techName.trim();
  for (const key of Object.keys(techIconMap)) {
    if (key.toLowerCase() === trimmed.toLowerCase()) {
      return techIconMap[key];
    }
  }

  // Default fallback
  return { icon: Cpu, color: "#3B82F6" };
}
