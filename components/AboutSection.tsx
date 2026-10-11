"use client";

import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import { timelineData, TimelineItem } from "@/data/about";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { FileText } from "lucide-react";

function cleanText(text?: string): string | undefined {
  if (!text) return undefined;
  if (text.includes("[") || text.includes("]")) return undefined;
  const trimmed = text.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function getTagStyle(type: TimelineItem["tagType"]) {
  switch (type) {
    case "degree":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "badge":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "hackathon":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "program":
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
    default:
      return "bg-accent-blue/10 text-accent-blue border-accent-blue/20";
  }
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  total: number;
  containerProgress: MotionValue<number>;
  reducedMotion: boolean;
}

function TimelineCard({
  item,
  index,
  total,
  containerProgress,
  reducedMotion,
}: TimelineCardProps) {
  const subtitleText = [cleanText(item.subtitle), cleanText(item.college)]
    .filter(Boolean)
    .join(" · ");
  const dateText = cleanText(item.date);
  const builtText = cleanText(item.builtDetails);

  // Calculate activation thresholds along container scroll progress
  const start = total > 1 ? index / (total - 0.5) : 0;
  const end = total > 1 ? Math.min(1, (index + 0.6) / (total - 0.5)) : 1;

  const itemProgressRaw = useTransform(containerProgress, [start, end], [0, 1]);
  const itemProgress = useSpring(itemProgressRaw, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  // Animated visual states
  const cardOpacity = useTransform(itemProgress, [0, 1], [0.45, 1]);
  const titleColor = useTransform(
    itemProgress,
    [0, 1],
    ["rgba(255, 255, 255, 0.45)", "rgba(255, 255, 255, 1)"]
  );
  const textColor = useTransform(
    itemProgress,
    [0, 1],
    ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.75)"]
  );
  const borderColor = useTransform(
    itemProgress,
    [0, 1],
    ["rgba(255, 255, 255, 0.08)", "rgba(59, 130, 246, 0.4)"]
  );
  const boxShadow = useTransform(
    itemProgress,
    [0, 1],
    [
      "0px 0px 0px rgba(0,0,0,0)",
      "0px 10px 30px -10px rgba(59, 130, 246, 0.15)",
    ]
  );

  // Dot styling interpolation
  const dotBg = useTransform(itemProgress, [0, 1], ["#0E0E10", "#3B82F6"]);
  const dotBorder = useTransform(
    itemProgress,
    [0, 1],
    ["rgba(255, 255, 255, 0.2)", "#3B82F6"]
  );
  const dotBoxShadow = useTransform(
    itemProgress,
    [0, 1],
    [
      "0px 0px 0px rgba(0,0,0,0)",
      "0px 0px 14px 2px rgba(59, 130, 246, 0.85)",
    ]
  );

  // Fallback for reduced motion preference
  if (reducedMotion) {
    return (
      <div className="relative group">
        <div className="absolute -left-[19px] sm:-left-[23px] md:-left-[27px] top-6 w-3.5 h-3.5 rounded-full bg-accent-blue border-2 border-accent-blue shadow-[0_0_14px_#3B82F6] z-10" />

        <div className="bg-[#0E0E10] rounded-2xl border border-accent-blue/40 p-5 sm:p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border ${getTagStyle(
                  item.tagType
                )}`}
              >
                {item.tag}
              </span>
              {item.levelChip && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {item.levelChip}
                </span>
              )}
            </div>

            {dateText && (
              <span className="text-xs font-mono text-text-muted">
                {dateText}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
            {item.title}
          </h3>

          {subtitleText && (
            <p className="text-xs sm:text-sm font-mono text-accent-blue mt-1">
              {subtitleText}
            </p>
          )}

          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            {item.description}
          </p>

          {builtText && (
            <p className="text-xs text-text-muted font-mono leading-relaxed mt-2 pl-3 border-l-2 border-accent-blue/40">
              {builtText}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Animated Glowing Dot */}
      <motion.div
        style={{
          backgroundColor: dotBg,
          borderColor: dotBorder,
          boxShadow: dotBoxShadow,
        }}
        className="absolute -left-[19px] sm:-left-[23px] md:-left-[27px] top-6 w-3.5 h-3.5 rounded-full border-2 z-10 transition-transform duration-300 group-hover:scale-125"
      />

      {/* Animated Timeline Card */}
      <motion.div
        style={{
          opacity: cardOpacity,
          borderColor: borderColor,
          boxShadow: boxShadow,
        }}
        className="bg-[#0E0E10] rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40"
      >
        {/* Card Header: Tag Pill, Level Chip, Date */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border ${getTagStyle(
                item.tagType
              )}`}
            >
              {item.tag}
            </span>

            {item.levelChip && (
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                {item.levelChip}
              </span>
            )}
          </div>

          {dateText && (
            <span className="text-xs font-mono text-text-muted">
              {dateText}
            </span>
          )}
        </div>

        {/* Card Title */}
        <motion.h3
          style={{ color: titleColor }}
          className="text-base sm:text-lg md:text-xl font-bold tracking-tight"
        >
          {item.title}
        </motion.h3>

        {/* Subtitle */}
        {subtitleText && (
          <p className="text-xs sm:text-sm font-mono text-accent-blue mt-1">
            {subtitleText}
          </p>
        )}

        {/* Description */}
        <motion.p
          style={{ color: textColor }}
          className="text-sm leading-relaxed mt-2"
        >
          {item.description}
        </motion.p>

        {/* Optional Built Details */}
        {builtText && (
          <p className="text-xs text-text-muted font-mono leading-relaxed mt-2 pl-3 border-l-2 border-accent-blue/40">
            {builtText}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Track scroll position over the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="about"
      className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 scroll-mt-24 select-none"
    >
      <SectionHeading number="03" category="ABOUT" title="ABOUT ME" />

      {/* Intro Bio & Download Resume */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
        className="mb-12 space-y-5"
      >
        <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
          <p>
            I&apos;m Naga Tejasri, a student with a strong interest in building
            AI-powered applications and full-stack web projects. I enjoy turning
            ideas into working products, from agent-based AI systems to
            practical web tools, and I learn best by building and improving real
            projects.
          </p>
          <p>
            I&apos;m looking for internship and entry-level opportunities where
            I can contribute, learn from experienced teams, and keep growing my
            skills.
          </p>
        </div>

        <div className="pt-2">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blueHover text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/35 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      </motion.div>

      {/* Timeline Section with Scroll-Driven Fill & Card Activation */}
      <div
        ref={containerRef}
        className="relative pl-6 sm:pl-8 md:pl-10 min-h-[500px]"
      >
        {/* Track Line (Dim Gray in background) */}
        <div className="absolute top-3 bottom-3 left-2 sm:left-3 md:left-4 w-0.5 bg-white/10 rounded-full" />

        {/* Scroll-Driven Active Fill Line (Bright Blue to Violet Gradient) */}
        {!shouldReduceMotion ? (
          <motion.div
            style={{ scaleY }}
            className="absolute top-3 bottom-3 left-2 sm:left-3 md:left-4 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] rounded-full origin-top shadow-[0_0_10px_#3B82F6]"
          />
        ) : (
          <div className="absolute top-3 bottom-3 left-2 sm:left-3 md:left-4 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] rounded-full origin-top shadow-[0_0_10px_#3B82F6]" />
        )}

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              index={index}
              total={timelineData.length}
              containerProgress={scrollYProgress}
              reducedMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
