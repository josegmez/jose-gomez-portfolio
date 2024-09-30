import Image from "next/image";
import HeroContent from "@molecules/hero-content";

/**
 * This organism represents the hero section of the page.
 * Shows an image and the hero content, with a brief description of the developer.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const HeroSection = () => {
  return (
    <section className="flex justify-between bg-white w-full">
      <HeroContent className="mt-24 mb-16 ml-16" />
      <Image
        src="/images/personal-image.png"
        alt="Personal image"
        width={350}
        height={200}
      />
    </section>
  );
};

export default HeroSection;
