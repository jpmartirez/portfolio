"use client";

import React, { useRef, useEffect } from "react";

interface ChatbotInputProps {
  inputValue: string;
  isTyping: boolean;
  isOpen: boolean;
  onInputChange: (val: string) => void;
  onSubmit: () => void;
}

export function ChatbotInput({
  inputValue,
  isTyping,
  isOpen,
  onInputChange,
  onSubmit,
}: ChatbotInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="p-3 border-t border-white/10 bg-white/2 flex items-center gap-2"
    >
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Ask a question..."
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
      />
      <button
        type="submit"
        disabled={!inputValue.trim() || isTyping}
        className="px-3 py-2 rounded-xl text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
      >
        Send
      </button>
    </form>
  );
}
