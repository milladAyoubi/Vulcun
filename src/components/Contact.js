import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <div className="bg-contact lg:w-[100%] lg:h-[600px]">
     
      </div>

      <div className='flex flex-row '>


      <div className="lg:w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <div className="mt-8">
            <p className="text-lg text-gray-700">123 Main Street</p>
            <p className="text-lg text-gray-700">City, State 12345</p>
            <p className="text-lg text-gray-700">Phone: (123) 456-7890</p>
            <p className="text-lg text-gray-700">Email: info@example.com</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 bg-white gray-100 flex items-center justify-center">
        <div className="max-w-md py-8 px-4 sm:px-6 lg:px-8">
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
   
  );
};

export default Contact;
