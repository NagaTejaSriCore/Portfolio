"use client";

import { siteConfig } from "@/data/site";
import { ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-main py-8 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
        {/* Left: Copyright */}
        <div>
          <p className="text-xs sm:text-sm font-medium text-text-secondary">
            © 2026 Naga Tejasri
          </p>
        </div>

        {/* Right: Social Icons & Back-to-Top Button */}
        <div className="flex items-center space-x-5 text-text-secondary">
          {siteConfig.githubUrl && (
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-accent-blue transition-colors p-1"
            >
              <SiGithub className="w-4 h-4" />
            </a>
          )}
          {siteConfig.linkedinUrl && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-accent-blue transition-colors p-1"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-bg-card border border-border-subtle text-text-secondary hover:text-white hover:border-accent-blue transition-all group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-accent-blue" />
          </button>
        </div>
      </div>
    </footer>
  );
}
