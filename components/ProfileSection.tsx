"use client";

import React from "react";
import Image from "next/image";
import profileData from "@/data/profile.json";

export const ProfileSection: React.FC = () => {
  return (
    <section
      id="profil"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 md:py-28 overflow-hidden bg-obsidian-deep"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-abyssal/20 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-crimson/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* Main 2-Column Grid (40% Left, 60% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual & Identity */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-arcade text-xs tracking-widest text-text-muted uppercase mb-1">
              HELLO, I AM
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight uppercase leading-none mb-6">
              {profileData.name}
            </h2>

            {/* Portrait with Glowing Halo */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 my-2 group">
              {/* Radial Blue Rim Lighting */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-abyssal via-ice-glow/30 to-transparent blur-3xl opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-abyssal/40 bg-obsidian/40 backdrop-blur-sm flex items-end justify-center shadow-blue-halo">
                <Image
                  src="/assets/images/portrait-placeholder.svg"
                  alt={profileData.name}
                  width={340}
                  height={420}
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                />

                {/* Subtle Floating Embers effect */}
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-obsidian-deep/80 border border-ice/20 text-[10px] font-mono text-ice">
                  SYSTEM READY
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{profileData.badge}</span>
            </div>
          </div>

          {/* Right Column: Information & Capabilities */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* ABOUT ME SECTION */}
            <div className="bento-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-3 border-b border-obsidian-border pb-2">
                <h3 className="font-arcade text-sm font-bold tracking-widest text-ice uppercase">
                  ABOUT ME
                </h3>
                <span className="font-mono text-xs text-text-dim">// CORE ARCHITECTURE</span>
              </div>
              <p className="text-text-main/90 text-sm sm:text-base leading-relaxed font-sans">
                {profileData.bio}
              </p>
            </div>

            {/* SOFTWARE / TECH SKILLS SECTION */}
            <div className="bento-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-obsidian-border pb-2">
                <h3 className="font-arcade text-sm font-bold tracking-widest text-ice uppercase">
                  SOFTWARE SKILLS
                </h3>
                <span className="font-mono text-xs text-text-dim">GLOSSY TECH TILES</span>
              </div>

              {/* Glossy App Tiles Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                {[
                  ...profileData.techStack.frontend.slice(0, 3),
                  ...profileData.techStack.backend.slice(0, 3),
                  ...profileData.techStack.database.slice(0, 3),
                  ...profileData.techStack.devops.slice(0, 3),
                ].map((skill, idx) => {
                  const colors = [
                    "from-cyan-500/30 to-blue-600/30 text-cyan-400",
                    "from-zinc-500/30 to-black/50 text-white",
                    "from-blue-600/30 to-indigo-700/30 text-blue-400",
                    "from-teal-500/30 to-cyan-700/30 text-teal-400",
                    "from-emerald-600/30 to-green-800/30 text-emerald-400",
                    "from-zinc-400/30 to-stone-900/50 text-white",
                    "from-sky-700/30 to-blue-900/30 text-sky-300",
                    "from-emerald-500/30 to-teal-800/30 text-emerald-300",
                    "from-purple-600/30 to-pink-800/30 text-purple-300",
                    "from-orange-600/30 to-red-800/30 text-orange-400",
                    "from-red-600/30 to-rose-900/30 text-rose-400",
                    "from-amber-600/30 to-yellow-800/30 text-amber-300",
                  ];
                  const colorClass = colors[idx % colors.length];
                  const abbr = skill.name.length <= 3 ? skill.name : skill.name.slice(0, 2);

                  return (
                    <div
                      key={skill.name}
                      className="group relative flex flex-col items-center justify-center p-3 rounded-xl bg-obsidian-deep/90 border border-obsidian-border hover:border-ice/50 hover:shadow-arcade-glow transition-all duration-200 cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClass.split(" ")[0]} ${colorClass.split(" ")[1]} border border-white/10 flex items-center justify-center font-mono font-bold text-sm ${colorClass.split(" ")[2]} shadow-inner group-hover:scale-105 transition-transform`}
                      >
                        {abbr}
                      </div>
                      <span className="mt-2 text-[11px] font-sans text-text-muted group-hover:text-text-main transition-colors text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3-Column Info Grid: Education, Experience, & Fluency */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* EDUCATION */}
              <div className="bento-card p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="font-arcade text-xs font-bold tracking-widest text-text-muted uppercase mb-2">
                    EDUCATION
                  </h4>
                  <div className="text-xs font-mono text-crimson-light mb-1">
                    ● {profileData.experiences[profileData.experiences.length - 1]?.period || "2021 — 2025"}
                  </div>
                  <div className="text-xs font-bold text-text-main">
                    {profileData.experiences[profileData.experiences.length - 1]?.role || "Computer Science"}
                  </div>
                  <div className="text-[11px] text-text-muted mt-1">
                    {profileData.experiences[profileData.experiences.length - 1]?.description || "Data Science & Machine Learning"}
                  </div>
                </div>
              </div>

              {/* EXPERIENCE / ACHIEVEMENTS */}
              <div className="bento-card p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="font-arcade text-xs font-bold tracking-widest text-text-muted uppercase mb-2">
                    KEY METRICS
                  </h4>
                  <div className="text-xs font-bold text-ice mb-1">
                    {profileData.stats[0]?.value} {profileData.stats[0]?.label}
                  </div>
                  <div className="text-xs text-text-main font-semibold">
                    {profileData.stats[1]?.value} {profileData.stats[1]?.label}
                  </div>
                  <div className="text-[11px] text-text-muted mt-1">
                    {profileData.stats[3]?.description || "CI/CD Automated Deliveries"}
                  </div>
                </div>
              </div>

              {/* TECH FLUENCY (Arcade Progress Bars) */}
              <div className="bento-card p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="font-arcade text-xs font-bold tracking-widest text-text-muted uppercase mb-2">
                    TECH FLUENCY
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-text-main mb-0.5">
                        <span>FRONTEND / REACT</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-obsidian-deep rounded-full h-1.5 border border-obsidian-border overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[95%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-text-main mb-0.5">
                        <span>BACKEND / API</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-obsidian-deep rounded-full h-1.5 border border-obsidian-border overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-full w-[90%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-text-main mb-0.5">
                        <span>DEVOPS / VERCEL</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-obsidian-deep rounded-full h-1.5 border border-obsidian-border overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full w-[92%]" />
                      </div>
                    </div>
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

