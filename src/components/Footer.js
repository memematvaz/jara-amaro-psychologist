import React from 'react';
import logoInverted from '../images/logo-white.png'
import { Link } from 'react-router-dom';


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
                    <ul className="header__menu-list">
                            <li><a href="https://www.linkedin.com/in/jara-amaro-mazaira-791b17108/">Linkedin</a></li>
                            
                            <li><a href="https://www.doctoralia.es/jara-amaro-mazaira/psicologo/vigo">Doctoralia</a></li>
                        
                            <li><a href="https://www.mundopsicologos.com/centros/centro-de-psicologia-jara-amaro">Mundo psicólogos</a></li>
                        
                    </ul>
                </nav>
            </div>
            
            <nav>
                <ul className="footer__menu-list">
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
            <div>
                <p>Desarrollo web <a href="https://www.linkedin.com/in/jara-amaro-mazaira-791b17108/">María Mateo</a></p>
                <p>Redes sociales <a href="https://www.linkedin.com/in/anaamarovazquez/">Ana Amaro</a></p>
                <p>Copywriter <a href="https://www.linkedin.com/in/sandra-garc%C3%ADa-moreno-45a811176/">Sandra García</a></p>
                <p>Fotografía <a href="https://www.instagram.com/sara_m.lo.photo/">Sara M</a></p>

            </div> 
        </footer>
    );


};

export default Footer;