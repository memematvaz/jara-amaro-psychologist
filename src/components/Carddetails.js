import React from 'react';


class Carddetails extends React.Component {


    render() {
      
        return ( 
            <div className="card-details__container">
                <span className="icon fas fa-times"></span>
                <div className="card__circle">
                    <i className={ props.icon }></i>
                </div>
                <h4>{ props.title }</h4>
                <p>{ props.text-details }</p>
                <h5>{ props.text-slogan }</h5>
                <p>Solicita tu cita primera cita llamando al teléfono 680 36 26 44<br/>
                    o escríbeme rellenando el siguiente formulario
                </p>
                <button>¡Escríbeme!</button>
            </div>
                
        );
    }
}

export default Carddetails;