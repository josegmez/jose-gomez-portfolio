import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  ctaLink: string;
  className?: string;
}

/**
 * This molecule represents a card with information about a project.
 * Shows the title, the description, the image and a link to view the project.
 *
 * @param {ProjectCardProps} props - The props of the component
 * @returns {JSX.Element} - The component to be rendered
 */
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <article className="flex flex-col gap-4 w-80 bg-white">
      <div className="relative w-full h-80 object-cover object-center">
        <Image src={props.imageSrc} alt={props.title} fill />
      </div>
      <div className="flex flex-col gap-2 pb-4 pt-6 px-6">
        <h2 className="text-lg font-medium">{props.title}</h2>
        <p className="text-sm">{props.description}</p>
        <Link
          href={props.ctaLink}
          className="text-sm font-medium text-primary hover:underline"
        >
          View project &gt;
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
