import React from 'react'
import play from '../assets/play.svg'

const Future = () => {
  return (
    <section className='bg-future w-full min-h-[500px] flex items-center'>
        <div className='maxcontainer w-full h-full md:flex items-center justify-between'>
            <h3 className='text-[32px] md:text-[48px] text-white font-semibold md:w-6/12'>Agriculture Matters to the Future of Bangladesh</h3>
            <div className='w-[300px] max-md:mt-10'>
                <img src={play} alt="" width={100} className='max-md:w-[70px]'/>
                <p className='ml-3 text-oranges-100 text-[32px]'>Watch the Video</p>
            </div>
        </div>
    </section>
  )
}

export default Future