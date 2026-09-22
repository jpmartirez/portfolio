"use client";

import React, { useEffect, useRef } from "react";
import { ChatMessage } from "@/types/chatbot";

interface ChatbotMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

export function ChatbotMessages({ messages, isTyping }: ChatbotMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex flex-col ${
            msg.sender === "user" ? "items-end" : "items-start"
          }`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
              msg.sender === "user"
                ? "bg-white text-neutral-950 font-medium rounded-tr-xs"
                : "bg-white/5 text-neutral-200 border border-white/10 rounded-tl-xs shadow-sm"
            }`}
          >
            <p className="whitespace-pre-wrap">{msg.text}</p>
          </div>
          <span className="text-[9px] text-neutral-400 mt-1 px-1 font-mono">
            {msg.timestamp}
          </span>
        </div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex items-center gap-1 px-3.5 py-2.5 rounded-2xl rounded-tl-xs bg-white/5 border border-white/10 w-fit">
          <span className="size-1.5 rounded-full bg-cyan-400 animate-bounce" />
          <span className="size-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.15s]" />
          <span className="size-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.3s]" />
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
