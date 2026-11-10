"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Github, Layers, Search, Sparkles } from "lucide-react";
import initialProjects from "@/data/projects.json";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  badge: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  highlights?: string[];
}

export const resolveThumbnail = (src?: string): string => {
  if (!src) return "/assets/images/projects/project-data-analytics.svg";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  return `/${src}`;
};

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["ALL", "AI & DATA", "FULL STACK", "FRONTEND", "BACKEND"];

  const filteredProjects = useMemo(() => {
    return (initialProjects as Project[]).filter((p) => {
      const matchCat =
        selectedCategory === "ALL" ||
        (selectedCategory === "AI & DATA" &&
          (p.category.toUpperCase().includes("AI") ||
            p.category.toUpperCase().includes("DATA"))) ||
        p.category.toUpperCase().includes(selectedCategory);
      const matchQuery =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="project"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 md:py-28 overflow-hidden bg-obsidian"
    >
      {/* Background Radial Glow (Optimized for Mobile) */}
      <div className="hidden md:block absolute top-1/4 right-10 w-96 h-96 bg-abyssal/15 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="hidden md:block absolute bottom-1/4 left-10 w-96 h-96 bg-crimson/15 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-obsidian-border pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-crimson-light animate-pulse" />
              <span className="font-arcade text-xs tracking-widest text-text-muted uppercase">
                SHOWCASE HUB // FEDERATED RECAP
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight uppercase">
                RECAP PROJECT 2025
              </h2>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-abyssal-deep border border-ice/30 text-ice uppercase font-semibold">
                VERCEL HOSTED
              </span>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-dim" />
              <input
                type="text"
                placeholder="Search stack or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-52 pl-9 pr-3 py-1.5 rounded-lg bg-obsidian-deep border border-obsidian-border text-xs text-text-main placeholder:text-text-dim focus:outline-none focus:border-ice/60 transition-colors font-sans"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-obsidian-deep border border-obsidian-border overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md text-[11px] font-arcade tracking-wider transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-text-main text-obsidian font-bold shadow-sm"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid Showcase */}
        {filteredProjects.length === 0 ? (
          <div className="w-full py-20 text-center text-text-muted font-mono text-sm">
            [!] No projects found matching filter or query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredProjects.map((project, idx) => {
              // Asymmetric bento span sizing
              const isWide = idx % 3 === 0;
              const spanClass = isWide
                ? "lg:col-span-8"
                : idx % 3 === 1
                ? "lg:col-span-4"
                : "lg:col-span-12";

              return (
                <div
                  key={project.id}
                  className={`bento-card group rounded-2xl overflow-hidden flex flex-col justify-between relative cursor-pointer ${spanClass}`}
                  onClick={() => onSelectProject(project)}
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-obsidian-deep/80 border-b border-obsidian-border">
                    <Image
                      src={resolveThumbnail(project.thumbnail)}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-obsidian-deep/90 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-ice uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-abyssal-deep/80 text-[10px] font-mono text-text-muted">
                        {project.category}
                      </span>
                    </div>

                    {/* Floating Action Overlay on Hover */}
                    <div className="absolute inset-0 bg-obsidian-deep/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 z-20">
                      <div className="text-center mb-1">
                        <span className="text-xs font-arcade text-ice tracking-wider">
                          CLICK FOR DEEP DIVE DETAILS
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-text-main text-obsidian hover:bg-ice font-arcade font-bold text-xs tracking-wider flex items-center gap-2 transition-all shadow-arcade-glow"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>LIVE DEMO</span>
                        </a>

                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-obsidian-deep border border-obsidian-border hover:border-ice/60 text-text-main font-arcade font-bold text-xs tracking-wider flex items-center gap-2 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GITHUB</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-text-main tracking-tight group-hover:text-ice transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-text-muted text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-obsidian-border/50">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-obsidian-deep/90 border border-obsidian-border text-text-muted group-hover:text-text-main transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

