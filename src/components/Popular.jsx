import React from 'react'
import apple from '../assets/iconapple.svg'
import blueberry from '../assets/blueberry.svg'
import strawberry from '../assets/strawberry.svg'
import eggplant from '../assets/eggplant.svg'
import cabbage from '../assets/cabbage.svg'
import carrot from '../assets/carrot.svg'


const Popular = () => {
  return (
    <section className='pb-10 lg:py-20 mt-10'>
        <div className='maxcontainer '>
            <div className='text-center mb-10 mt-5'>
                <h4 className='heading4'>POPULAR FOODS AND VEGETABLES</h4>
                <h3 className='heading3'>Quality Fruits & Vegetables</h3>
            </div>
            <div className='max-md:flex-col flex justify-between gap-x-4 gap-y-4'>
                <div className='cards'>
                    <img src={apple} alt="" />
                    <p>Apple</p>
                </div>
                <div className='cards'>
                    <img src={blueberry} alt="" />
                    <p>Blueberry</p>
                </div>
                <div className='cards'>
                    <img src={strawberry} alt="" />
                    <p>Strawberry</p>
                </div>
                <div className='cards'>
                    <img src={eggplant} alt="" />
                    <p>Eggplant</p>
                </div>
                <div className='cards'>
                    <img src={cabbage} alt="" />
                    <p>Cabbage</p>
                </div>
                <div className='cards'>
                    <img src={carrot} alt="" />
                    <p>Carrot</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular