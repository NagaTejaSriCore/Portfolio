export interface MarqueeItem {
  name: string;
}

export interface SkillItem {
  name: string;
  suffix?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export const marqueeTechnologies: MarqueeItem[] = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "SQL" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "React.js" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "Next.js (basic)" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Flask" },
  { name: "REST APIs" },
  { name: "Prisma ORM" },
  { name: "PostgreSQL" },
  { name: "Supabase" },
  { name: "MongoDB" },
  { name: "SQLite" },
  { name: "Prompt Engineering" },
  { name: "LLM APIs (Gemini, Groq)" },
  { name: "AI Agents" },
  { name: "Multi-Agent Workflows" },
  { name: "RAG (fundamentals)" },
  { name: "Antigravity" },
  { name: "Claude" },
  { name: "ChatGPT" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "VS Code" },
  { name: "Postman" },
  { name: "Vercel" },
  { name: "Netlify" },
  { name: "Render" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages-core",
    title: "Languages & Core",
    badge: "CORE",
    description: "Core programming and markup languages.",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "web-development",
    title: "Frontend & Backend",
    badge: "FULL-STACK",
    description: "Frontend and backend frameworks, libraries, and APIs.",
    skills: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Next.js (basic)" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Flask" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "databases-orm",
    title: "Databases & ORM",
    badge: "DATA",
    description: "Database systems, cloud stores, and object-relational mapping.",
    skills: [
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Prisma ORM" },
    ],
  },
  {
    id: "genai-agents",
    title: "AI, GenAI & Agentic Systems",
    badge: "AI SYSTEMS",
    description: "Modern artificial intelligence, agentic workflows, LLMs, and AI tools.",
    skills: [
      { name: "Prompt Engineering" },
      { name: "LLM APIs (Gemini, Groq)" },
      { name: "AI Agents" },
      { name: "Multi-Agent Workflows" },
      { name: "RAG (fundamentals)" },
      { name: "Antigravity" },
      { name: "Claude" },
      { name: "ChatGPT" },
    ],
  },
  {
    id: "databases-tools",
    title: "Tools & Deployment",
    badge: "TOOLS",
    description: "Developer tooling, version control, and cloud hosting platforms.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Render" },
    ],
  },
];
