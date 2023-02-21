import React from 'react'
import Image from 'next/image'
import img from '../public/images/jeet/jeetdey-removebg-preview (1).png'

const About = () => {
  return (
   
        <div  className='md:my-[100px] flex items-center justify-center w-full p-6 mx-auto my-4 md:mb-[80px]'>
        <div className='flex flex-col my-4 items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6'>
           <div className='w-full space-y-8 text-center md:space-y-8 md:w-3/5 lg:w-3/5 md:text-left '>
               <h2 className='uppercase text-orange-600'>About</h2>
               <h1>Who I am</h1>
               
               <div className='w-[90%] md:w-[100%] mx-auto'>
               <p className='text-center md:text-left'>Hi, I am Snehasish Dey. I am currently persuing my Bachelor of Engineering
               from Jadavpur University in Civil Engineering.Despite being in civil engineering I have much more
               interest in computer subjects, computer science, coding, data structures, algorithm and web development.
               I want to persue software engineering as a career option in near future.</p>
      </div>
           </div>
           <div className='flex items-center justify-center p-2 shadow-2xl rounded-xl md:w-2/5 lg:w-1/5 shadow-gray-500-xl'>
           <div className='m-2'> 
                <Image className="duration-200 ease-in rounded-xl hover:scale-105" src={img} alt="img" height="300" width="300"/>
           </div>
           </div>
           </div>
    </div>
    
  )
}

export default About