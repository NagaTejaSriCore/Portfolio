"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

interface EducationItem {
  tag: string;
  tagIcon: typeof GraduationCap;
  title: string;
  institution: string;
  period: string;
  score: string;
}

const educationList: EducationItem[] = [
  {
    tag: "B.TECH",
    tagIcon: GraduationCap,
    title: "Bachelor of Technology - Computer Science and Engineering",
    institution:
      "NxtWave Institute of Advanced Technologies (NIAT), CDU Campus (Chaitanya Deemed to be University)",
    period: "2025 - 2029",
    score: "CGPA: 10",
  },
  {
    tag: "INTERMEDIATE",
    tagIcon: BookOpen,
    title: "Intermediate (12th)",
    institution: "Oxford VIT Junior College",
    period: "2023 - 2025",
    score: "98%",
  },
  {
    tag: "SCHOOL",
    tagIcon: Award,
    title: "Secondary School (10th)",
    institution: "Sai Vikas HighSchool",
    period: "2022 - 2023",
    score: "94.83%",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 scroll-mt-24 select-none"
    >
      <SectionHeading
        number="04"
        category="ACADEMICS"
        title="EDUCATION"
        description="My academic background."
      />

      <div className="space-y-6">
        {educationList.map((item, index) => {
          const TagIcon = item.tagIcon;
          return (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-bg-card rounded-2xl border border-white/[0.08] hover:border-accent-blue/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                    <TagIcon className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </span>

                  {/* Score Chip */}
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span>{item.score}</span>
                  </span>
                </div>

                {/* Year Chip */}
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-text-secondary bg-[#141418] px-3 py-1 rounded-full border border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                  <span>{item.period}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase group-hover:text-accent-blue transition-colors mb-2">
                {item.title}
              </h3>

              <div className="flex items-start space-x-2 text-text-secondary text-sm sm:text-base leading-relaxed">
                <MapPin className="w-4 h-4 text-accent-blue shrink-0 mt-1" />
                <span>{item.institution}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
