import React from 'react';
import logo from '../images/logo192.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
             <Link className="link" to="/">
                <div className="header__logo-container">
                    <div className="header__logo-image-container container">
                        <img src={ logo } alt="logo Jara Amaro psicóloga"></img>
                    </div>
                    <h1 className="header__logo-title">Jara Amaro<br/>
                                                        psicóloga</h1>
                </div>
            </Link>
            <nav>
                <div className={ isMenuOpen }>
                    <div className="header__hamburger-container" onClick={ toggleMenu }>
                        <span className="header__first-bar"></span>
                        <span className="header__second-bar"></span>
                        <span className="header__third-bar"></span>
                    </div>
                        <ul className="header__menu-list">
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
                </div>
            </nav>




            
        </header>
    );
};

export default Header;