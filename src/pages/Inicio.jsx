import React from "react";
import Experience from "../components/Experience/Experience";
import Presentation from '../components/Presentation/Presentation'
import Course from "../components/Course/Course"
import GoogleReviews from "../components/Reviews/GoogleReviews"



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