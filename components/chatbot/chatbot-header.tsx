"use client";

import React from "react";
import { X } from "lucide-react";

interface ChatbotHeaderProps {
  onClear: () => void;
  onClose: () => void;
}

export function ChatbotHeader({ onClear, onClose }: ChatbotHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-white/2">
      {/* Title & Status Indicator */}
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-cyan-400" />
        <h3 className="text-xs font-semibold text-white tracking-wide">
          Paul.ai
        </h3>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClear}
          className="px-2 py-1 rounded-md text-[11px] font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          title="Reset session (no memory)"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close chat"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
