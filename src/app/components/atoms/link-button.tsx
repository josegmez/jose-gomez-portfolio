import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
  href: string;
  isOnlyIcon?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * This compenent is a custom link button that can be used to navigate to a different page.
 * It accepts text and icon, or just an icon.
 *
 * @param {string} href - The URL to navigate to.
 * @param {boolean} isOnlyIcon - If true, only the icon will be displayed.
 * @param {React.ReactNode} icon - The icon to display.
 * @param {React.ReactNode} children - The text to display.
 * @returns {React.ReactNode} The link button.
 */
const LinkButton = ({ href, isOnlyIcon, icon, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={twMerge(
        "flex items-center justify-center gap-2 py-4 px-8 bg-primary uppercase font-medium w-fit",
        isOnlyIcon ? "rounded-full aspect-square p-3" : "rounded-md"
      )}
    >
      {!isOnlyIcon && children}
      {icon}
    </Link>
  );
};

export default LinkButton;
