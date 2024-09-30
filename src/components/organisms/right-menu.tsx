import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import SocialNetworkStack from "../molecules/social-stack";

const SOCIAL_NETWORKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <IconBrandFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <IconBrandInstagram />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <IconBrandTwitter />,
  },
  {
    name: "GitHub",
    url: "https://github.com/josegmez",
    icon: <IconBrandGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jose-david-g%C3%B3mez-mu%C3%B1et%C3%B3n-31b459285/",
    icon: <IconBrandLinkedin />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@jose.gomez14",
    icon: <IconBrandYoutube />,
  },
];

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
