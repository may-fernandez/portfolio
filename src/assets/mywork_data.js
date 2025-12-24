import project1_img from '../assets/sos_drinks.svg';
import project2_img from '../assets/EduMatanza.svg';
import cssSkill from '../assets/logo_css.svg';
import reactSkill from '../assets/logo_React.svg';
import htmlSkill from '../assets/logo_html5.svg';
import jsSkill from '../assets/logo_javascript.svg';
import figmaSkill from '../assets/logo_figma.svg';



const mywork_data = [
    {
        w_no:1,
        w_name:"S.O.S Drinks",
        w_descripcion: "Aplicación web que permite explorar una amplia variedad de cócteles y bebidas utilizando la API pública de TheCocktailDB. El usuario puede ver todos los tragos disponibles, filtrar por categorías, buscar por nombre, y acceder a una vista detallada con los ingredientes y preparación de cada cóctel.",
        w_img:project1_img,
        w_link_github:"https://github.com/may-fernandez/cocktails-react-app",
        w_link_verProyecto:"https://may-fernandez.github.io/cocktails-react-app/",
        w_skills: {
            html: {
                icon: htmlSkill,
                name: "HTML",
            },
            css: {
                icon: cssSkill,
                name: "CSS",
            },
            react: {
                icon: reactSkill,
                name: "React",
            },
            figma: {
                icon: figmaSkill,
                name: "Figma",
            }
        },
    },
    {
        w_no:2,
        w_name:"EduMatanza",
        w_descripcion: "Proyecto universitario grupal de desarrollo web para una plataforma de cursos online y presenciales. Incluye páginas clave como inicio con buscador y cursos destacados, detalle de curso, calendario de cursos, personalización de Gift Cards, formulario de inscripción para empresas y página de contacto.",
        w_img:project2_img,
        w_link_github:"https://github.com/Lau-Retta/tp1-programacion-web_1-GrupoP",
        w_link_verProyecto:"https://github.com/Lau-Retta/tp1-programacion-web_1-GrupoP",
        w_skills: {
            html: {
                icon: htmlSkill,
                name: "HTML",
            },
            css: {
                icon: cssSkill,
                name: "CSS",
            },
            javascript: {
                icon: jsSkill,
                name: "JavaScript",
            },
            figma: {
                icon: figmaSkill,
                name: "Figma",
            }
        },
    },
]
 
export default mywork_data;