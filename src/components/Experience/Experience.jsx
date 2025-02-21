import React from "react";
import styles from './Experience.module.css'
import Counter from "../Counter/Counter";
import logo from "../../assets/Logo sin baseline-10.png"

const Experience = () =>{ 
    return (
        <>  
            <div className={styles.experienceContainer}>
                <div className= {styles.experienceTitle}>
                    <h3>¿Porqué elegir </h3>
                    <img src={logo} alt="logo de la empresa" />
                    <h3>para aprender inglés?</h3>
                </div>
                <div className={styles.counterSection}>
                    <div className={styles.aniosContainer}>
                        <Counter  label={"+"} endValue={25} duration={80}/>
                        <p>años aprendiendo <br/> inglés juntos</p>
                    </div>
                    <div className={styles.studentsContainer}>
                        <Counter label={"+"} endValue={500} duration={1}/>
                        <p>alumnos <br/> nos han elegido</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience