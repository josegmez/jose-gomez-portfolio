import React from "react";
import { IconCode } from "@tabler/icons-react";
import KnowlageCard from "@molecules/knowlage-card";
import SectionTitle from "@molecules/section-title";
import { KNOWLAGES } from "@consts/knowlage";

/**
 * This organism represents the knowlage section of the page.
 * Shows the knowlage cards of the developer.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const KnowlageSection = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <SectionTitle
        title="Knowlage"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {KNOWLAGES.map((knowlage, index) => (
          <KnowlageCard
            key={`knowlage-${index}`}
            title={knowlage.title}
            description={knowlage.description}
            icon={React.createElement(knowlage.icon || IconCode, {
              size: 74,
              strokeWidth: 1.5,
            })}
          />
        ))}
      </div>
    </section>
  );
};

export default KnowlageSection;
