import React from 'react'

import project1 from '../public/images/projects/project1.png'
import project2 from '../public/images/projects/project2.png'
import project3 from '../public/images/projects/project3.png'
import project4 from '../public/images/projects/project4.png'
import project5 from '../public/images/projects/project5.png'

import Project from './Project'


const Projects = () => {
  return (
    <div id="projects" className="w-full p-6 mx-auto my-10 md:px-40">
    <div className='space-y-4 text-center md:text-left md:space-y-6'>
    <h2 className='uppercase text-orange-600'>Projects</h2>
               <h1>What I've made</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-6 mt-10'>
        <Project image={project1} projectName='Loopstudios' tech="Tailwind CSS" projectUrl='/loopstudios' />
        <Project image={project4} projectName='Bookmark Manager' tech="Tailwind CSS" projectUrl='/bookmark-manager' />
        <Project image={project3} projectName='Clipboard' tech="Tailwind CSS" projectUrl='/clipboard' />
        <Project image={project2} projectName='Shortly' tech="Tailwind CSS" projectUrl='/shortly' />
        <Project image={project5} projectName='Testimonial Grid' tech='Tailwind CSS' projectUrl='/testimonial-grid'/>
    </div>
    </div>
  )
}

export default Projects