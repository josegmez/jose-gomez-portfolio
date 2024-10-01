import SectionTitle from "@molecules/section-title";
import ExperienceCard from "@molecules/experience-card";
import { EDUCATION_EXPERIENCES } from "@consts/knowledge";

/**
 * This organism represents the education section of the page.
 * Shows the education experiences of the developer in a list of cards.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const EducationSection = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <SectionTitle
        title="Education"
        description="I am a budding engineer, dedicated to building my knowledge every day."
      />
      <div className="flex flex-col bg-white p-9 gap-3">
        {EDUCATION_EXPERIENCES.map((experience, index) => (
          <>
            <ExperienceCard
              key={`experience-${index}`}
              company={experience.company}
              rol={experience.rol}
              title={experience.title}
              description={experience.description}
              startDate={experience.startDate}
              endDate={experience.endDate}
              className={index !== 0 ? "mt-4" : ""}
            />
            {index !== EDUCATION_EXPERIENCES.length - 1 && (
              <hr className="w-full border-background" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
