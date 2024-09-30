import { twMerge } from "tailwind-merge";

interface ProgressBarProps {
  progress: number;
  label?: string;
}

/**
 * This component is a custom progress bar that can be used to display progress.
 * It accepts a progress percentage and a label, which will be displayed at the top.
 *
 * @param {number} progress - The progress percentage.
 * @param {string} label - The label to display.
 * @returns {React.ReactNode} The progress bar.
 */
const ProgressBar = ({ progress, label }: ProgressBarProps) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-[2px] outline outline-1 outline-offset-1 outline-primary m-1 rounded-full",
        label && "mt-8"
      )}
    >
      {label && (
        <span className="absolute bottom-2 left-0 text-paragraph font-normal">
          {label}
        </span>
      )}
      <span
        className="absolute h-full bg-primary rounded-full"
        style={{ width: `${progress}%` }}
      />
      <span className="absolute bottom-2 right-0 text-paragraph font-normal">
          {progress}%
        </span>
    </div>
  );
};

export default ProgressBar;
