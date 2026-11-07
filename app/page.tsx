"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { StartScreen } from "@/components/StartScreen";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectShowcase, Project } from "@/components/ProjectShowcase";
import { ContactOutro } from "@/components/ContactOutro";
import { OptionsModal } from "@/components/OptionsModal";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

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

  const handleStartClick = () => {
    const el = document.getElementById("profil");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-obsidian text-text-main">
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

