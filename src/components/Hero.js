import React from 'react';
import Header from './Header';
import heroText from '../assets/img/hero-text.svg'
import {FaPlay} from 'react-icons/fa';


import  { useState } from 'react';


const Hero = () => {

  const [navMobile, setNavMobile] = useState(false);
  return (
  <section id="hero">
  
      
        <div className="hero flex items-center justify-center h-screen max-h-[970px]">
      <video className="video absolute top-0 left-0 w-full h-[1080px] object-cover -z-10" autoPlay loop muted>
        <source src={require('../assets/img/hero-video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content relative bottom-24 text-white text-center flex flex-col items-center gap-4">

<h1 className='text-[32px] lg:text-[58px] font-light leading-tight mb-6 w-[1200px]'>`THIS SUMMER STRIVE FOR FITNESS EXCELLENCE</h1>        

<div className='flex flex-col  lg:flex-row gap-8'>
        <button className='bg-white transition hover:bg-transparent hover:text-white border-2 border-white text-black/80 h-[58px] text-base px-14 font-semibold  '>Book Classes</button>
        <button className=' h-[52px] text-base px- font-semibold flex gap-3 relative top-4 '>
          <span className='bg-white/20 transition hover:bg-white/30 items-center flex justify-center p-4 rounded-full relative bottom-4'>
          <FaPlay className="text-xl lg:text-2xl  m-auto"/>
          </span>
          View Free Trial</button>
        </div>
      </div>
    </div>

  </section>) ;
};

export default Hero;
