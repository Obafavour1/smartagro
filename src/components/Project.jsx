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
                <img src={project1} alt=""className='w-[280px] md:w-[250px]' />
                <a href="https://www.bing.com/ck/a?!&&p=b53d086669b6cae66e67bdc5c34f414b8a7a1616fb459a6bbdb6f0cec411fc50JmltdHM9MTczMjc1MjAwMA&ptn=3&ver=2&hsh=4&fclid=050ed706-8483-6e89-06c2-c4d7859e6f49&u=a1L3ZpZGVvcy9yaXZlcnZpZXcvcmVsYXRlZHZpZGVvP3E9dmlkZW8rb24rYWdyaWN1bHR1cmUmbWlkPTc3MzUxMTY3NTNDNTYxNzYyRjlFNzczNTExNjc1M0M1NjE3NjJGOUUmRk9STT1WSVJF&ntb=1"><img src={project2} alt=""className='w-[400px] md:w-[280px]' /></a>
                <img src={project3} alt=""className='w-[280px] md:w-[250px]' />
                <img src={project4} alt=""className='w-[280px] md:w-[250px] mt-3' />
            </div>
        </div>
    </section>
  )
}

export default Project