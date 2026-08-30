"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Certification } from "@/types/certification";

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export function CertificateModal({ certification, onClose }: CertificateModalProps) {
  // Close on Escape key press
  useEffect(() => {
    if (!certification) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-5xl max-h-[92vh] rounded-2xl border border-white/15 bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/3">
          <div className="space-y-0.5 pr-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
              {certification.category} &bull; {certification.fileType.toUpperCase()}
            </span>
            <h2
              id="certificate-modal-title"
              className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-1"
            >
              {certification.title}
            </h2>
            <p className="text-xs text-neutral-400">
              {certification.issuer} &bull; {certification.date}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={certification.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
            >
              Open Original
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>

        {/* Document Viewer Body */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/20 min-h-87.5">
          {certification.fileType === "image" ? (
            <div className="relative w-full max-w-4xl flex items-center justify-center">
              <Image
                src={certification.filePath}
                alt={certification.title}
                width={1600}
                height={1200}
                className="max-h-[62vh] w-auto object-contain rounded-lg border border-white/10 shadow-lg"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-[65vh] rounded-lg overflow-hidden border border-white/10 bg-neutral-950/60">
              <iframe
                src={`${certification.filePath}#toolbar=0&navpanes=0&scrollbar=1`}
                title={certification.title}
                className="w-full h-full border-0"
              />
            </div>
          )}
        </div>

        {/* Footer Details */}
        <div className="px-5 py-3.5 border-t border-white/10 bg-white/2 text-xs text-neutral-400 space-y-1">
          <p className="leading-relaxed text-neutral-300">
            {certification.description}
          </p>
          {certification.credentialId && (
            <p className="text-[11px] text-neutral-400 font-mono">
              Credential Reference: {certification.credentialId}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
