import React from "react";
import "../styles/components/projectscontainer.sass";
import dindinInit from "../img/financeirodindin.png";
import secretWord from "../img/secretword.jpg";
import market from "../img/market.jpg";
import portifolio from "../img/portifolio.jpg";

const ProjectsContainer = () => {
  const projects = [
    {
      id: "market",
      name: "E-commerce",
      description:
        "O projeto E-commerce é um projeto em React que consiste em uma aplicação de comércio eletrônico, onde os usuários podem visualizar, comprar e vender produtos. O objetivo do projeto é criar uma interface intuitiva e responsiva que permita aos usuários navegar pelos diferentes produtos, visualizar informações detalhadas, adicionar produtos ao carrinho de compras e finalizar a compra.",
      link: "https://github.com/glauciobreno/front-integral-m05-desafio-individual-t09",
      img: market,
      deploy: "",
    },
    {
      id: "dindin",
      name: "Dindin",
      description:
        "O projeto Dindin é um sistema de controle financeiro desenvolvido para auxiliar os usuários no gerenciamento de suas finanças pessoais de maneira eficiente, o sistema oferece recursos para acompanhar e analisar os gastos. A interface intuitiva e amigável do Dindin permite que os usuários adicionem facilmente transações, categorizem seus gastos, e obtenham uma visão clara de seus fluxos de caixa.",
      link: "https://github.com/glauciobreno/Dindin-controle-financeiro",
      img: dindinInit,
      deploy: "",
    },
    {
      id: "secretword",
      name: "Secret Word",
      description:
        "O projeto Secret Word é um jogo de adivinhação de palavras. O objetivo do jogo é adivinhar uma palavra secreta em um número limitado de tentativas. O jogador pode fazer palpites e receber dicas para ajudá-lo a descobrir a palavra correta. O jogo possui um sistema de pontuação para registrar a performance do jogador.",
      link: "https://github.com/glauciobreno/Secret-Word",
      img: secretWord,
      deploy: "https://secretworld.vercel.app/",
    },
    {
      id: "portifolio",
      name: "Portifolio Pessoal",
      description:
        "Meu portfólio pessoal é um projeto desenvolvido com React e Sass. Ele foi criado com o objetivo de mostrar meu trabalho, habilidades e experiências como desenvolvedor. O portfólio é uma representação visual das minhas conquistas, projetos e conhecimentos na área de desenvolvimento de software",
      link: "https://github.com/glauciobreno/portifolio",
      img: portifolio,
      deploy: "https://portifolio-1m4dzg08k-glauciobreno.vercel.app/",
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
