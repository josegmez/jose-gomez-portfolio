import { twMerge } from "tailwind-merge";
import DateLabel from "@atoms/date-range";

interface ExperienceCardProps {
  company: string;
  rol: string;
  title: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  className?: string;
}

/**
 * This molecule represents a card with information about a work experience.
 * Shows the company name, the rol, the title, the description and the date range.
 *
 * @param {ExperienceCardProps} props - The props of the component
 * @returns {JSX.Element} - The component to be rendered
 */
const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <article
      className={twMerge("grid grid-cols-3 gap-4 w-full", props.className)}
    >
      <div className="col-span-1 flex flex-col gap-6">
        <h2 className="text-lg font-medium">{props.company}</h2>
        <span className="flex items-center gap-x-6">
          <h3 className="text-sm font-normal">{props.rol}</h3>
          <DateLabel startDate={props.startDate} endDate={props.endDate} />
        </span>
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <h2 className="text-lg font-medium">{props.title}</h2>
        <p className="text-sm">{props.description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;
