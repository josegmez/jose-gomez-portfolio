import { twMerge } from "tailwind-merge";
import SkillsLabel from "@atoms/skills-label";
import ProgressBar from "@atoms/progress-bar";

interface Skills {
  title: string;
  progress?: number;
}

interface SkillsGroupProps {
  title: string;
  skillsGroup: Array<Array<Skills>>;
  withProgress?: boolean;
  className?: string;
}

/**
 * This molecule component is a group of skills that can be displayed with or without progress.
 * If withProgress is true, it will display the skills with a progress bar, otherwise it will display the skills as a label.
 *
 * @param {string} title - The title of the skills group.
 * @param {Array<Array<Skills>>} skillsGroup - The skills group that will be displayed.
 * @param {boolean} withProgress - If true, the skills will be displayed with a progress bar.
 * @param {string} className - The class name of the skills group.
 * @returns {React.ReactNode} The skills group.
 */
const SkillsGroup = ({
  title,
  skillsGroup,
  withProgress,
  className,
}: SkillsGroupProps) => {
  return (
    <article className={twMerge("flex flex-col gap-3", className)}>
      <h3 className="font-medium text-lg">{title}</h3>
      <ul className="flex flex-col gap-2 p-0">
        {skillsGroup.map((skills, index) => {
          if (!withProgress) {
            return (
              <SkillsLabel
                key={`skills-${index}`}
                skills={skills.map((skill) => skill.title)}
              />
            );
          }

          return (
            <ProgressBar
              key={index}
              label={skills[0].title}
              progress={skills[0].progress || 0}
            />
          );
        })}
      </ul>
    </article>
  );
};

export default SkillsGroup;
