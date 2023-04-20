import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  //   DiMysql,
  DiReact,
  DiGit,
} from "react-icons/di";

import { SiVtex, SiTypescript } from "react-icons/si";

import "../styles/components/TechContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Avançado" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Avançado" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Avançado" },
  {
    id: "Ty",
    name: "Typescript",
    icon: <SiTypescript />,
    text: "Básico",
  },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Básico" },
  //   { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact />, text: "Básico" },
  { id: "Git", name: "Git", icon: <DiGit />, text: "Básico" },
  { id: "Vtex", name: "Vtex", icon: <SiVtex />, text: "Básico" },
];

export const TechContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <h4>Aqui ficam algumas tecnologias que eu sei e seu niveis:</h4>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
