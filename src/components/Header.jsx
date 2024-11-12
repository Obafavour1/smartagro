import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header id='home' className='grid bg-header bg-no-repeat bg-cover min-h-[550px] md:min-h-[600px] w-full max-md:px-5 z-30 md:items-center'>
      {/* <Navbar/> */}
      <div className='max-md:mt-20 md:w-10/12 mx-auto'>
          <div className='w-full md:w-[40%] grid gap-y-5'>
              <h3 className='font-semibold text-white text-18px'>Original & Natural</h3>
              <h2 className='text-[38px] md:text-[48px] text-white leading-[55px] font-semibold'><span className='text-oranges-100'>Agriculture Matter</span> Good production</h2>
              <p className='text-white/90'>Disuade estactic and properly saw entirely why laughter endeavour, in on my jointure horrible margaret suitable the speedily</p>
              <button type="button" className='py-3 px-5 w-fit bg-oranges-100 text-[14px] text-greens-300 rounded-[20px]'>DISCOVER MORE</button>
          </div>
      </div>
    </header>
  )
}

export default Header