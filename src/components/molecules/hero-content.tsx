import { twMerge } from "tailwind-merge";
import LinkButton from "@atoms/link-button";
import { IconArrowRight } from "@tabler/icons-react";

interface HeroContentProps {
  className?: string;
}

const HERO_TITLE = "I’m *Jose Gómez* Web Developer";
const HERO_DESCRIPTION =
  "Programming is my passion, and I enjoy it both in work environments and as a hobby. I have a great curiosity for everything related to web development.";

/**
 * This molecule represents the content of the hero section.
 * Shows the title, the description and a button to hire the developer.
 *
 * @param {string} className - The classes to apply to container
 * @returns {JSX.Element} - The component to be rendered
 */
const HeroContent = ({ className }: HeroContentProps) => {
  // Process the title as markdown to show the name in bold
  const titleParts = HERO_TITLE.split("*");
  const title = (
    <>
      {titleParts[0]}
      <strong className="text-primary font-extrabold">{titleParts[1]}</strong>
      {titleParts[2]}
    </>
  );

  return (
    <div className={twMerge("flex flex-col gap-6 max-w-md", className)}>
      <h1 className="text-5xl font-extrabold ">{title}</h1>
      <p className="text-lg">{HERO_DESCRIPTION}</p>
      <LinkButton href="/" icon={<IconArrowRight />}>
        Hire Me
      </LinkButton>
    </div>
  );
};

export default HeroContent;
