import React from 'react'
import {IoFitnessOutline, IoFitnessSharp} from 'react-icons/io5'
import {TbYoga} from 'react-icons/tb'
import {IoIosBicycle} from 'react-icons/io'

const Classes = () => {
  return (
   <section className=" h-[700px] ">
   

        <div className='flex items-center flex-col lg:flex-row justify-between w-[100%]  gap-0 h-[100%]'>

            <div className="flex transition-all w-[33.33%] h-[100%] items-center justify-center relative text-center bg-ride bg-center">
                <div className=" text-center flex flex-col gap-4 text-white brightness-100 hover:bg-black/30 transition h-[100%] ">
               <div className=" text-center flex flex-col gap-4 text-white m-auto items-center px-8">
               <span className='p-4 bg-yellow-600/50 text-yellow rounded-full hover:bg-yellow-600/20  transition hover:-translate-y-2'><IoIosBicycle className="text-2xl lg:text-5xl text-white  transition"/></span>
                <h2 className="lg:text-[28px] font-bold ">STUDIO CYCLING</h2>
               
                     <p>With a variety of workouts to choose from, 
                        you'll have everything you need to get into the 
                        best shape of your life.</p>
                        <button className='btn h-[52px]  text-base px-8 font-semibold m-auto text-white'>Book Classes</button>
                </div>
                </div>
            </div>
             
            <div className="flex w-[33.33%] h-[100%] items-center justify-center relative text-center bg-yoga bg-center">
            <div className=" text-center flex flex-col gap-4 text-white brightness-100 hover:bg-black/30 transition h-[100%] ">
            <div className=" text-center flex flex-col gap-4 text-white m-auto items-center px-8">
               <span className='p-4 bg-yellow-600/50 text-yellow rounded-full hover:bg-yellow-600/20  transition hover:-translate-y-2'><TbYoga className="text-2xl lg:text-5xl text-white transition"/></span>
             <h2 className="lg:text-[28px] font-bold ">YOGA WELLNESS</h2>
               
                     <p>With a variety of workouts to choose from, 
                        you'll have everything you need to get into the 
                        best shape of your life.</p>
                        <button className='btn h-[52px]  text-base px-8 font-semibold m-auto text-white'>Book Classes</button>
                </div>
                </div>
            </div>    
        <div className=" flex  w-[33.33%] h-[100%] items-center justify-center relative text-center bg-fitness bg-center ">
        <div className=" text-center flex flex-col gap-4 text-white brightness-100 hover:bg-black/30 transition h-[100%] ">
        <div className=" text-center flex flex-col gap-4 text-white m-auto items-center px-8">
                
               <span className='p-4 bg-yellow-600/50 text-yellow rounded-full hover:bg-yellow-600/20  transition hover:-translate-y-2'><IoFitnessOutline className="text-2xl lg:text-5xl text-white  transition"/></span>

                <h2 className="lg:text-[28px] font-bold ">CARDIO TRAINING</h2>
               
                     <p>With a variety of workouts to choose from, 
                        you'll have everything you need to get into the 
                        best shape of your life.</p>
                        <button className='btn h-[52px]  text-base px-8 font-semibold m-auto text-white'>Book Classes</button>
                </div>
                </div>
            </div>
                
            </div>
        

        
   </section>
  )
}

export default Classes
