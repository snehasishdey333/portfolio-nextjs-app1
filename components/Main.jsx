import React from 'react'
import Image from 'next/image'
import myImg from '../public/images/jeet/portfolio2.png'
import Link from 'next/link'
import { FaBars,FaExpandArrowsAlt,FaFacebookF,FaLinkedin,FaInstagramSquare,FaGithub,FaTwitter } from "react-icons/fa";

const Main = () => (
  <section className='relative h-full mx-auto w-full p-10 md:px-40 md:py-14 '>
  
    <div className='flex flex-col justify-center items-center space-y-3 md:space-y-5'>
    <div className='rounded-full p-1 bg-orange-600 shadow-lg shadow-gray-500'>
    <Image src={myImg} alt="" height='200' width='200' className='hover:scale-105 ease-in duration-300'/>
    </div>
    
      <h3 className='text-center'>I build responsive layouts.</h3>
      <h1 className='text-center'>Hi, I'm <span className='text-orange-600'>Snehasish</span></h1>
      <h1 className='text-center'>A Front-End Web Developer</h1>
      <div className='w-[90%] md:w-[70%]'>
      <p className='text-center'>CS graduate and adept front-end
        developer focusing on JavaScript
        mobile-first development. After
        success with React JS front-end
        development, I am eager to
        learn NEXT JS. I will
        continue expanding my JavaScript
        knowledge into perfecting
        accessibility and responsive design.</p>
      </div>
      

        {/* small screen social icons */}
        {/* <div className='absolute left-0 top-0 bg-orange-600 md:hidden rounded-r-xl py-3 px-1'>
        <ul className='flex items-center flex-col justify-center space-y-6 '>
                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md bg-white hover:scale-105'>
                <li className='text-2xl'><FaFacebookF/></li>
                </div>
                    
                </Link>
                
                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md bg-white hover:scale-105'>
                    <li className='text-2xl'><FaTwitter/></li>
                    </div>
                </Link>

                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md bg-white hover:scale-105'>
                    <li className='text-2xl'><FaGithub/></li>
                    </div>
                </Link>

                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md bg-white hover:scale-105'>
                    <li className='text-2xl'><FaInstagramSquare/></li>
                    </div>
                </Link>
                
                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md bg-white hover:scale-105'>
                    <li className='text-2xl'><FaLinkedin/></li>
                    </div>
                </Link>
             </ul>
        </div> */}

        {/* medium screen social icons */}
        <div>
        <ul className='hidden md:flex items-center justify-center space-x-6'>
                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md shadow-gray-500 hover:scale-105'>
                <li className='text-2xl'><FaFacebookF/></li>
                </div>
                    
                </Link>
                
                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md shadow-gray-500 hover:scale-105'>
                    <li className='text-2xl'><FaTwitter/></li>
                    </div>
                </Link>

                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md shadow-gray-500 hover:scale-105'>
                    <li className='text-2xl'><FaGithub/></li>
                    </div>
                </Link>

                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md shadow-gray-500 hover:scale-105'>
                    <li className='text-2xl'><FaInstagramSquare/></li>
                    </div>
                </Link>
                
                <Link href="">
                <div className='p-2 text-center rounded-full shadow-md shadow-gray-500 hover:scale-105'>
                    <li className='text-2xl'><FaLinkedin/></li>
                    </div>
                </Link>
             </ul>
        </div>
    </div>

  </section>
)

export default Main