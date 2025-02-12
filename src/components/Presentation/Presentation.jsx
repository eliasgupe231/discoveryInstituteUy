import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importar motion de framer-motion
import styles from "./Presentation.module.css";
import logo from "../../assets/disalon.png";
import arrow from '../../assets/presentationArrow.png';

function Presentation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 0); 

    return () => clearTimeout(timeoutId); 
  }, []);

  const typingEffect = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.09,  // Esto es lo que controla el intervalo entre cada letra
      },
    },
    hidden: { opacity: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.05 } }, // Hacemos que cada letra aparezca con un pequeño retardo
  };

  return (
    <>
      <section className={styles.presentation}>
        <div className={styles.presentationTextCTA}>
          <div className={styles.presentationTextContainer}>
            <h1>Hello!</h1>
            <p className={styles.bienvenida}>Bienvenid@</p>

            {/* Usamos framer-motion para animar las letras */}
            <motion.p 
              className={styles.presentationQuestion}
              initial="hidden"
              animate="visible"
              variants={typingEffect}
            >
              {"¿Querés aprender inglés?".split("").map((char, index) => (
                <motion.span key={index} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className={styles.presentationCTAImg}>
            <div className={styles.presentationTextCTAContainer}>
              <div className={styles.presentationCTA}>
                <button
                  className={`${styles.buttonPresentation} ${isLoaded ? styles.isLoaded : ""}`}
                >
                  <p className={styles.btnp}>¡Empezá hoy!</p>
                </button>
                <p className={styles.ctap}>
                  En la modalidad que prefieras, <br /> con clases dinámicas y divertidas...
                </p>
                <img src={arrow} alt="Flecha apuntando hacia abajo" />
              </div>
            </div>
            <div className={styles.presentationDIImageResponsive}>
              <img src={logo} alt="Logo de la marca" />
            </div>
          </div>
        </div>
        <div className={styles.presentationDIImage}>
          <img src={logo} alt="Logo de la marca" />
        </div>
      </section>
    </>
  );
}

export default Presentation;
