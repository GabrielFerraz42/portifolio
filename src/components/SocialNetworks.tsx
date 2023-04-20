import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/SocialNetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/gabriel-ferraz-758790190/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/GabrielFerraz42",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/astronautapensativo/",
  },
];

export const SocialNetworkContainer = () => {
  return (
    <section className="socialNetworks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};
