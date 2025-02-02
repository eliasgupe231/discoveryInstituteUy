import React from 'react'
import Header from './components/Header/Header'
import Nosotros from './pages/Nosotros'
import Cursos from './pages/Cursos'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'


function App(){
    return (
        < >
        <Header/>
        <Routes>
            <Route path = "/" element = {<Inicio/>}/>
            <Route path = "./pages/Nosotros.jsx" element = {<Nosotros/>}/>
            <Route path = "./pages/Cursos.jsx" element = {<Cursos/>}/>
        </Routes>
        </>
    )
}

export default App