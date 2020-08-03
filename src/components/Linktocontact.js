import React from 'react';
import { Link } from 'react-router-dom';

class Linktocontact extends React.Component {


    render() {
      
        return ( 
            <div className="link-to-contact__container container">
                <h3 className="link-to-contact__title"><span className="bold-title">¿Quieres empezar a transoformarte en tu mejor versión?</span><br/>
                Comienza hoy. Tú eliges como y desde donde.</h3>
                <p>Entiendo que no quieras esperar meses para empezar a sentirte mejor. Por eso quiero contarte que tienes la necesidad y el derecho de recuperar tu bienestar y tu vida.</p>
                <p>Quiero ayudarte y acompañarte a transitar esta etapa que, posiblemente, te resulte eterna y frustrante. Te propongo que trabajemos juntas para que comiences a aliviar esos síntomas que te convierten en una persona que no reconoces.</p>
                <Link className="link" to="/contacto">
                    <button className="button">¡Escríbeme!</button>
                </Link>
            </div>
            
                
            
        );
    }
}

export default Linktocontact;