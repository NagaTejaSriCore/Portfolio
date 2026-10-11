"use client";

import { Terminal, Lock, Flame } from "lucide-react";

export default function ComingSoonPreview() {
  return (
    <div className="w-full bg-[#0A0A0D] border border-dashed border-white/[0.15] rounded-xl p-6 text-xs text-text-primary shadow-2xl overflow-hidden font-mono flex flex-col items-center justify-center text-center min-h-[180px] relative">
      
      {/* Background Matrix-like glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none" />

      <div className="w-10 h-10 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-3 animate-pulse">
        <Terminal className="w-5 h-5" />
      </div>

      <span className="text-xs font-bold tracking-[0.25em] text-accent-blue uppercase mb-1">
        LABS & KAGGLE WORKBENCH
      </span>

      <p className="text-text-muted text-[11px] max-w-sm mb-3">
        Autonomous Multi-Modal Agent Benchmarks & Competition Solutions
      </p>

      <div className="inline-flex items-center space-x-2 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08] text-[10px] text-text-secondary">
        <Lock className="w-3 h-3 text-amber-400" />
        <span>MODEL BENCHMARKING IN PROGRESS</span>
      </div>
    </div>
  );
}
