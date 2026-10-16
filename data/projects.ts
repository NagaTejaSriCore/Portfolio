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
    id: "inventra",
    title: "Inventra",
    category: "Full-Stack",
    shortDescription:
      "AI-powered inventory management platform. I built the Automation & Smart Features module (expiry checks, low-stock detection, email alerts), OCR invoice scanning, and barcode scanning.",
    techStack: ["JavaScript", "React.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Groq API"],
    githubUrl: "https://github.com/hasinipabba/Inventra",
    demoUrl: "https://inventra-ai-lyart.vercel.app/",
  },
  {
    id: "core9",
    title: "CORE9",
    category: "AI & GenAI",
    isFeatured: true,
    shortDescription:
      "Multi-agent crisis intelligence platform. I built the automated crisis triage system with an 8-agent Gemini workflow, real-time alert pipeline, Supabase integration, and interactive response dashboard.",
    techStack: ["React.js", "Vite", "Node.js", "Express.js", "Supabase", "Gemini API"],
    githubUrl: "https://github.com/NagaTejaSriCore/Core9",
    demoUrl: "https://core9-frontend.vercel.app/",
  },
  {
    id: "luxespace",
    title: "LuxeSpace Interiors",
    category: "AI & GenAI",
    shortDescription:
      "AI-powered interior design website. I built the responsive web application and integrated an intelligent AI chatbot that delivers personalized interior decor and layout recommendations.",
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "AI Chatbot", "Vercel"],
    githubUrl: "https://github.com/NagaTejaSriCore/luxespace-interiors",
    demoUrl: "https://luxespace-interiors-eta.vercel.app/",
  },
  {
    id: "event-feedback",
    title: "Event Feedback Analyzer",
    category: "Full-Stack",
    shortDescription:
      "Automated event feedback platform. I built the natural language processing pipeline using Flask and Cohere API for sentiment classification, paired with a dynamic React analysis interface.",
    techStack: ["React.js", "Flask", "Python", "Cohere API"],
    githubUrl: "https://github.com/NagaTejaSriCore/event-feedback-analyzer",
    demoUrl: "https://event-feedback-analyzer-lsjc.onrender.com/",
  },
];
