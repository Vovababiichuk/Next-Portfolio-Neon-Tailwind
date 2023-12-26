import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import SkillsSection from "@/components/main/SkillsSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <SkillsSection />
        <Projects />
      </div>
    </main>
  );
}