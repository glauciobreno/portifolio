import React from "react";
import "../styles/components/projectscontainer.sass";
import dindinInit from "../img/financeirodindin.png";
import secretWord from "../img/secretword.jpg";

const ProjectsContainer = () => {
  const projects = [
    {
      id: "dindin",
      name: "Dindin",
      description:
        "Dindin é um sistema de controle financeiro desenvolvido com o objetivo de ajudar os usuários a gerenciar suas finanças pessoais de forma eficiente.",
      link: "https://github.com/glauciobreno/Dindin-controle-financeiro",
      img: dindinInit,
      deploy: "",
    },
    {
      id: "secretword",
      name: "Secret Word",
      description:
        "O projeto Secret Word é um jogo de adivinhação de palavras. O objetivo do jogo é adivinhar uma palavra secreta em um número limitado de tentativas",
      link: "https://github.com/glauciobreno/Secret-Word",
      img: secretWord,
      deploy: "https://secretworld.vercel.app/",
    },
  ];

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="projects-card" id={project.id} key={project.id}>
            <div className="projects-info">
              <h3>
                {project.name}
                <a href={project.link} target="_blank" className="btn-projects">
                  Github
                </a>
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    className="btn-deploy"
                  >
                    Deploy
                  </a>
                )}
              </h3>
              <p>{project.description}</p>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
