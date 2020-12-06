import React from 'react';
import logo from '../images/logo192.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

    
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
                <div className="header__logo-container" id="returnHome">
                    
                    <div className="header__logo-image-container">
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
                            <Link className="link" to="/">
                                <li onClick={ toggleMenu }>Inicio</li>
                            </Link>
                            <Link className="link" to="/consultas">
                            <li onClick={ toggleMenu }>Consultas</li>
                            </Link>
                            <Link className="link" to="/testimonios">
                                <li onClick={ toggleMenu }>Testimonios</li>
                            </Link>
                            <Link className="link" to="/contacto">
                                <li onClick={ toggleMenu }>Contacto</li>
                            </Link>
                            <Link className="link" to="/sobre-mi">
                                <li onClick={ toggleMenu }>Sobre mí</li>
                            </Link>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://jaraamaropsicologa.wordpress.com/blog/">Blog</a></li>
                        </ul>                    
                </div>
            </nav>
            <nav className="header__nav-tablet">
                        <ul className="header__menu-list">
                            <Link className="link" to="/">
                                <li>Inicio</li>
                            </Link>
                            <Link className="link" to="/consultas">
                            <li>Consultas</li>
                            </Link>
                            <Link className="link" to="/testimonios">
                                <li>Testimonios</li>
                            </Link>
                            <Link className="link" to="/contacto">
                                <li>Contacto</li>
                            </Link>
                            <Link className="link" to="/sobre-mi">
                                <li>Sobre mí</li>
                            </Link>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://jaraamaropsicologa.wordpress.com/blog/">Blog</a></li>
                        </ul>                    
            </nav>



            
        </header>
    );
};

export default Header;