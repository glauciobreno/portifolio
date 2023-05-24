import React from "react";
import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import SocialNetwork from "./SocialNetwork";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glaucio Breno" />
      <p className="title">Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
      <p href="" className="btn">
        Download curriculo
      </p>
    </aside>
  );
};

export default Sidebar;
