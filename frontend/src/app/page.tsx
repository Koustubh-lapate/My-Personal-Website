import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProfilesSection } from "@/sections/Profiles"
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProfilesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
