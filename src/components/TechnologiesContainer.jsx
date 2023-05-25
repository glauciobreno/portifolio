import {
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiJava,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description:
      "O react é framework JavaScript popular para a criação de interfaces de usuário reativas e de alto desempenho. Sou capaz de criar componentes reutilizáveis, gerenciar estados e realizar integrações com APIs RESTful.",
  },
  {
    id: "typescript",
    name: "Typescript",
    icon: <SiTypescript />,
    description:
      "Com habilidades em TypeScript, sou capaz de aproveitar os benefícios da tipagem estática, escrever código mais legível e manutenível, e aumentar a eficiência e a qualidade do desenvolvimento de software.",
  },
  {
    id: "java",
    name: "Java",
    icon: <DiJava />,
    description:
      "Com habilidades sólidas em Java, sou capaz de criar soluções eficientes, desenvolver aplicativos backend usando frameworks como Spring, além de trabalhar com bancos de dados SQL para armazenamento e recuperação de dados de forma otimizada.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description:
      "Possuo sólidos conhecimentos na linguagem e nas principais bibliotecas e frameworks, como jQuery e React. Sou capaz de escrever código JavaScript eficiente e modular, manipular elementos do DOM, lidar com eventos e criar interações dinâmicas e atraentes em páginas web.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description:
      "Tenho conhecimentos para construir aplicativos backend escaláveis e eficientes. Posso desenvolver APIs RESTful, realizar conexões com bancos de dados, criar rotas e lidar com solicitações HTTP.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: <DiPostgresql />,
    description:
      "Capaz de escrever consultas complexas para extrair e manipular dados em bancos de dados relacionais. Tenho conhecimentos em modelagem de dados e otimização de consultas. Linguagem SQL não é um problema por aqui.",
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
