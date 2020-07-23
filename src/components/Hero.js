import React from 'react';
import heroHome from '../images/herohome.jpg'

class Hero extends React.Component {


    render() {
      
        return ( 
            <div className="hero__container">

                <div className="hero__background-image" src={ heroHome } alt="Jara en la clínica de psicología">

                    <div className="hero__text-container-pc container">
                        <h2>¿Temes una terapia <span className="bold-title">interminable?</span></h2>
                        <p>Sentirse mejor en menos de siete sesiones es posible.</p>
                        <p>Transforma tu vida en menos tiempo y libérate del malestar</p>
                        <button className="button">¡Escríbeme!</button>
                    </div>
                </div>
                
                <div className="hero__text-container-mobile container">
                    <h2>¿Temes una terapia <span className="bold-title">interminable?</span></h2>
                    <p>Sentirse mejor en menos de siete sesiones es posible.</p>
                    <p>Transforma tu vida en menos tiempo y libérate del malestar</p>
                    <button className="button">¡Escríbeme!</button>
                </div>
            </div>
                
            
        );
    }
}

export default Hero;