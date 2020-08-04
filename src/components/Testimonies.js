import React from 'react';
import TESTIMONIES from './services/TestimoniesJSON';
import Testimoniesdetails from './Testimoniesdetails';
import Linktocontact from './Linktocontact';

const Testimonies = () => {
    const testimonies = TESTIMONIES;

    return (
        <>
        <h2 className="testimonies-list__title container" id="cardList"><span className="bold-title">Testimonios:</span></h2>
        <ul className="testimonies-list__container container">

        {
            testimonies.map((cardObject) =>
            <li className="card-object"
                key={cardObject.id}>

                    <Testimoniesdetails
                    text={cardObject.text}
                    name={cardObject.name}/>
             </li>
            )}
         </ul>
         <Linktocontact/>
        </>
    );
};

export default Testimonies;