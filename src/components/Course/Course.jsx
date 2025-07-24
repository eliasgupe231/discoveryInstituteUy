import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from './Course.module.css';
import logo from '../../assets/Logo sin baseline-10.png';
import Card from "../Cards/Cards";
import { useEffect, useState } from "react";

const Course = () => {
    // Colores o estilos personalizados para cada card
    const cardDetails = [
        { 
            style: {color: '#000000', backgroundColor: 'var(--orange)', fontSize: '20px'},
            content: {
                title: 'Cursos anuales para niños',
                details: ['-10 meses', '-Clases grupales', '-Presencial'],
            },
        },
        { 
            style: {color: '#000000', backgroundColor: 'var(--seaBlue)', fontSize: '20px'},
            content: {
                title: 'Cursos anuales para jóvenes',
                details: ['-10 meses', '-Clases grupales', '-Presencial'],
            },
        },
        { 
            style: {color: '#000000', backgroundColor: 'var(--violet)', fontSize: '20px'},
            content: {
                title: 'Clases particulares de apoyo',
                details: ['-Apoyo liceales o escolares preparación de pruebas y exámenes', '-Clases individuales', '-Presencial'],
            },
        },
        { 
            style: {color: '#000000', backgroundColor: 'var(--primary-color)', fontSize: '20px'},
            content: {
                title: 'Cursos semestrales para adultos',
                details: ['-2 bloques de 5 meses', '-Clases grupales', '-Presencial, híbrido, o virtual'],
            },
        },
        { 
            style: {color: '#000000', backgroundColor: 'var(--secondary-color)', fontSize: '20px'},
            content: {
                title: 'Cursos para objetivos específicos',
                details: ['-Empresa, turismo, educación, medicina, etc.', '-5 meses', '-Presencial, híbrido o virtual'],
            },
        },
        { 
            style: {color: '#000000', backgroundColor: 'var(--cream)', fontSize: '20px'},
            content: {
                title: 'Preparación de exámenes internacionales',
                details: ['-10 meses', '-Clases grupales', '-Presencial o híbrido'],
            },
        }
    ];

    // Obtenemos el progreso del scroll usando useScroll
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si el usuario está en mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Consideramos mobile si es menor a 768px
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Animaciones diferentes para desktop y mobile
    const opacity = useTransform(scrollYProgress, [0, isMobile ? 0.2: 0.3], [0.2, 1]);
    const scale = useTransform(scrollYProgress, [0, isMobile ? 0.2: 0.3], [0.2, 1]);

    return (
        <>
            <section className={styles.courseContainer}>
                <div>
                    <h1 className={styles.courseTitle}>
                        Aprendé inglés en <img src={logo} alt="logo de la empresa" />:
                    </h1>
                    <p className={styles.courseSubTitle}>¡Mira todas las opciones que tenemos para vos!</p>
                </div>
            </section>

            <section className={styles.cardContainer}>
                {/* Ajustamos las tarjetas con animaciones mejoradas para mobile */}
                <motion.div
                    className={styles.cardParentOne}
                    style={{
                        opacity,
                        scale,
                        transition: "opacity 0.2s ease-out, scale 0.2s ease-out",
                    }}
                >
                    {cardDetails.slice(0, 3).map((card, index) => (
                        <Card key={index} style={card.style} content={card.content} />
                    ))}
                </motion.div>

                <motion.div
                    className={styles.cardParentTwo}
                    style={{
                        opacity,
                        scale,
                        transition: "opacity 0.2s ease-out, scale 0.2s ease-out",
                    }}
                >
                    {cardDetails.slice(3, 6).map((card, index) => (
                        <Card key={index + 3} style={card.style} content={card.content} />
                    ))}
                </motion.div>
            </section>

            <section className={styles.levelTestContainer}>
                <div className={styles.levelTestBtn}>
                    <button>
                        <p>Test de nivel</p>
                    </button>
                </div>
            </section>
        </>
    );
};


export default Course;
