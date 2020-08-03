import React from 'react';
import { Link } from 'react-router-dom';

import portrait from '../images/portrait.jpg'

const Aboutmehome = () => {
    return(
        <div className="about-me-home__container container">
            <div className="about-me-home__image" src={ portrait } alt="retrato de Jara"></div>
            <div className="about-me-home__text-container">
                <h2>Soy Jara, <span className="bold-title">psicóloga y psicoterapeuta.</span></h2>
                <p>Trabajo para que personas como tú puedan recuperar su vida lo antes posible sin tener que esperar meses hasta ver los primeros resultados.</p>
                <p>Me esfuerzo para que logres en menos de siete sesiones tener una vida en la que te sientas a gusto y aprendas a transformar lo que te duele en un motivo por el que levantarte todas las mañanas.</p>
                <p>Es tu vida: te pertenece y tienes el derecho a disfrutarla como te mereces. Quiero guiarte en ese trayecto y te acompañaré, a través de mi experiencia y herramientas, para que llegues a ese estado de bienestar que necesitas.</p>
                <Link className="link" to="/sobre-mi">              
                    <div className="read-more">Leer más</div>
                </Link>
            </div>
        </div>
    )
}

export default Aboutmehome;