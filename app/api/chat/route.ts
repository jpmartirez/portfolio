/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.AZURE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AZURE_AI_API_KEY is not set. Please add it to your environment variables.",
        },
        { status: 500 }
      );
    }

    const rawEndpoint = process.env.ENDPOINT;
    const agentName = process.env.AGENT_NAME;
    const agentVersion = process.env.AGENT_VERSION;

    if (!rawEndpoint) {
      return NextResponse.json(
        { error: "ENDPOINT environment variable is not set." },
        { status: 500 }
      );
    }
    if (!agentName) {
      return NextResponse.json(
        { error: "AGENT_NAME environment variable is not set." },
        { status: 500 }
      );
    }
    if (!agentVersion) {
      return NextResponse.json(
        { error: "AGENT_VERSION environment variable is not set." },
        { status: 500 }
      );
    }

    // Ensure baseURL points to the OpenAI-compatible endpoint
    const baseURL = rawEndpoint.endsWith("/openai/v1")
      ? rawEndpoint
      : `${rawEndpoint.replace(/\/+$/, "")}/openai/v1`;

    const openai = new OpenAI({
      baseURL,
      apiKey,
    });

    // 1. Create a conversation thread with the user's message
    const conversation = await openai.conversations.create({
      items: [
        {
          type: "message",
          role: "user",
          content: message.trim(),
        },
      ],
    });

    // 2. Request response using the custom agent reference
    const requestPayload = {
      conversation: conversation.id,
      input: message.trim(),
      agent_reference: {
        name: agentName,
        version: agentVersion,
        type: "agent_reference",
      },
    };

    const response = await openai.responses.create(
      requestPayload as any,
      {
        body: requestPayload,
      }
    );

    let replyText = (response as any).output_text?.trim();

    // Fallback extraction if output_text is not directly populated
    if (!replyText && Array.isArray((response as any).output)) {
      for (const item of (response as any).output) {
        if (item.type === "message" && Array.isArray(item.content)) {
          for (const c of item.content) {
            if (c.text) {
              replyText = (replyText ? replyText + "\n" : "") + c.text;
            }
          }
        }
      }
    }

    if (!replyText) {
      replyText =
        "I'm sorry, no response was returned by the agent. Please try again.";
    }

    return NextResponse.json({ reply: replyText });
  } catch (error: unknown) {
    console.error("Azure AI Agent API error:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to communicate with Azure AI agent.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
