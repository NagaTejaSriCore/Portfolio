"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let lenis: any;
    let frameId: number;

    const initLenis = async () => {
      try {
        const LenisModule = (await import("lenis")).default;
        lenis = new LenisModule({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
        });

        (window as any).lenis = lenis;

        function raf(time: number) {
          lenis.raf(time);
          frameId = requestAnimationFrame(raf);
        }

        frameId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn("Lenis smooth scroll failed to initialize:", e);
      }
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return <>{children}</>;
}
