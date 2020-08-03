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

import { Route, Switch } from 'react-router-dom';


  const App = () => {


    return ( 
            <div className = "App" >

                    <Switch>
                        <Route exact path="/">
                            <Header/>

                            <Hero/>

                            <Main/>
                            <div className="card-list__pc-background-container">  
                                <Cardlist/>

                                <Aboutmehome/>
                            </div> 
                            <Footer/>
                       
                        </Route>

                        <Route exact path="/sobre-mi">
                                    <Header/>
                                    <Aboutme/>
                                    <Footer/>
                        </Route>    

                        <Route exact path="/contacto">
                                    <Header/>
                                    <Contact/>
                                    <Footer/>
                        </Route> 

                        <Route exact path="/testimonios">
                                    <Header/>
                                    <Testimonies/>
                                    <Footer/>
                        </Route> 

                        <Route exact path="/consultas">
                                    <Header/>
                                    <div className="card-list__pc-background-container__another-page">
                                        <Cardlist/>
                                        <Linktocontact/>
                                    </div>
                                    <Footer/>
                        </Route> 

                    </Switch>
  
            </div>
    )};
  




export default App;