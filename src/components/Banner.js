import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {

    const [isBannerOpen, setIsBannerOpen] = useState("banner__container");
    
    const toggleBanner = () => {
        if (isBannerOpen === "banner__container"){
            setIsBannerOpen("banner__container--open")
        } else {
            setIsBannerOpen("banner__container")
        }
    }


  return (
    <div className={ isBannerOpen }>
        <h5>Uso de Cookies</h5>
        <p>
            <Link className="link" to="/politica-de-cookies">
                <span></span>
            </Link>
        </p>
        <button>Aceptar</button>
    
    </div>

  )
}

export default Banner;