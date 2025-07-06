import React from "react";
import mywork_data from "../../assets/mywork_data";
import "./Proyectos.css";
import logo_github from "../../assets/logo_github.svg";

const Proyectos = () => {
  return (
    <div className="contenedor-proyectos">

      <div className="titulo-proyectos">
        <h1>Proyectos</h1>
      </div>
      <div className="proyectos">
        {mywork_data.map((work, index) => {
          return (
            <ul className="ul-proyectos" key={work.w_no}>
              <li className="proyecto">
                <div className="columna-izq">
                  <img src={work.w_img} alt="" className="img-proyecto" />

                  <div className="etiquetas">
                    {Object.values(work.w_skills).map((skill) => {
                      return (
                        <div key={skill.name} className="work-skills">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="skill-icons"
                          />
                          <span className="skill-span">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="columna-der">
                  <div className="info">
                    <h2 id="info-title">{work.w_name}</h2>
                    <p id="info-description">{work.w_descripcion}</p>
                  </div>

                  <div className="links-proyecto">
                    <a
                      href={work.w_link_github}
                      target="_blank"
                      className="link-proyecto"
                      title="Ver código"
                    >
                      <img
                        key={index}
                        src={logo_github}
                        alt=""
                        className="link-github"
                      />
                    </a>
                    <a
                      href={work.w_link_verProyecto}
                      target="_blank"
                      id="ver-proyecto"
                      className="link-proyecto"
                    >
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Proyectos;
