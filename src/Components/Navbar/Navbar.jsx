import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import SobreMi from "../SobreMi/SobreMi.jsx";
import Proyectos from "../Proyectos/Proyectos.jsx";
import Hero from "../Hero/Hero.jsx";
import { Link, Element } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />

      <nav>
        <ul className="nav-menu">
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
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
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav-connect">Contactame</div>
    </div>
  );
};

export default Navbar;
