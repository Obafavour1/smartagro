import React from 'react'
import project1 from '../assets/project1.svg'
import project2 from '../assets/project2.svg'
import project3 from '../assets/project3.svg'
import project4 from '../assets/project4.svg'


const Project = () => {
  return (
    <section id='projects' className='py-10'>
        <div className='maxcontainer'>
            <div className='text-center mb-10 mt-5'>
                <h4 className='heading4'>RECENTLY COMPLETED WORK</h4>
                <h3 className='heading3'>Explore Our Projects</h3>
            </div>
            <div className='max-md:flex-col items-center flex gap-x-3 justify-between'>
                <img src={project1} alt=""className='md:w-[250px]' />
                <img src={project2} alt=""className='md:w-[280px]' />
                <img src={project3} alt=""className='md:w-[250px]' />
                <img src={project4} alt=""className='md:w-[250px] mt-3' />
            </div>
        </div>
    </section>
  )
}

export default Project