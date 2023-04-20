import { Link } from "react-router-dom";

import { AboutContainer } from "../Pages/AboutContainer";
import { TechContainer } from "../Pages/TechContainer";

import "../styles/components/Navbar.sass";

export const MainContent = () => {
  return (
    <main className="contentConteiner">
      <AboutContainer />
      <TechContainer />
    </main>
  );
};

export function Navbar() {
  return (
    <section className="NavBar_container">
      <nav className="NavBar">
        <h1>Gabriel Ferraz</h1>
        <ul className="links">
          <Link className="link" to={"/"}>
            Sobre
          </Link>
          <Link className="link" to={"/Tech"}>
            Tecnologias
          </Link>
        </ul>
      </nav>
    </section>
  );
}
