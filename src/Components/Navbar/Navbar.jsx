import {React, useState} from "react";
import "./Navbar.css";
import SobreMi from "../SobreMi/SobreMi.jsx";
import Proyectos from "../Proyectos/Proyectos.jsx";
import Hero from "../Hero/Hero.jsx";

import { Link, Element } from "react-scroll";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menu al hacer click en un link
  }

  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>
      <nav>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Perfil
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Sobre mi
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Servicios
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
