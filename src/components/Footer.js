import React from 'react';
import logoInverted from '../images/logo-white.png'
import { Link } from 'react-router-dom';

import linkedin from '../images/linkedin.png'
import doctoralia from '../images/doctoralia.png'
import mundopsicologos from '../images/mundopsicologos.png'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__logo-rrss-container">
                <Link className="link" to="/">
                <div className="footer__logo-container">
                    <div className="footer__logo-image-container container">
                        <img src={ logoInverted } alt="logo Jara Amaro psicóloga"></img>
                    </div>
                    <h1 className="footer__logo-title">Jara Amaro<br/>
                                                        psicóloga</h1>
                </div>
                </Link>
                <nav>
                    <ul className="footer-rrss">
                            <li><a href="https://www.linkedin.com/in/jara-amaro-mazaira-791b17108/"> <img className="footer__logo-linkedin" src={ linkedin } alt="linkedin"></img></a></li>
                            
                            <li><a href="https://www.doctoralia.es/jara-amaro-mazaira/psicologo/vigo"><img className="footer__logo-doctoralia" src={ doctoralia } alt="doctoralia"></img></a></li>
                        
                            <li><a href="https://www.mundopsicologos.com/centros/centro-de-psicologia-jara-amaro"><img className="footer__logo-mundopsicologos" src={ mundopsicologos } alt="mundo psicólogos"></img></a></li>
                        
                    </ul>
                </nav>
            </div>
            
            <nav>
                <ul className="footer__menu-list container">
                    <li>Consultas</li>
                    <Link className="link" to="/testimonies">
                        <li>Testimonios</li>
                    </Link>
                    <Link className="link" to="/contact">
                        <li>Contacto</li>
                    </Link>
                    <Link className="link" to="/aboutme">
                        <li>Sobre mí</li>
                    </Link>
                    <li>Blog</li>
                </ul>
            </nav>
            <div className="footer__workers-list container">
                <p><a href="https://www.linkedin.com/in/maria-mateo-vazquez/">Desarrollo web María Mateo</a></p>
                <p><a href="https://www.linkedin.com/in/anaamarovazquez/">Redes sociales Ana Amaro</a></p>
                <p><a href="https://www.linkedin.com/in/sandra-garc%C3%ADa-moreno-45a811176/">Copywriter Sandra García</a></p>
                <p><a href="https://www.instagram.com/sara_m.lo.photo/">Fotografía Sara M</a></p>

            </div> 
        </footer>
    );


};

export default Footer;