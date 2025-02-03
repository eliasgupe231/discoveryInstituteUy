import React from 'react';
import Header from './components/Header/Header';
import Nosotros from './pages/Nosotros';
import Cursos from './pages/Cursos';
import Inicio from './pages/Inicio';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
        <>
            <Header />
            <Routes basename="/discoveryInstituteUy">
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/cursos" element={<Cursos />} />
            </Routes>
        </>
    );
}

export default App;
