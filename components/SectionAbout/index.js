import Image from 'next/image'
import React from 'react'

function Index() {
  return (
    <section className='py-20  border'>
        <div className='container relative px-4 sm:px-0 sm:flex items-center sm:space-x-10 md:space-x-20 '>
            <div className='md:w-3/4 space-y-5 py-10 sm:flex-1'>
                <h3 className='text-3xl text-blue-400 font-medium'>Some text describing the company</h3>
                <p>
                With locations in both Johannesburg and Cape Town, Glow Hire and Glow Studios represent a large portion of the film and photography Studio and Gear Hire industry. The original Glow Hire started operating in 2006 and after 16 years of trading, it has grown exponentially.
                </p>
            </div>

            <div className='relative block h-72 sm:h-80 sm:flex-1'>
                <Image className='object-cover  ' src="/studio.jpg" alt='studio' layout='fill'/>
            </div>
        </div>
    </section>
  )
}

export default Index