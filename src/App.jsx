import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import SobreMi from './Components/SobreMi/SobreMi.jsx';
import Proyectos from './Components/Proyectos/Proyectos.jsx';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SobreMi/>
      <Proyectos/>
    </div>
  )
}

export default App;