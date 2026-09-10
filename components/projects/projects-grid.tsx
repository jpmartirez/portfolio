"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "AI & Machine Learning",
  "Civic & HealthTech",
];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category === activeCategory);

  return (
    <section className="w-full space-y-8">
      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Filter by Domain:
          </span>
          <span className="text-xs text-cyan-400 font-mono">
            ({filteredProjects.length} of {PROJECTS.length})
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white/15 text-white border border-white/25 shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                {cat} <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
