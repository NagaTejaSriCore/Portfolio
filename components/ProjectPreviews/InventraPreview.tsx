"use client";

import { Package, AlertTriangle, Scan, Bell, RefreshCw } from "lucide-react";

export default function InventraPreview() {
  return (
    <div className="w-full bg-bg-card border border-border-subtle rounded-xl p-4 sm:p-5 text-xs text-text-primary overflow-hidden font-sans select-none">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <Package className="w-4 h-4 text-accent-blue" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-white uppercase">
            INVENTRA ENGINE v2.4
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[10px]">
          <span className="bg-accent-blue/10 border border-accent-blue/30 text-accent-blue px-2 py-0.5 rounded flex items-center gap-1 font-mono">
            <AlertTriangle className="w-3 h-3" /> 3 EXPIRY ALERTS
          </span>
          <span className="bg-accent-blue/10 border border-accent-blue/30 text-accent-blue px-2 py-0.5 rounded flex items-center gap-1 font-mono">
            <Scan className="w-3 h-3" /> OCR READY
          </span>
        </div>
      </div>

      {/* Inventory Mini Data Table */}
      <div className="bg-bg-card rounded-lg border border-border-subtle overflow-hidden mb-3">
        <div className="grid grid-cols-4 px-3 py-2 bg-bg-main text-[9px] font-mono text-text-secondary border-b border-border-subtle">
          <span>ITEM NAME</span>
          <span>STOCK LEVEL</span>
          <span>EXPIRY RISK</span>
          <span>AUTO REORDER</span>
        </div>

        <div className="divide-y divide-border-subtle text-[11px]">
          <div className="grid grid-cols-4 px-3 py-2 items-center">
            <span className="font-semibold text-white">Insulin Vials (10ml)</span>
            <span className="text-accent-blue font-mono">12 units (Low)</span>
            <span className="text-text-secondary font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> 4 Days
            </span>
            <span className="text-accent-blue font-mono text-[10px]">PO-8921 Dispatched</span>
          </div>

          <div className="grid grid-cols-4 px-3 py-2 items-center bg-bg-card">
            <span className="font-semibold text-white">Surgical Gloves (Box)</span>
            <span className="text-text-secondary font-mono">140 units</span>
            <span className="text-text-secondary font-mono">90 Days</span>
            <span className="text-text-secondary font-mono text-[10px]">Optimal</span>
          </div>

          <div className="grid grid-cols-4 px-3 py-2 items-center">
            <span className="font-semibold text-white">Saline Solution (1L)</span>
            <span className="text-accent-blue font-mono">8 units (Low)</span>
            <span className="text-text-secondary font-mono">12 Days</span>
            <span className="text-accent-blue font-mono text-[10px] flex items-center gap-1">
              <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Auto-Creating PO
            </span>
          </div>
        </div>
      </div>

      {/* Footer System Status Bar */}
      <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono pt-1">
        <span className="flex items-center gap-1">
          <Bell className="w-3 h-3 text-accent-blue" /> SSE Real-time Telemetry: Active
        </span>
        <span>ZXing Barcode Engine: Enabled</span>
      </div>
    </div>
  );
}
