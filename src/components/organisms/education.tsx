import SectionTitle from "@molecules/section-title";
import ExperienceCard from "@molecules/experience-card";

const EDUCATION_EXPERIENCES = [
  {
    company: "University",
    rol: "Student",
    title: "Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    startDate: "2016-01-01",
    endDate: "2020-01-01",
  },
  {
    company: "University",
    rol: "Student",
    title: "Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    startDate: "2016-01-01",
    endDate: "2020-01-01",
  },
  {
    company: "University",
    rol: "Student",
    title: "Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    startDate: "2016-01-01",
    endDate: "2020-01-01",
  },
];

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
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
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
