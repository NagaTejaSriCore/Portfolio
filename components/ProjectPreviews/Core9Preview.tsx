"use client";

import { ShieldAlert, Activity, Cpu, CheckCircle2, ChevronRight } from "lucide-react";

const agents = [
  "Vision",
  "Situation",
  "Decision",
  "Planning",
  "Allocation",
  "Comms",
  "Monitor",
  "Report",
];

export default function Core9Preview() {
  return (
    <div className="w-full bg-[#0A0A0D] border border-white/[0.1] rounded-xl p-4 sm:p-5 text-xs text-text-primary shadow-2xl overflow-hidden font-sans select-none">
      
      {/* Dashboard Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 animate-ping" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-red-400 uppercase">
            LIVE CRISIS INCIDENT #CR-9042
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[10px] text-text-muted">
          <span className="flex items-center gap-1 text-emerald-400 font-mono">
            <Activity className="w-3 h-3" /> 8 AGENTS SYNCED
          </span>
          <span className="bg-accent-blue/10 border border-accent-blue/30 text-accent-blue px-2 py-0.5 rounded-full font-mono">
            GEMINI 1.5 PRO
          </span>
        </div>
      </div>

      {/* Agent Orchestration Pipeline Row */}
      <div className="mb-5">
        <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2 flex items-center justify-between">
          <span>8-AGENT AUTONOMOUS PIPELINE</span>
          <span className="text-accent-blue">LATENCY: 142ms</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 bg-black/40 p-2 rounded-lg border border-white/[0.05]">
          {agents.map((agent, i) => (
            <div
              key={agent}
              className={`flex flex-col items-center p-1.5 rounded border transition-colors ${
                i === 2
                  ? "bg-accent-blue/20 border-accent-blue text-accent-blue font-bold shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  : i < 2
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-white/[0.02] border-white/[0.05] text-text-muted"
              }`}
            >
              <div className="flex items-center gap-0.5 text-[9px] font-mono mb-1">
                <span>0{i + 1}</span>
                {i < 2 ? <CheckCircle2 className="w-2.5 h-2.5" /> : null}
              </div>
              <span className="text-[9px] font-semibold tracking-tighter truncate w-full text-center">
                {agent}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid: Incident Metrics & Situation Kanban */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Metric Card 1 */}
        <div className="bg-bg-card p-3 rounded-lg border border-white/[0.06] flex flex-col justify-between">
          <span className="text-[10px] text-text-muted uppercase font-mono">INCIDENT SEVERITY</span>
          <div className="flex items-baseline space-x-2 my-1">
            <span className="text-lg font-black text-red-400">CAT-4</span>
            <span className="text-[10px] text-text-muted">Wildfire Threat</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-[85%]" />
          </div>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-bg-card p-3 rounded-lg border border-white/[0.06] flex flex-col justify-between">
          <span className="text-[10px] text-text-muted uppercase font-mono">RESOURCE DISPATCH</span>
          <div className="flex items-baseline space-x-2 my-1">
            <span className="text-lg font-black text-emerald-400">92.4%</span>
            <span className="text-[10px] text-text-muted">Optimal Route</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[92%]" />
          </div>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-bg-card p-3 rounded-lg border border-white/[0.06] flex flex-col justify-between">
          <span className="text-[10px] text-text-muted uppercase font-mono">AUTO REPORT STATUS</span>
          <div className="flex items-center space-x-2 my-1 text-accent-blue font-mono font-bold text-xs">
            <Cpu className="w-4 h-4 animate-spin" />
            <span>GENERATING PDF...</span>
          </div>
          <span className="text-[9px] text-text-muted">Sent to Regional Authorities</span>
        </div>
      </div>
    </div>
  );
}
