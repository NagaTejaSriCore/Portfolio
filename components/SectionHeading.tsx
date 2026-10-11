"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  description?: string;
  id?: string;
}

export default function SectionHeading({
  number,
  category,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-28 mb-12 md:mb-16">
      {/* Category Label with Blue Accent */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2 text-xs md:text-sm tracking-[0.25em] font-semibold text-accent-blue uppercase mb-3"
      >
        <span>{number}</span>
        <span className="text-text-muted">/</span>
        <span className="text-text-secondary">{category}</span>
      </motion.div>

      {/* Main Uppercase Heading with Blue Period */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
          {title}
          <span className="text-accent-blue">.</span>
        </h2>
      </motion.div>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl text-balance leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
