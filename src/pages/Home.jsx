import { useState, useEffect } from "react";
import { StarBackgorund } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { MoonBackground } from "../components/MoonBackground";
import { SunBackground } from "../components/SunBackground";
import { SEO } from "../components/SEO";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Tema durumunu takip et
  useEffect(() => {
    const checkTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const shouldBeDark =
        storedTheme === "dark" || (!storedTheme && isSystemDark);
      setIsDarkMode(shouldBeDark);
    };

    // İlk kontrol
    checkTheme();

    // DOM değişikliklerini kontrol et (tema değişimi için)
    const observer = new MutationObserver(() => {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setIsDarkMode(hasDarkClass);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // LocalStorage değişikliklerini dinle (farklı sekmeler arası)
    const handleStorageChange = () => {
      checkTheme();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Umut | Frontend Developer Portfolio"
        description="React ve Tailwind kullanarak modern web projeleri geliştiriyorum."
        keywords="Umut, React, Tailwind, frontend developer, portfolio"
        url="https://umutfr.dev"
        image="https://umutfr.dev/og-image.jpg"
      />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackgorund />
      {/* Tema durumuna göre Ay veya Güneş */}
      {isDarkMode ? <MoonBackground /> : <SunBackground />}
      <ScrollProgressBar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
