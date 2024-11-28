import React from 'react'
import testimonial from '../assets/testimonial.svg'

const Testimonial = () => {
  return (
    <section className='py-10'>
        <div className=' maxcontainer'>
            <div className='text-center mb-10 md:mb-20 mt-5'>
                <h4 className='heading4'>OUR TESTIMONIALS</h4>
                <h3 className='heading3'>WHAT THEY'RE TALKING ABOUT</h3>
            </div>
            <div className='md:flex items-center md:w-9/12 mx-auto gap-x-10'>
                <img src={testimonial} alt="" width={250} className='w-[150px] md:w-[250px] mx-auto'/>
                <div>
                    <p className='text-white/70 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt deserunt dolorum numquam inventore ipsa illo sapiente optio voluptatibus possimus id delectus repellat aliquid odit repudiandae quaerat quasi maiores nostrum, nobis accusantium fugit. Velit et aliquid maxime mollitia harum est cum animi, nam, quod fugiat labore nostrum vitae
                        facere debitis corrupti
                    </p>
                    <h5 className='mt-6 mb-0 text-[16px] font-bold text-white/90'>Tyrese Gibson</h5>
                    <p className='text-[14px] text-white/70'>Customer</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial