export interface EducationConfig {
  degree?: string;
  branch?: string;
  year?: string;
  college?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  roleLabel: string;
  oneLiner: string;
  education?: EducationConfig;
  heroEducationLine?: string;
  supportingText: string;
  availability: string;
  email: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
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
    degree: "Bachelor of Technology",
    branch: "Computer Science and Engineering",
    year: "2025 - 2029",
    college: "NxtWave Institute of Advanced Technologies (NIAT), CDU Campus (Chaitanya Deemed to be University)",
  },
  phone: "6302227698",
  heroEducationLine: "B.Tech CSE · NIAT, CDU Campus · 2025 – 2029",
  supportingText: "I'm a student building AI-powered full-stack applications with React, Node.js, Python, and LLM APIs like Gemini and Groq. I'm looking for an AI / full-stack internship.",
  availability: "Open to Internships",
  email: "tejasrib2008@gmail.com",
  githubUrl: "https://github.com/NagaTejaSriCore",
  linkedinUrl: "https://www.linkedin.com/in/naga-tejasri-bhavirisetty-25311236a",
  resumeUrl: "/Naga_Tejasri_Resume.pdf",
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
