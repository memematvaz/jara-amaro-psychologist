
import React from 'react';
import THERAPIES from './services/TherapiesJSON';
import Card from './Card'

const CardList = (props) => {
    const therapies = THERAPIES;

      
        return ( 
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
                     how={cardObject.text.details.how}
                     time={cardObject.text.details.time}
                     include={cardObject.text.details.include}
                     perfect={cardObject.text.details.perfect}
                     need={cardObject.text.details.need}
                     slogan={cardObject.slogan}
             />
             </li>
            )}
         </ul>
                
        );
    
}

export default CardList;