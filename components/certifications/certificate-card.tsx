"use client";

import React from "react";
import Image from "next/image";
import { Certification } from "@/types/certification";

interface CertificateCardProps {
  certification: Certification;
  onSelect: (cert: Certification) => void;
}

export function CertificateCard({ certification, onSelect }: CertificateCardProps) {
  return (
    <article
      onClick={() => onSelect(certification)}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-transparent hover:bg-white/3 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(certification);
        }
      }}
      aria-label={`View certificate: ${certification.title}`}
    >
      {/* Certificate Preview Image */}
      <div className="relative aspect-16/11 w-full overflow-hidden border-b border-white/10 bg-black/40">
        <Image
          src={certification.thumbnailPath}
          alt={certification.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle hover overlay prompt */}
        <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-white/20 text-xs font-semibold text-white tracking-wide shadow-lg">
            Click to View {certification.fileType.toUpperCase()}
          </span>
        </div>

        {/* File Type Pill */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-neutral-900/90 text-neutral-300 border border-white/15">
            {certification.fileType}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Category & Date */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-cyan-400 font-medium tracking-wide">
            {certification.category}
          </span>
          <span className="text-neutral-400 font-mono text-[11px]">
            {certification.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
          {certification.title}
        </h3>

        {/* Issuer */}
        <p className="text-xs font-medium text-neutral-300">
          {certification.issuer}
        </p>

        {/* Description */}
        <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 flex-1">
          {certification.description}
        </p>

        {/* Footer Meta */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
          <span>{certification.locationOrEvent || "Verified Credential"}</span>
          <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform duration-200 font-medium">
            View
          </span>
        </div>
      </div>
    </article>
  );
}
