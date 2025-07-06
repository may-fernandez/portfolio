import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import SobreMi from './Components/SobreMi/SobreMi.jsx';
import Proyectos from './Components/Proyectos/Proyectos.jsx';
import Contacto from './Components/Contacto/Contacto.jsx';
import Footer from './Components/Footer/Footer.jsx';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App;