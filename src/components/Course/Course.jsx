import React from "react"
import styles from './Course.module.css'
import logo from '../../assets/Logo sin baseline-10.png'
import Card from "../Cards/Cards"

const Course = () => {
    // Colores o estilos personalizados para cada card
    const cardDetails= [
        { 
            style : {color: '#000000', backgroundColor: 'var(--orange)', fontSize: '20px'},
            content : {
                title: 'Cursos anuales para niños',
                details : ['10 meses', 'Clases grupales', 'Presencial'],
                footer : '¡Juego, dinamismo, innovación y trabajo grupal!',
            },
        }, // Card 1

        { style : {
            color: '#000000', backgroundColor: 'var(--seaBlue)', fontSize: '20px'
            },
            content : {
                title : 'Cursos anuales para jovenes',
                details : ['10 meses', 'Clases grupales', 'Presencial'],
                footer : 'Usamos diversas herramientas y tecnologías para enriquecer el proceso de aprendizaje. ¡Aprendemos jugando!',
            },
        }, // Card 2
        { 
            style : {color: '#000000', backgroundColor: 'var(--violet)', fontSize: '20px'},
            content : {
                title : 'Clases particulares de apoyo',
                details : ['Apoyo liceales o escolares preparacion de pruebas y examenes', 'Clases individuales', 'Presencial'],
            },
        }, // Card 3
        { 
            style : {color: '#000000', backgroundColor: 'var(--primary-color)', fontSize: '20px'},
            content : {
                title : 'Cursos semestrales para adultos',
                details : ['2 bloques de 5 meses', 'Clases grupales', 'Presencial, hibrido, o virtual'],
            },
        }, // Card 4
        { 
            style : {color: '#000000', backgroundColor: 'var(--secondary-color)', fontSize: '20px'},
            content : {
                title : 'Cursos para objetivos especificos',
                details : ['Empresa, turismo, educacion, medicina, etc.', '5 meses', 'Presencial, hibrido o virtual'],
            },
        }, // Card 5
        { 
            style : {color: '#000000', backgroundColor: 'var(--cream)', fontSize: '20px'},
            content :{
                title : 'Preparacion de examenes internacionales',
                details : ['10 meses', 'Clases grupales', 'Presencial o hibrido'],
            }
        }   // Card 6
    ];

    return (
        <>
        <section className={styles.courseContainer}>
            <div className={styles.courseText}>
                <h1 className={styles.courseTitle}>Aprendé inglés en <img src={logo} alt="logo de la empresa" />: </h1>
                <p className={styles.courseSubTitle}>¡Mira todas las opciones que tenemos para vos!</p>    
            </div>
        </section>
        <section className={styles.cardContainer}>
            <div className={styles.cardParentOne}>            
                {cardDetails.slice(0 ,3).map((card, index) => (
                    <Card key={index} style={card.style} content={card.content} />
                ))}
            </div>
            <div className={styles.cardParentTwo}>
                {cardDetails.slice(3 ,6).map((card, index) => (
                    <Card key={index + 3} style={card.style} content={card.content} />
                ))}
            </div>
        </section>
        <section className={styles.levelTestContainer}>
            <div className={styles.levelTestBtn}>
                <button>
                    Test de nivel
                </button>
            </div>
        </section>
        </>
    );
}

export default Course;
