import React from 'react'
import Header from './components/Header/Header'
import Nosotros from './pages/Nosotros'
import Cursos from './pages/Cursos'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'



function App(){
    return (
        < >
        <Header/>
        <Router>
            <Routes>
                <Route path = "/" element = {<Inicio/>}/>
                <Route path = "./pages/Nosotros.jsx" element = {<Nosotros/>}/>
                <Route path = "./pages/Cursos.jsx" element = {<Cursos/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App