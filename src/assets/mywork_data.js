import project1_img from '../assets/sos_drinks.svg';
import project2_img from '../assets/weather_app.svg';
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
        w_name:"Weather App",
        w_descripcion: "Aplicación del clima que permite al usuario consultar el estado del tiempo actual de cualquier ciudad ingresada, utilizando la API de OpenWeatherMap. Muestra información como la temperatura, humedad, sensación térmica y condiciones climáticas generales de forma clara y visual.",
        w_img:project2_img,
        w_link_github:"https://github.com/may-fernandez/app-clima-js",
        w_link_verProyecto:"https://may-fernandez.github.io/app-clima-js/",
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