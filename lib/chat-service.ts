import { ChatMessage } from "@/types/chatbot";

export const INITIAL_CHAT_MESSAGE: ChatMessage = {
  id: "welcome",
  sender: "assistant",
  text: "Hi! I'm John Paul's portfolio assistant. Feel free to ask about his background, projects, technical skills, or certifications.",
  timestamp: "Just now",
};

export const CHAT_SUGGESTIONS = [
  "What are your main technical skills?",
  "Tell me about your AI projects",
  "What are your Certifications?",
  "How can I contact John Paul?",
];

/**
 * Calls the backend API route (`/api/chat`) which securely communicates
 * with your Azure AI Foundry agent (`jp-agent-9212026`).
 */
export async function sendChatMessage(text: string): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: text }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.error || `Request failed with status ${response.status}`
    );
  }

  const data = await response.json();
  return data.reply;
}

