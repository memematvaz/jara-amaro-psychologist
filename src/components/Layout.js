import React from 'react';
import Header from '../components/Header';  
import Footer from '../components/Footer';  
import Banner from '../components/Banner';  

//This component makes Header and footer repeat into all the project

const Layout = ({children}) =>  (
    <div className="Home">
        <Header/>
        { children }
        <Footer/>
        <Banner/>
    </div>
)

export default Layout;