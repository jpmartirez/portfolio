"use client";

import React from "react";
import { Bot, X } from "lucide-react";

interface ChatbotTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatbotTrigger({ isOpen, onToggle }: ChatbotTriggerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-900 text-white border border-white/15 hover:border-cyan-500/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      aria-label={isOpen ? "Close Paul.ai" : "Open Paul.ai"}
    >
      {isOpen ? <X className="size-4" /> : <Bot className="size-4 text-cyan-400" />}
      <span className="text-xs font-medium tracking-wide">
        {isOpen ? "Close" : "Paul.ai"}
      </span>
    </button>
  );
}
