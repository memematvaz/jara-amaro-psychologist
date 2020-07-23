import React from 'react';
import logo from '../images/logo192.png'
import { useState } from 'react';

const Header = () => {

    
    const [isMenuOpen, setIsMenuOpen] = useState("header__hamburger-close");
    
    const toggleMenu = () => {
        if (isMenuOpen === "header__hamburger-close"){
            setIsMenuOpen("header__hamburger-open")
        } else {
            setIsMenuOpen("header__hamburger-close")
        }
    }
    

    return (
        <header className="header">
            <div className="header__logo-container">
                <div className="header__logo-image-container container">
                    <img src={ logo } alt="logo Jara Amaro psicóloga"></img>
                </div>
                <h1 className="header__logo-title">Jara Amaro<br/>
                                                    psicóloga</h1>
            </div>
            <nav>
                <div className={ isMenuOpen }
             
                 onClick={ toggleMenu }>

                    <span></span>
                    <span></span>
                    <span></span>

                        <ul className="header__menu-list">
                            <li>Consultas</li>
                            <li>Testimonios</li>
                            <li>Contacto</li>
                            <li>Sobre mí</li>
                            <li>Blog</li>
                        </ul>                    
                </div>
            </nav>




            
        </header>
    );
};
//() => setIsMenuOpen("header__hamburger-open")
export default Header;