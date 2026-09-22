"use client";

import React from "react";
import { CHAT_SUGGESTIONS } from "@/lib/chat-service";

interface ChatbotSuggestionsProps {
  onSelectSuggestion: (text: string) => void;
}

export function ChatbotSuggestions({ onSelectSuggestion }: ChatbotSuggestionsProps) {
  return (
    <div className="px-3 pb-2 pt-1 border-t border-white/5 bg-white/1">
      <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mb-1.5 px-1">
        Suggested prompts:
      </p>
      <div className="flex flex-wrap gap-1.5">
        {CHAT_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onSelectSuggestion(suggestion)}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors text-left cursor-pointer"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
