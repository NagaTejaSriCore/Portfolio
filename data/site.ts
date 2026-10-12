export interface EducationConfig {
  degree?: string;  // TODO: e.g. "B.Tech"
  branch?: string;  // TODO: e.g. "Computer Science & Engineering"
  year?: string;    // TODO: e.g. "2nd Year"
  college?: string; // TODO: e.g. "NxtWave Institute of Advanced Technologies (NIAT) CDU Campus"
}

export interface SiteConfig {
  name: string;
  shortName: string;
  roleLabel: string;
  oneLiner: string;
  education?: EducationConfig;
  supportingText: string;
  availability: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string; // Path to PDF in public/resume/
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    url: string;
  };
}

export const SITE_URL = "https://portfolio-rho-sable-31.vercel.app";

// NOTE: Please place your actual PDF resume at: /public/resume/Naga_Tejasri_Resume.pdf
export const siteConfig: SiteConfig = {
  name: "NAGA TEJASRI.",
  shortName: "NT",
  roleLabel: "STUDENT · FULL-STACK & AI/ML",
  oneLiner: "I build AI-powered full-stack projects.",
  education: {
    // TODO: Replace placeholders with real education details when ready
    degree: undefined, // TODO: e.g., "B.Tech"
    branch: undefined, // TODO: e.g., "Computer Science & Engineering"
    year: undefined,   // TODO: e.g., "2nd Year"
    college: undefined, // TODO: e.g., "NIAT CDU Campus"
  },
  supportingText: "I'm a student building AI-powered applications, RAG systems, and agent-based projects. I'm interested in solving practical problems through software and AI.",
  availability: "Open to Internships & Full-Time Roles",
  email: "tejasrib2008@gmail.com",
  githubUrl: "https://github.com/NagaTejaSriCore",
  linkedinUrl: "https://www.linkedin.com/in/naga-tejasri-bhavirisetty-25311236a",
  resumeUrl: "/resume/Naga_Tejasri_Resume.pdf",
  seo: {
    title: "Naga Tejasri | Student | Full-Stack & AI/ML",
    description: "Personal portfolio of Naga Tejasri, a student building AI-powered applications, RAG systems, and full-stack projects.",
    keywords: [
      "Naga Tejasri",
      "Student",
      "Full-Stack",
      "AI/ML",
      "RAG Systems",
      "AI Agents",
      "CORE9",
      "Inventra",
      "Next.js",
      "Python"
    ],
    ogImage: "/opengraph-image",
    url: SITE_URL,
  },
};
