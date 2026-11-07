"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { StartScreen } from "@/components/StartScreen";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectShowcase, Project } from "@/components/ProjectShowcase";
import { ContactOutro } from "@/components/ContactOutro";
import { OptionsModal } from "@/components/OptionsModal";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { SmoothScroll, smoothScrollTo } from "@/components/SmoothScroll";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("start");
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Monitor scroll position to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["start", "profil", "project", "contact"];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the upper part of the viewport
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === "1" || key === "s") {
        smoothScrollTo("#start", 0);
      } else if (key === "2" || key === "p") {
        smoothScrollTo("#profil", -20);
      } else if (key === "3" || key === "r") {
        smoothScrollTo("#project", -20);
      } else if (key === "4" || key === "c") {
        smoothScrollTo("#contact", -20);
      } else if (key === "o" || key === "?") {
        setIsOptionsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleStartClick = () => {
    smoothScrollTo("#profil", -20);
  };

  return (
    <main className="relative min-h-screen bg-obsidian text-text-main">
      {/* Silky Inertia Smooth Scroll Provider */}
      <SmoothScroll />

      {/* Floating Capsule Navbar (Screens 2 - 4) */}
      <Navbar activeSection={activeSection} />

      {/* Screen 1: The Start Screen (Arcade Game Menu) */}
      <StartScreen
        onStartClick={handleStartClick}
        onOptionsClick={() => setIsOptionsOpen(true)}
      />

      {/* Screen 2: Profile & Competency Matrix */}
      <ProfileSection />

      {/* Screen 3: Recap Project Showcase (Asymmetric Bento Grid) */}
      <ProjectShowcase onSelectProject={(p) => setSelectedProject(p)} />

      {/* Screen 4: Contact & Outro Showcase */}
      <ContactOutro />

      {/* Modals */}
      <OptionsModal
        isOpen={isOptionsOpen}
        onClose={() => setIsOptionsOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

