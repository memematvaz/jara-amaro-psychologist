import React from 'react';


const Testimoniesdetails = (props) => {


    return (
        <div id={ props.key } className="testimonies-card__container">
            <div className="testimonies-card__header">" <span>"</span></div>
            <p className="testimonies-card__text">{ props.text } </p>
            <div className="testimonies-card__name">{ props.name }</div>
            <div className="testimonies-card__footer">"<span>"</span></div>
        </div>
    );
};

export default Testimoniesdetails;