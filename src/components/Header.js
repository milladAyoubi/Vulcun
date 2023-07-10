import React from 'react';

import Logo from '../assets/img/Logo.svg'
import Nav from './Nav'
import AccountBtns from './AccountBtns'

import { CgMenuRight } from 'react-icons/cg'

const Header = ( {setNavMobile} ) => {
    return (
      <header className='py-[30px] lg;pt-[60px] ' data-aos="fade-down" data-aos-delay="300" data-aos-duration="500">
      <div className='container mx-auto flex items-center justify-between'> 
     

      <div className='hidden lg:flex gap-x-[55px]'>
        <Nav/>
        

      </div>

      <a href="#" className='mx-4'>
        <img src={Logo} alt="" className='w-[160px]'/>
      </a>

      <AccountBtns/>

      <div onClick={()=> setNavMobile(true)} className='lg:hidden cursor-pointer'>
        <CgMenuRight className='text-2xl'/>
      </div>

      </div>
      </header>
    
    
       
  );
};

export default Header;