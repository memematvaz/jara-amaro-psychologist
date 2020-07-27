
import React from 'react';
import THERAPIES from './services/TherapiesJSON';
import Card from './Card'
import Carddetails from './Carddetails'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardList = (props) => {
    const therapies = THERAPIES;



        return ( 
            <>
            <h3 className="card-list__introduction container">¿No te parece que necesitas sentirte mejor y recuperar tu vida?<br/>
                <span className="bold-title">Tu problema tiene solución y está más cerca de lo que piensas.</span>
            </h3>

            <h2 className="card-list__title container">Estoy aquí para ayudarte. <br/>
                    <span className="bold-title">Tú decides como.</span>
                </h2>

            <ul className="card-list__container container">

            {
            therapies.map((cardObject) =>
            <li className="card-object"
                key={cardObject.id}>
                     <Link to={`/therapies/${cardObject.id}`}>
                        <Card
                                icon={cardObject.icon}
                                title={cardObject.title}
                                text={cardObject.text}
                                price={cardObject.price}
                                how={cardObject.details.how}
                                time={cardObject.details.time}
                                include={cardObject.details.include}
                                perfect={cardObject.details.perfect}
                                need={cardObject.details.need}
                                slogan={cardObject.slogan}
                        />
                    </Link>
             </li>
            )}
         </ul>




              </>  
        );
    
}

export default CardList;