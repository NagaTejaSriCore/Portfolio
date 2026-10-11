"use client";

import { CreditCard, TrendingUp, AlertCircle, ArrowRight, Sparkles } from "lucide-react";

export default function RevoraPreview() {
  return (
    <div className="w-full bg-[#0A0A0D] border border-white/[0.1] rounded-xl p-4 sm:p-5 text-xs text-text-primary shadow-2xl overflow-hidden font-sans select-none">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <CreditCard className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-white uppercase">
            REVORA RECOVERY HUB
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> $14,820 RECOVERED
          </span>
        </div>
      </div>

      {/* Main Diagnosis Card */}
      <div className="bg-bg-card p-3 rounded-lg border border-accent-blue/30 mb-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
            <span className="font-mono text-[10px] text-accent-blue font-bold uppercase">
              GEMINI DIAGNOSTIC RECOMMENDATION
            </span>
          </div>
          <span className="text-[9px] text-text-muted font-mono">TxID: #PAY-8819</span>
        </div>

        <div className="text-[11px] text-text-secondary mb-3">
          Reason: <span className="text-amber-400 font-semibold">Insufficient Funds (Soft Decline)</span>. Strategy: Send 1-click Razorpay payment link via WhatsApp + auto-retry in 12 hours.
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="bg-accent-blue hover:bg-accent-blueHover text-white px-3 py-1 rounded text-[10px] font-semibold flex items-center gap-1 transition-colors">
            Send Payment Link <ArrowRight className="w-3 h-3" />
          </button>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-secondary px-3 py-1 rounded text-[10px] transition-colors">
            Trigger Auto-Retry
          </button>
        </div>
      </div>

      {/* Mini Stats Bar */}
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="bg-white/[0.02] p-2 rounded border border-white/[0.05] text-center">
          <span className="text-text-muted block">SUCCESS RATE</span>
          <span className="text-emerald-400 font-bold text-xs">78.4%</span>
        </div>
        <div className="bg-white/[0.02] p-2 rounded border border-white/[0.05] text-center">
          <span className="text-text-muted block">AVG RECOVERY TIME</span>
          <span className="text-accent-blue font-bold text-xs">1.4 HRS</span>
        </div>
        <div className="bg-white/[0.02] p-2 rounded border border-white/[0.05] text-center">
          <span className="text-text-muted block">RAZORPAY SYNC</span>
          <span className="text-emerald-400 font-bold text-xs">LIVE</span>
        </div>
      </div>
    </div>
  );
}
