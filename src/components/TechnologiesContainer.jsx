import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description:
      "habilidade para criar estruturas de páginas bem organizadas, utilizando as tags adequadas e garantindo a acessibilidade e a semântica correta do conteúdo. Estou familiarizado com os principais elementos e recursos do HTML5, como formulários interativos, vídeo e áudio embutidos e manipulação de elementos por meio de JavaScript.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description:
      "capaz de criar estilos atraentes e responsivos para os elementos HTML, utilizando conceitos como flexbox e grid para layouts modernos e adaptáveis a diferentes dispositivos. Tenho conhecimentos em CSS preprocessors, como SASS e LESS, para tornar o desenvolvimento mais eficiente e modular.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description:
      "possuo sólidos conhecimentos na linguagem e nas principais bibliotecas e frameworks, como jQuery e React. Sou capaz de escrever código JavaScript eficiente e modular, manipular elementos do DOM, lidar com eventos e criar interações dinâmicas e atraentes em páginas web.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description:
      "tenho conhecimentos para construir aplicativos backend escaláveis e eficientes. Posso desenvolver APIs RESTful, realizar conexões com bancos de dados, criar rotas e lidar com solicitações HTTP",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <DiMysql />,
    description:
      "capaz de escrever consultas complexas para extrair e manipular dados em bancos de dados relacionais. Tenho conhecimentos em modelagem de dados e otimização de consultas.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description:
      "popular para a criação de interfaces de usuário reativas e de alto desempenho. Sou capaz de criar componentes reutilizáveis, gerenciar estados e realizar integrações com APIs RESTful.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
