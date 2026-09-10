import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects | John Paul Martirez",
  description:
    "Explore engineering projects and AI platforms built by John Paul Martirez, including Retrieval-Augmented Generation (RAG) systems, LLM architectures, and full-stack solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
          <span>Featured Systems & Engineering</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Projects
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Full-stack platforms, Retrieval-Augmented Generation (RAG) architectures, and civic solutions engineered with modern AI models, vector stores, and real-time backend systems.
        </p>
      </div>

      {/* Grid Component */}
      <ProjectsGrid />
    </main>
  );
}
