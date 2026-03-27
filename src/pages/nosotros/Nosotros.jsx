import React from "react";
import './Nosotros.css';    
import logo from "../../assets/icono-18.png"
import name from "../../assets/logo-sin-baseline-10.png"
import Button from "../../components/Button/Button"
import arrow from '../../assets/presentationArrow.png';
import carmen from '../../assets/foto-mami-staff.png'
import elias from '../../assets/foto-pollo-staff.png'
import ana from '../../assets/foto-ana-staff.png'
import leti from '../../assets/foto-leti-staff.png'




function Nosotros (){
    return(
        <>
        <section className="background">
            <section className="front">
                <section className="nosotrosIntro">
                    <div className="nosotrosTitleContainer">
                        <p  className="title">Un poco de nuestra historia...</p>
                        <img className="logoTitle" src={logo} alt="logo de la empresa" />
                    </div>
                </section>
                <section className = "textStory">
                    <p>
                        <strong>Desde el año 2000, </strong>en Discovery Institute hemos enseñado inglés a niños, adolescentes y adultos. <br/><br/>
                        Siempre incorporamos nuevas tecnologías, recursos y enfoques que hacen del aprendizaje del inglés una experiencia <strong>dinámica, actual y efectiva.</strong><br/><br/>
                        <strong>Creemos que aprender un idioma es más que incorporar palabras:</strong> es explorar una cultura, ver el mundo con nuevos ojos y descubrir tu propio potencial.<br/><br/>
                        Por eso, <strong>nuestro nombre,</strong> <span><img src={name} alt="nombre del instituto" /></span> <strong>refleja la esencia de nuestro método:</strong><br/><br/>
                        <strong>- Aprendizaje a tu ritmo</strong><br/>
                        <strong>- Descubrimiento dinámico y personalizado del nuevo idioma.</strong><br/><br/>
                        <strong>Nuestro compromiso:</strong> hacer del aprendizaje del inglés una experiencia divertida, enriquecedora y motivadora.
                    </p>
                </section>
                <section className="buttonNosotros">
                    <p><strong>¡Cumplimos 25 años enseñando inglés y <br></br>queremos que seas parte de nuestra comunidad!</strong></p>
                    <Button variant="vacio">¡Quiero ser parte de Discovery!</Button>
                </section>
                <section className="nosotrosContainer">
                    <h5 ><strong>Nuestra meta: </strong>Educar, acompañar, motivar.</h5>
                    <p>¡Mira el video y descubrí cómo es estudiar con nosotros!</p>
                    <img src={arrow} alt="Flecha hacia abajo" />
                </section>
                <section className="staffContainer">
                    <p className="teachersTitle">Nada sería posible sin nuestro tremendo <strong>staff</strong></p>
                    <p className="teachersSubtitle">Ellos son los teachers que te van a acompañar en tu proceso de aprendizaje, responderán dudas (de inglés o de la vida) y te escucharán siempre que lo necesites...</p>
                </section>
                <section className="staffPhotos">
                    <div className="teacherContainer" data-aos="fade-right" data-aos-offset="50" data-aos-duration="60" data-aos-anchor-placement="bottom-bottom">
                        <img src={carmen} alt="imagen de la directora Carmen Gomez"/>
                        <div className="teacherCaption">
                            <p className="teacherPresentation"> <strong>Carmen Gómez</strong> <br />  Directora y teacher :)</p>
                            <p className="teacherDescription">Jóvenes, <br></br> adultos y <br /> exámenes int.</p>

                        </div>
                    </div>
                    <div className="teacherContainer" data-aos="fade-left" data-aos-offset="50" data-aos-duration="60" data-aos-anchor-placement="bottom-bottom">
                        <div className="teacherCaption2">
                            <p className="teacherPresentation"> <strong>Ana Paula Pereira</strong> <br />Teacher </p>
                            <p className="teacherDescription">Niños y <br /> jóvenes.</p>

                        </div>                       
                        <img src={ana} alt="imagen de la teacher Ana"/>
                    </div>
                    <div className="teacherContainer" data-aos="fade-right" data-aos-offset="50" data-aos-duration="60" data-aos-anchor-placement="bottom-bottom">
                        <img src={leti} alt="imagen de la teacer Leticia "/>
                        <div className="teacherCaption">
                            <p className="teacherPresentation"> <strong>Leticia Parada</strong> <br /> Teacher </p>
                            <p className="teacherDescription">Niños y <br /> jóvenes.</p>                            
                        </div>                       
                    </div>
                    <div className="teacherContainer" data-aos="fade-left" data-aos-offset="50" data-aos-duration="60" data-aos-anchor-placement="bottom-bottom">
                        <div className="teacherCaption2">
                            <p className="teacherPresentation"> <strong>Elías Pereira</strong><br /> Teacher </p>
                            <p className="teacherDescription">Niños y <br /> jóvenes.</p>
                        </div>
                        <img src={elias} alt="imagen del teacher Elias"/>                        
                    </div>
                </section>
                <section className="interiorContainer">
                    <p className="interiorTitle">¡Mira el instituto por dentro!</p>
                    <div className="carrouselContainer">                        
                        <p>En <span><img src={name} alt="nombre del instituto" /></span> creemos que es imprescindible que nuestros alumnos tengan un lugar cómodo y seguro en el que aprender, por eso estamos atentos a brindarles la mayor comodidad posible y nos aseguramos de que el salón sea un ambiente atractivo y acogedor que fomente el aprendizaje de niños, jóvenes y adultos.</p>
                    </div>
                </section>
            </section>
        </section>
        </>
    )
}

export default Nosotros