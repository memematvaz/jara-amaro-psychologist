import React from 'react';
import heroHome from '../images/herohome.jpg'
import { Link } from 'react-router-dom';

class Hero extends React.Component {


    render() {
      
        return ( 
            <div className="hero__container">

                <div className="hero__background-image" src={ heroHome } alt="Jara en la clínica de psicología">

                    <div className="hero__text-container-pc container">
                        <h2 className="hero__title">¿Temes una terapia <span className="bold-title">interminable?</span></h2>
                        <p>Sentirse mejor en menos de siete sesiones es posible.</p>
                        <p>Transforma tu vida en menos tiempo y libérate del malestar.</p>
                        <Link className="link" to="/contacto">
                            <button className="button">¡Escríbeme!</button>
                        </Link>
                    </div>
                </div>
                
                <div className="hero__text-container-mobile container">
                    <h2>¿Temes una terapia <span className="bold-title">interminable?</span></h2>
                    <p>Sentirse mejor en menos de siete sesiones es posible.</p>
                    <p>Transforma tu vida en menos tiempo y libérate del malestar</p>
                    <Link className="link" to="/contacto">
                        <button className="button">¡Escríbeme!</button>
                    </Link>
                </div>
            </div>
                
            
        );
    }
}

export default Hero;