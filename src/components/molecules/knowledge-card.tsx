import { IconProps } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  href?: string;
  className?: string;
}

/**
 * This molecule component is a knowledge card that is used to display a professional skill.
 * It accepts a title, description, and an optional icon and link. *
 *
 * @param {string} title - The title of the knowledge card.
 * @param {string} description - The description of the knowledge card.
 * @param {React.ReactNode} icon - The icon of the knowledge card.
 * @param {string} link - The link of the knowledge card.
 */
const KnowledgeCard = ({
  title,
  description,
  icon,
  link,
  href,
  className,
}: KnowledgeCardProps) => {
  const customIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<IconProps>, {
          size: 74,
          strokeWidth: 1.5,
        })
      : null;

  return (
    <article
      className={twMerge(
        "flex flex-col items-center justify-between text-center gap-6 bg-white p-8",
        className
      )}
    >
      {customIcon && <div className="text-primary">{customIcon}</div>}
      <h3 className="font-medium text-lg">{title}</h3>
      <p>{description}</p>
      {href && (
        <Link href={href} className="text-primary text-sm font-bold uppercase">
          {link || href} &gt;
        </Link>
      )}
    </article>
  );
};

export default KnowledgeCard;
