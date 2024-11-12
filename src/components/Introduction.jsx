import React from 'react'
import introduction from '../assets/introduction.svg'
import flower from '../assets/flowericon.svg'


const Introduction = () => {
  return (
    <section>
        <div className='md:flex justify-between py-10 md:py-20  maxcontainer'>
            <div className='md:w-4/12 flex items-center justify-center relative'>
                <img src={introduction} alt="" />
                <div className='flex items-center gap-x-3 absolute -bottom-10 bg-greens-100/95 px-5 w-[88%] rounded-2xl py-3'>
                    <img src={flower} alt="" width={50}/>
                    <div  className='text-white/70'>
                        <p className='text-lg'>86,700</p>
                        <p className='text-sm'>Successfully Completed Project</p>
                    </div>
                </div>
            </div>
            <div className='mt-20 md:mt-5 md:w-7/12'>
                <h4 className='text-[14px] text-white/70'>OUR INTRODUCTION</h4>
                <h3 className='mt-3 text-[32px] text-white font-semibold md:w-1/2'>Pure Agriculture and Organic Form</h3>
                <div className='my-5'>
                    <p className='text-oranges-100 font-semibold'>We're Leader in Agriculture Market</p>
                    <p className='text-white/60'>There are many variations of passages of available but the majority
                        have suffered alteration in some form, by injected humou or randomized words even
                        slightly believabe.
                    </p>
                </div>
                <div>
                    <ul className='text-white'>
                        <li>Organic food contains more vitamins</li>
                        <li className='my-3'>Eat organic because supply meets demand</li>
                        <li>Organic food is never irradiated</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction