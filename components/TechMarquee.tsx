"use client";

import { useEffect, useState } from "react";
import { marqueeTechnologies, MarqueeItem } from "@/data/skills";
import { getTechIconConfig } from "@/lib/techIcons";

function TechTile({ item }: { item: MarqueeItem }) {
  const { icon: IconComponent } = getTechIconConfig(item.name);

  return (
    <div
      tabIndex={0}
      aria-label={`${item.name} technology tile`}
      className="w-[150px] sm:w-[170px] md:w-[190px] h-[140px] sm:h-[155px] flex-shrink-0 bg-bg-card hover:bg-bg-card rounded-2xl border border-border-subtle hover:border-accent-blue flex flex-col items-center justify-center p-4 transition-all duration-300 group hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-blue cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl bg-bg-main border border-border-subtle flex items-center justify-center mb-3 transition-all duration-300"
      >
        <IconComponent
          className="w-9 h-9 sm:w-10 sm:h-10 text-accent-blue group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <span className="text-xs font-extrabold tracking-wider text-white uppercase text-center">
        {item.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  const duplicatedTech = [...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <section className="py-12 md:py-16 bg-bg-main border-y border-border-subtle relative overflow-hidden">

      {/* Edge Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-[11px] font-mono font-semibold tracking-[0.25em] text-text-secondary uppercase">
          TECHNOLOGIES & FRAMEWORKS
        </p>
      </div>

      {isReducedMotion ? (
        /* Static Wrapped Grid for Reduced Motion */
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {marqueeTechnologies.map((item, idx) => (
            <TechTile key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      ) : (
        /* Infinite Marquee Track */
        <div className="marquee-container w-full overflow-hidden flex">
          <div className="marquee-track flex space-x-4 animate-marquee">
            {duplicatedTech.map((item, index) => (
              <TechTile key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
