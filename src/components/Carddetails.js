import React from 'react';
import { Link } from 'react-router-dom';


const Carddetails = (props) => {


      
        return ( 
            <>
                <Link to="/">
                    <i className="icon fas fa-times"></i>
                </Link>
                <div className="card__circle">
                
                    <i className={ props.cardObject.icon }></i>
                </div>
                <h4>Consultas{ props.cardObject.title }</h4>
                <p>{ props.cardObject.details.how } { props.cardObject.details.time }</p>
                <p>{ props.cardObject.details.include }</p>
                <p>{ props.cardObject.details.perfect }</p>
                <p>{ props.cardObject.details.need }</p>
                <h5>{ props.cardObject.slogan }</h5>
                <p>Solicita tu cita primera cita llamando al teléfono<span className="telephone"> 680 36 26 44</span><br/>
                    o escríbeme rellenando el siguiente formulario:
                </p>
                <button className="button">¡Escríbeme!</button>
            </>
        )}

export default Carddetails;