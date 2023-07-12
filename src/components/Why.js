import React from 'react'
import Circle1 from '../assets/img/about-circle-one.png'
import Circle2 from '../assets/img/about-circle-two.png'
import whyImage from '../assets/img/why-image.jpg'
import victorImg from '../assets/img/victor.png'

const Why = () => {
  return (
    <section className=' bg-pattern section'>
    <div className='flex flex-col lg:flex-row items-center gap-8 justify-center m-auto lg:w-[1200px] overflow-none h-[500px]'>
      


       <div className='lg:w-[600px] flex flex-col gap-4 text-black/90 items-center lg:items-start'>
        <p className='bg-yellow-600/20 text-yellow-600 py-2 px-5 w-[116px] rounded-full font-semibold'>About Us</p>
       <h2 className="lg:text-[32px] font-extrabold lg:w-[400px] ">START YOUR FITNESS JOURNEY WITH US</h2>
               
               <p>With a variety of workouts to choose from, 
                  you'll have everything you need to get into the 
                  best shape of your life.</p>
                  <div className='flex flex-col lg:flex-row gap-6 flex-start mt-2'>
                  <div className='flex gap-4'>
                        <img src={victorImg} alt="" className='rounded-full border-2 border-black/10 h-[60px] w-[60px]'/>

                        <div >
                           <h3>"Overcome Yourself Today"</h3>
                           <p className='mt-1 opacity-60'>Fitness Trainer</p>
                        </div>
                  
                  </div>

                  <button className='btn h-[52px] text-yellow-600/50 hover:text-white w-[180px] text-base px-8 font-semibold '>Book Classes</button>

                  </div>
       </div>


<div className=' '>

<div className=' '>

<img src={whyImage} width="540" height="134" loading="lazy" aria-hidden="true" alt="" className='relative top-8 overflow-none'/>
</div>
</div>
    </div>
    </section>
  )
}

export default Why
