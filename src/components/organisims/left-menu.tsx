import ProfileCard from "../molecules/profile-card";
import SkillsGroup from "../molecules/skills-grup";

const LANGUAGES = [
  {
    title: "Spanish",
    progress: 100,
  },

  {
    title: "English",
    progress: 60,
  },

  {
    title: "Italian",
    progress: 20,
  },
];

const EXTRA_SKILLS = [
  [{ title: "React" }, { title: "Next.js" }, { title: "Gatsby" }],
  [{ title: "Node.js" }, { title: "Express" }, { title: "Nest.js" }],
  [{ title: "PostgreSQL" }, { title: "MySQL" }],
  [{ title: "Docker" }, { title: "Kubernetes" }, { title: "AWS" }],
];

/**
 * This organism represents the left menu of the page.
 * Shows the profile card, languages, and extra skills of the developer.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const LeftMenu = () => {
  return (
    <aside className="min-h-screen">
      <div className="flex flex-col gap-6 bg-white p-11 sticky top-0">
        <ProfileCard
          name="Jose David Gómez"
          profile={{
            age: 24,
            email: "josdavi0304@gmail.com",
            freelance: "available",
            residence: "Medellín, Colombia",
          }}
          role="Web Developer"
        />
        <hr className="border-gray-200" />
        <SkillsGroup
          skillsGroup={LANGUAGES.map((language) => [language])}
          title="Languages"
          withProgress
        />
        <hr className="border-gray-200" />
        <SkillsGroup
          skillsGroup={EXTRA_SKILLS}
          title="Extra Skills"
          withProgress={false}
        />
      </div>
    </aside>
  );
};

export default LeftMenu;
