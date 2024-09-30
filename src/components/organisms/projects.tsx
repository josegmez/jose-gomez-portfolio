import SectionTitle from "@molecules/section-title";
import ProjectCard from "@molecules/project-card";

const PROJECTS = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    image: "/images/image.png",
    ctaLink: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    image: "/images/image.png",
    ctaLink: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    image: "/images/image.png",
    ctaLink: "#",
  },
];

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
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
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
