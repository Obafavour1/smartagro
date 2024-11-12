import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='md:pt-10'>
        <div className='md:flex maxcontainer'>
            <div className='grid gap-y-5'>
                <div className=''>
                    <h4 className='heading4'>CONTACT NOW</h4>
                    <h3 className='heading3'>GET IN TOUCH NOW</h3>
                    <p className='text-[12px] w-2/3 text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus tenetur reprehenderit voluptatum odio tempora aut dolores provident.</p>
                </div>
                <div className='grid gap-y-5'>
                    <div className='text-white/80'>
                        <h5 className='text-[12px] text-white/60'>PHONE</h5>
                        <p>+880123456789</p>
                        <p>+880987654321</p>
                    </div>
                    <div className='text-white/80'>
                        <h5 className='text-[12px] text-white/60'>EMAIL</h5>
                        <p>needhelp@company.com</p>
                    </div>
                    <div className='text-white/80'>
                        <h5 className='text-[12px] text-white/60'>ADDRESS</h5>
                        <p >Road No. 8, Niketan, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 max-md:mt-10'>
                <form action="" className='grid gap-y-5'>
                    <input type="text" placeholder='Your Name' className='inputstyle'/>
                    <input type="number" name="" id=""  placeholder='Phone Number' className='inputstyle'/>
                    <input type="email"  placeholder='Your Email' className='inputstyle'/>
                    <textarea name="" id="" className='inputstyle text-white/50'>Your Message</textarea>
                    <button type="submit" className='text-greens-300 px-4 py-3 bg-oranges-100 rounded-[16px] text-[15px] w-fit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact