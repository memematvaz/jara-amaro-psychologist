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


import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


  const App = () => {


    return ( 
            <div className = "App" >
                <Router>
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

                        <Route exact path="/aboutme">
                                    <Header/>
                                    <Aboutme/>
                                    <Footer/>
                        </Route>    

                        <Route exact path="/contact">
                                    <Header/>
                                    <Contact/>
                                    <Footer/>
                        </Route> 

                        <Route exact path="/testimonies">
                                    <Header/>
                                    <Testimonies/>
                                    <Footer/>
                        </Route> 



                    </Switch>
                </Router>
            </div>
    )};
  




export default App;