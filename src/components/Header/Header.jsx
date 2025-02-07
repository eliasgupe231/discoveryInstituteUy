import React from "react"
import { NavLink } from 'react-router-dom'; // Importa Link
import logo from '../../assets/logo-header.png';
import styles from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Header =  () =>{

    const [menuBurguer, setMenuBurguer] = useState (true);

    const changeMenuBurguer = () => {
        setMenuBurguer(!menuBurguer);
    }

    return (
        <>
        <header className={styles.header}>
            <NavLink 
                to = "/">
                <img className={styles.headerLg} src= {logo} alt="Logo de la empresa"/>
            </NavLink> 
            <NavLink 
                onClick={() => changeMenuBurguer()} 
                to="/" 
                className={menuBurguer ? styles.iconMenuBurguer : styles.notShowMenuBurguer}
                >
                {
                    menuBurguer ? (
                    <FontAwesomeIcon 
                    className={styles.iconMenuBurguerBars} 
                    icon={faBars} 
                    size="3x" 
                        />
                        ) : (
                    <FontAwesomeIcon 
                    className={styles.iconMenuBurguerX} 
                    icon={faXmark} 
                    size="3x" 
                />

                )
            }
            </NavLink>
            <section
            onClick={() => changeMenuBurguer()}
            className={menuBurguer ? styles.transparentBgNonVisible : styles.transparentBg}>
             </section>

            <nav className={menuBurguer ? styles.nav : styles.navOpen}>
                {!menuBurguer && (
                    <FontAwesomeIcon 
                        className={styles.closeIcon} 
                        icon={faXmark} 
                        size="3x" 
                        onClick={() => changeMenuBurguer()}
                    />
                )}
                <NavLink to="/" className={styles.linkInicio}>Inicio</NavLink>
                <NavLink to="/nosotros" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Nosotros</NavLink>
                <NavLink to="/cursos" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Cursos</NavLink>
                <button>Contacto</button> 
            </nav>
        </header>
        </>
    );
}

export default Header