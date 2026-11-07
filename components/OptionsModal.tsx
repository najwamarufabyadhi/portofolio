"use client";

import React, { useEffect } from "react";
import { X, FileText, Download, CheckCircle2, Terminal, Cpu } from "lucide-react";
import profileData from "@/data/profile.json";

interface OptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OptionsModal: React.FC<OptionsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-obsidian-deep border border-obsidian-border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-abyssal/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-obsidian-border pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-ice" />
            <h3 className="font-arcade text-base sm:text-lg font-bold tracking-widest text-text-main uppercase">
              OPTIONS // EXECUTIVE SUMMARY
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-text-muted hover:text-text-main hover:bg-obsidian-border/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          {/* Identity & Core Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {profileData.stats.map((s) => (
              <div
                key={s.label}
                className="p-3 rounded-xl bg-obsidian-surface border border-obsidian-border text-center"
              >
                <div className="font-display text-lg font-bold text-ice">{s.value}</div>
                <div className="text-[10px] font-mono text-text-muted uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Key Competency Summary */}
          <div className="p-4 rounded-xl bg-obsidian-surface border border-obsidian-border">
            <h4 className="font-arcade text-xs font-bold text-text-main tracking-wider uppercase mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-crimson-light" />
              SYSTEM CAPABILITIES
            </h4>
            <ul className="space-y-2 text-xs text-text-muted font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Next.js App Router, React 18+, TypeScript, and Tailwind CSS architecture.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>RESTful APIs, PostgreSQL, Supabase, Redis rate-limiting, and Go microservices.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Automated Git CI/CD deployment pipelines on Vercel with &lt; 1s latency.</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-obsidian-border">
            <span className="text-xs font-mono text-text-dim">
              [ESC] Press Escape to exit
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={profileData.resumeUrl}
                download
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-text-main text-obsidian hover:bg-ice font-arcade text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-arcade-glow"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

