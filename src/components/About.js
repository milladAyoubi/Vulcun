import React from 'react'
import Circle1 from '../assets/img/about-circle-one.png'
import Circle2 from '../assets/img/about-circle-two.png'
import aboutImage from '../assets/img/about-image.png'
const About =() => {
  return (
    <section className=' bg-pattern section'>
    <div className='flex flex-col lg:flex-row items-center gap-8 justify-center'>
       <div className=' lg:w-[600px] h-[500px] '>

        <div className='relative bottom-[620px]'>
    <div className='relative top-[600px] right-14'>
       <img src={Circle1} width="580" height="134" loading="lazy" aria-hidden="true" alt="" class="circle circle-1"/>
       <img src={Circle2} width="580" height="134" loading="lazy" aria-hidden="true" alt="" class="circle circle-2"/>
    </div>
       <img src={aboutImage} width="260" height="134" loading="lazy" aria-hidden="true" alt="" className='relative bottom-64 w-[600px]'/>
       </div>
       </div>


       <div className='lg:w-[500px] flex flex-col gap-4 text-black/90'>
        <p className='bg-yellow-600/20 text-yellow-600 py-2 px-5 w-[116px] rounded-full font-semibold'>About Us</p>
       <h2 className="lg:text-[28px] font-bold ">Strength Training</h2>
               
               <p>With a variety of workouts to choose from, 
                  you'll have everything you need to get into the 
                  best shape of your life.</p>
                  <button className='btn h-[52px] text-yellow-600/50 hover:text-white w-[180px] text-base px-8 font-semibold '>Book Classes</button>
       </div>
    </div>
    </section>
  )
}

export default About
