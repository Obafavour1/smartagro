import React from 'react'
import modern from '../assets/modern.svg'
import seal from '../assets/seal.svg'
import growth from '../assets/growth.svg'
import vegetables from '../assets/vegetables.svg'



const Modern = () => {
  return (
    <section id='products' className='py-10'>
        <div className='maxcontainer'>
            
            <div>
                
                <div className='md:flex bg-greens-100'>
                    
                    <img src={modern} alt="" className='md:w-1/2'/>

                    <div className='mb-10 md:mb-20 mt-5 relative '>
                        <img src={seal} alt="" className='absolute animate-spin-slow right-2 -top-20 md:-left-8 md:top-2 w-[70px]' />
                        <div className='md:ml-20 mt-10 pb-10 px-2  md:w-[80%]'>
                            <h4 className='heading4'>MODERN AGRICULTURE</h4>
                            <h3 className='heading3'>Providing High Quality Products</h3>

                            <div className='flex mt-10 text-left gap-5'>
                                <img src={growth} alt="" className='max-sm:h-[50px] p-2 md:p-2 bg-greens-200 rounded-full'/>
                                <div>
                                    <h5 className='text-white/80 font-semibold'>Our Agriculture Growth</h5>
                                    <p className='text-white/50 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab aperiam doloribus iusto accusamus.</p>
                                </div>
                            </div>
                            <div className='flex mt-10 text-left gap-5'>
                                <img src={vegetables} alt=""  className='max-sm:h-[50px] p-2 md:p-2 bg-greens-200 rounded-full '/>
                                <div>
                                    <h5 className='text-white/80 font-semibold'>Making Healthy Foods</h5>
                                    <p className='text-white/50 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab aperiam doloribus iusto accusamus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modern