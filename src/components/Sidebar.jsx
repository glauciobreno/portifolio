import React from "react";
import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import SocialNetwork from "./SocialNetwork";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glaucio Breno" />
      <div className="title">
        <p>Gláucio Breno</p>
        <p>Desenvolvedor Full Stack</p>
      </div>
      <SocialNetwork />
      <InformationContainer />
      <p href="" className="btn">
        Download curriculo
      </p>
    </aside>
  );
};

export default Sidebar;
