"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Mail, FileText, ArrowUpRight, Copy, Check, Phone, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

function cleanEmail(rawEmail?: string): string | undefined {
  if (!rawEmail) return undefined;
  const trimmed = rawEmail.replace("mailto:", "").trim().toLowerCase();
  if (trimmed.includes("[") || trimmed.includes("]") || trimmed.length === 0) {
    return undefined;
  }
  return trimmed;
}

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const email = cleanEmail(siteConfig.email);

  const mailtoHref = email
    ? `mailto:${email}?subject=Hello%20Naga`
    : "";
  const gmailHref = email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hello%20Naga`
    : "";

  // Server render defaults to mailto: so it works without JavaScript and prevents hydration mismatch
  const [buttonHref, setButtonHref] = useState<string>(mailtoHref);
  const [isExternal, setIsExternal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || !email) return;

    const checkDevice = () => {
      const userAgent = navigator.userAgent || "";
      const isMobileUA =
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;

      const isMobileDevice = isMobileUA || isSmallScreen;

      if (!isMobileDevice) {
        setButtonHref(gmailHref);
        setIsExternal(true);
      } else {
        setButtonHref(mailtoHref);
        setIsExternal(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [email, gmailHref, mailtoHref]);

  const handleCopyEmail = async () => {
    if (!email) return;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center scroll-mt-24 select-none"
    >
      <motion.div
        variants={!shouldReduceMotion ? containerVariants : undefined}
        initial={!shouldReduceMotion ? "hidden" : undefined}
        whileInView={!shouldReduceMotion ? "visible" : undefined}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col items-center w-full"
      >
        {/* 1. Round Icon Button */}
        <motion.div variants={!shouldReduceMotion ? itemVariants : undefined}>
          <div className="w-20 h-20 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center mb-4 hover:border-accent-blue transition-all duration-300">
            <Mail className="w-8 h-8 text-accent-blue" />
          </div>
        </motion.div>

        {/* 2. Small Section Label */}
        <motion.div variants={!shouldReduceMotion ? itemVariants : undefined}>
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-accent-blue uppercase mb-4 block">
            05 / GET IN TOUCH
          </span>
        </motion.div>

        {/* 3. Two-Line Heading (Clean without glow or colored text-shadow) */}
        <motion.h2
          variants={!shouldReduceMotion ? itemVariants : undefined}
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.08] mb-6 text-center"
        >
          <span className="text-white block">LET&apos;S BUILD</span>
          <span className="text-accent-blue block">SOMETHING GREAT.</span>
        </motion.h2>

        {/* 4. Supporting Text */}
        <motion.p
          variants={!shouldReduceMotion ? itemVariants : undefined}
          className="max-w-[600px] text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed mb-8 text-center text-balance"
        >
          I&apos;m a student looking for internship and entry-level opportunities
          in full-stack and AI/ML. If you&apos;d like to work together or just say
          hello, get in touch.
        </motion.p>

        {/* 5. Main Action Button */}
        {email && (
          <motion.div
            variants={!shouldReduceMotion ? itemVariants : undefined}
            className="mb-8 flex flex-col items-center"
          >
            <a
              href={buttonHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`Send email to ${email}`}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-accent-blue hover:bg-accent-blueHover text-white font-black text-sm sm:text-base tracking-wider transition-all duration-300 shadow-md shadow-accent-blue/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="normal-case">{email}</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            {/* Fallback & Copy actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-text-secondary mt-4">
              <a
                href={mailtoHref}
                className="hover:text-accent-blue transition-colors underline-offset-4 hover:underline"
              >
                Use my default mail app instead
              </a>
              <span className="text-border-subtle select-none" aria-hidden="true">
                •
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center space-x-1.5 hover:text-accent-blue transition-colors focus:outline-none focus:ring-1 focus:ring-accent-blue rounded px-1.5 py-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent-blue" />
                    <span className="text-accent-blue font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>

            {/* Download Resume Button */}
            <div className="mt-6 mb-2">
              <a
                href="/Naga_Tejasri_Resume.pdf"
                download="Naga_Tejasri_Resume.pdf"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-bg-card hover:bg-bg-card text-white text-xs font-bold tracking-wider uppercase border border-border-subtle hover:border-accent-blue transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                <FileText className="w-4 h-4 text-accent-blue" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* 6. Clean Links Row: Phone, Location, GitHub, LinkedIn */}
        <motion.div
          variants={!shouldReduceMotion ? itemVariants : undefined}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-text-secondary pt-2"
        >
          {/* Phone */}
          <a
            href="tel:6302227698"
            aria-label="Phone Number"
            className="inline-flex items-center space-x-2 hover:text-accent-blue transition-colors group p-1"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform text-accent-blue" />
            <span>6302227698</span>
          </a>

          {/* Location */}
          <div className="inline-flex items-center space-x-2 text-text-secondary group p-1">
            <MapPin className="w-4 h-4 text-accent-blue shrink-0" />
            <span>Hyderabad, Telangana, India</span>
          </div>

          {siteConfig.githubUrl && (
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center space-x-2 hover:text-accent-blue transition-colors group p-1"
            >
              <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform text-accent-blue" />
              <span>GitHub</span>
            </a>
          )}
          {siteConfig.linkedinUrl && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center space-x-2 hover:text-accent-blue transition-colors group p-1"
            >
              <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform text-accent-blue" />
              <span>LinkedIn</span>
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
