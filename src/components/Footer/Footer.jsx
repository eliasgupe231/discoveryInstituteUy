import styles from "./Footer.module.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import icono from "../../assets/icono-25.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección izquierda */}
        <div className={styles.contact}>
          <h3>¡Consultá hoy<br />y empezá a aprender inglés!</h3>
          <div className={styles.socialIcons}>
            <FaWhatsapp className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
          <p className={styles.email}>discoveryinstitute.mont@gmail.com</p>
          <div className={styles.mobilePhone}>
            <FaPhone className={styles.iconPhone} /> 094 977 807 <br />
            </div>  
            <div className={styles.phone}>
                <FaPhone className={styles.iconPhone} /> 2 309 69 58
            </div>
        </div>

        {/* Sección central */}
        <div className={styles.links}>
          <div>
            <h4>NOSOTROS</h4>
            <ul>
              <li>Historia</li>
              <li>Misión y visión</li>
              <li>Instalaciones</li>
              <li>Staff</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
          <div>
            <h4>CURSOS</h4>
            <ul>
              <li>Niños y jóvenes</li>
              <li>Adultos</li>
              <li>Objetivos específicos</li>
              <li>Exámenes internacionales</li>
              <li>Horarios 2025</li>
            </ul>
          </div>
        </div>

        {/* Sección derecha */}
        <div className={styles.logo}>
            <img src={icono} alt="logo de la empresa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
