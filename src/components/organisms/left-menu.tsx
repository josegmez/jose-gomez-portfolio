import ProfileCard from "@molecules/profile-card";
import SkillsGroup from "@molecules/skills-grup";
import { PROFILE, LANGUAGES, EXTRA_SKILLS } from "@consts/profile";

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
          name={PROFILE.name}
          profile={PROFILE.contact}
          role={PROFILE.role}
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
