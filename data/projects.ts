export interface Project {
  id: string;
  title: string;
  category: "AI & GenAI" | "Full-Stack";
  isFeatured?: boolean;
  shortDescription: string;
  techStack: string[];
  githubUrl?: string; // Specific project repository URL (hidden if undefined)
  demoUrl?: string;   // Specific project demo/notebook URL (hidden if undefined)
  colabNote?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: "core9",
    title: "CORE9",
    category: "AI & GenAI",
    isFeatured: true,
    shortDescription:
      "Multi-agent AI platform where eight dependent agents turn incident information into decisions, plans, and reports.",
    techStack: ["React.js", "Vite", "Node.js", "Express.js", "Supabase", "Gemini API"],
    githubUrl: undefined, // TODO: Add specific CORE9 repository URL when available
    demoUrl: undefined,   // TODO: Add specific CORE9 live demo URL when available
  },
  {
    id: "inventra",
    title: "Inventra",
    category: "Full-Stack",
    isFeatured: false,
    shortDescription:
      "AI-powered inventory system with low-stock and expiry alerts, purchase automation, barcode scanning, and invoice OCR.",
    techStack: ["Javascript", "React.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Groq API"],
    githubUrl: undefined, // TODO: Add specific Inventra repository URL when available
    demoUrl: undefined,   // TODO: Add specific Inventra live demo URL when available
  },
  {
    id: "luxespace",
    title: "LuxeSpace Interiors",
    category: "AI & GenAI",
    isFeatured: false,
    shortDescription:
      "AI chatbot assistant built for an interior design business to handle visitor inquiries and service explanations.",
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "AI Chatbot", "Gemini API"],
    githubUrl: undefined, // TODO: Add specific LuxeSpace repository URL when available
    demoUrl: undefined,   // TODO: Add specific LuxeSpace live demo URL when available
  },
  {
    id: "crewai-game",
    title: "CrewAI Game",
    category: "AI & GenAI",
    isFeatured: false,
    shortDescription:
      "Multi-agent game built with CrewAI in Google Colab and served publicly with ngrok.",
    colabNote: "Runs from a Colab notebook via ngrok",
    techStack: ["CrewAI", "Python", "Google Colab", "ngrok"],
    githubUrl: undefined, // TODO: Add specific CrewAI Game repository URL when available
    demoUrl: undefined,   // TODO: Add specific Colab notebook URL when available
  },
  {
    id: "job-search-rag",
    title: "Job Search RAG",
    category: "AI & GenAI",
    isFeatured: false,
    shortDescription:
      "RAG-based assistant helping users search and query job listings using context retrieval.",
    techStack: ["Python", "RAG", "Gemini API"],
    githubUrl: undefined, // TODO: Add specific Job Search RAG repository URL when available
  },
  {
    id: "event-feedback",
    title: "Event Feedback Analyzer",
    category: "Full-Stack",
    isFeatured: false,
    shortDescription:
      "Tool that analyzes event feedback responses to organize attendee input and surface key insights.",
    techStack: ["React.js", "Flask", "Python", "Gemini API"],
    githubUrl: undefined, // TODO: Add specific Event Feedback Analyzer repository URL when available
  },
];
