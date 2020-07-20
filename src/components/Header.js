import React from 'react';
import logo from '../images/logo192.png'

const Header = () => {

    return (
        <header className="header">
            <div className="header--logo-container">
                <div className="header--logo-image-container container">
                    <img src={logo} alt="logo Jara Amaro psicóloga"></img>
                </div>
                <h1 className="header--logo-title">Jara Amaro<br/>
                                                    psicóloga</h1>
            </div>
            <div className="header--menu">
               <i class="fas fa-bars container"></i>
                <nav>
                    <ul>
                        <li>Consultas</li>
                        <li>Testimonios</li>
                        <li>Contacto</li>
                        <li>Sobre mí</li>
                       


                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;