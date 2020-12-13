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
        <p>Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al
ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas
imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo
caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la
sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se
utilizarán para la recogida de los mismos. Más información en  <Link className="link" to="/politica-cookies">Política de cookies.</Link></p><button onClick={ closeBanner }>Aceptar</button>
        <div className="warnings">
            <Link className="link" to="/aviso-legal-profesional">
                <p>Aviso legal actividad profesional reglada.</p>
            </Link>
            <Link className="link" to="/politica-privacidad">
                            <p>Política de privacidad</p>
            </Link>
        </div>
         
       
    
    </div>

  )
}

export default Banner;