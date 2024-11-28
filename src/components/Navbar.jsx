import React, { useState } from 'react'
import { NavLink } from '../constant'
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";


const Navbar = () => {
    const [open, setOpen] =useState(false)


  return (
    <nav className='
     bg-greens-300 max-md:px-5'>
        <div className='flex justify-between items-center md:w-10/12 mx-auto py-5'>
            <h1 className='text-white text-[20px] md:text-[28px] font-bold'>Smart Agro</h1>

            <div className='hidden md:flex gap-10'>
                {
                    NavLink.map(link=>{
                        return(
                            <div>
                                <a href={link.Link}><p className='text-white/80 hover:text-white cursor-pointer'>{link.name}</p></a>
                            </div>
                        )
                    })
                }
            </div>
            
            <CiMenuFries onClick={()=>setOpen(!open)} className='text-white text-[25px] md:hidden' />
        </div>

        <div onClick={()=>setOpen(!open)}>
           <div className={`${open ? 'visible': 'invisible'} `}>
           <div className='md:hidden z-10 fixed top-0 right-0 w-screen' >
                <div >
                    <div className='flex flex-col gap-10 px-5  bg-greens-200 h-screen w-1/2 p-3 py-20'>
                        {
                            NavLink.map(link=>{
                                return(
                                    <div>
                                        <a href={link.Link}><p className='text-white/80 hover:text-white cursor-pointer'>{link.name}</p></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
           </div>
        </div>
    </nav>
  )
}

export default Navbar