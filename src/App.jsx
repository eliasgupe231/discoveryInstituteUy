import React, {useEffect } from 'react';
import Header from './components/Header/Header';
import Nosotros from './pages/nosotros/Nosotros';
import Cursos from './pages/Cursos';
import Inicio from './pages/inicio/Inicio';
import { Routes, Route,useLocation  } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AOS from 'aos';


function App() {
      const location = useLocation();

        useEffect(() => {
          AOS.init({
            duration: 150,     // duración por defecto
            once: false,       // si true, se anima solo la primera vez
            easing: 'ease-out' // easing
          });
        }, []);
    
        // refresca AOS cuando cambia la ruta (para que los elementos que entran en DOM se animen)
        useEffect(() => {
          AOS.refresh();
        }, [location]);
    
    return (
        <>
            <Header />
            <Routes basename="/discoveryInstituteUy">
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/cursos" element={<Cursos />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
