import { IconLayersIntersect } from "@tabler/icons-react";

interface SkillsLabelProps {
  skills: string[];
}

/**
 * This component is a custom label that can be used to display a list of skills.
 * It accepts an array of skills, which will be displayed as a label.
 *
 * @param {string[]} skills - The list of skills to display.
 * @returns {React.ReactNode} The skills label.
 */
const SkillsLabel = ({ skills }: SkillsLabelProps) => {
  const labelString = skills.join(", ");

  return (
    <div className="flex items-center gap-4">
      <IconLayersIntersect size={18} className="text-primary" />
      <p>{labelString}</p>
    </div>
  );
};

export default SkillsLabel;
