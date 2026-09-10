import React from "react";
import { Radio } from "lucide-react";
import { Project } from "@/types/project";

function GithubIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasDeploy = Boolean(project.deployUrl && project.deployUrl.trim() !== "");
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== "");
  const hasAnyLink = hasDeploy || hasGithub;

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/75 hover:border-cyan-500/40 backdrop-blur-md shadow-xl shadow-black/40 transition-all duration-300 p-6 sm:p-8 lg:p-9 space-y-6 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/15 group-hover:before:via-cyan-400/50 before:to-transparent">
      {/* Subtle ambient gradient glow complementing the beams palette */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/18 blur-3xl transition-all duration-500"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-500/6 group-hover:bg-sky-500/12 blur-3xl transition-all duration-500"
        aria-hidden="true"
      />

      {/* Top Header & Action Buttons */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-2.5 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                {project.badge}
              </span>
            )}
            <span className="text-xs text-neutral-400 font-mono">
              {project.category}
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-neutral-300 leading-snug">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Action Buttons (Desktop Top-Right) */}
        {hasAnyLink && (
          <div className="hidden md:flex items-center gap-2.5 shrink-0 pt-1">
            {hasDeploy && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Live Demo</span>
                <Radio className="size-3.5" />
              </a>
            )}
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <GithubIcon className="size-3.5" />
                <span>GitHub</span>
                
              </a>
            )}
          </div>
        )}
      </div>

      {/* Key Capabilities: 2-column grid maximizing the wide card space */}
      <div className="relative z-10 space-y-3 border-t border-white/5 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
          Key Capabilities & Architecture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
          {project.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <span className="text-cyan-400 text-base leading-none mt-0.5 shrink-0">&bull;</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Area: Tech Stack Chips & Mobile Action Buttons */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-neutral-500 uppercase mr-1">Stack:</span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Action Buttons */}
        {hasAnyLink && (
          <div className="flex md:hidden items-center gap-2.5 pt-2 w-full">
            {hasDeploy && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 transition-colors"
              >
                <span>Live Demo</span>
                <Radio className="size-3.5" />
              </a>
            )}
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
              >
                <GithubIcon className="size-3.5" />
                <span>GitHub</span>
                
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
