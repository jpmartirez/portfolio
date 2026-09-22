import { ChatMessage } from "@/types/chatbot";

export const INITIAL_CHAT_MESSAGE: ChatMessage = {
  id: "welcome",
  sender: "assistant",
  text: "Hi! I'm John Paul's portfolio assistant. Feel free to ask about his background, projects, technical skills, or certifications.",
  timestamp: "Just now",
};

export const CHAT_SUGGESTIONS = [
  "What is your tech stack?",
  "Tell me about Ephnyr AI",
  "Where are you located?",
  "How can I contact you?",
];

/**
 * ============================================================================
 * INSTRUCTIONS FOR INTEGRATING YOUR LLM API
 * ============================================================================
 * 
 * When you are ready to connect a real LLM (Groq, OpenAI, Google Gemini, etc.):
 *
 * 1. Create a Next.js API route at `app/api/chat/route.ts` to keep your API keys secure:
 *    
 *    // app/api/chat/route.ts
 *    import { NextRequest, NextResponse } from "next/server";
 *    
 *    export async function POST(req: NextRequest) {
 *      const { message } = await req.json();
 *      
 *      // Call your LLM here (e.g. Groq, OpenAI, Google Gemini)
 *      // const response = await openai.chat.completions.create({...});
 *      
 *      return NextResponse.json({ reply: "LLM output here" });
 *    }
 *
 * 2. In this function below (`sendChatMessage`), replace the simulated logic with:
 *
 *    const res = await fetch("/api/chat", {
 *      method: "POST",
 *      headers: { "Content-Type": "application/json" },
 *      body: JSON.stringify({ message: text }),
 *    });
 *    const data = await res.json();
 *    return data.reply;
 *
 * ============================================================================
 */
export async function sendChatMessage(text: string): Promise<string> {
  // Simulate network latency (e.g. 500ms)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // --- CURRENT LOCAL SIMULATION (Replace with API call above) ---
  const lower = text.toLowerCase();

  if (
    lower.includes("tech") ||
    lower.includes("skill") ||
    lower.includes("stack")
  ) {
    return "John Paul specializes in Python, Next.js, TypeScript, FastAPI, LangChain, and Supabase with pgvector for high-performance AI and RAG architectures.";
  }

  if (
    lower.includes("project") ||
    lower.includes("ephnyr") ||
    lower.includes("checkmate") ||
    lower.includes("folio") ||
    lower.includes("bite")
  ) {
    return "Key projects include Ephnyr AI (multi-tenant RAG platform), CheckMatePH (SIKAPTala 2026 civic fact-checker), FocusFolio (AI study room), and BiteTrack (rabies surveillance).";
  }

  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("social")
  ) {
    return "You can connect with John Paul on LinkedIn (in/john-paul-martirez-8819552b7), GitHub (@jpmartirez), Facebook, or Instagram via the social buttons on the About Me page.";
  }

  if (
    lower.includes("location") ||
    lower.includes("where") ||
    lower.includes("manila")
  ) {
    return "John Paul is based in Manila, Philippines.";
  }

  return "Thanks for your question! The AI assistant API is currently in development mode. In the meantime, you can explore John Paul's projects and certifications directly on the site.";
}
