"use client";

import React, { useState } from "react";
import { ChatMessage } from "@/types/chatbot";
import { INITIAL_CHAT_MESSAGE, sendChatMessage } from "@/lib/chat-service";
import { ChatbotHeader } from "@/components/chatbot/chatbot-header";
import { ChatbotMessages } from "@/components/chatbot/chatbot-messages";
import { ChatbotSuggestions } from "@/components/chatbot/chatbot-suggestions";
import { ChatbotInput } from "@/components/chatbot/chatbot-input";
import { ChatbotTrigger } from "@/components/chatbot/chatbot-trigger";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_CHAT_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const replyText = await sendChatMessage(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      const errorText =
        err instanceof Error
          ? err.message
          : "Sorry, I encountered an issue processing your request. Please try again.";
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: errorText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    // Stateless reset: resets local state without persistent memory
    setMessages([INITIAL_CHAT_MESSAGE]);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Portfolio Chat Assistant"
          className="relative flex flex-col w-[calc(100vw-2.5rem)] sm:w-96 h-125 max-h-[82vh] mb-3 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <ChatbotHeader onClear={handleClear} onClose={() => setIsOpen(false)} />
          <ChatbotMessages messages={messages} isTyping={isTyping} />
          {messages.length === 1 && (
            <ChatbotSuggestions onSelectSuggestion={(prompt) => handleSend(prompt)} />
          )}
          <ChatbotInput
            inputValue={inputValue}
            isTyping={isTyping}
            isOpen={isOpen}
            onInputChange={setInputValue}
            onSubmit={() => handleSend()}
          />
        </div>
      )}

      {/* Floating Launcher Button */}
      <ChatbotTrigger isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}
