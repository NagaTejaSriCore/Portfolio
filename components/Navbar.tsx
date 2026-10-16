"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (targetId: string) => {
    const section = targetId.replace("#", "");
    if (!section || section === "home") {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveSection("home");
      return;
    }

    const el = document.getElementById(section);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(section);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const sectionId = href.replace("#", "");
    if (sectionId && sectionId !== "home") {
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      window.history.pushState(null, "", window.location.pathname);
    }

    scrollToSection(sectionId);
  };

  // 1. Header scroll styling & initial URL hash navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle initial load with URL hash (e.g. /#projects)
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(hash);
      }, 300);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. IntersectionObserver for active link tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-main/90 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-2xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: NT logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center shadow-md shadow-accent-blue/20 group-hover:scale-105 transition-transform shrink-0">
            <span className="text-white font-black text-xs tracking-tighter">
              NT
            </span>
          </div>
          <span className="text-sm sm:text-base font-black tracking-tight text-white uppercase group-hover:text-accent-blue transition-colors">
            NAGA TEJASRI<span className="text-accent-blue">.</span>
          </span>
        </a>

        {/* Center: Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold tracking-wider uppercase">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-200 hover:text-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-sm px-1 ${
                  isActive ? "text-accent-blue font-bold" : "text-text-secondary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Social & Blue RESUME Button */}
        <div className="hidden md:flex items-center space-x-4">
          {siteConfig.githubUrl && (
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-full p-1.5"
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
              className="text-text-secondary hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-full p-1.5"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}

          {/* Blue RESUME Button */}
          <a
            href="/Naga_Tejasri_Resume.pdf"
            download="Naga_Tejasri_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-accent-blue hover:bg-accent-blueHover text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-accent-blue/20 hover:shadow-accent-blue/30 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="xl:hidden text-text-primary p-2 focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg bg-bg-card border border-border-subtle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="xl:hidden bg-bg-card border-b border-border-subtle overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-semibold tracking-wider py-1 uppercase transition-colors ${
                      isActive ? "text-accent-blue font-bold" : "text-text-secondary hover:text-accent-blue"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {siteConfig.githubUrl && (
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="text-text-secondary hover:text-accent-blue"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {siteConfig.linkedinUrl && (
                    <a
                      href={siteConfig.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="text-text-secondary hover:text-accent-blue"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <a
                  href="/Naga_Tejasri_Resume.pdf"
                  download="Naga_Tejasri_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-accent-blue hover:bg-accent-blueHover text-white font-bold text-xs uppercase"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>RESUME</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
