import { SOCIAL_NETWORKS } from "@/constants/social-networks";
import SocialNetworkStack from "@molecules/social-stack";

/**
 * This organism represents the right menu of the page.
 * Shows the social networks of the developer.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const RightMenu = () => {
  return (
    <aside className="min-h-screen bg-white pt-8">
      <section className="flex flex-col items-center gap-2 sticky top-0">
        <h3 className="font-bold text-lg">Links</h3>
        <SocialNetworkStack socialNetworks={SOCIAL_NETWORKS} />
      </section>
    </aside>
  );
};
export default RightMenu;
