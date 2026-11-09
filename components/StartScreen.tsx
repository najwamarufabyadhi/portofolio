"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ExternalLink, SlidersHorizontal, Play } from "lucide-react";
import profileData from "@/data/profile.json";

interface StartScreenProps {
  onStartClick: () => void;
  onOptionsClick: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStartClick,
  onOptionsClick,
}) => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleExitClick = () => {
    window.open(profileData.socials.github, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="start"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-10 md:py-16 overflow-hidden bg-deep-space"
    >
      {/* Background Radial Ambiance */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-abyssal/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-crimson/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Monogram Bar */}
      <div className="w-full max-w-7xl flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 p-1.5 rounded-sm bg-obsidian-surface border border-obsidian-border shadow-lg">
            <Image
              src="/assets/images/monogram.svg"
              alt="Monogram"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-arcade text-xs text-text-muted tracking-widest hidden sm:inline-block">
            STAGE 01 // PRESS START
          </span>
        </div>
        <div className="font-mono text-xs text-text-dim uppercase tracking-wider">
          v2.5.0 // FEDERATED HUB
        </div>
      </div>

      {/* Main Center Hero Block */}
      <div className="w-full max-w-5xl my-auto py-8 z-10 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          
          {/* Left Crimson Capsule Framing Portrait */}
          <div className="relative group">
            {/* Crimson Rounded Shape Background */}
            <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-crimson rounded-t-[100px] rounded-b-[40px] md:rounded-t-[120px] md:rounded-b-[50px] shadow-crimson-glow overflow-hidden relative border border-crimson-light/40 flex items-end justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Subtle inner gradient shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Portrait Silhouette / Photo */}
              <div className="relative w-full h-[90%] z-0 flex items-end justify-center">
                <Image
                  src="/assets/images/portrait-placeholder.svg"
                  alt="Muhammad Najwa Maruf Abyadhi"
                  width={300}
                  height={380}
                  priority
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Status Tag Overlay */}
              <div className="absolute bottom-3 z-20 px-3 py-1 rounded-full bg-obsidian-deep/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-text-main flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-ice animate-pulse" />
                <span className="uppercase">{profileData.shortName || profileData.name}</span>
              </div>
            </div>

            {/* Subtle blue accent glow behind crimson */}
            <div className="absolute -inset-4 bg-abyssal/20 rounded-[120px] blur-xl -z-10" />
          </div>

          {/* Right Typography: PORTFOLIO 2025 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-3 sm:gap-4">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-text-main uppercase leading-none drop-shadow-2xl">
                PORTFOLIO
              </h1>
              <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-text-muted tracking-tight">
                2025
              </span>
            </div>

            {/* Sub-bar / Professional Role Tag */}
            <div className="mt-4 sm:mt-6 flex items-center gap-2 px-3 py-1.5 rounded-md bg-obsidian-deep/90 border border-obsidian-border text-xs sm:text-sm font-arcade tracking-widest text-text-main uppercase">
              <span className="text-white">■</span>
              <span>{profileData.title}</span>
            </div>

            <p className="mt-3 text-text-muted text-xs sm:text-sm max-w-md font-sans">
              {profileData.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Arcade Menu Actions */}
      <div className="w-full max-w-sm flex flex-col items-center gap-2 z-10 pt-4 pb-2">
        {/* START Button */}
        <button
          onClick={onStartClick}
          onMouseEnter={() => setHoveredMenu("START")}
          onMouseLeave={() => setHoveredMenu(null)}
          className="group relative w-48 py-2.5 px-4 flex items-center justify-center font-arcade text-sm sm:text-base font-bold tracking-widest transition-all duration-200 text-text-muted hover:text-white"
        >
          <span
            className={`absolute left-4 transition-transform duration-200 ${
              hoveredMenu === "START"
                ? "opacity-100 translate-x-0 text-ice"
                : "opacity-0 -translate-x-2"
            }`}
          >
            &gt;
          </span>
          <span className="group-hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
            START
          </span>
        </button>

        {/* OPTIONS Button */}
        <button
          onClick={onOptionsClick}
          onMouseEnter={() => setHoveredMenu("OPTIONS")}
          onMouseLeave={() => setHoveredMenu(null)}
          className="group relative w-48 py-2 px-4 flex items-center justify-center font-arcade text-xs sm:text-sm font-medium tracking-widest transition-all duration-200 text-text-dim hover:text-text-main"
        >
          <span
            className={`absolute left-4 transition-transform duration-200 ${
              hoveredMenu === "OPTIONS"
                ? "opacity-100 translate-x-0 text-ice"
                : "opacity-0 -translate-x-2"
            }`}
          >
            &gt;
          </span>
          <span className="group-hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
            OPTIONS / RESUME
          </span>
        </button>

        {/* EXIT Button */}
        <button
          onClick={handleExitClick}
          onMouseEnter={() => setHoveredMenu("EXIT")}
          onMouseLeave={() => setHoveredMenu(null)}
          className="group relative w-48 py-2 px-4 flex items-center justify-center font-arcade text-xs sm:text-sm font-medium tracking-widest transition-all duration-200 text-text-dim hover:text-crimson-light"
        >
          <span
            className={`absolute left-4 transition-transform duration-200 ${
              hoveredMenu === "EXIT"
                ? "opacity-100 translate-x-0 text-crimson-light"
                : "opacity-0 -translate-x-2"
            }`}
          >
            &gt;
          </span>
          <span className="group-hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
            EXIT // GITHUB
          </span>
        </button>
      </div>

      {/* Screen bottom subtle hint */}
      <div className="absolute bottom-2 text-[10px] font-mono text-text-dim tracking-widest flex items-center gap-2">
        <span className="animate-arcade-pulse">▼</span> SCROLL DOWN TO EXPLORE
      </div>
    </section>
  );
};

