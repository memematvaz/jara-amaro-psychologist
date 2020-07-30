import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const [isCardOpen, setIsCardOpen] = useState("card__container");
    
    const toggleCard = () => {
        if (isCardOpen === "card__container"){
            setIsCardOpen("card-details__container")
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
                    <h4>Consultas <span className="card__breakline"><br/></span>
                    { props.title }</h4>
                   
                </div>
                <div className="card__text-container">
                    <p className="card__text">{ props.text } </p>
                    <p className="card__text bold-title price">{ props.price } </p>
                    <div className="read-more"  onClick={ toggleCard }>Leer más</div>
                    
                </div>
                <div className="card-details__text-container container">
                        <p>{ props.how } <span className="card-details__mobile-no">{ props.time }</span></p>
                        <p>{ props.include }</p>
                        <p className="card-details__mobile-no">{ props.perfect }</p>
                        <p>{ props.need }</p>
                        <h5 className="card-details__mobile-no">{ props.slogan }</h5>
                        <div className="read-less"  onClick={ toggleCard }>Leer menos</div>
                        <div >
                        <p className="card-details__mobile-no">Solicita tu cita primera cita llamando al teléfono<span className="telephone"> 680 36 26 44</span> o escríbeme rellenando el siguiente formulario:
                    </p>
                    <Link className="link" to="/contact">
                        <button className="card-details__mobile-no button">¡Escríbeme!</button>
                    </Link>
                    </div>
                </div>
            
            </div>

        </>
  )
}

export default Card;