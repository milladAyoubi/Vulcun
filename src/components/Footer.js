import React from 'react';
import Logo from '../assets/img/Logo.svg'
import VisaImg from '../assets/img/visa.png'
import masterImg from '../assets/img/mastercard.png'
import bitImg from '../assets/img/bitcoin.png'

import {IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io'

const Footer = () => {
    return (

        <footer className='lg:pt-24 pt-0 bg-darkblue-100'>
            <div className='container mx-auto lg:mb-24'>
                 <div className='flex flex-col gap-12 lg:flex-row'>
                    <div className='flex-1 mx-auto mt-20 lg:mx-0 mb-6 max-w-[285px]'>
                        <a href="#">
                            <img src={Logo} alt="" />
                        </a>
                    </div>

                    <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
                        <div className='text-center w-full lg:text-left'>
                            <div className='text-xl font-medium mb-6'>Quick Links</div>
                            <ul className='space-y-4 text-grey'>
                                <li><a className='hover:text-blue transition ' href="#">Home</a></li>
                                <li><a className='hover:text-blue transition 'href="#">Products</a></li>
                                <li><a className='hover:text-blue transition 'href="#">Features</a></li>
                                <li><a className='hover:text-blue transition ' href="#">About</a></li>
                                <li><a className='hover:text-blue transition 'href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className='text-center w-full lg:text-left'>
                            <div className='text-xl font-medium mb-6'>Resources Links</div>
                            <ul className='space-y-4 text-grey'>
                                <li><a className='hover:text-blue transition ' href="#">Privacy Policy</a></li>
                                <li><a className='hover:text-blue transition 'href="#">Data & Services</a></li>
                                <li><a className='hover:text-blue transition 'href="#">Brand Center</a></li>
                                <li><a className='hover:text-blue transition ' href="#">Marketing Information</a></li>
                                <li><a className='hover:text-blue transition 'href="#">Incetives & Benifets</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <div className='lg:ml-[80px]'>
                            <h3 className='h3 font-medium text-center mb-10 lg:text-left'>We Support the following payment systems</h3>
                            <div className='flex justify-center items-center gap-6'>
                                <img src={VisaImg} alt="" />
                                <img src={masterImg} alt="" />
                                <img src={bitImg} alt="" />
                            </div>
                        </div>
                    </div>

                   
                 </div>
             
            </div>
            <div className='py-10'>
                <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
                    <div>&copy; 2023 Artemis. All Rights Reserced.</div>
                    <div className='flex text-2xl gap-x-8'>
                        <a href="#" className='hover:text-blue transition'>
                            <IoLogoYoutube/>
                        </a>
                        <a href="#" className='hover:text-blue transition'>
                            <IoLogoInstagram/>
                        </a>
                        <a href="#" className='hover:text-blue transition'>
                            <IoLogoTwitter/>
                        </a>
                        <a href="#" className='hover:text-blue transition'>
                            <IoLogoLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
            
        </footer>

    );
};

export default Footer;