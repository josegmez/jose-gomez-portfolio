import { Icon, IconLink, IconProps } from "@tabler/icons-react";
import LinkButton from "@atoms/link-button";
import React, { ForwardRefExoticComponent } from "react";

interface socialNetworkStackProps {
  socialNetworks: {
    name: string;
    url: string;
    icon?: ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  }[];
}

/**
 * This molecule component is a social network stack that displays the social networks of the user.
 * It accepts an array of social networks with the name, url, and an optional icon for each.
 *
 * @param {socialNetworkStackProps} socialNetworks - The social networks of the user.
 * @returns {React.ReactNode} The social network stack.
 */
const SocialNetworkStack = ({ socialNetworks }: socialNetworkStackProps) => {
  return (
    <article className="flex flex-col gap-4 items-center">
      {socialNetworks.map((socialNetwork, index) => (
        <LinkButton
          key={`social-network-${index}`}
          href={socialNetwork.url}
          isOnlyIcon
          icon={React.createElement(
            (socialNetwork.icon as React.ElementType) || IconLink
          )}
        >
          {socialNetwork.name}
        </LinkButton>
      ))}
    </article>
  );
};

export default SocialNetworkStack;
