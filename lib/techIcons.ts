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

const ACCENT_BLUE = "#3B82F6";

const techIconMap: Record<string, TechIconConfig> = {
  // Languages & Core
  Python: { icon: SiPython, color: ACCENT_BLUE },
  JavaScript: { icon: SiJavascript, color: ACCENT_BLUE },
  TypeScript: { icon: SiTypescript, color: ACCENT_BLUE },
  SQL: { icon: Database, color: ACCENT_BLUE },
  OOP: { icon: Code2, color: ACCENT_BLUE },
  DBMS: { icon: Database, color: ACCENT_BLUE },
  "Data Structures & Algorithms": { icon: Layers, color: ACCENT_BLUE },
  DSA: { icon: Layers, color: ACCENT_BLUE },

  // GenAI & Agentic AI
  "Prompt Engineering": { icon: Terminal, color: ACCENT_BLUE },
  "Gemini API": { icon: SiGoogle, color: ACCENT_BLUE },
  Gemini: { icon: SiGoogle, color: ACCENT_BLUE },
  "OpenAI API": { icon: TbBrandOpenai, color: ACCENT_BLUE },
  OpenAI: { icon: TbBrandOpenai, color: ACCENT_BLUE },
  "Groq API": { icon: Cpu, color: ACCENT_BLUE },
  Groq: { icon: Cpu, color: ACCENT_BLUE },
  "RAG Fundamentals": { icon: Database, color: ACCENT_BLUE },
  RAG: { icon: Database, color: ACCENT_BLUE },
  "AI Agents": { icon: Bot, color: ACCENT_BLUE },
  "Multi-Agent Workflows": { icon: Workflow, color: ACCENT_BLUE },
  CrewAI: { icon: Bot, color: ACCENT_BLUE },
  Chatbots: { icon: MessageSquare, color: ACCENT_BLUE },
  "AI Chatbot": { icon: MessageSquare, color: ACCENT_BLUE },
  "Machine Learning Fundamentals": { icon: Brain, color: ACCENT_BLUE },

  // Web Development
  HTML5: { icon: SiHtml5, color: ACCENT_BLUE },
  HTML: { icon: SiHtml5, color: ACCENT_BLUE },
  CSS3: { icon: SiCss, color: ACCENT_BLUE },
  CSS: { icon: SiCss, color: ACCENT_BLUE },
  "React.js": { icon: SiReact, color: ACCENT_BLUE },
  React: { icon: SiReact, color: ACCENT_BLUE },
  "Next.js": { icon: SiNextdotjs, color: ACCENT_BLUE },
  "Tailwind CSS": { icon: SiTailwindcss, color: ACCENT_BLUE },
  Bootstrap: { icon: SiBootstrap, color: ACCENT_BLUE },
  "Node.js": { icon: SiNodedotjs, color: ACCENT_BLUE },
  "Express.js": { icon: SiExpress, color: ACCENT_BLUE },
  Flask: { icon: SiFlask, color: ACCENT_BLUE },
  "REST APIs": { icon: Server, color: ACCENT_BLUE },
  "Responsive Web Design": { icon: Globe, color: ACCENT_BLUE },

  // Databases, Tools & Deployment
  PostgreSQL: { icon: SiPostgresql, color: ACCENT_BLUE },
  MongoDB: { icon: SiMongodb, color: ACCENT_BLUE },
  SQLite: { icon: SiSqlite, color: ACCENT_BLUE },
  Supabase: { icon: SiSupabase, color: ACCENT_BLUE },
  "Prisma ORM": { icon: SiPrisma, color: ACCENT_BLUE },
  Prisma: { icon: SiPrisma, color: ACCENT_BLUE },
  Git: { icon: SiGit, color: ACCENT_BLUE },
  GitHub: { icon: SiGithub, color: ACCENT_BLUE },
  "VS Code": { icon: VscVscode, color: ACCENT_BLUE },
  Postman: { icon: SiPostman, color: ACCENT_BLUE },
  "Google Colab": { icon: SiGooglecolab, color: ACCENT_BLUE },
  Vercel: { icon: SiVercel, color: ACCENT_BLUE },
  Netlify: { icon: SiNetlify, color: ACCENT_BLUE },
  Render: { icon: SiRender, color: ACCENT_BLUE },

  // Project & Skill Extras
  Vite: { icon: SiVite, color: ACCENT_BLUE },
  ngrok: { icon: Globe, color: ACCENT_BLUE },
  "Cohere API": { icon: Brain, color: ACCENT_BLUE },
  Cohere: { icon: Brain, color: ACCENT_BLUE },
  Antigravity: { icon: Cpu, color: ACCENT_BLUE },
  Claude: { icon: Bot, color: ACCENT_BLUE },
  ChatGPT: { icon: TbBrandOpenai, color: ACCENT_BLUE },
  "LLM APIs (Gemini, Groq)": { icon: Cpu, color: ACCENT_BLUE },
  "RAG (fundamentals)": { icon: Database, color: ACCENT_BLUE },
  "Next.js (basic)": { icon: SiNextdotjs, color: ACCENT_BLUE },
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
  return { icon: Cpu, color: ACCENT_BLUE };
}
