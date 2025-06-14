import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TrainingSection from "./components/TrainingSection";
import ContactSectionEmailJS from "./components/ContactSectionEmailJS";
import Footer from "./components/Footer";

/**
 * Home page component
 * Server component that renders client components
 * @returns JSX element representing the home page
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TrainingSection />
      <ContactSectionEmailJS />
      <Footer />
    </main>
  );
}
