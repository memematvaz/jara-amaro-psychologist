import React from 'react';
import '../styles/main.scss';

import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Cardlist from './Cardlist';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Contact from './Contact';


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

                            <Cardlist/>

                            <Footer/>
                        </Route>

                        <Route exact path="/about-me">
                                    <Aboutme/>
                        </Route>    

                        <Route exact path="/contact">
                                    <Contact/>
                        </Route> 





                    </Switch>
                </Router>
            </div>
    )};
  




export default App;