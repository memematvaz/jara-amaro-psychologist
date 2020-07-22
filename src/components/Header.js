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
            <nav>
                <div className="header--menu">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    
                        <ul className="header--menu-list">
                            <li>Consultas</li>
                            <li>Testimonios</li>
                            <li>Contacto</li>
                            <li>Sobre mí</li>
                        


                        </ul>
                    

                </div>
            </nav>




            
        </header>
    );
};

export default Header;