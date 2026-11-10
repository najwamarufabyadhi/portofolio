"use client";

import React from "react";
import profileData from "@/data/profile.json";
import { GraduationCap, MapPin, Award, CheckCircle2, Cpu, Terminal, Database, Sparkles } from "lucide-react";

export const ProfileSection: React.FC = () => {
  return (
    <section
      id="profil"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 md:py-28 overflow-hidden bg-obsidian-deep"
    >
      {/* Background Ambient Radial Glow (Optimized for Mobile) */}
      <div className="hidden md:block absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-abyssal/20 rounded-full blur-[170px] pointer-events-none -z-0" />
      <div className="hidden md:block absolute bottom-10 right-10 w-80 h-80 bg-crimson/10 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="w-full max-w-6xl mx-auto z-10 space-y-8">
        
        {/* Header Profile Identity (Clean & Balanced without middle photo) */}
        <div className="border-b border-obsidian-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-ice animate-pulse" />
              <span className="font-arcade text-xs tracking-widest text-text-muted uppercase">
                HELLO, I AM // SYSTEM DOSSIER
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight uppercase leading-none">
              {profileData.name}
            </h2>
            <p className="font-mono text-sm sm:text-base text-ice font-semibold mt-2 tracking-wide">
              {profileData.title}
            </p>
          </div>

          {/* Quick Identity Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-surface border border-obsidian-border text-xs font-mono text-text-muted">
              <MapPin className="w-3.5 h-3.5 text-ice" />
              <span>{profileData.location}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-surface border border-ice/30 text-xs font-mono text-ice font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-ice" />
              <span>GPA 3.55 // UMM</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR ROLES</span>
            </span>
          </div>
        </div>

        {/* Top 2 Bento Cards: About Me & Software Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* ABOUT ME SECTION */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-obsidian-border pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-ice" />
                  <h3 className="font-arcade text-sm font-bold tracking-widest text-ice uppercase">
                    ABOUT ME
                  </h3>
                </div>
                <span className="font-mono text-xs text-text-dim">// CORE ARCHITECTURE</span>
              </div>
              <p className="text-text-main/90 text-sm sm:text-base leading-relaxed font-sans mb-6">
                {profileData.bio}
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-obsidian-border/60">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-ice shrink-0" />
                <span>Deep Learning (CNN &amp; EfficientNet-B3)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-ice shrink-0" />
                <span>NLP &amp; Text Classification (LSTM)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-ice shrink-0" />
                <span>SQL Analytics &amp; Dataset EDA</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-ice shrink-0" />
                <span>Full-Stack Web &amp; REST APIs</span>
              </div>
            </div>
          </div>

          {/* SOFTWARE / TECH SKILLS SECTION */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-obsidian-border pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-ice" />
                  <h3 className="font-arcade text-sm font-bold tracking-widest text-ice uppercase">
                    SOFTWARE SKILLS
                  </h3>
                </div>
                <span className="font-mono text-xs text-text-dim">GLOSSY TECH TILES</span>
              </div>

              {/* Glossy App Tiles Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                {[
                  ...(profileData.techStack?.dataAi || []).slice(0, 5),
                  ...(profileData.techStack?.frontend || []).slice(0, 3),
                  ...(profileData.techStack?.backend || []).slice(0, 2),
                  ...(profileData.techStack?.devops || []).slice(0, 2),
                ].map((skill, idx) => {
                  const colors = [
                    "from-amber-500/30 to-orange-700/30 text-amber-300",
                    "from-cyan-500/30 to-blue-600/30 text-cyan-400",
                    "from-emerald-600/30 to-teal-800/30 text-emerald-300",
                    "from-purple-600/30 to-pink-800/30 text-purple-300",
                    "from-blue-600/30 to-indigo-700/30 text-blue-400",
                    "from-zinc-500/30 to-black/50 text-white",
                    "from-teal-500/30 to-cyan-700/30 text-teal-400",
                    "from-emerald-600/30 to-green-800/30 text-emerald-400",
                    "from-sky-700/30 to-blue-900/30 text-sky-300",
                    "from-zinc-400/30 to-stone-900/50 text-white",
                    "from-blue-500/30 to-sky-800/30 text-blue-300",
                    "from-orange-600/30 to-red-800/30 text-orange-400",
                  ];
                  const colorClass = colors[idx % colors.length];
                  const abbr = skill.name.length <= 4 ? skill.name : skill.name.slice(0, 3);

                  return (
                    <div
                      key={skill.name}
                      className="group relative flex flex-col items-center justify-center p-2.5 rounded-xl bg-obsidian-deep/90 border border-obsidian-border hover:border-ice/50 hover:shadow-arcade-glow transition-all duration-200 cursor-pointer"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg bg-gradient-to-br ${colorClass.split(" ")[0]} ${colorClass.split(" ")[1]} border border-white/10 flex items-center justify-center font-mono font-bold text-xs ${colorClass.split(" ")[2]} shadow-inner group-hover:scale-105 transition-transform`}
                      >
                        {abbr}
                      </div>
                      <span className="mt-1.5 text-[10px] font-sans text-text-muted group-hover:text-text-main transition-colors text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-obsidian-border/60 flex items-center justify-between text-[11px] font-mono text-text-dim">
              <span>● AI/DATA &amp; FULL STACK FLUENCY</span>
              <span className="text-ice">12 ACTIVE ENGINES</span>
            </div>
          </div>

        </div>

        {/* Bottom 3-Column Info Grid: Education, Key Metrics, & Tech Fluency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* EDUCATION & RESEARCH */}
          <div className="bento-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-obsidian-border pb-2">
                <h4 className="font-arcade text-xs font-bold tracking-widest text-text-muted uppercase">
                  EDUCATION &amp; RESEARCH
                </h4>
                <GraduationCap className="w-3.5 h-3.5 text-ice" />
              </div>
              <div className="text-xs font-mono text-crimson-light mb-1">
                ● 2020 — 2025 // DEGREE
              </div>
              <div className="text-sm font-bold text-text-main">
                University of Muhammadiyah Malang
              </div>
              <div className="text-xs text-ice font-semibold mt-0.5">
                Bachelor of Informatics (GPA: 3.55 / 4.00)
              </div>
              <div className="text-[11px] text-text-muted mt-2 leading-relaxed">
                Specialized in Data Science &amp; Machine Learning. Research on EfficientNet-B3 (CNN), LSTM NLP, and Relational Systems.
              </div>
            </div>
          </div>

          {/* KEY METRICS / ACHIEVEMENTS */}
          <div className="bento-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-obsidian-border pb-2">
                <h4 className="font-arcade text-xs font-bold tracking-widest text-text-muted uppercase">
                  VERIFIED METRICS
                </h4>
                <Award className="w-3.5 h-3.5 text-ice" />
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">DL Model Accuracy</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">92% — 93%</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">Interactive Demos</span>
                  <span className="text-sm font-mono font-bold text-ice">100% Live</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">Dataset Preprocessing</span>
                  <span className="text-sm font-mono font-bold text-text-main">100k+ Records</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">Deployment Pipeline</span>
                  <span className="text-sm font-mono font-bold text-amber-400">Automated</span>
                </div>
              </div>
            </div>
          </div>

          {/* TECH FLUENCY (Arcade Progress Bars) */}
          <div className="bento-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-obsidian-border pb-2">
                <h4 className="font-arcade text-xs font-bold tracking-widest text-text-muted uppercase">
                  TECH FLUENCY
                </h4>
                <Database className="w-3.5 h-3.5 text-ice" />
              </div>
              <div className="space-y-3 mt-2">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-text-main mb-1">
                    <span>DATA SCIENCE &amp; SQL</span>
                    <span className="text-ice">95%</span>
                  </div>
                  <div className="w-full bg-obsidian-deep rounded-full h-1.5 border border-obsidian-border overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-text-main mb-1">
                    <span>DEEP LEARNING (CNN // LSTM)</span>
                    <span className="text-emerald-400">92%</span>
                  </div>
                  <div className="w-full bg-obsidian-deep rounded-full h-1.5 border border-obsidian-border overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-mono text-text-main mb-1">
                    <span>FULL STACK (NEXT.JS // MYSQL)</span>
                    <span className="text-sky-400">90%</span>
                  </div>
                  <div className="w-full bg-obsidian-deep rounded-full h-1.5 border border-obsidian-border overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[90%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
