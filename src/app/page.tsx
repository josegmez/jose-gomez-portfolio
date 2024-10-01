import HeroSection from "@organisms/hero";
import KnowlageSection from "@organisms/knowlage";
import EducationSection from "@organisms/education";
import ProjectsSection from "@organisms/projects";
import LeftMenu from "@organisms/left-menu";
import RightMenu from "@organisms/right-menu";
import Footer from "@organisms/footer";

/**
 * This is the landing page of the application.
 * It shows the hero section, knowlage section, education section, projects section and footer.
 *
 * This page is composed by the following organisms:
 * - HeroSection
 * - KnowlageSection
 * - EducationSection
 * - ProjectsSection
 * - Footer
 * - LeftMenu
 * - RightMenu
 *
 * @returns {JSX.Element} - The component to be rendered
 */
export default function Home() {
  return (
    <main className="grid grid-cols-[3fr,10fr,1fr] gap-8 min-h-screen">
      <LeftMenu />
      <div className="flex flex-col items-center gap-12">
        <HeroSection />
        <KnowlageSection />
        <EducationSection />
        <ProjectsSection />
        <Footer />
      </div>
      <RightMenu />
    </main>
  );
}
