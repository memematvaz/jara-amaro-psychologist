import React from 'react';
import Linktocontact from './Linktocontact';

const Aboutme = () => {


    return (
        <>
        <div className="about-me__container container">

            <div className="about-me__background-image"  alt="Jara en la clínica de psicología">
            </div>

            <div className="about-me__questions">
                <p>¿Piensas que <span className="bold-title">algo va mal hace tiempo</span> y no sabes que pasa?</p>
                <p>¿Sigues sintiendo esa sensación de <span className="bold-title">vacío y ansiedad</span> que te paraliza?</p>
                <p>¿<span className="bold-title">Te alejas de familiares y amigos</span> porque sientes que no te comprenden?</p>
                <p>¿Vas a terapia y <span className="bold-title">sigues sin encontrar una respuesta</span> después de meses?</p>
            </div>
        
        <h3 className="about-me__title">Si has contestado que sí a alguna de estas preguntas entonces<span className="bold-title"> estás en el lugar que necesitas.</span></h3>
        <p><span className="bold-title">Soy Jara Amaro, psicóloga y psicoterapeuta.</span> Podría hablarte de mi currículum, pero si has llegado hasta aquí <span className="bold-title">quiero contarte un poco más de mí para que veas que no somos tan distintas como crees.</span></p>
        <p>En mi adolescencia <span className="bold-title">sufrí problemas de ansiedad, trastornos alimenticios, ataques de pánico y fobia social.</span> Todavía recuerdo aquella sensación tan angustiante cada vez que experimentaba un ataque de pánico. <span className="bold-title">Debido a la vergüenza</span> que me producía que me vieran así y la incertidumbre de no saber cuándo, ni dónde ocurriría, <span className="bold-title">me encerré en mí misma.</span> Me alejé de las personas que quería y de las actividades que me gustaban, lo que empeoró el problema. Llegué a tal punto que padecí fobia social. <span className="bold-title">Muchas personas te dirán que no tienes ningún motivo para estar así y que se puede salir adelante, pero la realidad es que no es tan fácil sin las herramientas y la compañía necesaria.</span></p>
        <p><span className="bold-title">Estudiar psicología me ayudó a entender</span> como funciona la mente, y cuando entiendes sus mecanismos empiezas a ganar poder sobre ella. A día de hoy <span className="bold-title">he logrado superar mis trastornos</span> y puedo decir con alegría que tengo la vida que deseaba y lo mejor de todo, la que en su momento creí que no conseguiría.</p>
        <h3>No es que no puedas conseguirlo<br/>
            <span className="bold-title">Solo necesitas los recursos necesarios.</span>
        </h3>
        <h3>¿Quieres encontrar <span className="bold-title">ese motivo <br/>
        que te haga levantarte de la cama?</span></h3>
        <ul>Si has contestado que sí entonces déjame contarte un poco más sobre lo que me entusiasme en mi día a día:
            <li>Mi momento favorito del día es el desayuno. <span className="bold-title">Me encanta esa primera hora de la mañana </span>en la que estoy conmigo misma y tengo delante <span className="bold-title">un nuevo día con 24 oportunidades. </span>Antes era el peor de todos: sentía ansiedad, me dolía le cuerpo y solo imaginar lo que podía llegar a pasar me dejaba sin energía para comenzar el día.</li>
            <li><span className="bold-title">Adoro las plantas.</span> Cada mañana las riego. Verlas en la terraza <span className="bold-title">me recuerda que las cosas que nos gustan hay que cuidarlas y tratarlas con cariño para que puedan crecer.</span></li>
            <li>Me encanta leer. <span className="bold-title">Me declaro fan de las novelas </span>y de esas tardes acompañadas de un buen libro. Además, <span className="bold-title">la lectura nos enriquece y nos da información muy valiosa que podemos usar a nuestro favor.</span></li>
            <li>Soy una enamorada de pasar tiempo con mi familia, amigos y pareja. <span className="bold-title">Hay personas que</span>, aunque no puedan sacarte de la tristeza, <span className="bold-title">ayudan a curarte gracias al amor y la comprensión.</span></li>
            <li><span className="bold-title">Me gusta hacer deporte al aire libre:</span> surfear, caminar y el senderismo. <span className="bold-title">Una de las mejores herramientas que descubrí para superar la ansiedad y los ataques de pánico fue entrar en contacto con la naturaleza.</span> Así que, en mi tiempo libre, siempre tengo algún plan en un lugar rodeado de vegetación y paisajes maravillosos que me permiten apreciar que lo bonito está más cerca de lo que creemos.</li>
        </ul>
        </div>
        <Linktocontact/>
       </>

    );
};

export default Aboutme;