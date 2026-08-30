import type { Metadata } from "next";
import { CertificationsGrid } from "@/components/certifications/certifications-grid";

export const metadata: Metadata = {
  title: "Certifications | John Paul Martirez",
  description:
    "Explore certifications and credentials earned by John Paul Martirez in AI hackathons, competitive programming, full-stack web development, and tech innovation.",
};

export default function CertificationsPage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
          <span>Official Credentials & Badges</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Certifications
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          Verified credentials and awards from nationwide AI hackathons, competitive programming challenges, full-stack engineering bootcamps, and technical innovation summits.
        </p>
      </div>

      {/* Grid Component */}
      <CertificationsGrid />
    </main>
  );
}
