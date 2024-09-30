import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * This molecule represents a section title with a description.
 * Shows the title and the description of a section.
 *
 * @param {string} title - The title of the section
 * @param {string} description - The description of the section
 * @param {string} className - The classes to apply to container
 * @returns {JSX.Element} - The component to be rendered
 */
const SectionTitle = ({ title, description, className }: SectionTitleProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-6 max-w-md text-center",
        className
      )}
    >
      <h1 className="text-5xl font-extrabold ">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default SectionTitle;
