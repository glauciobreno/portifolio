import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetwork.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/glauciobreno/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://www.github.com/glauciobreno/",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/glauciobreno/",
  },
];

const SociealNetwork = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href="#!"
          className="social-btn"
          id={network.name}
          key={network.name}
          onClick={() => openLink(network.link)}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SociealNetwork;
