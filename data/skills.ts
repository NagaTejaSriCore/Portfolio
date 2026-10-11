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
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Flask" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Supabase" },
  { name: "Gemini API" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Vercel" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages-core",
    title: "Languages & Core CS",
    badge: "CORE",
    description: "Foundational programming languages and core computer science concepts.",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Data Structures & Algorithms", suffix: "Learning" },
    ],
  },
  {
    id: "genai-agents",
    title: "GenAI & Agentic AI",
    badge: "AI SYSTEMS",
    description: "Modern artificial intelligence, agentic frameworks, and LLM integrations.",
    skills: [
      { name: "Prompt Engineering" },
      { name: "Gemini API" },
      { name: "Groq API" },
      { name: "RAG Fundamentals" },
      { name: "AI Agents" },
      { name: "Multi-Agent Workflows" },
      { name: "CrewAI" },
      { name: "Chatbots" },
      { name: "Machine Learning Fundamentals" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    badge: "FULL-STACK",
    description: "Full-stack web engineering across modern frontend and backend frameworks.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Next.js", suffix: "Basic" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "Responsive Web Design" },
    ],
  },
  {
    id: "databases-tools",
    title: "Databases, Tools & Deployment",
    badge: "TOOLS",
    description: "Databases, developer toolchains, version control, and cloud hosting platforms.",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Supabase" },
      { name: "Prisma ORM" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Google Colab" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Render" },
    ],
  },
];
