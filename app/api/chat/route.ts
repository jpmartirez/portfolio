/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { DefaultAzureCredential } from "@azure/identity";
import { AIProjectClient } from "@azure/ai-projects";

const endpoint = process.env.ENDPOINT;
const agentName = process.env.AGENT_NAME;
const agentVersion = process.env.AGENT_VERSION;

if (!endpoint) {
  throw new Error("ENDPOINT environment variable is not set.");
}
if (!agentName) {
  throw new Error("AGENT_NAME environment variable is not set.");
}
if (!agentVersion) {
  throw new Error("AGENT_VERSION environment variable is not set.");
}

// Create AI Project client using DefaultAzureCredential
const projectClient = new AIProjectClient(endpoint, new DefaultAzureCredential());

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Get the OpenAI-compatible client from the AI Project Client
    const openAIClient = projectClient.getOpenAIClient();

    // 1. Create conversation with initial user message
    const conversation = await openAIClient.conversations.create({
      items: [
        {
          type: "message",
          role: "user",
          content: message.trim(),
        },
      ],
    });

    // 2. Generate response using custom agent reference
    const response = await openAIClient.responses.create(
      {
        conversation: conversation.id,
      },
      {
        body: {
          agent_reference: {
            name: agentName,
            version: agentVersion,
            type: "agent_reference",
          },
        },
      }
    );

    const replyText =
      (response as any).output_text?.trim() ||
      "I'm sorry, no response was returned by the agent. Please try again.";

    return NextResponse.json({ reply: replyText });
  } catch (error: unknown) {
    console.error("Azure AI Agent API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to communicate with Azure AI agent.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

