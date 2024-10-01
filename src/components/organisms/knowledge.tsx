import React from "react";
import { IconCode } from "@tabler/icons-react";
import KnowledgeCard from "@molecules/knowledge-card";
import SectionTitle from "@molecules/section-title";
import { KNOWLAGES } from "@consts/knowledge";

/**
 * This organism represents the knowledge section of the page.
 * Shows the knowledge cards of the developer.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const KnowledgeSection = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <SectionTitle
        title="Knowledge"
        description="
I have a strong foundation in web development, focusing on both creating engaging user experiences and ensuring efficient functionality."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {KNOWLAGES.map((knowledge, index) => (
          <KnowledgeCard
            key={`knowledge-${index}`}
            title={knowledge.title}
            description={knowledge.description}
            href={knowledge.link}
            icon={
              !knowledge.link &&
              React.createElement(knowledge.icon || IconCode, {
                size: 74,
                strokeWidth: 1.5,
              })
            }
          />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeSection;
