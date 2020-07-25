
import React from 'react';
import THERAPIES from './services/TherapiesJSON';
import Card from './Card'

const CardList = (props) => {
    const therapies = THERAPIES;

      
        return ( 
            <>
            <h3 className="card-list__introduction">¿No te parece que necesitas sentirte mejor y recuperar tu vida?<br/>
            <span className="bold-title">Tu problema tiene solución y está más cerca de lo que piensas.></span></h3>

            <ul className="card-list__container">

            {
            therapies.map((cardObject) =>
            <li className="card-object"
                key={cardObject.id}>
            <Card
                     icon={cardObject.icon}
                     title={cardObject.title}
                     text={cardObject.text.main}
                     price={cardObject.price}
                     how={cardObject.details.how}
                     time={cardObject.details.time}
                     include={cardObject.details.include}
                     perfect={cardObject.details.perfect}
                     need={cardObject.details.need}
                     slogan={cardObject.slogan}
             />
             </li>
            )}
         </ul>
              </>  
        );
    
}

export default CardList;