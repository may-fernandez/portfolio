import React from 'react';
import './SobreMi.css';
import skills_data from '../../assets/skills_data';
import tools_data from '../../assets/tools_data';



const SobreMi = () => {

    return(
        <div className='about'>
            <div className="titulo_about">
                <h1>Sobre mi</h1>
            </div>

            <div className="seccion_about">
                <div className="about_centro">
                    <div className="about_p">
                        <p id='p1'>Especializada en el desarrollo web frontend, con un fuerte interés por crear experiencias digitales atractivas, funcionales y centradas en el usuario.</p>
                        <p id='p2'>Me gusta trabajar en equipo, compartir ideas y aprender de otros. Busco colaborar en proyectos con buena comunicación y mucha creatividad.</p>
                        <p>Actualmente estoy estudiando una Tecnicatura en desarrollo web en la Universidad Nacional de la Matanza (Buenos Aires, Argentina) para mejorar mis habilidades como programadora.</p>
                    </div>

                    <div className="skills">
                        <h2>Skills</h2>

                        <div className="logo">
                            {skills_data.map((skill, index) => {
                                return <img Key= {index} src= {skill.s_img} className='skill'/>
                            })}
                        </div>
                    </div>

                    <div className="herramientas">
                        <h2>Herramientas</h2>

                        <div className="logo">
                            {tools_data.map((tool, index) => {
                                return <img key= {index} src={tool.t_img} alt="" className='skill'/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;