import React, { useState } from 'react';
import { BrowserRouter as Switch, Routes, Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'



import Home from './components/Home';
import Contact from './components/Contact';



const App = () => {

    const [navMobile, setNavMobile] = useState(false);
    // eslint-disable-next-line no-undef
    useEffect(() => {
        Aos.init({
            duration: 2500,
            delay: 400,
        })
    })

    return (
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
     
 
    );
};

export default App;