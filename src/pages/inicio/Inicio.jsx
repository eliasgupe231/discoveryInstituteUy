import React from "react";
import Experience from "./Experience/Experience";
import Presentation from './Presentation/Presentation'
import Course from "./Course/Course"
import GoogleReviews from "./Reviews/GoogleReviews"



function Inicio (){
    return (
        <>  
        <Presentation/>
        <Course/>
        <Experience/>
        <GoogleReviews/>
        </>
    )
}

export default Inicio 