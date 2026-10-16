"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, Mail, FileText, ChevronDown, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-bg-main flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-28 pb-8 overflow-hidden select-none scroll-mt-24">
      
      {/* Main Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-auto py-4">
        
        {/* 1. Small Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-bg-card border border-border-subtle mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase">
            {siteConfig.roleLabel}
          </span>
        </motion.div>

        {/* 2. Hero Name (Reduced size and weight) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full text-[clamp(2.25rem,5.5vw,4.75rem)] font-extrabold tracking-tight text-white uppercase leading-[1.05] text-balance mb-3"
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

        {/* 4. One-line Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-mono text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3.5 py-1.5 rounded-lg mb-4 text-balance"
        >
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span>B.Tech CSE · NIAT, CDU Campus · 2025 – 2029</span>
        </motion.div>

        {/* 5. Short Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm sm:text-base text-text-secondary max-w-[680px] leading-relaxed text-balance mb-5"
        >
          {siteConfig.supportingText}
        </motion.p>

        {/* 6. Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-bg-card border border-border-subtle mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent-blue shrink-0" />
          <span className="text-xs font-semibold tracking-wide text-text-secondary">
            {siteConfig.availability}
          </span>
        </motion.div>

        {/* 7. Action Buttons (Single row on desktop, wrapping cleanly on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:gap-3 mb-6 w-full max-w-4xl"
        >
          {/* Primary Button: View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center space-x-1.5 px-4 sm:px-4.5 py-2.5 rounded-full bg-accent-blue text-white font-bold text-xs tracking-wider uppercase hover:bg-accent-blueHover transition-all shadow-md shadow-accent-blue/20 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue whitespace-nowrap"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Primary Button: Download Resume */}
          <a
            href="/Naga_Tejasri_Resume.pdf"
            download="Naga_Tejasri_Resume.pdf"
            className="inline-flex items-center justify-center space-x-1.5 px-4 sm:px-4.5 py-2.5 rounded-full bg-accent-blue text-white font-bold text-xs tracking-wider uppercase hover:bg-accent-blueHover transition-all shadow-md shadow-accent-blue/20 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>

          {/* Outline Button: GitHub */}
          <a
            href="https://github.com/NagaTejaSriCore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center justify-center space-x-1.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-bg-card hover:bg-bg-card text-white font-bold text-xs tracking-wider uppercase border border-border-subtle hover:border-accent-blue transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue whitespace-nowrap"
          >
            <SiGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* Outline Button: LinkedIn */}
          <a
            href="https://linkedin.com/in/naga-tejasri-bhavirisetty-25311236a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center justify-center space-x-1.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-bg-card hover:bg-bg-card text-white font-bold text-xs tracking-wider uppercase border border-border-subtle hover:border-accent-blue transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue whitespace-nowrap"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-accent-blue" />
            <span>LinkedIn</span>
          </a>

          {/* Outline Button: Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center space-x-1.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-bg-card hover:bg-bg-card text-white font-bold text-xs tracking-wider uppercase border border-border-subtle hover:border-accent-blue transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-accent-blue" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      {/* 9. Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 pt-4 flex flex-col items-center space-y-1 text-text-secondary hover:text-accent-blue transition-colors cursor-pointer"
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
