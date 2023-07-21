import React, { useState } from 'react';
import { Box } from '@mui/material';


import Header from './Header';
import Hero from './Hero';
import Footer from './Footer'
import NavMobile from './NavMobile';
import Classes from './Classes'
import About from './About'
import Featured from './Featured';
import Why from './Why';
import SearchExercises from './SearchExercises';
import Exercises from './Excercises';

const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('back');
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
     {/*<SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}  /> */}

    <div className = { `${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200` }>
    <NavMobile setNavMobile = { setNavMobile }/> 
    </div>
    <Footer/>
  </div>

  )
}

export default Home
