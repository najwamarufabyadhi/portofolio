"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { smoothScrollTo } from "./SmoothScroll";
import profileData from "@/data/profile.json";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    smoothScrollTo(`#${id}`, -20);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between pointer-events-none ${
        scrolled ? "opacity-100" : "opacity-90"
      }`}
    >
      {/* Top Left Monogram Logo */}
      <div className="pointer-events-auto flex items-center gap-3">
        <button
          onClick={() => scrollTo("start")}
          className="group flex items-center gap-2 p-1 focus:outline-none"
          title="Back to Start Screen"
        >
          <div className="w-8 h-8 rounded-sm bg-obsidian-border/40 p-1 border border-obsidian-border group-hover:border-ice/60 transition-colors">
            <Image
              src="/assets/images/monogram.svg"
              alt="Najwa Maruf Monogram"
              width={28}
              height={28}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-arcade text-xs text-text-muted group-hover:text-text-main tracking-wider hidden sm:inline-block uppercase">
            {profileData.shortName || "NM"}.DEV
          </span>
        </button>
      </div>

      {/* Floating Capsule Menu Centered */}
      <nav className="pointer-events-auto">
        <div className="capsule-nav rounded-full px-2 py-1.5 flex items-center gap-1 sm:gap-2 shadow-2xl">
          <button
            onClick={() => scrollTo("profil")}
            className={`px-4 py-1.5 rounded-full text-xs font-arcade font-bold tracking-wider transition-all duration-300 ${
              activeSection === "profil"
                ? "bg-text-main text-obsidian shadow-arcade-glow"
                : "text-text-muted hover:text-text-main hover:bg-obsidian-surface"
            }`}
          >
            PROFIL
          </button>
          <button
            onClick={() => scrollTo("project")}
            className={`px-4 py-1.5 rounded-full text-xs font-arcade font-bold tracking-wider transition-all duration-300 ${
              activeSection === "project"
                ? "bg-text-main text-obsidian shadow-arcade-glow"
                : "text-text-muted hover:text-text-main hover:bg-obsidian-surface"
            }`}
          >
            PROJECT
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`px-4 py-1.5 rounded-full text-xs font-arcade font-bold tracking-wider transition-all duration-300 ${
              activeSection === "contact"
                ? "bg-text-main text-obsidian shadow-arcade-glow"
                : "text-text-muted hover:text-text-main hover:bg-obsidian-surface"
            }`}
          >
            CONTACT PERSON
          </button>
        </div>
      </nav>

      {/* Top Right Quick Actions (Live status indicator) */}
      <div className="pointer-events-auto hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-deep/80 border border-obsidian-border text-[11px] font-mono text-text-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>VERCEL ONLINE</span>
        </div>
      </div>
    </header>
  );
};

