import React from "react";
import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import SocialNetwork from "./SocialNetwork";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glaucio Breno" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <p>Informações de contato</p>
      <p href="" className="btn">
        Download curriculo
      </p>
    </aside>
  );
};

export default Sidebar;
