"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Project, resolveThumbnail } from "./ProjectShowcase";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-obsidian-deep border border-obsidian-border rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-obsidian-border bg-obsidian-surface">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-obsidian-deep border border-ice/30 text-[10px] font-mono text-ice uppercase font-bold">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-text-muted uppercase">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-text-muted hover:text-text-main hover:bg-obsidian-border/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Big Preview Image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-obsidian-border bg-obsidian">
            <Image
              src={resolveThumbnail(project.thumbnail)}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-main tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-4 rounded-xl bg-obsidian-surface border border-obsidian-border">
              <h4 className="font-arcade text-xs font-bold text-ice tracking-wider uppercase mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-ice" />
                TECHNICAL HIGHLIGHTS
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-text-main/90 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="font-arcade text-xs font-bold text-text-dim tracking-wider uppercase mb-2">
              TECHNOLOGIES DEPLOYED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-obsidian-surface border border-obsidian-border text-text-main"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-obsidian-border bg-obsidian-surface flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-text-dim hidden sm:block">
            STATUS: 200 LIVE ON VERCEL
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-obsidian-deep border border-obsidian-border hover:border-ice/50 text-text-main font-arcade font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-text-main text-obsidian hover:bg-ice font-arcade font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-arcade-glow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LAUNCH DEMO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

