export interface TimelineItem {
  id: string;
  tag: string;
  tagType: "degree" | "badge" | "hackathon" | "program";
  levelChip?: string;    // e.g. "Novice"
  title: string;
  subtitle?: string;     // e.g. "2nd Year · NxtWave Institute of Advanced Technologies (NIAT), CDU Campus"
  college?: string;      // Optional standalone college name if needed
  date?: string;         // TODO: e.g. "Expected Graduation: 2027" or "2024"
  description: string;   // Required description
  builtDetails?: string; // TODO: Optional line on what was built or learned
}

export const timelineData: TimelineItem[] = [
  {
    id: "degree",
    tag: "DEGREE PROGRAM",
    tagType: "degree",
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "2nd Year · NxtWave Institute of Advanced Technologies (NIAT), CDU Campus",
    description:
      "I'm in my 2nd year at NxtWave Institute of Advanced Technologies (NIAT), CDU Campus, learning computer science fundamentals while building full-stack and AI projects alongside my coursework.",
    date: undefined, // TODO: Add expected graduation date (e.g., "Expected Graduation: 2027")
  },
  {
    id: "badge-grit",
    tag: "BADGE",
    tagType: "badge",
    levelChip: "Novice",
    title: "GRIT · AI System Mastery Badge",
    description:
      "I earned the Novice badge in the AI System Mastery track by clearing a series of assessments that strengthen how I approach and solve problems and give me a foundation for working with modern AI systems.",
  },
  {
    id: "hackathon-murf",
    tag: "HACKATHON",
    tagType: "hackathon",
    title: "Murf AI Hackathon",
    description:
      "I participated in the Murf AI Hackathon, where I built a voice-focused application that integrates Murf AI's text-to-speech technology.",
    builtDetails: undefined, // TODO: Optional line on what you built
    date: undefined,         // TODO: Replace with year (e.g., "2024")
  },
  {
    id: "hackathon-takeover",
    tag: "HACKATHON",
    tagType: "hackathon",
    title: "Takeover Hackathon",
    description:
      "I participated in the Takeover Hackathon, where I built an AI-powered inventory management system that tracks stock, flags low-stock and expiring items, and automates purchase requests.",
    builtDetails: undefined, // TODO: Optional line on what you built
    date: undefined,         // TODO: Replace with year (e.g., "2024")
  },
  {
    id: "program-brave",
    tag: "PROGRAM",
    tagType: "program",
    title: "BRAVE Program",
    description:
      "I participated in the BRAVE Program, where I worked on finding real clients, understanding the problems their businesses face, and proposing practical solutions, such as building websites to help increase their revenue.",
    builtDetails: undefined, // TODO: Optional line on what you learned or built
    date: undefined,         // TODO: Replace with year (e.g., "2024")
  },
];
