import React, { useEffect } from "react";
import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import SocialNetwork from "./SocialNetwork";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  const curriculo =
    "https://drive.google.com/uc?export=download&id=1CQiDNHsVbLcCT3IcPCb-WN7WO0TJq7Fw";
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glaucio Breno" />
      <div className="title">
        <p>Gláucio Breno</p>
        <p>Desenvolvedor Full Stack</p>
      </div>
      <SocialNetwork />
      <InformationContainer />
      <a
        href={curriculo}
        target="_blank"
        className="btn"
        alt="baixar curriculo"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
