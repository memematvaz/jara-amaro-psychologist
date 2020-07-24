import React from 'react';
import '../styles/main.scss';

import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {


        }
    }



    
    render() {
      
        return (

            <div className = "App" >
                <Header/>

                <Hero/>

                <Main/>

                <Footer/>
            </div>
        );
    }

}


export default App;