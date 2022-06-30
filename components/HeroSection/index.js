import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section className="container relative z-30 flex flex-col items-center justify-center space-y-8 px-4 py-20 sm:px-0">
      <h1 className="mx-auto text-center text-2xl font-medium sm:text-4xl md:w-3/4 lg:w-1/2">Spacious studios for your photography and film needs</h1>

      <div className="relative w-full h-72 sm:h-80 lg:h-96 lg:w-4/5">
        <Image className='obejct-cover' src="/hero-bg.jpeg" alt="glow's oxford studio in Johannesburg" layout='fill'/>
      </div>
    </section>
  )
}

export default Hero