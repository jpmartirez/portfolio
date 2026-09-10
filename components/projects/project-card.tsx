import React from "react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasDeploy = Boolean(project.deployUrl && project.deployUrl.trim() !== "");
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== "");
  const hasAnyLink = hasDeploy || hasGithub;

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/75 hover:border-cyan-500/40 backdrop-blur-md shadow-lg shadow-black/30 transition-all duration-300 p-6 sm:p-7 space-y-6 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/15 group-hover:before:via-cyan-400/50 before:to-transparent">
      {/* Subtle ambient gradient glow in the corner complementing the beams palette */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-cyan-500/8 group-hover:bg-cyan-500/15 blur-2xl transition-all duration-500"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky-500/5 group-hover:bg-sky-500/10 blur-2xl transition-all duration-500"
        aria-hidden="true"
      />
      {/* Header Info */}
      <div className="relative z-10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {project.badge && (
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
              {project.badge}
            </span>
          )}
          <span className="text-[11px] text-neutral-400 font-mono">
            {project.category}
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-neutral-300 leading-snug">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
          {project.description}
        </p>
      </div>

      {/* Key Architectural Highlights */}
      <div className="relative z-10 space-y-2 border-t border-white/5 pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
          Key Capabilities
        </h3>
        <ul className="space-y-1.5 text-xs text-neutral-400 leading-relaxed">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-cyan-400 text-sm leading-none mt-0.5">&bull;</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Area: Tech Stack & Action Links */}
      <div className="relative z-10 space-y-5 border-t border-white/5 pt-4">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Only rendered if link is present */}
        {hasAnyLink && (
          <div className="flex items-center gap-2.5 pt-1">
            {hasDeploy && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Live Demo &nearr;
              </a>
            )}
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors cursor-pointer"
              >
                GitHub &nearr;
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
