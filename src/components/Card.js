import React from 'react';

const Card = (props) => {
  return (
        <>
            <div id={ props.key } className="card__container">
                <div className="card__header">
                    <div className="card__circle">
                        <i className={ props.icon }>
                        </i>
                    </div>
                    <h4>{ props.title }</h4>
                </div>
                <div className="card__text-container">
                    <p className="card__text">{ props.text } </p>
                    <p className="card__text">{ props.price } </p>
                    <a>Leer más</a>
            </div>
            </div>
            <div className="card-details__container">
                <span className="icon fas fa-times"></span>
                <div className="card__circle">
                    <i className={ props.icon }></i>
                </div>
                <h4>{ props.title }</h4>
                <p>{ props.how }</p>
                <p>{ props.time }</p>
                <p>{ props.include }</p>
                <p>{ props.perfect }</p>
                <p>{ props.need }</p>
                <h5>{ props.slogan }</h5>
                <p>Solicita tu cita primera cita llamando al teléfono 680 36 26 44<br/>
                    o escríbeme rellenando el siguiente formulario:
                </p>
                <button>¡Escríbeme!</button>
            </div>
        </>
  )
}

export default Card;