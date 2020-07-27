import React from 'react';
import { useState } from 'react';

const Card = (props) => {

    const [isCardOpen, setIsCardOpen] = useState("card__container");
    
    const toggleCard = () => {
        if (isCardOpen === "card__container"){
            setIsCardOpen("header__hamburger-open")
        } else {
            setIsCardOpen("card__container")
        }
    }


  return (
        <>
            <div id={ props.key } className={ isCardOpen }>
                <div className="card__header">
                    <div className="card-details__close-icon"  onClick={ toggleCard }>
                        <i className="icon fas fa-times"></i> 
                    </div>
                
                    <div className="card__circle">
                        <i className={ props.icon }>
                        </i>
                    </div>
                    <h4 className="container">Consultas <br/>
                    { props.title }</h4>
                </div>
                <div className="card__text-container container">
                    <p className="card__text">{ props.text } </p>
                    <p className="card__text">{ props.price } </p>
                    <div className="read-more"  onClick={ toggleCard }>Leer más</div>
                </div>
                <div className="card-details__text-container container">
                        <p>{ props.how } { props.time }</p>
                        <p>{ props.include }</p>
                        <p>{ props.perfect }</p>
                        <p>{ props.need }</p>
                        <h5>{ props.slogan }</h5>
                        <p>Solicita tu cita primera cita llamando al teléfono<span className="telephone"> 680 36 26 44</span><br/>
                        o escríbeme rellenando el siguiente formulario:
                    </p>
                    <button className="button">¡Escríbeme!</button>
                </div>
            
            </div>

        </>
  )
}

export default Card;