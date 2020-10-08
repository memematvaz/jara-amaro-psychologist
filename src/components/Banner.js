import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [isBannerOpen, setIsBannerOpen] = useState("banner--open");
    
    const closeBanner = () => {
        if (isBannerOpen === "banner--open"){
            setIsBannerOpen("banner--close")
        } else {
            setIsBannerOpen("banner--close")
        }
    }


  return (
    <div className={ isBannerOpen }>
        <p>Esta web utiliza cookies técnicas y funcionales. Más información en  <Link className="link" to="/politica-cookies">Política de cookies.</Link></p>
        <button onClick={ closeBanner }>Aceptar</button>
    
    </div>

  )
}

export default Banner;