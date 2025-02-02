import React, { useEffect, useState } from "react";
import styles from "./Presentation.module.css";
import logo from "../../assets/disalon.png";
import arrow from '../../assets/presentationArrow.png';

function Presentation() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Activar la visibilidad después del primer renderizado
      const timeoutId = setTimeout(() => {
        setIsLoaded(true);
      }, 0); // 0 ms para evitar el retraso al cargar la página
  
      return () => clearTimeout(timeoutId); // Limpia el timeout cuando el componente se desarme
    }, []);
    return (
        <>
            <section className={styles.presentation}>
                <div className={styles.presentationTextCTA}>
                    <div className={styles.presentationTextContainer}>
                        <h1>Hello!</h1>
                        <p className={styles.bienvenida}>Bienvenid@</p>
                        <p className={styles.presentationQuestion}>¿Querés aprender inglés?</p>
                    </div>
                    <div className={styles.presentationCTAImg}>
                        <div className={styles.presentationTextCTAContainer}>
                            <div className={styles.presentationCTA}>
                                <button className={`${styles.buttonPresentation} ${isLoaded ? styles.isLoaded : ""}`}> <p className={styles.btnp}>¡Empezá hoy!</p></button>
                                <p className={styles.ctap}>En la modalidad que prefieras, <br /> con clases dinámicas y divertidas...</p>
                                <img src={arrow} alt="Flecha apuntando hacia abajo" />
                            </div>
                        </div>
                        <div className={styles.presentationDIImageResponsive}>
                                <img src={logo} alt="Logo de la marca"/>
                        </div>
                    </div>
                </div>
                <div className={styles.presentationDIImage}>
                    <img src={logo} alt="Logo de la marca"/>
                </div>

            </section>
        </>
    )

}

export default Presentation;