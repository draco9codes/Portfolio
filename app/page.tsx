import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StackSection from "@/components/sections/StackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MissionSection from "@/components/sections/MissionSection";
import ContactSection from "@/components/sections/ContactSection";
import GlobalBackgroundScene from "@/components/background/GlobalBackgroundScene";
import DepthAtmosphere from "@/components/background/DepthAtmosphere";
import PageVignette from "@/components/background/PageVignette";
import CornerTelemetry from "@/components/hud/CornerTelemetry";
import OrbitalReticle from "@/components/hud/OrbitalReticle";
import CommandStatus from "@/components/hud/CommandStatus";
import SystemSpine from "@/components/hud/SystemSpine";
import ModuleBeacon from "@/components/hud/ModuleBeacon";
import { ModuleProvider } from "@/components/providers/ModuleProvider";

export default function HomePage() {
  return (
    <ModuleProvider>
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <GlobalBackgroundScene />
      <DepthAtmosphere />
      <PageVignette />
      <CornerTelemetry />
      <OrbitalReticle />
      <CommandStatus />
      <ModuleBeacon />
      <SystemSpine />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <ProjectsSection />
        <MissionSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
    </ModuleProvider>
  );
}