import AboutSection from "@/components/main/AboutSection";
import Hero from "@/components/main/HeroSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import SkillsSection from "@/components/main/SkillsSection";
import AboutTabs from "@/components/main/AboutTabsSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <AboutSection /> */}
        {/* <AboutTabs /> */}
        <SkillsSection />
        {/* <ProjectsSection /> */}
      </div>
    </main>
  );
}