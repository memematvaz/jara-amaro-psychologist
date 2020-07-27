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
                    <h4 className="container">Consultas <br/>
                    { props.title }</h4>
                </div>
                <div className="card__text-container container">
                    <p className="card__text">{ props.text } </p>
                    <p className="card__text">{ props.price } </p>
                    <a className="read-more">Leer más</a>
            </div>
            </div>

        </>
  )
}

export default Card;