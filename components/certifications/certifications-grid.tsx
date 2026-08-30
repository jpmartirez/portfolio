"use client";

import React, { useState } from "react";
import { CERTIFICATIONS } from "@/data/certifications";
import { Certification, CertificationCategory } from "@/types/certification";
import { CertificateCard } from "@/components/certifications/certificate-card";
import { CertificateModal } from "@/components/certifications/certificate-modal";

const CATEGORIES: CertificationCategory[] = [
  "All",
  "Hackathons",
  "Competitions",
  "Courses & Summits",
];

export function CertificationsGrid() {
  const [activeCategory, setActiveCategory] = useState<CertificationCategory>("All");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredCertifications =
    activeCategory === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((cert) => cert.category === activeCategory);

  return (
    <section className="w-full space-y-8">
      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Filter by Category:
          </span>
          <span className="text-xs text-cyan-400 font-mono">
            ({filteredCertifications.length} of {CERTIFICATIONS.length})
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? CERTIFICATIONS.length
                : CERTIFICATIONS.filter((c) => c.category === cat).length;

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

      {/* Grid of Certificates - Border-focused, no heavy background color */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert) => (
          <CertificateCard
            key={cert.id}
            certification={cert}
            onSelect={setSelectedCert}
          />
        ))}
      </div>

      {/* Lightbox / PDF Viewer Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
