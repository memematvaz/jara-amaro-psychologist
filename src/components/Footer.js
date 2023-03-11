import React from 'react';
import logoInverted from '../images/logo-white.png'
import { Link } from 'react-router-dom';

import linkedin from '../images/linkedin.png'
import doctoralia from '../images/doctoralia.png'
import mundopsicologos from '../images/mundopsicologos.png'
import twitter from '../images/twitter.png'

const Footer = () => {

    return (
        <footer className="footer">
           
            <div className="footer__logo-rrss-container">
                <Link className="link" to="/">
                <div className="footer__logo-container">
                    <div className="footer__logo-image-container container">
                        <img src={ logoInverted } alt="logo Jara Amaro psicóloga"></img>
                    </div>
                    {/* <h1 className="footer__logo-title">Jara Amaro<br/>
                                                        psicóloga</h1> */}
                </div>
                </Link>
                <nav>
                    <ul className="footer-rrss">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jara-amaro"> <img className="footer__logo-linkedin" src={ linkedin } alt="linkedin"></img></a></li>
                            
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.doctoralia.es/jara-amaro-mazaira/psicologo/vigo"><img className="footer__logo-doctoralia" src={ doctoralia } alt="doctoralia"></img></a></li>
                        
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.mundopsicologos.com/centros/centro-de-psicologia-jara-amaro"><img className="footer__logo-mundopsicologos" src={ mundopsicologos } alt="mundo psicólogos"></img></a></li>

                            <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/MazairaJara"><img className="footer__logo-twitter" src={ twitter } alt="twitter"></img></a></li>
                        
                    </ul>
                </nav>
            </div>

            <small className="footer__workers">
                <div className="footer__data-list">
                    <Link className="link" to="/aviso-legal-profesional">
                        <p>Aviso legal actividad profesional reglada</p>
                    </Link>
                    <Link className="link" to="/politica-privacidad">
                        <p>Política de privacidad</p>
                    </Link>
                    <Link className="link" to="/politica-privacidad-redes-sociales">
                        <p>Política de redes sociales</p>
                    </Link>
                    <Link className="link" to="/politica-cookies">
                        <p>Política de cookies</p>
                    </Link>   
                </div>
                <div className="footer__workers-list">
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maria-mateo-vazquez/">Diseño y desarrollo web María Mateo</a></p>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anaamarovazquez/">Redes sociales Ana Amaro</a></p>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sandra-garc%C3%ADa-moreno-45a811176/">Copywriter Sandra García</a></p>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sara_m.lo.photo/">Fotografía Sara M</a></p>
                </div>
            </small> 
        </footer>
    );


};

export default Footer;