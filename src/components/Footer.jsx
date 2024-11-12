import React from 'react'
import { NavLink } from '../constant'

const Footer = () => {
  return (
    <footer className='mt-10 py-10'>
        <div className='maxcontainer flex flex-col md:flex gap-5  justify-center'>
            <div >
                <h1 className='font-bold text-[28px] text-white/80'>Smart Agro</h1>
                <p className='w-[90%] text-white/80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque facere dolorum in magnam blanditiis esse architecto iste.</p>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className=''>
                <h4 className='font-bold  text-white/80'>Useful links</h4>
                <div className='text-white/70'>
                    {
                        NavLink.map(link=>{
                            return(
                                <div>{link.name}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=''>
                <h4 className='font-bold  text-white/80'>Newsletter</h4>
                <p className='text-white/70'>Suscribe to our weekly Newsletter and receive updates via email</p>
                {/* <div className='flex mt-5'>
                    <input type="search" name="" id="" />
                    <p>Go</p>
                </div> */}
            </div>
        </div>
        {/* <div>
            <p></p>
            <div className='flex gap-x-3'>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>
        </div> */}
    </footer>
  )
}

export default Footer