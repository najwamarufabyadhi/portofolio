"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, Copy, Check, MessageSquare, ArrowUpRight } from "lucide-react";
import profileData from "@/data/profile.json";
import { smoothScrollTo } from "./SmoothScroll";

export const ContactOutro: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-24 md:py-28 overflow-hidden bg-obsidian-deep"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-abyssal/15 rounded-full blur-[180px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-crimson/15 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="w-full max-w-6xl mx-auto my-auto z-10">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Contact Card & Socials */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Circular Framed Avatar with Glowing Ring */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ice-glow to-abyssal blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="relative w-full h-full rounded-full border-2 border-ice/60 p-1.5 bg-obsidian-deep shadow-arcade-glow overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/images/portrait-placeholder.svg"
                  alt="Muhammad Najwa Maruf Abyadhi"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-crimson border border-crimson-light text-[10px] font-mono text-white uppercase tracking-wider">
                NAJWA MARUF
              </div>
            </div>

            <h3 className="font-arcade text-lg sm:text-xl font-bold tracking-widest text-text-main uppercase mb-2">
              CONTACT ME
            </h3>
            <p className="text-text-muted text-xs sm:text-sm font-sans mb-6 max-w-sm">
              Open to high-impact software engineering roles, full-stack collaborations, and technical advisory.
            </p>

            {/* Monospace Channel List */}
            <div className="w-full max-w-sm space-y-2.5">
              {/* Email with 1-click copy */}
              <div
                onClick={handleCopyEmail}
                className="group flex items-center justify-between p-3 rounded-xl bg-obsidian/80 border border-obsidian-border hover:border-ice/50 transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-abyssal-deep flex items-center justify-center text-ice">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-text-dim">DIRECT EMAIL</div>
                    <div className="text-xs font-mono font-medium text-text-main group-hover:text-ice transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-deep border border-obsidian-border text-[11px] font-mono text-text-muted group-hover:text-text-main">
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </div>
              </div>

              {/* GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-obsidian/80 border border-obsidian-border hover:border-ice/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-abyssal-deep flex items-center justify-center text-text-main">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-text-dim">PUBLIC REPOSITORIES</div>
                    <div className="text-xs font-mono font-medium text-text-main group-hover:text-ice transition-colors">
                      github.com/najwamaruf
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-ice transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-obsidian/80 border border-obsidian-border hover:border-ice/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-abyssal-deep flex items-center justify-center text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-text-dim">PROFESSIONAL NETWORK</div>
                    <div className="text-xs font-mono font-medium text-text-main group-hover:text-ice transition-colors">
                      linkedin.com/in/najwamaruf
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-ice transition-colors" />
              </a>
            </div>

            {/* Mini Archive Bar (2023, 2024, 2025) */}
            <div className="mt-8 pt-6 border-t border-obsidian-border w-full max-w-sm">
              <span className="font-arcade text-[10px] tracking-widest text-text-dim uppercase block mb-3">
                PORTFOLIO TIMELINE ARCHIVE
              </span>
              <div className="flex items-center gap-3">
                {[
                  { year: "2023", label: "Foundations", active: false },
                  { year: "2024", label: "Web Systems", active: false },
                  { year: "2025", label: "Federated Hub", active: true },
                ].map((item) => (
                  <div
                    key={item.year}
                    className={`flex-1 p-2 rounded-lg border text-center font-mono text-xs transition-all ${
                      item.active
                        ? "bg-abyssal-deep border-ice/50 text-ice font-bold"
                        : "bg-obsidian-deep/50 border-obsidian-border text-text-dim opacity-70"
                    }`}
                  >
                    <div>{item.year}</div>
                    <div className="text-[9px] font-sans truncate">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Giant THANK YOU 2025 & Stylized Graphics */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end text-center lg:text-right">
            
            <div className="relative">
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-text-main uppercase tracking-tighter leading-none drop-shadow-2xl">
                THANK YOU
              </h2>
              <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-text-muted tracking-tight mt-2">
                2025
              </div>

              {/* Decorative Glow Line */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-crimson to-ice mt-6 rounded-full" />
            </div>

            <p className="mt-6 text-sm text-text-muted max-w-md font-sans leading-relaxed">
              Crafted with Next.js, Tailwind CSS, and federated Vercel deployments. Designed under the Retro Game Menu meets Sleek Cyber-Editorial specification.
            </p>

            {/* Tech Stamp Pill */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-end gap-3 text-xs font-mono text-text-dim">
              <span className="px-3 py-1 rounded-full bg-obsidian-deep border border-obsidian-border">
                NEXT.JS 14 APP ROUTER
              </span>
              <span className="px-3 py-1 rounded-full bg-obsidian-deep border border-obsidian-border">
                TAILWIND CSS
              </span>
              <span className="px-3 py-1 rounded-full bg-obsidian-deep border border-obsidian-border">
                100% LIGHTHOUSE READY
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Outro Footer */}
      <footer className="w-full max-w-7xl mx-auto pt-10 border-t border-obsidian-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim z-10">
        <div>
          &copy; 2025 Muhammad Najwa Maruf Abyadhi. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span
            className="hover:text-text-main cursor-pointer"
            onClick={() => smoothScrollTo(0, 0)}
          >
            BACK TO TOP ▲
          </span>
        </div>
      </footer>
    </section>
  );
};

