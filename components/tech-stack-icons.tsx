"use client";

import React, { useState } from "react";
import { 
  BrainCircuit, 
  Cpu, 
  Sparkles, 
  Database, 
  Terminal, 
} from "lucide-react";

interface TechItem {
  name: string;
  category: "AI & ML" | "Software Solutions" | "Tools";
  icon: React.ReactNode;
  level?: "Used" | "Interested" | "Core";
  description: string;
}

const TECH_STACK: TechItem[] = [
  // AI & ML
  {
    name: "Python",
    category: "AI & ML",
    level: "Core",
    description: "Primary language for AI, data pipelines & machine learning",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.008 2.753h5.815v.825H3.945S0 5.762 0 11.884c0 6.12 3.447 5.918 3.447 5.918h2.057v-2.884s-.112-3.448 3.393-3.448h5.828s3.28.053 3.28-3.228V3.228S18.412 0 11.914 0zm-3.32 1.83a1.05 1.05 0 0 1 1.052 1.051 1.05 1.05 0 0 1-1.052 1.052A1.05 1.05 0 0 1 7.54 2.88a1.05 1.05 0 0 1 1.052-1.051zm3.492 22.17c6.095 0 5.714-2.656 5.714-2.656l-.008-2.752h-5.815v-.826h8.077s3.945.472 3.945-5.65c0-6.12-3.447-5.918-3.447-5.918h-2.057v2.884s.112 3.448-3.393 3.448H9.297s-3.28-.053-3.28 3.228v5.015s-.407 3.228 6.09 3.228zm3.32-1.83a1.05 1.05 0 0 1-1.052-1.051 1.05 1.05 0 0 1 1.052-1.052 1.05 1.05 0 0 1 1.052 1.052 1.05 1.05 0 0 1-1.052 1.051z" />
      </svg>
    ),
  },
  {
    name: "LangChain & LLMs",
    category: "AI & ML",
    level: "Core",
    description: "Building autonomous agents, RAG & LLM-powered applications",
    icon: <Sparkles className="size-5 text-cyan-400" />,
  },

  // Software Solutions
  {
    name: "Next.js",
    category: "Software Solutions",
    level: "Core",
    description: "Full-stack React framework for modern high-performance web apps",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.83 17.58l-5.35-7.39v7.39H11V6.42h1.48l5.35 7.39V6.42h1.48v11.16h-1.48z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Software Solutions",
    level: "Core",
    description: "Component-driven user interfaces & reactive frontend architecture",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a4.34 4.34 0 0 0-4.33 4.33c0 .24.03.48.07.71C4.38 5.76 2 7.78 2 10.22c0 2.29 2.08 4.22 4.96 4.88-.04.25-.07.51-.07.77 0 2.39 1.94 4.33 4.33 4.33s4.33-1.94 4.33-4.33c0-.26-.03-.52-.07-.77 2.88-.66 4.96-2.59 4.96-4.88 0-2.44-2.38-4.46-5.74-5.18.04-.23.07-.47.07-.71C20.33 1.94 16.39 0 12 0zm0 8.67a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Software Solutions",
    level: "Core",
    description: "Type-safe JavaScript for scalable enterprise systems",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.195 10.15h6.216v2.164h-2.02v9.336h-2.176v-9.336h-2.02v-2.164zm-8.81 2.27c1.03-.687 2.27-.992 3.513-.992 1.557 0 2.822.42 3.61 1.183.788.763 1.182 1.79 1.182 3.08v.25c0 1.196-.34 2.146-1.02 2.85-.68.704-1.636 1.19-2.868 1.458l-1.042.23c-.76.168-1.29.356-1.59.564-.3.208-.45.49-.45.845 0 .393.18.707.54.942.36.235.88.353 1.56.353 1.12 0 2.2-.38 3.24-1.14v2.09c-.98.58-2.1 0.87-3.36.87-1.46 0-2.67-.42-3.63-1.26-.96-.84-1.44-1.92-1.44-3.24 0-1.18.36-2.13 1.08-2.85.72-.72 1.74-1.22 3.06-1.5l1.08-.24c.72-.16 1.22-.34 1.5-.54.28-.2.42-.47.42-.81 0-.37-.17-.66-.51-.87-.34-.21-.83-.315-1.47-.315-.99 0-2 .33-3.03 0.99v-2.136z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Software Solutions",
    level: "Used",
    description: "Modern utility-first styling for fast, responsive web design",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Vector & SQL DB",
    category: "Software Solutions",
    level: "Interested",
    description: "Relational data & high-dimensional vector embeddings for AI",
    icon: <Database className="size-5 text-emerald-400" />,
  },

  // Tools
  {
    name: "Docker",
    category: "Tools",
    level: "Used",
    description: "Containerization for reproducible ML and application deployment",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.146a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm8.838 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.146a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-2.293-2.625-3.323-4.041-2.98-.3-.217-.643-.377-1.018-.465l-.487-.113-.23.447c-.574 1.115-.658 2.37-.243 3.518-.36.17-.745.31-1.15.415H1.472a1.077 1.077 0 00-1.074 1.078c0 4.316 2.65 8.167 6.647 9.657 4.148 1.547 8.87.84 12.35-1.854 2.827-2.19 4.544-5.59 4.365-9.717z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Core",
    description: "Version control, continuous integration & open-source collaboration",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.59L8.38 4.8l1.69-1.7a2.4 2.4 0 0 1 3.4 0l2.36 2.36 4.96 4.96a2.4 2.4 0 0 1 0 3.4L15 19.6a2.4 2.4 0 0 1-3.4 0l-9-9a2.4 2.4 0 0 1 0-3.41zM8.7 13.9a1.69 1.69 0 1 0 2.39-2.39 1.69 1.69 0 0 0-2.39 2.39zm6.6-4.2a1.69 1.69 0 1 0 2.39-2.39 1.69 1.69 0 0 0-2.39 2.39zm-3.3 3.3a1.69 1.69 0 1 0 2.39-2.39 1.69 1.69 0 0 0-2.39 2.39z" />
      </svg>
    ),
  }
];

