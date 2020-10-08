import React from 'react';
import '../styles/main.scss';

import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Cardlist from './Cardlist';
import Aboutmehome from './Aboutmehome';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Testimonies from './Testimonies';
import Linktocontact from './Linktocontact';
import ScrollToTop from './ScrollToTop';
import Banner from './Banner'
import LegalWarningProfessional from './legal/LegalWarningProfessional';
import PrivacyPolicy from './legal/PrivacyPolicy';
import CookiePolicy from './legal/CookiePolicy';
import PrivacyPolicySocial from './legal/PrivacyPolicySocial';
import { Route, Switch } from 'react-router-dom';

 

  const App = (props) => {


    return ( 
        <div className = "App" >
                <ScrollToTop/>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Hero />
                        <Main/>
                        <div className="card-list__pc-background-container">  
                            <Cardlist/>
                            <Aboutmehome/>
                        </div> 
                        <Footer/>
                        <Banner/>   
                    </Route>
                    <Route exact path="/sobre-mi">
                        <Header />
                        <Aboutme/>
                        <Footer/>
                        <Banner/>
                    </Route>    
                    <Route exact path="/contacto">
                        <Header />
                        <Contact/>
                        <Footer/>
                        <Banner/>
                    </Route> 
                    <Route exact path="/testimonios">
                        <Header />
                        <Testimonies/>
                        <Footer/>
                        <Banner/>
                    </Route> 
                    <Route exact path="/consultas">
                        <Header />
                        <div className="card-list__pc-background-container__another-page">
                            <Cardlist/>
                            <Linktocontact/>
                        </div>
                        <Footer/>
                        <Banner/>
                    </Route> 
                    <Route exact path="/aviso-legal-profesional">
                        <Header />
                        <LegalWarningProfessional/>
                        <Footer/>
                        <Banner/>
                    </Route> 
                    <Route exact path="/politica-privacidad">
                        <Header />
                        <PrivacyPolicy/>
                        <Footer/>
                        <Banner/>
                    </Route>
                    <Route exact path="/politica-privacidad-redes-sociales">
                        <Header />
                        <PrivacyPolicySocial/>
                        <Footer/>
                        <Banner/>
                    </Route>
                    <Route exact path="/politica-cookies">
                        <Header />
                        <CookiePolicy/>
                        <Footer/>
                        <Banner/>
                    </Route>  
                </Switch>
        </div>
    )};

export default App;