import Link from 'next/link'
import React from 'react'
import { FaBars,FaExpandArrowsAlt,FaFacebookF,FaLinkedin,FaInstagramSquare,FaGithub,FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import { BsXLg } from "react-icons/bs";



const Navbar = () => {
    
    const [mobileMenu, setMobileMenu] = useState('false')
    
    const showMobileMenu=()=>{
        setMobileMenu(!mobileMenu)
    }
    
  return (
    
    <>
    <nav className='hidden w-full py-8 shadow-lg shadow-gray-300 md:block '>
        <div className='flex items-center justify-center'>
           <ul className='flex flex-row items-center justify-center space-x-14'>
            <Link href="/#home">
                <li>home</li>
            </Link>

            <Link href="/#about">
                <li>about</li>
            </Link>

            <Link href="/#skills">
                <li>skills</li>
            </Link>

            <Link href="/#projects">
                <li>project</li>
            </Link>

            <Link href="/#contact">
                <li>contact</li>
            </Link>
           </ul>
        </div>
    </nav>
         <div className={!mobileMenu?'flex justify-end md:hidden':'hidden'}>
         <div className='absolute left-0 top-0 bg-orange-600 md:hidden rounded-r-xl py-3 px-1'>
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
        </div>
        <p className='px-6 py-3 text-2xl cursor-pointer hover:text-orange-600'><FaBars onClick={showMobileMenu}/></p>
        </div>
        

        {/* mobile menu slide bar */}
        <div className={mobileMenu?'h-screen pt-8 w-[80%] bg-white z-10 fixed md:hidden ':'hidden'}>
        <div className='flex justify-between p-8 '>
        <div>
        <h2>Snehasish Dey</h2>
        <h3 className='text-orange-600'>A Front-End developer</h3>
        </div>
        <div className='flex items-center justify-center'>
        {/* <p className=''> */}
            {/* <FaExpandArrowsAlt onClick={showMobileMenu}/> */}
            <div className="text-xl cursor-pointer hover:text-orange-600 p-2 rounded-full bg-white shadow-md shadow-gray-400">
            <BsXLg onClick={showMobileMenu}/>
            </div>
        {/* </p> */}
        </div>
        
            
        </div>
        <div className='w-full bg-orange-600 h-[1px] opacity-30'></div>
        <ul className='flex flex-col items-start justify-center px-16 py-6 mt-8 space-y-8'>
        
        {/* mobile nav list items */}
            <Link href="/#home">
                <li>home</li>
            </Link>

            <Link href="/#about">
                <li>about</li>
            </Link>

            <Link href="/#skills">
                <li>skills</li>
            </Link>

            <Link href="/#projects">
                <li>project</li>
            </Link>

            <Link href="/#contact">
                <li>contact</li>
            </Link>
           </ul>
           
          
           {/* social icon container */}
           <div className='p-4 mt-8 bg-orange-600 mx-8 rounded-2xl shadow-lg shadow-gray-400'>
             <ul className='flex items-center justify-center space-x-4'>
                <Link href="">
                <div className=' p-2 text-center rounded-full bg-white hover:scale-105'>
                <li className='text-2xl'><FaFacebookF/></li>
                </div>
                    
                </Link>
                
                <Link href="">
                <div className='p-2 text-center rounded-full bg-white hover:scale-105'>
                    <li className='text-2xl'><FaTwitter/></li>
                    </div>
                </Link>

                <Link href="">
                <div className='p-2 text-center rounded-full bg-white hover:scale-105'>
                    <li className='text-2xl'><FaGithub/></li>
                    </div>
                </Link>

                <Link href="">
                <div className='p-2 text-center rounded-full bg-white hover:scale-105'>
                    <li className='text-2xl'><FaInstagramSquare/></li>
                    </div>
                </Link>
                
                <Link href="">
                <div className='p-2 text-center rounded-full bg-white hover:scale-105'>
                    <li className='text-2xl'><FaLinkedin/></li>
                    </div>
                </Link>
             </ul>
           </div>
           <p className='mt-20 text-center text-orange-600'>copyright @2023 </p>
        </div>
    </>
    
  )
}

export default Navbar