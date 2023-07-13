import React, { useState } from 'react';


import Header from './Header';
import Hero from './Hero';
import Footer from './Footer'
import NavMobile from './NavMobile';
import Classes from './Classes'
import About from './About'
import Featured from './Featured';
import Why from './Why';

const Home = () => {
    const [navMobile, setNavMobile] = useState(false);
  return (
     
    <div className = "overflow-hidden" >
    <Header setNavMobile = { setNavMobile }
    className = "lg:fixed"/>

    <Hero/>
    <About/>
    <Classes/>
    <Why/>
    <Featured/>

    <div className = { `${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200` }>
    <NavMobile setNavMobile = { setNavMobile }/> 
    </div>
    <Footer/>
  </div>

  )
}

export default Home
