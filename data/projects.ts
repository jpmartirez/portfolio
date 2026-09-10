import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "ephnyr-ai",
    title: "Ephnyr AI",
    subtitle: "Full-Stack Multi-Tenant RAG Platform with Groq LPU & pgvector",
    description:
      "A high-performance Retrieval-Augmented Generation (RAG) platform designed for document similarity grounding and low-latency AI conversations. Features isolated Knowledge Pods, automated parsing for multi-format documents (PDF, DOCX, TXT, MD), and zero-trace ephemeral messaging.",
    highlights: [
      "Decoupled Next.js 14 App Router frontend with asynchronous FastAPI backend and LangChain text chunking",
      "Local CPU FastEmbed (384-dim dense vectors) coupled with PostgreSQL pgvector HNSW cosine similarity search",
      "Sub-500ms grounded AI inference powered by Groq LPU (Llama 3.3 70B) with verified document citations",
      "Zero-trace session privacy model with multi-tenant storage quotas and room-level access enforcement",
    ],
    techStack: [
      "Next.js 14",
      "FastAPI",
      "Python",
      "LangChain",
      "Groq LPU",
      "pgvector",
      "Supabase",
      "Docker",
    ],
    category: "AI & Machine Learning",
    badge: "RAG & LLMs",
    deployUrl: "", // Insert your live deployment URL here (e.g., "https://...")
    githubUrl: "", // Insert your GitHub repository URL here (e.g., "https://github.com/...")
  },
  {
    id: "checkmate-ph",
    title: "CheckMatePH",
    subtitle: "Political Fact-Checking & Civic Engagement Platform",
    description:
      "A web-based civic engagement social platform built for Filipino voters to combat misinformation and encourage responsible discourse. Combines automated AI-driven fact checking with expert verification workflows and live civic debate rooms.",
    highlights: [
      "Built for SIKAPTala 2026 National CS & IT Hackathon (Team Debuggerinas · MSEUF)",
      "Pre-publication AI fact-checking pipeline evaluating claims against verified public records",
      "Interactive real-time debate rooms and structured audience voting powered by Supabase Realtime",
      "Verified politician profiles featuring public claim tracking, integrity scores, and promise fulfillment metrics",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "OpenAI API",
      "Vercel",
    ],
    category: "Civic & HealthTech",
    badge: "SIKAPTala 2026 Hackathon",
    deployUrl: "", // Insert your live deployment URL here
    githubUrl: "", // Insert your GitHub repository URL here
  },
  {
    id: "focusfolio",
    title: "FocusFolio",
    subtitle: "AI Study Workspace & Automated Document Quiz Generator",
    description:
      "An AI-powered study platform that transforms static PDF documents into interactive learning environments. Employs context-restricted RAG pipelines to eliminate distractions and generate dynamic quizzes and flashcards directly from course materials.",
    highlights: [
      "Strict context-restricted AI assistant that declines unrelated queries to enforce focused learning",
      "Dynamic generation of interactive multiple-choice exams and front-to-back flashcards from uploaded PDFs",
      "Split-screen workspace pairing a native PDF reader side-by-side with AI chat and study tools",
      "Pinecone vector database integration with LangChain document chunking and Supabase storage",
    ],
    techStack: [
      "Next.js",
      "FastAPI",
      "Python",
      "LangChain",
      "Pinecone",
      "Supabase",
      "Clerk",
      "Tailwind CSS",
    ],
    category: "AI & Machine Learning",
    badge: "EdTech & RAG",
    deployUrl: "", // Insert your live deployment URL here
    githubUrl: "", // Insert your GitHub repository URL here
  },
  {
    id: "bitetrack",
    title: "BiteTrack",
    subtitle: "Rabies Surveillance & Animal Bite Case Management System",
    description:
      "A comprehensive healthcare surveillance web application for recording patient rabies cases, tracking animal bite incidents, monitoring vaccination schedule compliance, and generating automated monthly health department reports.",
    highlights: [
      "End-to-end patient demographic, bite circumstance, and biting animal status registry",
      "Interactive case database table with real-time patient filtering and dynamic status tracking",
      "Multi-dose vaccination schedule management with compliance remark calculations",
      "Asynchronous Supabase database sync with LocalStorage offline fallback and automated Excel export",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Row Level Security",
      "SheetJS",
    ],
    category: "Civic & HealthTech",
    badge: "Surveillance & HealthTech",
    deployUrl: "", // Insert your live deployment URL here
    githubUrl: "", // Insert your GitHub repository URL here
  },
];
