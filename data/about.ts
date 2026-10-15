export interface TimelineItem {
  id: string;
  tag: string;
  tagType: "degree" | "badge" | "hackathon" | "program";
  levelChip?: string;
  title: string;
  subtitle?: string;
  college?: string;
  date?: string;
  description: string;
  builtDetails?: string;
}

export const timelineData: TimelineItem[] = [
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
  },
  {
    id: "hackathon-takeover",
    tag: "HACKATHON",
    tagType: "hackathon",
    title: "Takeover Hackathon",
    description:
      "I participated in the Takeover Hackathon, where I built an AI-powered inventory management system that tracks stock, flags low-stock and expiring items, and automates purchase requests.",
  },
  {
    id: "program-brave",
    tag: "PROGRAM",
    tagType: "program",
    title: "BRAVE Program",
    description:
      "I participated in the BRAVE Program, where I worked on finding real clients, understanding the problems their businesses face, and proposing practical solutions, such as building websites to help increase their revenue.",
  },
];
