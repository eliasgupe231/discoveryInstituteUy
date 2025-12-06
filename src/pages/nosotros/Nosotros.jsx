import React from "react";
import './Nosotros.css';    
import logo from "../../assets/icono-18.png"

function Nosotros (){
    return(
        <>
        <section className="nosotrosIntro">
            <div className="nosotrosTitleContainer">
                <p  className="title">Un poco de nuestra historia...</p>
                <img className="logoTitle" src={logo} alt="logo de la empresa" />
            </div>
        </section>
        <section classname = "textStory">
            <p>
                <strong>Desde el año 2000, </strong>en Discovery Institute hemos enseñado inglés a niños, adolescentes y adultos. <br/><br/>
                Siempre incorporamos nuevas tecnologías, recursos y enfoques 
            </p>
        </section>
        </>
    )
}

export default Nosotros