"use client";

import { Terminal, Lock, Flame } from "lucide-react";

export default function ComingSoonPreview() {
  return (
    <div className="w-full bg-bg-card border border-dashed border-border-subtle rounded-xl p-6 text-xs text-text-primary overflow-hidden font-mono flex flex-col items-center justify-center text-center min-h-[180px] relative">
      
      <div className="w-10 h-10 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-3">
        <Terminal className="w-5 h-5" />
      </div>

      <span className="text-xs font-bold tracking-[0.25em] text-accent-blue uppercase mb-1">
        LABS & KAGGLE WORKBENCH
      </span>

      <p className="text-text-secondary text-[11px] max-w-sm mb-3">
        Autonomous Multi-Modal Agent Benchmarks & Competition Solutions
      </p>

      <div className="inline-flex items-center space-x-2 bg-bg-card px-3 py-1 rounded-full border border-border-subtle text-[10px] text-text-secondary">
        <Lock className="w-3 h-3 text-accent-blue" />
        <span>MODEL BENCHMARKING IN PROGRESS</span>
      </div>
    </div>
  );
}
