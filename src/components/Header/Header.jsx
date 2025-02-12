import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo-header.png";
import icono from "../../assets/icono-25.png";
import styles from "./Header.module.css";

const Header = () => {
  const [menuBurguer, setMenuBurguer] = useState(true);

  const changeMenuBurguer = () => {
    setMenuBurguer(!menuBurguer);
  };

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.headerLg} src={logo} alt="Logo de la empresa" />
      </NavLink>

      {/* Icono de menú hamburguesa (solo visible en pantallas pequeñas) */}
      <NavLink
        onClick={() => changeMenuBurguer()}
        to="/"
        className={menuBurguer ? styles.iconMenuBurguer : styles.notShowMenuBurguer}
      >
          <FontAwesomeIcon className={styles.iconMenuBurguerBars} icon={faBars} size="3x" />  
      </NavLink>

      {/* Fondo oscuro al abrir el menú */}
      <section onClick={() => changeMenuBurguer()} className={menuBurguer ? styles.transparentBgNonVisible : styles.transparentBg}></section>

      {/* Menú de navegación visible siempre (pantallas grandes) */}
      <div className={styles.nav}>
        <NavLink to="/" className={styles.linkInicio}>
          Inicio
        </NavLink>
        <NavLink to="/nosotros" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Nosotros
        </NavLink>
        <NavLink to="/cursos" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Cursos
        </NavLink>
        <button>Contacto</button>
      </div>

      {/* Animación del menú (solo visible en pantallas pequeñas) */}
      <AnimatePresence>
        {!menuBurguer && (
          <motion.nav
            initial={{ x: "100%" }} // Empieza fuera de la pantalla
            animate={{ x: 0 }} // Se desliza hacia adentro
            exit={{ x: "100%" }} // Se desliza hacia afuera al cerrar
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={styles.navOpen}
          >
            <div className={styles.closeAndIcono}>
              <img src={icono} alt="Icono de la empresa" className={styles.iconoEmpresa} />
              <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} size="3x" onClick={() => changeMenuBurguer()} />
            </div>

            <NavLink to="/" className={styles.linkInicio}>
              Inicio
            </NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
              Nosotros
            </NavLink>
            <NavLink to="/cursos" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
              Cursos
            </NavLink>
            <button>Contacto</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