export function TechStackIcons() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const categories = ["All", "AI & ML", "Software Solutions", "Tools"];

  const filteredTech =
    activeCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full space-y-3 pt-2">
      {/* Category selector & counts */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Tech & Stacks
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            AI • ML • Dev
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer font-medium ${
                activeCategory === cat
                  ? "bg-white/15 text-white border border-white/20 shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Icon Badges */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2.5">
        {filteredTech.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => setHoveredTech(item)}
            onMouseLeave={() => setHoveredTech(null)}
            className="group relative flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/4 hover:bg-white/9 border border-white/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 cursor-pointer"
          >
            <div className="text-neutral-300 group-hover:text-cyan-300 transition-colors duration-200">
              {item.icon}
            </div>
            <span className="text-[11px] font-medium text-neutral-400 group-hover:text-white mt-1.5 tracking-tight line-clamp-1 text-center">
              {item.name}
            </span>

            {/* Custom Tooltip */}
            <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 w-44 p-2 rounded-lg bg-neutral-900/95 border border-white/15 backdrop-blur-md shadow-xl text-center">
              <p className="text-xs font-semibold text-white">{item.name}</p>
              <p className="text-[10px] text-cyan-400 font-medium">{item.level} • {item.category}</p>
              <p className="text-[10px] text-neutral-400 mt-1 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Active tech description strip */}
      <div className="min-h-5.5 px-1 flex items-center justify-between text-xs text-neutral-400">
        {hoveredTech ? (
          <div className="flex items-center gap-1.5 text-cyan-300">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span className="font-medium text-white">{hoveredTech.name}:</span>
            <span className="text-neutral-300">{hoveredTech.description}</span>
          </div>
        ) : (
          <span className="text-neutral-400 text-[11px]">
            Hover over any technology to explore my tools and areas of interest.
          </span>
        )}
      </div>
    </div>
  );
}
