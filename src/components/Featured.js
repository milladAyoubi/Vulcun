import React from 'react'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {BiTime} from 'react-icons/bi'

const Featured = () => {
  return (
    <section className='bg-white section'>
    <div className="flex  items-center justify-center gap-12 m-auto lg:w-[1200px] overflow-none ">
   
      <div
        className="bg-boxing rounded-xl relative flex items-end justify-center w-[33.33%] h-[460px] bg-cover bg-center overflow-none hover:scale-105 transition"
      >
        <div className=' -z-1 w-[100%] h-[100%] hover:bg-black/30 transition rounded-xl'>
        
        <div className="absolute bottom-0 left-0 p-8">
            <div className='mb-4'>
          <h2 className="text-white mb-2 lg:text-2xl font-bold">Boxing</h2>
          
        <div className='flex items-center gap-2'>
          <MdOutlineAccountCircle/>
          <p>Victor Val</p>
        </div>

        <div className='flex items-center gap-2'>
          <BiTime/>
          <p>Thu: 9:30 AM | 1:30h</p>
        </div>
        </div>
          <button className='btn h-[52px]  text-base px-8 font-semibold m-auto text-white'>Book Classes</button>

        </div>
        </div>
      </div>
    
      
      
      <div
        className="bg-boxing rounded-xl relative flex items-end justify-center w-[33.33%] h-[460px] bg-cover bg-center overflow-none hover:scale-105 transition"
      >
        <div className=' -z-1 w-[100%] h-[100%] hover:bg-black/30 transition rounded-xl'>
        
        <div className="absolute bottom-0 left-0 p-8">
            <div className='mb-4'>
          <h2 className="text-white mb-2 lg:text-2xl font-bold">Boxing</h2>
          
        <div className='flex items-center gap-2'>
          <MdOutlineAccountCircle/>
          <p>Victor Val</p>
        </div>

        <div className='flex items-center gap-2'>
          <BiTime/>
          <p>Thu: 9:30 AM | 1:30h</p>
        </div>
        </div>
          <button className='btn h-[52px]  text-base px-8 font-semibold m-auto text-white'>Book Classes</button>

        </div>
        </div>
      </div>
      
      
      <div
        className="bg-boxing rounded-xl relative flex items-end justify-center w-[33.33%] h-[460px] bg-cover bg-center overflow-none hover:scale-105 transition"
      >
        <div className=' -z-1 w-[100%] h-[100%] hover:bg-black/30 transition rounded-xl'>
        
        <div className="absolute bottom-0 left-0 p-8">
            <div className='mb-4'>
          <h2 className="text-white mb-2 lg:text-2xl font-bold">Boxing</h2>
          
        <div className='flex items-center gap-2'>
          <MdOutlineAccountCircle/>
          <p>Victor Val</p>
        </div>

        <div className='flex items-center gap-2'>
          <BiTime/>
          <p>Thu: 9:30 AM | 1:30h</p>
        </div>
        </div>
          <button className='btn h-[52px]  text-base px-8 font-semibold m-auto text-white'>Book Classes</button>

        </div>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Featured
