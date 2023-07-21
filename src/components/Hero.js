import React from 'react';
import Header from './Header';
import heroText from '../assets/img/hero-text.svg'
import {FaPlay} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
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
      <div className="content relative bottom-24 text-white text-center flex flex-col items-center gap-0">
<h1 className='text-[22px] font-semibold sub-title'>This Summer</h1>
<h1 className='text-[32px] lg:text-[72px] font-semibold leading-tight mb-6 w-[1200px]'>STRIVE FOR FITNESS EXCELLENCE</h1>        

<div className='flex flex-col  lg:flex-row gap-2 '>
        <button className=' h-[52px] text-[12px] font-semibold flex flex-col  items-center cursor-pointer '>
          <span className='bg-yellow-600/80 transition   items-center flex justify-center p-5 rounded-full relative bottom-4 play-button'>
          <FaPlay className="text-xl lg:text-xl text-white opacity-90  m-auto "/>
          </span>
          <span className='cursor-pointer relative bottom-5'>VIEW FREE TRIAL</span></button>
        </div>
      </div>
    </div>
    <div className='flex flex-col bg-white h-[auto] w-[50px] rounded-full fixed top-[35%] right-8 shadow-lg items-center gap-4 py-4 z-10'>
<a href="#"><AiFillInstagram className="text-2xl lg:text-3xl text-black/90 hover:text-black/80 transition"/></a>
<a href="#"><FaTiktok className="text-2xl lg:text-2xl text-black/90 hover:text-black/80 transition"/></a>
<a href="#"><BsFacebook className="text-2xl lg:text-2xl text-black/90 hover:text-black/80 transition"/></a>
  </div>
  </section>) ;
};

export default Hero;
