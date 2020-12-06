import React from 'react';
import '../styles/main.scss';

import Hero from './Hero';
import Main from './Main';
import Cardlist from './Cardlist';
import Aboutmehome from './Aboutmehome';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Testimonies from './Testimonies';
import Linktocontact from './Linktocontact';
import ScrollToTop from './ScrollToTop';
import LegalWarningProfessional from './legal/LegalWarningProfessional';
import PrivacyPolicy from './legal/PrivacyPolicy';
import CookiePolicy from './legal/CookiePolicy';
import Layout from './Layout';
import PrivacyPolicySocial from './legal/PrivacyPolicySocial';
import { Route, Switch } from 'react-router-dom';

 

  const App = (props) => {


    return ( 
        <div className = "App" >
                <ScrollToTop/>
                <Layout>
                <Switch>
                    <Route exact path="/">
                        <Hero />
                        <Main/>
                        <div className="card-list__pc-background-container">  
                            <Cardlist/>
                            <Aboutmehome/>
                        </div> 
                    </Route>
                    <Route exact path="/sobre-mi">
                        <Aboutme/>
                    </Route>    
                    <Route exact path="/contacto">
                        <Contact/>
                    </Route> 
                    <Route exact path="/testimonios">
                        <Testimonies/>
                    </Route> 
                    <Route exact path="/consultas">
                        <div className="card-list__pc-background-container__another-page">
                            <Cardlist/>
                            <Linktocontact/>
                        </div>
                    </Route> 
                    <Route exact path="/aviso-legal-profesional">
                        <LegalWarningProfessional/>
                    </Route> 
                    <Route exact path="/politica-privacidad">
                        <PrivacyPolicy/>
                    </Route>
                    <Route exact path="/politica-privacidad-redes-sociales">
                        <PrivacyPolicySocial/>
                    </Route>
                    <Route exact path="/politica-cookies">
                        <CookiePolicy/>
                    </Route>  
                </Switch>
                </Layout>
        </div>
    )};

export default App;