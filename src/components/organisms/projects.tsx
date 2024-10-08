import SectionTitle from "@molecules/section-title";
import ProjectCard from "@molecules/project-card";
import { PROJECTS } from "@consts/knowledge";

/**
 * This organism represents the projects section of the page.
 * Its purpose is to show the projects of the developer, in a list of cards.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const ProjectsSection = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <SectionTitle
        title="Portfolio"
        description="Here, you'll find a collection of my web projects that reflect my creativity and technical skills."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            title={project.title}
            description={project.description}
            imageSrc={project.image}
            ctaLink={project.ctaLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
