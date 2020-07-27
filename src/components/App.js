import React from 'react';
import '../styles/main.scss';

import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Cardlist from './Cardlist';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Contact from './Contact';

import THERAPIES from './services/TherapiesJSON';
import Carddetails from './Carddetails'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { useState } from 'react';


  const App = () => {

    const therapies = THERAPIES;

    const [isCardOpen, setIsCardOpen] = useState("card-details__container-close");
    
    const toggleCard = () => {
        if (isCardOpen === "card-details__container-close"){
            setIsCardOpen("card-details__container-open")
        } else {
            setIsCardOpen("card-details__container-close")
        }
    }

    const renderTherapiesDetails = (props) => {
        const routeId = therapies.id;
        for(let therapy of therapies) {
          if(therapies.id === routeId) {
            return (
                <div className={ isCardOpen }
                     onClick={ toggleCard }>
                        <Carddetails cardObject={therapy}/>
                </div>
            )
          }
        }
    }


    return ( 
            <div className = "App" >
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Header/>

                            <Hero/>

                            <Main/>

                            <Cardlist/>


                                    <Carddetails/> 
                        

                            <Footer/>
                        </Route>

                        <Route path="/therapies/:id" render={renderTherapiesDetails}/>

                        <Route exact path="/about-me">
                                    <Aboutme/>
                        </Route>   
                                
                        <Route exact path="/therapies">
                                    <Cardlist/>
                        </Route> 

                        <Route exact path="/contact">
                                    <Contact/>
                        </Route> 





                    </Switch>
                </Router>
            </div>
    )};
  




export default App;