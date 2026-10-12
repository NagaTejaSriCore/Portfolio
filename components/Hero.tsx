"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, Mail, FileText, ChevronDown, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-28 pb-8 overflow-hidden select-none scroll-mt-24">
      
      {/* Main Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-auto py-4">
        
        {/* 1. Small Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-bg-card border border-white/[0.08] mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase">
            {siteConfig.roleLabel}
          </span>
        </motion.div>

        {/* 2. Huge Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full text-[clamp(2.75rem,7vw,6rem)] font-black tracking-tight text-white uppercase leading-[1.02] text-balance mb-3"
        >
          {siteConfig.name.replace(".", "")}
          <span className="text-accent-blue">.</span>
        </motion.h1>

        {/* 3. One-line Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-text-secondary tracking-tight mb-3"
        >
          {siteConfig.oneLiner}
        </motion.h2>

        {/* 4. Education Line (ONLY rendered if real non-placeholder value is defined) */}
        {(() => {
          const edu = siteConfig.education;
          if (!edu) return null;
          const degreeBranch = [edu.degree, edu.branch].filter(Boolean).join(", ");
          const parts = [degreeBranch, edu.year, edu.college].filter(Boolean);
          if (parts.length === 0) return null;
          const eduText = parts.join(" · ");
          if (eduText.includes("[")) return null;
          return (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-mono text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3.5 py-1.5 rounded-lg mb-4 text-balance"
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>{eduText}</span>
            </motion.div>
          );
        })()}

        {/* 5. Short Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm sm:text-base text-text-muted max-w-[650px] leading-relaxed text-balance mb-5"
        >
          {siteConfig.supportingText}
        </motion.p>

        {/* 6. Green-dot Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0E0E10] border border-white/[0.08] mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-xs font-semibold tracking-wide text-text-secondary">
            {siteConfig.availability}
          </span>
        </motion.div>

        {/* 7. Buttons */}
        {/* NOTE: Place actual PDF file in /public/resume/Naga_Tejasri_Resume.pdf */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Naga_Tejasri_Resume.pdf"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-accent-blue text-white font-bold text-xs tracking-wider uppercase hover:bg-accent-blueHover transition-all shadow-md shadow-accent-blue/20 hover:shadow-accent-blue/35 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-bg-card hover:bg-bg-cardHover text-white font-bold text-xs tracking-wider uppercase border border-white/[0.1] hover:border-accent-blue/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <span>VIEW PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-bg-card hover:bg-bg-cardHover text-white font-bold text-xs tracking-wider uppercase border border-white/[0.1] hover:border-white/[0.2] transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <Mail className="w-4 h-4 text-accent-blue" />
            <span>CONTACT ME</span>
          </a>
        </motion.div>

        {/* 8. Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center space-x-5 text-text-secondary"
        >
          {siteConfig.githubUrl && (
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center space-x-1.5 text-xs font-medium hover:text-accent-blue transition-colors group p-1"
            >
              <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          )}
          {siteConfig.githubUrl && siteConfig.linkedinUrl && (
            <span className="text-white/20">•</span>
          )}
          {siteConfig.linkedinUrl && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center space-x-1.5 text-xs font-medium hover:text-accent-blue transition-colors group p-1"
            >
              <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          )}
        </motion.div>
      </div>

      {/* 9. Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 pt-4 flex flex-col items-center space-y-1 text-text-muted hover:text-accent-blue transition-colors cursor-pointer"
        onClick={() => {
          const el = document.getElementById("skills");
          if ((window as any).lenis && el) {
            (window as any).lenis.scrollTo(el, { offset: -80 });
          } else if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-accent-blue animate-bounce" />
      </motion.div>

    </section>
  );
}
