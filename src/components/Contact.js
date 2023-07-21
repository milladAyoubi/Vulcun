import React, {useState} from 'react';
import Footer from './Footer';
import {FaFacebookF, FaTiktok, FaInstagram} from 'react-icons/fa'
import Header from './Header';


const Contact = () => {

  const [navMobile, setNavMobile] = useState(false);

  return (

    <div className = "overflow-hidden" >
    <Header setNavMobile = { setNavMobile } className = "lg:fixed"/>
    <div>
      <div className="bg-contact lg:w-[100%] lg:h-[600px]">
     
      </div>

      <div className='flex flex-row '>


      <div className="lg:w-1/2 bg-white flex flex-col items-center justify-center">

        <div className="max-w-2xl py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <div className="mt-8">
            <p className="text-lg text-gray-700">At Gymate, we are dedicated to helping you 
            achieve the body of your dreams. Our expert trainers and nutritionists will work with 
            you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
          
          </div>

        </div>

        <div className="max-w-2xl py-8 px-4 sm:px-6 lg:px-8 flex items-start gap-16 items-start w-[100%]">
        <div>
         <h3 className="text-2xl font-semibold text-gray-800">New York City, USA</h3>
         <div>
          <p className="text-lg text-gray-700">85 Briston Mint Street,</p>
          <p className="text-lg text-gray-700">London, E1 8LG, USA</p>
          </div>
        </div>

        <div>
         <h3 className="text-2xl font-semibold text-gray-800">Opening Hours</h3>
         <div>
          <p className="text-lg text-gray-700">Mon to Fri: 7:30 am — 1:00 am</p>
          <p className="text-lg text-gray-700">Mon to Fri: 7:30 am — 1:00 am</p>
          </div>
        </div>

        
        </div>


        <div className="max-w-2xl py-8 px-4 sm:px-6 lg:px-8 flex items-start gap-16 items-start w-[100%]">
        <div>
         <h3 className="text-2xl font-semibold text-gray-800">Information</h3>
         <div>
          <p className="text-lg text-gray-700">+800-123-4567</p>
          <p className="text-lg text-gray-700">gymat@gymail.com</p>
          </div>
        </div>

        <div>
         <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
         <div className='text-[18px] font-medium text-black flex gap-5 mt-2'>
          <FaFacebookF className="text-xl lg:text-xl bg-black/10 w-[35px] h-[35px] hover:bg-yellow-600/60 hover:text-white transition p-2 rounded-sm text-black opacity-90  m-auto"/>
          <FaTiktok className="text-xl lg:text-xl bg-black/10 w-[35px] h-[35px] hover:bg-yellow-600/60 hover:text-white transition p-2 rounded-sm text-black opacity-90  m-auto"/>
          <FaInstagram className="text-xl lg:text-xl bg-black/10 w-[35px] h-[35px] hover:bg-yellow-600/60 hover:text-white transition p-2 rounded-sm text-black opacity-90  m-auto"/>


          </div>
        </div>

        
        </div>
        </div>
    

      <div className="lg:w-1/2 bg-white gray-100 flex items-center justify-center">
        <div className="max-w-md w-[100%] py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <div className="mt-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      </div>
      <Footer/>
    </div>
    </div>
   
  );
};

export default Contact;
